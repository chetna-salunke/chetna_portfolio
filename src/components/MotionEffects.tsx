import { useEffect, useRef } from 'react';

/** Scroll-progress ruler + cursor spotlight/tilt on cards (event-delegated, no per-card wiring). */
const MotionEffects: React.FC = () => {
  const bar = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      if (bar.current) bar.current.style.transform = `scaleX(${h > 0 ? window.scrollY / h : 0})`;
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    const calm = window.matchMedia('(prefers-reduced-motion: reduce), (hover: none)').matches;
    let active: HTMLElement | null = null;
    const reset = (el: HTMLElement) => { el.style.transform = ''; el.style.transition = ''; };

    const onMove = (e: MouseEvent) => {
      const card = (e.target as HTMLElement).closest<HTMLElement>('.card-dark, .card-light');
      if (active && active !== card) { reset(active); active = null; }
      if (!card) return;
      active = card;
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
      card.style.setProperty('--mx', `${x * 100}%`);
      card.style.setProperty('--my', `${y * 100}%`);
      if (calm) return;
      card.style.transition = 'transform 90ms linear';
      card.style.transform = `perspective(900px) rotateX(${(0.5 - y) * 6}deg) rotateY(${(x - 0.5) * 8}deg)`;
    };
    const onLeave = () => { if (active) { reset(active); active = null; } };
    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseleave', onLeave);
    return () => {
      window.removeEventListener('scroll', onScroll);
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return <div ref={bar} aria-hidden className="scroll-ruler" />;
};

export default MotionEffects;

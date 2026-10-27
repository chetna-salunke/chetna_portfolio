import React, { useEffect, useRef } from 'react';

/** Words light up one by one as the block scrolls through the viewport. */
const FocusReveal: React.FC<{ text: string; className?: string }> = ({ text, className = '' }) => {
  const ref = useRef<HTMLParagraphElement>(null);
  const words = text.split(' ');

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const spans = Array.from(el.querySelectorAll<HTMLElement>('span'));
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      spans.forEach(s => (s.style.opacity = '1'));
      return;
    }
    const update = () => {
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // 0 when the block enters the bottom, 1 when it reaches ~35% from the top
      const p = Math.min(1, Math.max(0, (vh * 0.9 - r.top) / (vh * 0.55 + r.height)));
      spans.forEach((s, i) => {
        const t = Math.min(1, Math.max(0, p * (spans.length + 4) - i));
        s.style.opacity = String(0.15 + 0.85 * t);
      });
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => { window.removeEventListener('scroll', update); window.removeEventListener('resize', update); };
  }, []);

  return (
    <p ref={ref} className={className}>
      {words.map((w, i) => (
        <span key={i} style={{ opacity: 0.15, transition: 'opacity .15s linear' }}>{w}{' '}</span>
      ))}
    </p>
  );
};

export default FocusReveal;

import React from 'react';
import { useInView } from 'react-intersection-observer';
import { useAppSelector } from '../store';

interface SkillGroup {
  title: string;
  color: string;
  skills: string[];
}

const SKILL_GROUPS: SkillGroup[] = [
  {
    title: 'Core Frontend',
    color: '#E34F26',
    skills: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'TypeScript', 'Responsive Web Design'],
  },
  {
    title: 'React Ecosystem',
    color: '#61DAFB',
    skills: ['React.js', 'Redux Toolkit', 'Context API', 'React Query (Basic)'],
  },
  {
    title: 'Styling & Design',
    color: '#06B6D4',
    skills: ['Tailwind CSS', 'Bootstrap', 'Styled Components', 'Figma', 'UI/UX Design'],
  },
  {
    title: 'API & Data Handling',
    color: '#6DB33F',
    skills: ['REST APIs', 'Axios / Fetch API', 'API Integration'],
  },
  {
    title: 'Performance',
    color: '#D9BF77',
    skills: ['Code Splitting', 'Lazy Loading', 'Memoization', 'Core Web Vitals'],
  },
  {
    title: 'Workflow',
    color: '#F05032',
    skills: ['Git & GitHub', 'Pull Requests & Code Reviews', 'VS Code', 'Agile / Scrum'],
  },
  {
    title: 'Build & Deployment',
    color: '#646CFF',
    skills: ['Vite', 'npm / yarn', 'Webpack (Basic)', 'Netlify', 'Vercel'],
  },
  {
    title: 'AI-Assisted Development',
    color: '#C4B6A6',
    skills: ['GitHub Copilot', 'AI-assisted Development', 'OpenAI API Integration'],
  },
];

// Marquee tech logos row
const TECH_STACK = ['React.js','TypeScript','Redux Toolkit','Tailwind CSS','Vite','Figma','Git','Netlify','HTML5','CSS3','JavaScript'];

const Skills: React.FC = () => {
  const theme = useAppSelector(s => s.portfolio.theme);
  const isDark = theme === 'dark';
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="skills" data-testid="skills" className="section relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute bottom-0 left-0 w-96 h-96 rounded-full"
        style={{ background:'radial-gradient(circle, rgba(217,191,119,0.05) 0%, transparent 70%)' }} />

      <div ref={ref}>
        <p className="section-label">What I Know</p>
        <h2 className={isDark ? 'section-title-dark' : 'section-title-light'}>Skills & Tools</h2>
        <div className="section-line" />

        {/* Skill groups grid */}
        <div className="grid md:grid-cols-2 gap-5 mb-16">
          {SKILL_GROUPS.map((group, i) => (
            <div key={group.title}
              className={`p-6 rounded-2xl border transition-all duration-700 ${
                isDark ? 'card-dark border-white/5' : 'card-light border-black/10'
              } ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay:`${i * 70}ms` }}>
              <div className="flex items-center gap-2.5 mb-4">
                <span className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                  style={{ backgroundColor: group.color, boxShadow:`0 0 8px ${group.color}60` }} />
                <h3 className={`font-display font-bold text-base ${isDark ? 'text-white/90' : 'text-black/85'}`}>
                  {group.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map(skill => (
                  <span key={skill} className="text-xs font-medium px-3 py-1.5 rounded-full border"
                    style={{
                      background: `${group.color}14`,
                      color: isDark ? group.color : '#4A2E1A',
                      borderColor: `${group.color}30`,
                    }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Marquee tech strip */}
        <div className={`rounded-2xl border py-5 overflow-hidden relative ${
          isDark ? 'border-white/5 bg-dark-card' : 'border-black/10 bg-light-card'
        }`}>
          <p className={`text-center text-xs font-semibold tracking-widest uppercase mb-4 ${isDark ? 'text-white/25' : 'text-light-text/35'}`}>
            Core Stack
          </p>
          <div className="flex animate-marquee whitespace-nowrap">
            {[...TECH_STACK, ...TECH_STACK].map((tech, i) => (
              <span key={i} className={`inline-flex items-center mx-4 px-5 py-2 rounded-xl border text-sm font-semibold ${
                isDark ? 'border-white/10 text-white/50 bg-white/5' : 'border-black/10 text-black/50 bg-black/5'
              }`}>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;


import { Code2, Server, Globe, Palette, FileCode2, Database } from 'lucide-react';

export function AboutSection() {
  const skills = [
    {
      name: 'React.js',
      description: 'Component-based UI.',
      icon: <Code2 size={16} />,
      colorClass: 'text-blue-500 dark:text-blue-400',
      bgClass: 'bg-blue-500/10 dark:bg-blue-400/10',
    },
    {
      name: 'Next.js',
      description: 'React framework.',
      icon: <Globe size={16} />,
      colorClass: 'text-zinc-600 dark:text-zinc-300',
      bgClass: 'bg-zinc-500/10 dark:bg-zinc-300/10',
    },
    {
      name: 'TypeScript',
      description: 'Type-safe JavaScript.',
      icon: <FileCode2 size={16} />,
      colorClass: 'text-indigo-500 dark:text-indigo-400',
      bgClass: 'bg-indigo-500/10 dark:bg-indigo-400/10',
    },
    {
      name: 'Tailwind CSS',
      description: 'Utility-first styling.',
      icon: <Palette size={16} />,
      colorClass: 'text-sky-500 dark:text-sky-400',
      bgClass: 'bg-sky-500/10 dark:bg-sky-400/10',
    },
    {
      name: 'Node.js',
      description: 'Backend JavaScript.',
      icon: <Server size={16} />,
      colorClass: 'text-emerald-600 dark:text-emerald-400',
      bgClass: 'bg-emerald-500/10 dark:bg-emerald-400/10',
    },
    {
      name: 'Databases',
      description: 'SQL & NoSQL.',
      icon: <Database size={16} />,
      colorClass: 'text-orange-500 dark:text-orange-400',
      bgClass: 'bg-orange-500/10 dark:bg-orange-400/10',
    }
  ];

  return (
    <section id="about" className="py-16 md:py-24 w-full">
      <div className="editorial-grid">
        <div className="col-span-12 md:col-span-4 mb-8 md:mb-0 md:sticky md:top-24 md:self-start">
          <h2 className="text-sm font-black uppercase tracking-widest text-zinc-500 dark:text-zinc-400">The Narrative</h2>
        </div>
        <div className="col-span-12 md:col-span-7 md:col-start-6">
          <p className="text-xl md:text-2xl text-zinc-800 dark:text-zinc-100 leading-relaxed mb-8 font-light">
            I am a passionate Software Engineer with a knack for building full-stack web applications using modern technologies like Next.js and Tailwind CSS.
          </p>
          <p className="text-xl md:text-2xl text-zinc-800 dark:text-zinc-100 leading-relaxed mb-8 font-light">
            With a strong foundation in JavaScript frameworks, I focus on creating scalable, efficient, and visually appealing applications. Beyond coding, I thrive in collaborative environments and enjoy tackling challenging problems with creative solutions.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-10 bg-zinc-50 dark:bg-[#121212] p-3 sm:p-4 rounded-2xl border border-zinc-200 dark:border-white/5">
            {skills.map((skill, index) => (
              <div key={index} className="flex items-center gap-2.5 bg-white dark:bg-[#1a1a1a] hover:bg-zinc-100 dark:hover:bg-[#222] transition-colors p-2.5 rounded-xl border border-zinc-200/60 dark:border-white/5">
                <div className={`p-2 rounded-lg ${skill.bgClass} ${skill.colorClass}`}>
                  {skill.icon}
                </div>
                <div>
                  <h3 className="text-zinc-900 dark:text-[#f5f5f5] font-medium text-xs">{skill.name}</h3>
                  <p className={`text-[10px] mt-0.5 leading-tight ${skill.colorClass}`}>
                    {skill.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

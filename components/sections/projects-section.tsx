import { projects } from '@/constants/projects';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export function ProjectsSection() {
  return (
    <section id="projects" className="w-full py-16 md:py-24">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
        <div>
          <h2 className="text-4xl font-extrabold tracking-tighter">Selected Works</h2>
        </div>
        <span className="text-sm font-bold text-outline uppercase tracking-widest block mt-4 md:mt-0">Projects Showcase</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        {projects.map((project, index) => {
          const type = index % 3;

          if (type === 2) {
            // Span 12 - Wide Layout
            return (
              <div key={index} className="md:col-span-12 group relative overflow-hidden rounded-xl bg-zinc-50 dark:bg-[#141414] transition-all hover:scale-[1.01] border border-zinc-200 dark:border-white/5">
                <div className="editorial-grid items-center">
                  <div className="col-span-12 md:col-span-7 bg-zinc-100 dark:bg-[#1a1a1a] aspect-video overflow-hidden flex items-center justify-center p-8 relative">
                    {/* Dot pattern overlay */}
                    <div className="absolute inset-0 opacity-20 dark:opacity-30"
                      style={{backgroundImage: 'radial-gradient(circle, #888 1px, transparent 1px)', backgroundSize: '20px 20px'}}
                    />
                    <span className="relative text-xl font-bold text-foreground/40 dark:text-white/20 uppercase tracking-widest">{project.title}</span>
                  </div>
                  <div className="col-span-12 md:col-span-5 p-12">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-2 block">
                      {project.techStack.slice(0, 2).join(' / ')}
                    </span>
                    <h2 className="text-3xl font-bold mb-4 leading-tight text-zinc-900 dark:text-zinc-100">{project.title}</h2>
                    <p className="text-zinc-500 dark:text-zinc-400 mb-8 font-light line-clamp-3">
                      {project.overview}
                    </p>
                    <Link href={`/projects/${project.slug}`} className="flex items-center gap-2 text-primary font-bold hover:underline">
                      Learn More <ArrowUpRight className="size-4" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          }

          // Span 8 or 4 Layout
          return (
            <div key={index} className={`${type === 0 ? 'md:col-span-8' : 'md:col-span-4'} group relative overflow-hidden rounded-xl bg-zinc-50 dark:bg-[#141414] transition-all hover:scale-[1.01] border border-zinc-200 dark:border-white/5 flex flex-col`}>
              <div className={`${type === 0 ? 'aspect-[16/9]' : 'aspect-[4/5]'} w-full bg-zinc-100 dark:bg-[#1a1a1a] overflow-hidden flex items-center justify-center p-8 relative`}>
                {/* Dot pattern overlay */}
                <div className="absolute inset-0 opacity-20 dark:opacity-25"
                  style={{backgroundImage: 'radial-gradient(circle, #888 1px, transparent 1px)', backgroundSize: '18px 18px'}}
                />
                <span className="relative text-xl font-bold text-foreground/40 dark:text-white/20 uppercase tracking-widest text-center">{project.title}</span>
              </div>
              <div className="p-6 flex justify-between items-start flex-grow">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-2 block">
                    {project.techStack.slice(0, 1).join('')} / {type === 0 ? 'Featured' : 'Concept'}
                  </span>
                  <h3 className="text-2xl font-bold line-clamp-2 text-zinc-900 dark:text-zinc-100">{project.title}</h3>
                </div>
                <Link href={`/projects/${project.slug}`}>
                  <ArrowUpRight className="text-zinc-400 group-hover:text-primary transition-colors size-6 mt-1" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

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
        <div className="h-px flex-grow mx-8 bg-surface-container hidden md:block"></div>
        <span className="text-sm font-bold text-outline uppercase tracking-widest block mt-4 md:mt-0">Projects Showcase</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {projects.map((project, index) => {
          const type = index % 3;
          
          if (type === 2) {
            // Span 12 - Wide Layout
            return (
              <div key={index} className="md:col-span-12 group relative overflow-hidden rounded-xl bg-surface-container-lowest transition-all hover:scale-[1.01] border border-border/50">
                <div className="editorial-grid items-center">
                  <div className="col-span-12 md:col-span-7 bg-surface-container-low aspect-video overflow-hidden flex items-center justify-center p-8">
                    <span className="text-xl font-bold text-foreground/30 uppercase tracking-widest">{project.title}</span>
                  </div>
                  <div className="col-span-12 md:col-span-5 p-12">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-2 block">
                      {project.techStack.slice(0, 2).join(' / ')}
                    </span>
                    <h2 className="text-3xl font-bold mb-4 leading-tight">{project.title}</h2>
                    <p className="text-on-surface-variant mb-8 font-light line-clamp-3">
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
            <div key={index} className={`${type === 0 ? 'md:col-span-8' : 'md:col-span-4'} group relative overflow-hidden rounded-xl bg-surface-container-lowest transition-all hover:scale-[1.01] border border-border/50 flex flex-col`}>
              <div className={`${type === 0 ? 'aspect-[16/9]' : 'aspect-[4/5]'} w-full bg-surface-container-low overflow-hidden flex items-center justify-center p-8`}>
                <span className="text-xl font-bold text-foreground/30 uppercase tracking-widest text-center">{project.title}</span>
              </div>
              <div className="p-8 flex justify-between items-start flex-grow">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-2 block">
                    {project.techStack.slice(0, 1).join('')} / {type === 0 ? 'Featured' : 'Concept'}
                  </span>
                  <h3 className="text-2xl font-bold line-clamp-2">{project.title}</h3>
                </div>
                <Link href={`/projects/${project.slug}`}>
                  <ArrowUpRight className="text-zinc-400 group-hover:text-primary transition-colors size-6" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

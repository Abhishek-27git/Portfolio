import { projects } from '@/constants/projects';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export function ProjectsSection() {
  const [featured, concept, full] = projects;

  return (
    <section id="projects" className="w-full py-16 md:py-24">

      {/* ── Header ── */}
      <div className="flex justify-between items-end mb-8">
        <div>
          <p className="flex items-center gap-2 font-mono text-[13px] text-muted-foreground mb-3.5">
            <span className="inline-block w-2 h-2 bg-[#22c55e] shrink-0" />
            03 — projects.config.ts
          </p>
          <h2 className="text-[30px] font-extrabold tracking-tight text-foreground m-0">
            Selected work
          </h2>
        </div>
        <span className="font-mono text-[11px] tracking-[0.08em] text-muted-foreground uppercase hidden sm:block">
          Projects showcase
        </span>
      </div>

      {/* ── Grid ── */}
      <div className="grid grid-cols-1 sm:grid-cols-[2fr_1fr] gap-6">

        {/* Card 1 — featured (tall left) */}
        {featured && (
          <div className="group flex flex-col rounded-[14px] overflow-hidden border border-zinc-200 dark:border-white/8 bg-white dark:bg-[#141414] transition-all hover:scale-[1.01] hover:shadow-lg">
            {/* thumb */}
            <div className="flex-1 min-h-[260px] bg-zinc-100 dark:bg-[#1a1a1a] flex items-center justify-center relative overflow-hidden">
              <div
                className="absolute inset-0 opacity-20 dark:opacity-25"
                style={{ backgroundImage: 'radial-gradient(circle, #888 1px, transparent 1px)', backgroundSize: '20px 20px' }}
              />
              <span className="relative font-mono text-[12px] tracking-[0.08em] text-muted-foreground uppercase">
                {featured.title}
              </span>
            </div>
            {/* meta */}
            <div className="flex justify-between items-start gap-3 px-5 py-4">
              <div>
                <p className="font-mono text-[11px] tracking-[0.04em] text-violet-600 dark:text-violet-400 uppercase m-0 mb-1.5">
                  {featured.techStack[0]} / featured
                </p>
                <p className="text-[15px] font-bold text-foreground m-0">
                  {featured.title}
                </p>
              </div>
              <Link href={`/projects/${featured.slug}`} aria-label="View project" className="text-muted-foreground mt-[2px] shrink-0 hover:text-violet-600 dark:hover:text-violet-400 transition-colors">
                <ArrowUpRight className="size-[18px]" />
              </Link>
            </div>
          </div>
        )}

        {/* Card 2 — concept (narrow right) */}
        {concept && (
          <div className="group flex flex-col rounded-[14px] overflow-hidden border border-zinc-200 dark:border-white/8 bg-white dark:bg-[#141414] transition-all hover:scale-[1.01] hover:shadow-lg">
            {/* thumb */}
            <div className="flex-1 min-h-[260px] bg-zinc-100 dark:bg-[#1a1a1a] flex items-center justify-center relative overflow-hidden">
              <div
                className="absolute inset-0 opacity-20 dark:opacity-25"
                style={{ backgroundImage: 'radial-gradient(circle, #888 1px, transparent 1px)', backgroundSize: '20px 20px' }}
              />
              <span className="relative font-mono text-[12px] tracking-[0.08em] text-muted-foreground uppercase">
                {concept.title}
              </span>
            </div>
            {/* meta */}
            <div className="flex justify-between items-start gap-3 px-5 py-4">
              <div>
                <p className="font-mono text-[11px] tracking-[0.04em] text-violet-600 dark:text-violet-400 uppercase m-0 mb-1.5">
                  {concept.techStack[0]} / concept
                </p>
                <p className="text-[15px] font-bold text-foreground m-0">
                  {concept.title}
                </p>
              </div>
              <Link href={`/projects/${concept.slug}`} aria-label="View project" className="text-muted-foreground mt-[2px] shrink-0 hover:text-violet-600 dark:hover:text-violet-400 transition-colors">
                <ArrowUpRight className="size-[18px]" />
              </Link>
            </div>
          </div>
        )}

        {/* Card 3 — full-width split (thumb + content) */}
        {full && (
          <div className="sm:col-span-2 grid grid-cols-1 sm:grid-cols-2 min-h-[280px] rounded-[14px] overflow-hidden border border-zinc-200 dark:border-white/8 bg-white dark:bg-[#141414] transition-all hover:scale-[1.005] hover:shadow-lg">
            {/* thumb */}
            <div className="min-h-[240px] sm:min-h-[280px] bg-zinc-100 dark:bg-[#1a1a1a] flex items-center justify-center relative overflow-hidden">
              <div
                className="absolute inset-0 opacity-20 dark:opacity-25"
                style={{ backgroundImage: 'radial-gradient(circle, #888 1px, transparent 1px)', backgroundSize: '20px 20px' }}
              />
              <span className="relative font-mono text-[12px] tracking-[0.08em] text-muted-foreground uppercase">
                {full.title}
              </span>
            </div>
            {/* content */}
            <div className="flex flex-col justify-center p-8">
              <p className="font-mono text-[11px] tracking-[0.04em] text-violet-600 dark:text-violet-400 uppercase m-0 mb-2">
                {full.techStack.slice(0, 2).join(' / ')}
              </p>
              <p className="text-[18px] font-bold text-foreground m-0 mb-3">
                {full.title}
              </p>
              <p className="text-[14px] text-muted-foreground leading-[1.7] m-0 mb-[18px] max-w-[420px]">
                {full.tagline}
              </p>
              <Link
                href={`/projects/${full.slug}`}
                className="inline-flex items-center gap-1 text-[13px] font-bold text-violet-600 dark:text-violet-400 hover:underline w-fit"
              >
                Learn more <ArrowUpRight className="size-[14px]" />
              </Link>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}

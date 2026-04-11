import { Icons } from '@/components/icons';
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '@/components/page-header';
import { mySkills } from '@/constants';

const colorClasses = [
  { text: 'text-blue-500 dark:text-blue-400', bg: 'bg-blue-500/10 dark:bg-blue-400/10' },
  { text: 'text-zinc-600 dark:text-zinc-400', bg: 'bg-zinc-500/10 dark:bg-zinc-400/10' },
  { text: 'text-indigo-500 dark:text-indigo-400', bg: 'bg-indigo-500/10 dark:bg-indigo-400/10' },
  { text: 'text-sky-500 dark:text-sky-400', bg: 'bg-sky-500/10 dark:bg-sky-400/10' },
  { text: 'text-emerald-600 dark:text-emerald-400', bg: 'bg-emerald-500/10 dark:bg-emerald-400/10' },
  { text: 'text-orange-500 dark:text-orange-400', bg: 'bg-orange-500/10 dark:bg-orange-400/10' },
  { text: 'text-purple-500 dark:text-purple-400', bg: 'bg-purple-500/10 dark:bg-purple-400/10' },
  { text: 'text-rose-500 dark:text-rose-400', bg: 'bg-rose-500/10 dark:bg-rose-400/10' },
];

export function SkillsSection() {
  return (
    <section id="skills" className="flex flex-col md:flex-row md:items-start md:gap-12 gap-8 w-full py-16 md:py-24">
      <div className="md:w-2/5 lg:w-1/3 shrink-0 md:sticky md:top-24">
        <PageHeader className="pb-0 md:pb-0 lg:pb-0">
          <PageHeaderHeading className="text-foreground drop-shadow-sm pb-2">
            Skills
          </PageHeaderHeading>
          <h2 className="text-xl md:text-2xl font-medium text-foreground/80 mt-2">
            Learned by coding all night and debugging all day!
          </h2>
          <PageHeaderDescription>
            As a full-stack Software Engineer, I specialize in building scalable
            web applications using modern technologies such as Next.js, React, and
            Tailwind CSS. I'm also expanding my expertise into DevOps and cloud
            practices to create efficient, maintainable, robust web solutions.
          </PageHeaderDescription>
        </PageHeader>
      </div>

      <div className="flex-1 w-full min-w-0 md:pt-4">
        {/* skills and tools cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-1.5 bg-zinc-50 dark:bg-[#121212] p-2 sm:p-2.5 rounded-xl border border-zinc-200 dark:border-white/5">
          {mySkills.map((item, index) => {
            const theme = colorClasses[index % colorClasses.length];
            return (
              <div key={item.title} className="flex flex-row items-center gap-2 bg-white dark:bg-[#1a1a1a] hover:bg-zinc-100 dark:hover:bg-[#222] transition-colors p-1.5 sm:p-2 rounded-lg border border-zinc-200/60 dark:border-white/5">
                <div className={`p-1.5 rounded-md flex items-center justify-center shrink-0 ${theme.bg} ${theme.text}`}>
                  {Icons[item.icon as keyof typeof Icons]?.({ className: 'size-3.5' })}
                </div>
                <div className="flex flex-col justify-center">
                  <h3 className="text-zinc-900 dark:text-[#f5f5f5] font-medium text-[11px] leading-tight">{item.title}</h3>
                  <p className={`text-[9px] mt-0.5 leading-none opacity-80 ${theme.text}`}>
                    Technology
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

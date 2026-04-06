import { Icons } from '@/components/icons';
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '@/components/page-header';
import { Badge } from '@/components/ui/badge';
import { mySkills } from '@/constants';

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
        {/* skills and tools badges */}
        <div
          id="badges"
          className="flex flex-wrap items-center justify-start gap-2"
        >
          {mySkills.map((item) => (
            <Badge
              key={item.title}
              className="p-4 py-2 border border-secondary bg-secondary-foreground text-secondary"
            >
              {Icons[item.icon as keyof typeof Icons]?.({
                className: 'mr-2 size-4',
              })}
              {item.title}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
}

import {
  PageHeader,
  PageHeaderHeading,
} from '@/components/page-header';
import TimelineViewer from '@/components/timeline-viewer';
import { education } from '@/constants/education';

export function EducationSection() {
  return (
    <section id="education" className="flex flex-col md:flex-row md:items-start md:gap-12 gap-8 w-full py-16 md:py-24">
      <div className="md:w-2/5 lg:w-1/3 shrink-0 md:sticky md:top-24">
        <PageHeader className="pb-0 md:pb-0 lg:pb-0">
          <PageHeaderHeading className="text-foreground drop-shadow-sm pb-2">
            Education
          </PageHeaderHeading>
          <h2 className="text-xl md:text-2xl font-medium text-foreground/80 mt-2">
            Education builds the foundation, experience builds the structure. 
          </h2>
        </PageHeader>
      </div>

      <div className="flex-1 w-full min-w-0">
        <TimelineViewer data={education} />
      </div>
    </section>
  );
}

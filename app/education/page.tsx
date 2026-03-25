import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '@/components/page-header';
import TimelineViewer from '@/components/timeline-viewer';
import { education } from '@/constants/education';

const EducationPage = () => {
  return (
    <>
      <PageHeader>
        <PageHeaderHeading className="text-foreground drop-shadow-sm pb-2">
          Education
        </PageHeaderHeading>
        <PageHeaderHeading className="text-xl md:text-2xl font-medium text-foreground/80 mt-2">
          Education builds the foundation, experience builds the structure. 
        </PageHeaderHeading>
      </PageHeader>

      <TimelineViewer data={education} />

    </>
  );
};
export default EducationPage;

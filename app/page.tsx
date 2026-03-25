import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '@/components/page-header';
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/config/site';
import { ExternalLink } from 'lucide-react';
import Link from 'next/link';

const ProfilePage = async () => {
  return (
    <>
      <PageHeader>
        <PageHeaderHeading className="text-foreground drop-shadow-sm pb-2">
          Abhishek Singh
        </PageHeaderHeading>
        <PageHeaderHeading className="text-xl md:text-2xl font-medium text-foreground/80 mt-2">
          A coder by day, problem-solver by night!
        </PageHeaderHeading>
        <PageHeaderDescription>
          I am a dedicated Software Engineer specializing in full-stack
          application development. My journey in tech began with a curiosity for
          solving real-world problems, which evolved into a love for crafting
          user-centric digital experiences using modern technologies like Next.js,
          React, Tailwind CSS, Node.js, Express, and MongoDB.
        </PageHeaderDescription>
        <PageHeaderDescription>
          Beyond coding, I thrive in collaborative environments and enjoy
          tackling challenging problems with creative solutions. I continuously
          aim to deliver high-quality applications while expanding my expertise
          in backend development and DevOps practices to make a real difference.
        </PageHeaderDescription>
        <PageActions>
          <Button asChild size="sm" className="rounded-md">
            <Link href={siteConfig.links.resume} target="_blank">
              Get Resume
              <ExternalLink className="size-3" strokeWidth={2} />
            </Link>
          </Button>
        </PageActions>
      </PageHeader>
    </>
  );
};
export default ProfilePage;

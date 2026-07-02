
import Image from 'next/image';
import { BadgeCheck } from 'lucide-react';
import { EducationSection } from '@/components/sections/education-section';
import { ProjectsSection } from '@/components/sections/projects-section';
import { ContactSection } from '@/components/sections/contact-section';
import { SkillsSection } from '@/components/sections/skills-section';

const ProfilePage = async () => {
  return (
    <div className="flex flex-col w-full">
      <section id="hero" className="flex flex-col items-start justify-start w-full pt-8 pb-16 md:pt-12 md:pb-24">
        <div className="max-w-[740px] w-full flex flex-col items-start text-left">
          {/* Avatar Section */}
          <div className="relative mb-3">
            <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-3xl overflow-hidden bg-muted">
              <Image
                src="/abhishek-avatar.png"
                alt="Abhishek Singh"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>

          {/* Name Section with Verified Checkmark */}
          <div className="flex items-center gap-2 mb-0.5">
            <h1 className="text-[clamp(2.25rem,6vw,3rem)] font-extrabold tracking-tight text-foreground leading-none">
              Abhishek Singh
            </h1>
            <BadgeCheck className="w-8 h-8 text-[#1d9bf0] fill-[#1d9bf0] stroke-background shrink-0" />
          </div>

          {/* Role/Subtitle */}
          <p className="text-[clamp(16px,2vw,18px)] font-normal leading-8 tracking-normal text-zinc-500 dark:text-zinc-400 mb-4 lowercase">
            full stack engineer and rag engineer
          </p>

          {/* Bio/Description paragraphs */}
          <div className="space-y-6 max-w-[740px] text-left">
            <p className="text-[clamp(16px,2vw,18px)] font-normal leading-8 tracking-normal text-zinc-500 dark:text-zinc-400 mt-0!">
              hey, i'm Abhishek, a software developer. i build scalable web applications with React and Node.js, and design AI-powered solutions as a RAG engineer.
            </p>
            <p className="text-[clamp(16px,2vw,18px)] font-normal leading-8 tracking-normal text-zinc-500 dark:text-zinc-400 mt-0!">
              currently specializing in MERN stack development, UI/UX design, and cloud technologies, while exploring DevOps practices. i enjoy building clean, user-friendly applications while working on improving scalability and deployment workflows. i’m continuously learning and refining my skills to create efficient and reliable solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Stacked Sections */}
      <SkillsSection />
      <ProjectsSection />
      <EducationSection />
      <ContactSection />
    </div>
  );
};

export default ProfilePage;

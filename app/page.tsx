
import Image from 'next/image';
import { BadgeCheck } from 'lucide-react';
import { EducationSection } from '@/components/sections/education-section';
import { ProjectsSection } from '@/components/sections/projects-section';
import { ContactSection } from '@/components/sections/contact-section';
import { SkillsSection } from '@/components/sections/skills-section';

const ProfilePage = async () => {
  return (
    <div className="flex flex-col w-full">
      <section id="hero" className="w-full pt-2 pb-16 md:pb-20">

        <div className="max-w-[680px] w-full flex flex-col items-start text-left relative">

          {/* Eyebrow tag */}
          <p className="flex items-center gap-2 font-mono text-[13px] text-muted-foreground mb-6">
            <span className="inline-block w-2 h-2 bg-[#22c55e] shrink-0" />
            00 — profile.config.ts
          </p>

          {/* Avatar */}
          <div className="relative w-[130px] h-[130px] rounded-[28px] overflow-hidden bg-muted mb-6">
            <Image
              src="/abhishek-avatar.png"
              alt="Abhishek Singh"
              fill
              priority
              className="object-cover"
            />
          </div>

          {/* Name + verified badge */}
          <div className="flex items-center gap-[9px] mb-[18px]">
            <h1 className="text-[28px] font-semibold tracking-[-0.01em] text-foreground m-0 leading-tight">
              Abhishek Singh
            </h1>
            <BadgeCheck className="w-5 h-5 text-[#3b82f6] fill-[#3b82f6] stroke-background shrink-0" />
          </div>

          {/* Role */}
          <p className="text-[17px] text-muted-foreground leading-relaxed m-0 mb-7 lowercase">
            full stack engineer and rag engineer
          </p>

          {/* Bio */}
          <div className="space-y-5">
            <p className="text-[16px] text-muted-foreground leading-[1.8] m-0 max-w-[640px]">
              hey, i'm Abhishek, a software developer. i build scalable web applications with React and Node.js, and design AI-powered solutions as a RAG engineer.
            </p>
            <p className="text-[16px] text-muted-foreground leading-[1.8] m-0 max-w-[640px]">
              currently specializing in MERN stack development, UI/UX design, and cloud technologies, while exploring DevOps practices. i enjoy building clean, user-friendly applications while working on improving scalability and deployment workflows. i'm continuously learning and refining my skills to create efficient and reliable solutions.
            </p>
          </div>

        </div>
      </section>


      {/* Stacked Sections */}
      <SkillsSection />
      <EducationSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
};

export default ProfilePage;

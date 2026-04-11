

import { EducationSection } from '@/components/sections/education-section';
import { ProjectsSection } from '@/components/sections/projects-section';
import { ContactSection } from '@/components/sections/contact-section';
import { SkillsSection } from '@/components/sections/skills-section';
const ProfilePage = async () => {
  return (
    <div className="flex flex-col w-full">
      <section id="hero" className="flex flex-col items-start justify-start w-full mb-24">
        {/* UPPER PART - Visible on load */}
        <div className="editorial-grid w-full min-h-[85vh] content-center pb-20 md:pb-32">
          <div className="col-span-12">
            <h1 className="text-[clamp(3rem,8vw,5.5rem)] leading-[0.9] font-extrabold tracking-tighter uppercase mb-8">
              Abhishek Singh.
            </h1>
            <p className="text-2xl md:text-3xl font-light text-muted-foreground max-w-2xl leading-snug">
              A <strong className="font-semibold text-foreground">coder by day</strong>, problem-solver by night! Crafting high-performance digital experiences with precision.
            </p>
          </div>
        </div>

        {/* LOWER PART - Visible after scrolling */}
        <div className="editorial-grid w-full pt-16">
          <div className="col-span-12 md:col-span-4 mb-8 md:mb-0 md:self-start md:sticky md:top-24">
            <h2 className="text-sm font-black uppercase tracking-widest text-zinc-500 dark:text-zinc-400">The Narrative</h2>
          </div>
          <div className="col-span-12 md:col-span-7 md:col-start-6">
            <p className="text-xl md:text-2xl text-zinc-800 dark:text-zinc-100 leading-relaxed mb-8 font-light">
              I am a passionate Software Engineer with a knack for building full-stack web applications using modern technologies like Next.js and Tailwind CSS.
            </p>
            <p className="text-xl md:text-2xl text-zinc-800 dark:text-zinc-100 leading-relaxed mb-8 font-light">
              With a strong foundation in JavaScript frameworks, I focus on creating scalable, efficient, and visually appealing applications. Beyond coding, I thrive in collaborative environments and enjoy tackling challenging problems with creative solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Stacked Sections */}
      <EducationSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
    </div>
  );
};
export default ProfilePage;

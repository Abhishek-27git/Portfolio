

import { AboutSection } from '@/components/sections/about-section';
import { EducationSection } from '@/components/sections/education-section';
import { ProjectsSection } from '@/components/sections/projects-section';
import { ContactSection } from '@/components/sections/contact-section';
import { SkillsSection } from '@/components/sections/skills-section';

const ProfilePage = async () => {
  return (
    <div className="flex flex-col w-full">
      <section id="hero" className="flex flex-col items-start justify-center w-full min-h-[70vh] py-16 mb-32">
        <div className="editorial-grid w-full">
          <div className="col-span-12">
            <h1 className="text-[clamp(3rem,8vw,5.5rem)] leading-[0.9] font-extrabold tracking-tighter uppercase mb-8">
              Abhishek Singh.
            </h1>
            <p className="text-2xl md:text-3xl font-light text-muted-foreground max-w-2xl leading-snug">
              A <strong className="font-semibold text-foreground">coder by day</strong>, problem-solver by night! Crafting high-performance digital experiences with precision.
            </p>
          </div>
        </div>
      </section>

      {/* Stacked Sections */}
      <AboutSection />
      <EducationSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
    </div>
  );
};
export default ProfilePage;

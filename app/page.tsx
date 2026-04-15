
import { DeveloperIllustration } from '@/components/developer-illustration';
import { EducationSection } from '@/components/sections/education-section';
import { ProjectsSection } from '@/components/sections/projects-section';
import { ContactSection } from '@/components/sections/contact-section';
import { SkillsSection } from '@/components/sections/skills-section';
const ProfilePage = async () => {
  return (
    <div className="flex flex-col w-full">
      <section id="hero" className="flex flex-col items-start justify-start w-full mb-24">
        {/* UPPER PART - Visible on load */}
        <div className="editorial-grid w-full min-h-[85vh] content-center items-center pb-20 md:pb-32">
          <div className="col-span-12 md:col-span-7">
            <h1 className="text-[clamp(3rem,8vw,5.5rem)] leading-[0.9] font-extrabold tracking-tighter uppercase mb-8">
              Abhishek Singh.
            </h1>
            <p className="text-2xl md:text-3xl font-light text-muted-foreground max-w-2xl leading-snug">
              A <strong className="font-semibold text-foreground">coder by day</strong>, problem-solver by night! Crafting high-performance digital experiences with precision.
            </p>
          </div>
          <div className="col-span-12 md:col-span-5 flex items-center justify-center">
            <DeveloperIllustration className="w-full max-w-[350px] md:max-w-[450px]" />
          </div>
        </div>

        {/* LOWER PART - Visible after scrolling */}
        <div className="editorial-grid w-full pt-16">
          <div className="col-span-12 md:col-span-4 mb-8 md:mb-0 md:self-start md:sticky md:top-24">
            <h2 className="text-sm font-black uppercase tracking-widest text-zinc-500 dark:text-zinc-400">Professional Overview</h2>
          </div>
          <div className="col-span-12 md:col-span-7 md:col-start-6">
            <p className="text-xl md:text-2xl text-zinc-800 dark:text-zinc-100 leading-relaxed mb-8 font-light">
I am a software developer with a focus on MERN stack development, UI/UX design, and cloud technologies, currently exploring DevOps practices.            </p>
            <p className="text-xl md:text-2xl text-zinc-800 dark:text-zinc-100 leading-relaxed mb-8 font-light">
I enjoy building clean, user-friendly applications while working on improving scalability and deployment workflows. I’m continuously learning and refining my skills to create efficient and reliable solutions.            </p>
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

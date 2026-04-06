
export function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 w-full">
      <div className="editorial-grid">
        <div className="col-span-12 md:col-span-4 mb-8 md:mb-0 md:sticky md:top-24 md:self-start">
          <h2 className="text-sm font-black uppercase tracking-widest text-outline">The Narrative</h2>
        </div>
        <div className="col-span-12 md:col-span-7 md:col-start-6">
          <p className="text-xl md:text-2xl text-on-surface-variant leading-relaxed mb-8 font-light">
            I am a passionate Software Engineer with a knack for building full-stack web applications using modern technologies like Next.js and Tailwind CSS.
          </p>
          <p className="text-xl md:text-2xl text-on-surface-variant leading-relaxed mb-8 font-light">
            With a strong foundation in JavaScript frameworks, I focus on creating scalable, efficient, and visually appealing applications. Beyond coding, I thrive in collaborative environments and enjoy tackling challenging problems with creative solutions.
          </p>
          <div className="flex flex-wrap gap-3 mt-12">
            <span className="px-4 py-2 bg-surface-container-low text-on-secondary-container rounded-full text-xs font-bold tracking-wider uppercase">React.js</span>
            <span className="px-4 py-2 bg-surface-container-low text-on-secondary-container rounded-full text-xs font-bold tracking-wider uppercase">TypeScript</span>
            <span className="px-4 py-2 bg-surface-container-low text-on-secondary-container rounded-full text-xs font-bold tracking-wider uppercase">Tailwind CSS</span>
            <span className="px-4 py-2 bg-surface-container-low text-on-secondary-container rounded-full text-xs font-bold tracking-wider uppercase">Node.js</span>
            <span className="px-4 py-2 bg-surface-container-low text-on-secondary-container rounded-full text-xs font-bold tracking-wider uppercase">Next.js</span>
          </div>
        </div>
      </div>
    </section>
  );
}

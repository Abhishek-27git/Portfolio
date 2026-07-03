const educationEntries = [
  {
    date: "Apr 2010 – Mar 2021",
    title: "Secondary Education",
    institution: "S.M's English Medium School, Karad",
    body: "Achieved 82% in 10th grade, with a strong early interest in computer applications.",
    current: false,
  },
  {
    date: "Jul 2021 – May 2023",
    title: "Higher Secondary Education",
    institution:
      "Ramniranjan Jhunjhunwala College of Arts, Science and Commerce",
    body: "Completed 12th in Computer Science (core) with 78%, building a foundational understanding of computer software and hardware.",
    current: false,
  },
  {
    date: "Aug 2023 – Jun 2027 · in progress",
    title: "Bachelor of Technology",
    institution: "Lokmanya Tilak College of Engineering, Mumbai, India",
    body: "Pursuing a B.Tech with a focus on software applications and core system concepts. Current CGPA: 8.00.",
    current: true,
  },
];

export function EducationSection() {
  return (
    <section
      id="education"
      className="w-full py-16 md:py-24"
    >
      <div className="grid grid-cols-1 md:grid-cols-[0.85fr_1.15fr] gap-10 md:gap-16 items-start">

        {/* ── LEFT: intro copy ── */}
        <div className="md:sticky md:top-24">
          {/* eyebrow */}
          <p className="flex items-center gap-2 font-mono text-[13px] text-muted-foreground mb-7">
            <span className="inline-block w-2 h-2 bg-[#22c55e] shrink-0" />
            02 — education.config.ts
          </p>

          <h2 className="text-[clamp(2rem,5vw,2.2rem)] font-extrabold tracking-tight leading-tight text-foreground mb-6">
            Education
          </h2>

          <p className="text-[19px] font-bold leading-snug text-foreground mb-5 max-w-[360px]">
            Education builds the foundation,<br />
            experience builds the structure.
          </p>

          <p className="text-[15px] leading-[1.75] text-muted-foreground mb-10 max-w-[400px]">
            A record of where the fundamentals were laid: three stages, each
            building on the last, from early interest in computers to a formal
            software engineering track currently in progress.
          </p>

          {/* stats */}
          <div className="flex gap-9 pt-7 border-t border-dashed border-border">
            <div>
              <p className="font-mono text-[22px] font-medium text-foreground mb-1">03</p>
              <p className="font-mono text-[12px] text-muted-foreground leading-snug">
                entries<br />logged
              </p>
            </div>
            <div>
              <p className="font-mono text-[22px] font-medium text-foreground mb-1">8.00</p>
              <p className="font-mono text-[12px] text-muted-foreground leading-snug">
                current<br />CGPA
              </p>
            </div>
            <div>
              <p className="font-mono text-[22px] font-medium text-foreground mb-1">01</p>
              <p className="font-mono text-[12px] text-muted-foreground leading-snug">
                currently<br />in progress
              </p>
            </div>
          </div>
        </div>

        {/* ── RIGHT: timeline ── */}
        <div className="relative pl-8">
          {/* vertical line */}
          <div className="absolute left-[7px] top-[6px] bottom-[6px] w-px bg-border" />

          <div className="space-y-8">
            {educationEntries.map((entry, i) => (
              <div key={i} className="relative">
                {/* timeline dot */}
                <span
                  className={`
                    absolute -left-8 top-[5px] w-[15px] h-[15px] rounded-full border-2
                    ${entry.current
                      ? "bg-foreground border-foreground"
                      : "bg-background border-border"
                    }
                  `}
                />

                {/* date */}
                <p className="font-mono text-[12px] text-muted-foreground mb-[6px]">
                  {entry.date}
                </p>

                {/* title */}
                <p className="text-[16px] font-bold text-foreground m-0">
                  {entry.title}
                </p>

                {/* institution */}
                <p className="text-[14px] text-muted-foreground mt-[3px]">
                  {entry.institution}
                </p>

                {/* body */}
                <p className="text-[14px] text-muted-foreground leading-[1.7] mt-[10px] max-w-[520px]">
                  {entry.body}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

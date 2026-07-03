"use client";

import { Icons } from "@/components/icons";

/* ─────────────────────────────────────────────
   Skill data grouped by category
   Each skill maps an icon key from Icons + a
   hex dot colour that matches its brand colour.
───────────────────────────────────────────── */
const categories = [
  {
    label: "frontend",
    skills: [
      { name: "HTML",         ext: ".html", dot: "#e4572e", icon: "html"       },
      { name: "CSS",          ext: ".css",  dot: "#2b6cb0", icon: "css"        },
      { name: "JavaScript",   ext: ".js",   dot: "#d4a017", icon: "javascript" },
      { name: "TypeScript",   ext: ".ts",   dot: "#2f6fed", icon: "typescript" },
      { name: "Tailwind CSS", ext: "",      dot: "#14b8a6", icon: "tailwind"   },
    ],
  },
  {
    label: "application layer",
    skills: [
      { name: "React",   ext: ".jsx", dot: "#2aa9c7", icon: "react"     },
      { name: "Redux",   ext: "",     dot: "#764abc", icon: "ReduxIcon" },
      { name: "Next.js", ext: "",     dot: "#111111", icon: "nextjs"    },
    ],
  },
  {
    label: "backend & data",
    skills: [
      { name: "Node.js",    ext: "", dot: "#3c873a", icon: "nodejs"   },
      { name: "Express.js", ext: "", dot: "#8b93a7", icon: "express"  },
      { name: "MongoDB",    ext: "", dot: "#4fa94d", icon: "mongodb"  },
    ],
  },
  {
    label: "tooling & devops",
    skills: [
      { name: "Docker",   ext: "",  dot: "#2496ed", icon: "docker",  learning: true  },
      { name: "Vercel",   ext: "",  dot: "#111111", icon: "vercel"                   },
      { name: "Git",      ext: "",  dot: "#e14e29", icon: "git"                      },
      { name: "GitHub",   ext: "",  dot: "#24292e", icon: "gitHub"                   },
      { name: "Postman",  ext: "",  dot: "#ef5b25", icon: "postman"                  },
    ],
  },
];

const totalSkills = categories.reduce((s, c) => s + c.skills.length, 0);
const learningCount = categories.flatMap(c => c.skills).filter(s => s.learning).length;

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="w-full py-16 md:py-24"
    >
      <div className="grid grid-cols-1 md:grid-cols-[320px_1fr] lg:grid-cols-[340px_1fr] gap-12 md:gap-14 items-start">

        {/* ── LEFT: intro copy ── */}
        <div className="md:sticky md:top-24">
          {/* eyebrow */}
          <p className="flex items-center gap-2 font-mono text-[13px] text-[#6f9a6a] mb-4">
            <span className="inline-block w-2 h-2 rounded-[2px] bg-[#3fc989]" />
            01 — skills.config.ts
          </p>

          <h2 className="text-[clamp(2.4rem,6vw,3.2rem)] font-extrabold tracking-tight leading-none text-foreground mb-4">
            Skills
            <span className="inline-block w-[5px] h-9 bg-foreground ml-1.5 align-[-4px] animate-[blink_1.1s_steps(1)_infinite]" />
          </h2>

          <p className="text-[17px] font-semibold text-foreground mb-3 leading-snug">
            Learning by building,<br />refining through debugging.
          </p>

          <p className="text-[15px] leading-[1.75] text-muted-foreground mb-8 max-w-sm">
            As a full-stack developer, I build scalable and user-focused web
            applications using modern technologies like Next.js and React. I'm
            also expanding into DevOps and cloud practices to streamline
            development workflows and deliver reliable, high-performance solutions.
          </p>

          {/* stat row */}
          <div className="flex gap-6 border-t border-dashed border-border pt-5 font-mono text-[13px] text-muted-foreground">
            <div>
              <strong className="block font-sans text-[22px] font-extrabold text-foreground leading-tight">
                {String(totalSkills).padStart(2, "0")}
              </strong>
              tools shipped with
            </div>
            <div>
              <strong className="block font-sans text-[22px] font-extrabold text-foreground leading-tight">
                {String(categories.length).padStart(2, "0")}
              </strong>
              layers of the stack
            </div>
            <div>
              <strong className="block font-sans text-[22px] font-extrabold text-foreground leading-tight">
                {String(learningCount).padStart(2, "0")}
              </strong>
              currently learning
            </div>
          </div>
        </div>

        {/* ── RIGHT: editor panel ── */}
        <div className="rounded-[14px] overflow-hidden border border-zinc-200 dark:border-white/8 bg-zinc-50 dark:bg-[#141414] shadow-[0_20px_45px_-25px_rgba(20,22,26,0.25)]">

          {/* title bar */}
          <div className="flex items-center gap-3 px-4 py-3 bg-zinc-100 dark:bg-[#1c1c1c] border-b border-zinc-200 dark:border-white/8">
            {/* traffic lights */}
            <div className="flex gap-[7px]">
              <span className="w-[11px] h-[11px] rounded-full bg-[#f4756a] block" />
              <span className="w-[11px] h-[11px] rounded-full bg-[#f7bd4a] block" />
              <span className="w-[11px] h-[11px] rounded-full bg-[#3fc989] block" />
            </div>
            {/* file tab */}
            <div className="flex items-center gap-[7px] font-mono text-[12.5px] text-foreground bg-background border border-zinc-200 dark:border-white/10 px-3 py-1.5 rounded-t-md rounded-b-none -mb-3 border-b-background">
              <span className="w-[7px] h-[7px] rounded-full bg-[#2f6fed] inline-block" />
              skills.config.ts
            </div>
          </div>

          {/* editor body */}
          <div className="p-6 pb-2 space-y-6">
            {categories.map((cat) => (
              <div key={cat.label}>
                {/* comment line */}
                <p className="flex items-center gap-2 font-mono text-[12.5px] text-[#6f9a6a] mb-3">
                  <span className="text-[#6f9a6a]">{"// "}{cat.label}</span>
                  <span className="text-zinc-400 dark:text-zinc-500">({cat.skills.length})</span>
                </p>

                {/* chips */}
                <div className="flex flex-wrap gap-[9px]">
                  {cat.skills.map((skill) => {
                    const IconComp = Icons[skill.icon as keyof typeof Icons];
                    return (
                      <div
                        key={skill.name}
                        className="
                          group flex items-center gap-2
                          bg-white dark:bg-[#1e1e1e]
                          border border-zinc-200 dark:border-white/8
                          rounded-lg px-3 py-2 cursor-default
                          font-mono text-[13px] text-foreground
                          transition-all duration-150
                          hover:-translate-y-[2px]
                          hover:shadow-[0_8px_16px_-8px_rgba(20,22,26,0.28)]
                          hover:border-zinc-300 dark:hover:border-white/20
                        "
                      >
                        {/* brand-colour dot */}
                        <span
                          className="w-2 h-2 rounded-[2px] shrink-0"
                          style={{ background: skill.dot }}
                        />

                        {/* icon */}
                        {IconComp && (
                          <span className="shrink-0 text-foreground/70">
                            {IconComp({ className: "size-4" })}
                          </span>
                        )}

                        {/* name */}
                        {skill.name}

                        {/* file extension */}
                        {skill.ext && (
                          <span className="text-zinc-400 dark:text-zinc-500">{skill.ext}</span>
                        )}

                        {/* learning badge */}
                        {skill.learning && (
                          <span className="ml-1 font-sans text-[9px] font-bold uppercase tracking-wide bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-400 px-[5px] py-[2px] rounded">
                            learning
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* status bar */}
          <div className="mt-5 flex justify-between items-center bg-zinc-800 dark:bg-[#181a1f] text-[#c7cbd4] font-mono text-[11.5px] px-4 py-2.5">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1 text-[#6ee7b7]">
                <span>⎇</span> main
              </span>
              <span className="text-[#8fdca0]">✓ 0 problems</span>
            </div>
            <div className="flex items-center gap-4 text-[#8b91a0]">
              <span>UTF-8</span>
              <span>Full-Stack Developer</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

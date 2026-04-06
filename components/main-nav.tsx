"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { docsConfig } from "@/config/docs";
import { cn } from "@/lib/utils";
import { useScrollSpy } from "@/hooks/use-scroll-spy";

export function MainNav() {
  const sectionIds = ['hero', 'about', 'education', 'projects', 'skills', 'contact'];
  const activeSection = useScrollSpy(sectionIds, 200);

  return (
    <div className="hidden md:flex">
      <nav className="flex items-center gap-7 text-[15px] font-medium tracking-wide">
        {docsConfig.mainNav.map((item) => {
          const itemSection = item.href.replace('/#', '');
          const isActive = activeSection === itemSection || (activeSection === 'hero' && item.href === '/#hero');
          
          return (
            <Link
              key={item.href}
              href={item.href || '/'}
              className={cn(
                "relative py-1 transition-colors hover:text-foreground",
                isActive
                  ? "text-foreground"
                  : "text-muted-foreground"
              )}
            >
              {item.title}
              {isActive && (
                <motion.div
                  layoutId="main-nav-underline"
                  className="absolute bottom-0 left-0 h-[2px] w-full bg-foreground"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 350,
                    damping: 30,
                  }}
                />
              )}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
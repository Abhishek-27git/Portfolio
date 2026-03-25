"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

import { docsConfig } from "@/config/docs";
import { cn } from "@/lib/utils";


export function MainNav() {
  const pathname = usePathname();

  return (
    <div className="hidden md:flex">
      <nav className="flex items-center gap-7 text-[15px] font-medium tracking-wide">
        {docsConfig.mainNav.map((item) => (
          <Link
            key={item.href}
            href={item.href || '/'}
            className={cn(
              "relative py-1 transition-colors hover:text-foreground",
              pathname === item.href
                ? "text-foreground"
                : "text-muted-foreground"
            )}
          >
            {item.title}
            {pathname === item.href && (
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
        ))}
      </nav>
    </div>
  );
}
"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Download, Moon } from "lucide-react";

import { siteConfig } from "@/config/site";
import { ModeSwitcher } from "./mode-switcher";
import { MainNav } from "./main-nav";
import { MobileNav } from "./mobile-nav";
import { Icons } from "./icons";

export function SiteHeader() {
  const [time, setTime] = useState(new Date());
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formattedTime = isMounted
    ? time.toLocaleTimeString("en-IN", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      })
    : "00:00:00";

  return (
    <>
      {/* Green accent topline */}
      <div className="h-[2px] w-full bg-[#22c55e] fixed top-0 left-0 z-[60]" />

      <header className="sticky top-[2px] z-50 w-full border-b border-border/50 bg-background/90 backdrop-blur-xl">
        <div className="container-wrapper">
          <div className="container flex h-12 items-center justify-between">

            {/* LEFT — mobile hamburger + desktop nav links */}
            <div className="flex items-center">
              <MobileNav />
              <MainNav />
            </div>

            {/* RIGHT — clock pill + icon buttons */}
            <div className="flex items-center gap-2">

              {/* Live clock — pill with solid dot */}
              <div className="hidden items-center gap-2 rounded-full border border-border bg-background px-3.5 py-1.5 lg:flex">
                {/* Solid dot — no animation */}
                <span className="h-[7px] w-[7px] rounded-full bg-foreground shrink-0" />
                <span className="font-mono text-[13px] tabular-nums text-foreground tracking-tight">
                  {formattedTime}
                </span>
              </div>

              {/* Theme toggle */}
              <ModeSwitcher
                className="h-[16px] w-[16px]"
                btnClassName="flex h-[34px] w-[34px] items-center justify-center rounded-[10px] border border-border bg-background text-foreground transition-colors hover:bg-muted cursor-pointer"
              />

              {/* Download resume */}
              <Link
                href={siteConfig.links.resume}
                target="_blank"
                className="flex h-[34px] w-[34px] items-center justify-center rounded-[10px] border border-border bg-background text-foreground transition-colors hover:bg-muted cursor-pointer"
                aria-label="Download resume"
              >
                <Download className="h-[16px] w-[16px]" />
              </Link>

              {/* GitHub */}
              <Link
                href={siteConfig.links.github}
                target="_blank"
                rel="noreferrer"
                className="flex h-[34px] w-[34px] items-center justify-center rounded-[10px] border border-border bg-background text-foreground transition-colors hover:bg-muted cursor-pointer"
                aria-label="GitHub"
              >
                <Icons.gitHub className="h-[16px] w-[16px]" />
              </Link>

              {/* LinkedIn — filled black square */}
              <Link
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex h-[34px] w-[34px] items-center justify-center rounded-[10px] bg-foreground text-background transition-opacity hover:opacity-90 cursor-pointer"
                aria-label="LinkedIn"
              >
                <Icons.linkedin className="h-[16px] w-[16px]" />
              </Link>

            </div>
          </div>
        </div>
      </header>
    </>
  );
}
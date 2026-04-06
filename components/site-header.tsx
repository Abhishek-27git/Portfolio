"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Download } from "lucide-react";

import { siteConfig } from "@/config/site";
import { Button } from "./ui/button";
import { ModeSwitcher } from "./mode-switcher";
import { MainNav } from "./main-nav";
import { MobileNav } from "./mobile-nav";
import { Icons } from "./icons";

export function SiteHeader() {
  const [time, setTime] = useState(new Date());

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);


  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Format time as HH:MM:SS
  const formattedTime = isMounted ? time.toLocaleTimeString('en-IN', {
    timeZone: 'Asia/Kolkata',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  }) : "00:00:00";

  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
      <div className="container-wrapper">
        <div className="container flex h-13 items-center justify-between">
          <div className="flex flex-1 items-center justify-start">
            <MobileNav />
          </div>

          <div className="flex flex-1 items-center justify-center">
            <MainNav />
          </div>

          <div className="flex flex-1 items-center justify-end gap-2 md:gap-3">
            {/* Live Clock */}
            <div className="hidden items-center gap-2 rounded-full border border-border/40 bg-muted/30 px-3 py-1.5 backdrop-blur-sm lg:flex">
              <div className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-foreground opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-foreground"></span>
              </div>
              <span className="text-xs font-medium tabular-nums tracking-tight text-foreground">
                {formattedTime}
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-1">


              {/* Theme Toggle */}
              <Button
                variant="ghost"
                size="icon"
                className="h-9 w-9 rounded-full transition-all hover:scale-105 hover:bg-muted"
                asChild
              >
                <div>
                  <ModeSwitcher className="h-[18px] w-[18px]" />
                </div>
              </Button>

              {/* Get Resume */}
              <Button
                variant="ghost"
                size="icon"
                className="h-9 w-9 rounded-full transition-all hover:scale-105 hover:bg-muted"
                asChild
              >
                <Link
                  href={siteConfig.links.resume}
                  target="_blank"
                >
                  <Download className="h-[18px] w-[18px]" />
                  <span className="sr-only">Get Resume</span>
                </Link>
              </Button>

              {/* GitHub */}
              <Button
                variant="ghost"
                size="icon"
                className="h-9 w-9 rounded-full transition-all hover:scale-105 hover:bg-muted"
                asChild
              >
                <Link
                  href={siteConfig.links.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icons.gitHub className="h-[18px] w-[18px]" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </Button>

              {/* LinkedIn */}
              <Button
                variant="ghost"
                size="icon"
                className="h-9 w-9 rounded-full transition-all hover:scale-105 hover:bg-muted"
                asChild
              >
                <Link
                  href={siteConfig.links.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icons.linkedin className="h-[18px] w-[18px]" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

    </header>
  );
}
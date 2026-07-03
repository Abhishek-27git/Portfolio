"use client";

import * as React from "react";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";

import { META_THEME_COLORS } from "@/config/site";
import { useMetaColor } from "@/hooks/use-meta-color";
import { cn } from "@/lib/utils";

export function ModeSwitcher({ className, btnClassName }: { className?: string; btnClassName?: string }) {
  const { setTheme, resolvedTheme } = useTheme();
  const { setMetaColor } = useMetaColor();

  const toggleTheme = React.useCallback(() => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
    setMetaColor(
      resolvedTheme === "dark"
        ? META_THEME_COLORS.light
        : META_THEME_COLORS.dark
    );
  }, [resolvedTheme, setTheme, setMetaColor]);

  return (
    <button
      className={cn(
        "w-8 h-8 rounded-full flex items-center justify-center hover:bg-muted text-muted-foreground transition-colors",
        btnClassName
      )}
      onClick={toggleTheme}
    >
      <SunIcon className={cn("hidden [html.dark_&]:block", className)} />
      <MoonIcon className={cn("hidden [html.light_&]:block", className)} />
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}


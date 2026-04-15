"use client";

import { useEffect, useRef, useState, useCallback } from "react";

interface SectionNode {
  id: string;
  label: string;
  icon: "calendar" | "code" | "zap" | "mail" | "user";
}

const SECTION_NODES: SectionNode[] = [
  { id: "hero", label: "Home", icon: "user" },
  { id: "education", label: "Education", icon: "calendar" },
  { id: "projects", label: "Projects", icon: "code" },
  { id: "skills", label: "Skills", icon: "zap" },
  { id: "contact", label: "Contact", icon: "mail" },
];

function NodeIcon({ icon, className = "" }: { icon: string; className?: string }) {
  const cn = `w-3.5 h-3.5 ${className}`;
  switch (icon) {
    case "user":
      return (
        <svg className={cn} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      );
    case "calendar":
      return (
        <svg className={cn} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
          <line x1="16" x2="16" y1="2" y2="6" />
          <line x1="8" x2="8" y1="2" y2="6" />
          <line x1="3" x2="21" y1="10" y2="10" />
        </svg>
      );
    case "code":
      return (
        <svg className={cn} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      );
    case "zap":
      return (
        <svg className={cn} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      );
    case "mail":
      return (
        <svg className={cn} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="16" x="2" y="4" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      );
    default:
      return null;
  }
}

export function ScrollLine() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [nodePositions, setNodePositions] = useState<number[]>([]);
  const [activeSection, setActiveSection] = useState(0);
  const rafRef = useRef<number>(0);

  const calculateNodePositions = useCallback(() => {
    const positions: number[] = [];
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;

    SECTION_NODES.forEach((node) => {
      const el = document.getElementById(node.id);
      if (el) {
        const rect = el.getBoundingClientRect();
        const absoluteTop = rect.top + window.scrollY;
        // Position as a fraction of total scrollable distance
        const fraction = docHeight > 0 ? absoluteTop / document.documentElement.scrollHeight : 0;
        positions.push(fraction);
      } else {
        positions.push(0);
      }
    });

    setNodePositions(positions);
  }, []);

  useEffect(() => {
    calculateNodePositions();

    const handleResize = () => calculateNodePositions();
    window.addEventListener("resize", handleResize);

    // Recalculate after fonts/images load
    const timeout = setTimeout(calculateNodePositions, 1000);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timeout);
    };
  }, [calculateNodePositions]);

  useEffect(() => {
    const handleScroll = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);

      rafRef.current = requestAnimationFrame(() => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = docHeight > 0 ? scrollTop / docHeight : 0;
        setScrollProgress(Math.min(1, Math.max(0, progress)));

        // Determine active section
        const scrollFraction = document.documentElement.scrollHeight > 0
          ? scrollTop / document.documentElement.scrollHeight
          : 0;

        let current = 0;
        for (let i = nodePositions.length - 1; i >= 0; i--) {
          if (scrollFraction >= nodePositions[i] - 0.02) {
            current = i;
            break;
          }
        }
        setActiveSection(current);
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [nodePositions]);

  // Convert node positions from document-fraction to line-percentage
  const lineHeight = containerRef.current?.clientHeight || 0;

  return (
    <div
      ref={containerRef}
      className="scroll-line-container"
      aria-hidden="true"
    >
      {/* Background track (light gray) */}
      <div className="scroll-line-track" />

      {/* Filled/drawn line (black) */}
      <div
        className="scroll-line-fill"
        style={{ height: `${scrollProgress * 100}%` }}
      />

      {/* Section nodes */}
      {SECTION_NODES.map((node, index) => {
        const pos = nodePositions[index] ?? 0;
        const isReached = scrollProgress >= pos - 0.01;
        const isActive = activeSection === index;

        return (
          <button
            key={node.id}
            className={`scroll-line-node ${isReached ? "reached" : ""} ${isActive ? "active" : ""}`}
            style={{ top: `${pos * 100}%` }}
            onClick={() => {
              const el = document.getElementById(node.id);
              el?.scrollIntoView({ behavior: "smooth" });
            }}
            title={node.label}
          >
            <div className="scroll-line-node-circle">
              <NodeIcon icon={node.icon} />
            </div>
            <span className={`scroll-line-node-label ${isActive ? "visible" : ""}`}>
              {node.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}

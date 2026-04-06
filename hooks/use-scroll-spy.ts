'use client';

import { useState, useEffect } from 'react';

export function useScrollSpy(sectionIds: string[], offset = 100) {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const handleScroll = () => {
      // Clear timeout for performance
      if (timeout) clearTimeout(timeout);

      timeout = setTimeout(() => {
        const scrollPosition = window.scrollY + offset;

        const activeSection = sectionIds
          .map((id) => {
            const element = document.getElementById(id);
            if (!element) return null;

            return {
              id,
              top: element.offsetTop,
              bottom: element.offsetTop + element.offsetHeight,
            };
          })
          .filter((section) => section !== null)
          .reverse() // check from bottom to top
          .find((section) => scrollPosition >= (section?.top || 0))?.id;

        if (activeSection && activeSection !== activeId) {
          setActiveId(activeSection);
        } else if (window.scrollY < offset) {
            setActiveId('hero');
        }
      }, 50);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // initialize

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeout) clearTimeout(timeout);
    };
  }, [sectionIds, offset, activeId]);

  return activeId;
}

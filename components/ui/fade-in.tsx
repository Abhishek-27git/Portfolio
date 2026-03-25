"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FadeInProps {
    children: ReactNode;
    delay?: number;
    className?: string;
    useTransitions?: boolean;
}

export function FadeInStagger({ children, className, staggerDelay = 0.15 }: { children: ReactNode, className?: string, staggerDelay?: number }) {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={{
                hidden: { opacity: 0 },
                visible: {
                    opacity: 1,
                    transition: {
                        staggerChildren: staggerDelay,
                    },
                },
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

export function FadeIn({ children, delay = 0, className, useTransitions = false }: FadeInProps) {
    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                        duration: 0.5,
                        delay: delay,
                        ease: [0.21, 0.47, 0.32, 0.98],
                    }
                },
            }}
            {...(useTransitions ? { initial: "hidden", animate: "visible" } : {})}
            className={className}
        >
            {children}
        </motion.div>
    );
}

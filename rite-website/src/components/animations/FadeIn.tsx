"use client";

import { motion, type Variants } from "framer-motion";
import { type ReactNode } from "react";

interface FadeInProps {
    children: ReactNode;
    direction?: "up" | "down" | "left" | "right" | "none";
    delay?: number;
    duration?: number;
    className?: string;
    once?: boolean;
}

const directionMap: Record<string, { x?: number; y?: number }> = {
    up: { y: 40 },
    down: { y: -40 },
    left: { x: 40 },
    right: { x: -40 },
    none: {},
};

export default function FadeIn({
    children,
    direction = "up",
    delay = 0,
    duration = 0.6,
    className = "",
    once = true,
}: FadeInProps) {
    const offset = directionMap[direction];

    const variants: Variants = {
        hidden: { opacity: 0, ...offset },
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: { duration, delay, ease: [0.25, 0.1, 0.25, 1] },
        },
    };

    return (
        <motion.div
            variants={variants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once, amount: 0.2 }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

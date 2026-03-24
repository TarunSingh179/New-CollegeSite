"use client";

import { useEffect, useState, useRef } from "react";

interface CounterProps {
    end: number;
    duration?: number;
    suffix?: string;
    className?: string;
}

export default function Counter({
    end,
    duration = 2000,
    suffix = "",
    className = "",
}: CounterProps) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated.current) {
                    hasAnimated.current = true;
                    let startTime: number;
                    const animate = (timestamp: number) => {
                        if (!startTime) startTime = timestamp;
                        const progress = Math.min((timestamp - startTime) / duration, 1);
                        // ease-out quad
                        const eased = 1 - (1 - progress) * (1 - progress);
                        setCount(Math.floor(end * eased));
                        if (progress < 1) {
                            requestAnimationFrame(animate);
                        } else {
                            setCount(end);
                        }
                    };
                    requestAnimationFrame(animate);
                }
            },
            { threshold: 0.3 }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [end, duration]);

    return (
        <span ref={ref} className={className}>
            {count}
            {suffix}
        </span>
    );
}

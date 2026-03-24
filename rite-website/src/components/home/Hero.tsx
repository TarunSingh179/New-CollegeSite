"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";
import Counter from "@/components/ui/Counter";
import { HERO_STATS } from "@/lib/constants";

export default function Hero() {
    const sectionRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end start"],
    });
    const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
    const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

    return (
        <section
            ref={sectionRef}
            id="hero"
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
            {/* Campus background image with parallax */}
            <motion.div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: "url('/images/hero-bg.png')",
                    y: bgY,
                    scale: bgScale,
                }}
            />
            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-linear-to-br from-primary/80 via-primary-dark/75 to-accent/70" />

            {/* Animated grid overlay */}
            <div
                className="absolute inset-0 opacity-[0.07]"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(255,255,255,.3) 1px, transparent 1px), linear-gradient(to right, rgba(255,255,255,.3) 1px, transparent 1px)",
                    backgroundSize: "60px 60px",
                }}
            />

            {/* Floating shapes */}
            <motion.div
                animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[20%] left-[10%] w-32 h-32 rounded-3xl bg-white/5 blur-sm"
            />
            <motion.div
                animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-[25%] right-[8%] w-48 h-48 rounded-full bg-secondary/10 blur-sm"
            />
            <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[55%] left-[60%] w-24 h-24 rounded-2xl bg-accent/10 blur-sm"
            />
            <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.12, 0.05] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[15%] right-[20%] w-40 h-40 rounded-full bg-secondary/10 blur-md"
            />
            <motion.div
                animate={{ y: [0, -25, 0], x: [0, 10, 0] }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-[40%] left-[5%] w-20 h-20 rounded-full border border-white/10"
            />

            {/* Content */}
            <div className="relative z-10 section-container text-center text-white px-4">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="inline-flex items-center gap-2 bg-white/10 backdrop-blur rounded-full px-5 py-2 mb-8 border border-white/20 border-glow"
                >
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-sm font-medium">AICTE Approved · NAAC Accredited</span>
                </motion.div>

                {/* Headline with shimmer */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.7 }}
                    className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6"
                >
                    Engineering{" "}
                    <span className="text-shimmer">
                        Excellence
                    </span>
                    <br />
                    in Odisha
                </motion.h1>

                {/* Subheadline */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 font-body"
                >
                    Radhakrishna Institute of Technology &amp; Engineering — 12+ years
                    of innovation, world‑class faculty, and industry‑driven education.
                </motion.p>

                {/* CTAs with glow */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
                >
                    <a
                        href="#apply"
                        className="btn-glow group flex items-center gap-2 bg-secondary hover:bg-secondary-light text-white font-bold px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all text-base"
                    >
                        Apply Now
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a
                        href="#facilities"
                        className="flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur text-white font-bold px-8 py-4 rounded-2xl border border-white/25 hover:scale-105 transition-all text-base hover:border-white/50"
                    >
                        Virtual Tour
                    </a>
                </motion.div>

                {/* Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.0, duration: 0.7 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
                >
                    {HERO_STATS.map((stat) => (
                        <div
                            key={stat.label}
                            className="bg-white/10 backdrop-blur rounded-2xl p-5 border border-white/15"
                        >
                            <div className="text-3xl md:text-4xl font-extrabold font-heading">
                                <Counter end={stat.value} suffix={stat.suffix} />
                            </div>
                            <div className="text-sm text-white/70 mt-1">{stat.label}</div>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60"
            >
                <span className="text-xs font-medium tracking-widest uppercase">
                    Scroll
                </span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.8, repeat: Infinity }}
                >
                    <ChevronDown className="w-5 h-5" />
                </motion.div>
            </motion.div>
        </section>
    );
}

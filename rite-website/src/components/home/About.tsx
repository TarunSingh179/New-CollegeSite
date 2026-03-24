"use client";

import Image from "next/image";
import Counter from "@/components/ui/Counter";
import FadeIn from "@/components/animations/FadeIn";
import { Award, Users, BookOpen, Calendar } from "lucide-react";

const ABOUT_STATS = [
    { icon: Calendar, value: 12, suffix: "+", label: "Years" },
    { icon: Users, value: 5000, suffix: "+", label: "Students" },
    { icon: BookOpen, value: 120, suffix: "+", label: "Faculty" },
    { icon: Award, value: 15, suffix: "+", label: "Courses" },
];

export default function About() {
    return (
        <section id="about" className="py-20 md:py-28 bg-white">
            <div className="section-container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Image side */}
                    <FadeIn direction="left">
                        <div className="relative">
                            <div className="aspect-4/3 rounded-3xl overflow-hidden shadow-2xl">
                                <Image
                                    src="/images/hero-bg.png"
                                    alt="RITE Campus - Radhakrishna Institute of Technology & Engineering"
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-700"
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                />
                            </div>
                            {/* Floating badge */}
                            <div className="absolute -bottom-4 -right-4 bg-secondary text-white p-4 rounded-2xl shadow-xl">
                                <div className="text-2xl font-extrabold font-heading">B+</div>
                                <div className="text-xs font-medium">NAAC Grade</div>
                            </div>
                        </div>
                    </FadeIn>

                    {/* Content side */}
                    <div>
                        <FadeIn direction="right">
                            <span className="inline-block text-sm font-bold text-accent uppercase tracking-widest mb-3">
                                About Us
                            </span>
                            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-extrabold text-heading mb-6 leading-tight">
                                About{" "}
                                <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-accent">
                                    RITE
                                </span>
                            </h2>
                        </FadeIn>

                        <FadeIn direction="right" delay={0.15}>
                            <p className="text-body leading-relaxed mb-4">
                                Radhakrishna Institute of Technology &amp; Engineering (RITE) is an AICTE‑approved
                                and NAAC‑accredited institution located in Bhubaneswar, Odisha. Affiliated to
                                Biju Patnaik University of Technology (BPUT), RITE has been nurturing engineering
                                talent since 2012.
                            </p>
                            <p className="text-body leading-relaxed mb-8">
                                With a sprawling campus, modern laboratories, experienced faculty, and strong
                                industry connections, we provide a holistic learning environment that prepares
                                students for successful careers in engineering, technology, and management.
                            </p>
                        </FadeIn>

                        <FadeIn direction="up" delay={0.3}>
                            <div className="grid grid-cols-2 gap-4">
                                {ABOUT_STATS.map((s) => (
                                    <div
                                        key={s.label}
                                        className="group p-5 rounded-2xl bg-surface hover:bg-primary hover:text-white transition-all duration-300 cursor-default"
                                    >
                                        <s.icon className="w-6 h-6 text-primary group-hover:text-secondary mb-2 transition-colors" />
                                        <div className="text-2xl font-extrabold font-heading text-heading group-hover:text-white transition-colors">
                                            <Counter end={s.value} suffix={s.suffix} />
                                        </div>
                                        <div className="text-sm text-muted group-hover:text-white/70 transition-colors">
                                            {s.label}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </FadeIn>

                        <FadeIn direction="up" delay={0.4}>
                            <a
                                href="/about"
                                className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-primary text-white rounded-xl font-bold hover:bg-primary-light hover:scale-105 shadow-lg transition-all"
                            >
                                Learn More
                            </a>
                        </FadeIn>
                    </div>
                </div>
            </div>
        </section>
    );
}

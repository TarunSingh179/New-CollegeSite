"use client";

import Counter from "@/components/ui/Counter";
import FadeIn from "@/components/animations/FadeIn";
import { COMPANY_NAMES } from "@/lib/constants";
import { TrendingUp, Users, Trophy, Building2 } from "lucide-react";

const PLACEMENT_STATS = [
    { icon: Users, value: 1200, suffix: "+", label: "Students Placed" },
    { icon: Trophy, value: 8, suffix: " LPA", label: "Top Package" },
    { icon: TrendingUp, value: 4.5, suffix: " LPA", label: "Avg. Package" },
    { icon: Building2, value: 50, suffix: "+", label: "Recruiters" },
];

function MarqueeRow({
    items,
    reverse = false,
}: {
    items: string[];
    reverse?: boolean;
}) {
    const doubled = [...items, ...items];
    return (
        <div className="overflow-hidden py-2">
            <div
                className={`flex gap-6 w-max ${reverse ? "animate-marquee-reverse" : "animate-marquee"
                    } hover:[animation-play-state:paused]`}
            >
                {doubled.map((name, i) => (
                    <div
                        key={`${name}-${i}`}
                        className="flex items-center justify-center px-6 py-3 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:scale-105 hover:border-primary/20 transition-all whitespace-nowrap"
                    >
                        <span className="text-sm font-semibold text-heading">{name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default function Placements() {
    const half = Math.ceil(COMPANY_NAMES.length / 2);
    const row1 = COMPANY_NAMES.slice(0, half);
    const row2 = COMPANY_NAMES.slice(half);

    return (
        <section id="placements" className="py-20 md:py-28 bg-surface">
            <div className="section-container">
                <FadeIn className="text-center mb-14">
                    <span className="inline-block text-sm font-bold text-accent uppercase tracking-widest mb-3">
                        Placements
                    </span>
                    <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-extrabold text-heading mb-4">
                        Placement{" "}
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-accent">
                            Highlights
                        </span>
                    </h2>
                    <div className="w-20 h-1 bg-linear-to-r from-primary to-secondary mx-auto rounded-full" />
                </FadeIn>

                {/* Stats grid */}
                <FadeIn direction="up" delay={0.1}>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
                        {PLACEMENT_STATS.map((s) => (
                            <div
                                key={s.label}
                                className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-lg border border-gray-100 hover:border-primary/20 transition-all group"
                            >
                                <div className="w-12 h-12 rounded-xl bg-primary/10 group-hover:bg-primary flex items-center justify-center mx-auto mb-3 transition-colors">
                                    <s.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                                </div>
                                <div className="text-3xl font-extrabold font-heading text-heading">
                                    {typeof s.value === "number" && s.value % 1 !== 0 ? (
                                        <span>
                                            <Counter end={Math.floor(s.value)} />.5{s.suffix}
                                        </span>
                                    ) : (
                                        <Counter end={s.value as number} suffix={s.suffix} />
                                    )}
                                </div>
                                <div className="text-sm text-muted mt-1">{s.label}</div>
                            </div>
                        ))}
                    </div>
                </FadeIn>

                {/* Marquee company logos */}
                <FadeIn direction="up" delay={0.2}>
                    <h3 className="text-center font-heading font-bold text-heading text-lg mb-6">
                        Our Recruiters
                    </h3>
                    <div className="space-y-4">
                        <MarqueeRow items={row1} />
                        <MarqueeRow items={row2} reverse />
                    </div>
                </FadeIn>

                <FadeIn direction="up" delay={0.3} className="text-center mt-10">
                    <a
                        href="/placements"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-xl font-bold hover:bg-primary-light hover:scale-105 shadow-lg transition-all"
                    >
                        View All Recruiters
                    </a>
                </FadeIn>
            </div>
        </section>
    );
}

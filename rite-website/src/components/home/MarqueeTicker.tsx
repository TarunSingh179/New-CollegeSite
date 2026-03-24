"use client";

import { Trophy, GraduationCap, Users, Building2, Star, BadgeCheck } from "lucide-react";

const TICKER_ITEMS = [
    { icon: BadgeCheck, text: "AICTE Approved" },
    { icon: Star, text: "NAAC Accredited (B+)" },
    { icon: GraduationCap, text: "BPUT Affiliated" },
    { icon: Trophy, text: "95% Placement Record" },
    { icon: Users, text: "5000+ Alumni Network" },
    { icon: Building2, text: "12+ Years of Excellence" },
    { icon: BadgeCheck, text: "Industry-Ready Curriculum" },
    { icon: Star, text: "World-Class Infrastructure" },
];

export default function MarqueeTicker() {
    // Double the items for seamless infinite scroll
    const items = [...TICKER_ITEMS, ...TICKER_ITEMS];

    return (
        <div className="relative bg-linear-to-r from-primary-dark via-primary to-primary-dark overflow-hidden">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-linear-to-r from-primary-dark to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-linear-to-l from-primary-dark to-transparent z-10" />

            <div className="flex animate-marquee whitespace-nowrap py-3">
                {items.map((item, i) => (
                    <div
                        key={i}
                        className="inline-flex items-center gap-2 mx-6 text-white/90 text-sm font-medium shrink-0"
                    >
                        <item.icon className="w-4 h-4 text-secondary" />
                        <span>{item.text}</span>
                        <span className="ml-6 text-white/20">•</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

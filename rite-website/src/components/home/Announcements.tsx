"use client";

import { useEffect, useRef, useState } from "react";
import { Bell, Calendar, GraduationCap, ClipboardList, Megaphone } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";
import { ANNOUNCEMENTS, NEWS_ITEMS } from "@/lib/constants";

const TYPE_CONFIG: Record<string, { color: string; icon: typeof Bell }> = {
    admission: { color: "bg-green-100 text-green-700", icon: GraduationCap },
    exam: { color: "bg-red-100 text-red-700", icon: ClipboardList },
    event: { color: "bg-blue-100 text-blue-700", icon: Megaphone },
    general: { color: "bg-gray-100 text-gray-600", icon: Bell },
};

export default function Announcements() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [isPaused, setIsPaused] = useState(false);

    // Auto-scroll vertically
    useEffect(() => {
        const el = scrollRef.current;
        if (!el || isPaused) return;
        const timer = setInterval(() => {
            if (el.scrollTop + el.clientHeight >= el.scrollHeight - 2) {
                el.scrollTop = 0;
            } else {
                el.scrollTop += 1;
            }
        }, 40);
        return () => clearInterval(timer);
    }, [isPaused]);

    return (
        <section className="py-20 md:py-28 bg-surface">
            <div className="section-container">
                <FadeIn className="text-center mb-14">
                    <span className="inline-block text-sm font-bold text-accent uppercase tracking-widest mb-3">
                        Stay Updated
                    </span>
                    <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-extrabold text-heading mb-4">
                        Notifications &{" "}
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-accent">
                            Events
                        </span>
                    </h2>
                    <div className="w-20 h-1 bg-linear-to-r from-primary to-secondary mx-auto rounded-full" />
                </FadeIn>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Notifications panel */}
                    <FadeIn direction="left">
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                            <div className="flex items-center gap-2 px-6 py-4 bg-linear-to-r from-primary to-accent text-white">
                                <Bell className="w-5 h-5" />
                                <h3 className="font-heading font-bold text-lg">Notifications</h3>
                                <span className="ml-auto text-xs bg-white/20 px-2 py-0.5 rounded-full">
                                    {ANNOUNCEMENTS.length} items
                                </span>
                            </div>
                            <div
                                ref={scrollRef}
                                onMouseEnter={() => setIsPaused(true)}
                                onMouseLeave={() => setIsPaused(false)}
                                className="h-[340px] overflow-y-auto scrollbar-hide"
                                style={{ scrollBehavior: "auto" }}
                            >
                                {ANNOUNCEMENTS.map((a) => {
                                    const config = TYPE_CONFIG[a.type] || TYPE_CONFIG.general;
                                    const TypeIcon = config.icon;
                                    return (
                                        <div
                                            key={a.id}
                                            className="flex items-start gap-3 px-6 py-4 border-b border-gray-50 hover:bg-surface/50 transition-colors cursor-pointer group"
                                        >
                                            <div className={`shrink-0 w-9 h-9 rounded-lg ${config.color} flex items-center justify-center mt-0.5`}>
                                                <TypeIcon className="w-4 h-4" />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <div className="flex items-center gap-2 mb-1">
                                                    {a.isNew && (
                                                        <span className="text-[10px] font-bold bg-red-500 text-white px-1.5 py-0.5 rounded uppercase animate-pulse">
                                                            New
                                                        </span>
                                                    )}
                                                    <span className="text-xs text-muted flex items-center gap-1">
                                                        <Calendar className="w-3 h-3" />
                                                        {new Date(a.date).toLocaleDateString("en-IN", {
                                                            day: "numeric",
                                                            month: "short",
                                                            year: "numeric",
                                                        })}
                                                    </span>
                                                </div>
                                                <p className="text-sm text-heading font-medium leading-snug group-hover:text-primary transition-colors">
                                                    {a.title}
                                                </p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </FadeIn>

                    {/* Upcoming Events panel */}
                    <FadeIn direction="right">
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                            <div className="flex items-center gap-2 px-6 py-4 bg-linear-to-r from-secondary to-secondary-light text-white">
                                <Calendar className="w-5 h-5" />
                                <h3 className="font-heading font-bold text-lg">Upcoming Events</h3>
                            </div>
                            <div className="divide-y divide-gray-50">
                                {NEWS_ITEMS.filter((n) => n.category === "Event")
                                    .slice(0, 4)
                                    .map((event) => (
                                        <div
                                            key={event.id}
                                            className="flex items-center gap-4 px-6 py-5 hover:bg-surface/50 transition-colors cursor-pointer group"
                                        >
                                            {/* Date block */}
                                            <div className="shrink-0 w-14 h-14 rounded-xl bg-primary/5 flex flex-col items-center justify-center">
                                                <span className="text-lg font-extrabold text-primary leading-none">
                                                    {new Date(event.date).getDate()}
                                                </span>
                                                <span className="text-[10px] font-semibold text-primary/70 uppercase">
                                                    {new Date(event.date).toLocaleDateString("en-IN", { month: "short" })}
                                                </span>
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <h4 className="text-sm font-bold text-heading group-hover:text-primary transition-colors leading-snug mb-1">
                                                    {event.title}
                                                </h4>
                                                <p className="text-xs text-body line-clamp-2">
                                                    {event.excerpt}
                                                </p>
                                            </div>
                                        </div>
                                    ))}

                                {/* If fewer than 2 events, show some news instead */}
                                {NEWS_ITEMS.filter((n) => n.category !== "Event")
                                    .slice(0, 2)
                                    .map((item) => (
                                        <div
                                            key={item.id}
                                            className="flex items-center gap-4 px-6 py-5 hover:bg-surface/50 transition-colors cursor-pointer group"
                                        >
                                            <div className="shrink-0 w-14 h-14 rounded-xl bg-accent/5 flex flex-col items-center justify-center">
                                                <span className="text-lg font-extrabold text-accent leading-none">
                                                    {new Date(item.date).getDate()}
                                                </span>
                                                <span className="text-[10px] font-semibold text-accent/70 uppercase">
                                                    {new Date(item.date).toLocaleDateString("en-IN", { month: "short" })}
                                                </span>
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <h4 className="text-sm font-bold text-heading group-hover:text-primary transition-colors leading-snug mb-1">
                                                    {item.title}
                                                </h4>
                                                <p className="text-xs text-body line-clamp-2">
                                                    {item.excerpt}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
}

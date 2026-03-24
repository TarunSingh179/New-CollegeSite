"use client";

import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";
import { NEWS_ITEMS } from "@/lib/constants";

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.1, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const },
    }),
};

const CATEGORY_COLORS: Record<string, string> = {
    Achievement: "bg-green-100 text-green-700",
    Event: "bg-blue-100 text-blue-700",
    Placement: "bg-purple-100 text-purple-700",
    Campus: "bg-orange-100 text-orange-700",
    Recognition: "bg-amber-100 text-amber-700",
};

export default function News() {
    return (
        <section id="news" className="py-20 md:py-28 bg-white">
            <div className="section-container">
                <FadeIn className="text-center mb-14">
                    <span className="inline-block text-sm font-bold text-accent uppercase tracking-widest mb-3">
                        Updates
                    </span>
                    <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-extrabold text-heading mb-4">
                        News &amp;{" "}
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-accent">
                            Events
                        </span>
                    </h2>
                    <div className="w-20 h-1 bg-linear-to-r from-primary to-secondary mx-auto rounded-full" />
                </FadeIn>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {NEWS_ITEMS.map((item, i) => (
                        <motion.article
                            key={item.id}
                            custom={i}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.1 }}
                            className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 hover:border-primary/20 transition-all duration-300"
                        >
                            {/* Colored header strip */}
                            <div className="h-2 bg-linear-to-r from-primary to-accent" />

                            <div className="p-6">
                                <div className="flex items-center justify-between mb-3">
                                    <span
                                        className={`text-xs font-semibold px-3 py-1 rounded-full ${CATEGORY_COLORS[item.category] || "bg-gray-100 text-gray-600"
                                            }`}
                                    >
                                        {item.category}
                                    </span>
                                    <div className="flex items-center gap-1 text-xs text-muted">
                                        <Calendar className="w-3.5 h-3.5" />
                                        {new Date(item.date).toLocaleDateString("en-IN", {
                                            day: "numeric",
                                            month: "short",
                                            year: "numeric",
                                        })}
                                    </div>
                                </div>

                                <h3 className="font-heading font-bold text-heading text-base leading-snug mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-sm text-body leading-relaxed line-clamp-3 mb-4">
                                    {item.excerpt}
                                </p>
                                <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all">
                                    Read More <ArrowRight className="w-4 h-4" />
                                </span>
                            </div>
                        </motion.article>
                    ))}
                </div>

                <FadeIn className="text-center mt-10">
                    <button className="px-6 py-3 rounded-xl border-2 border-primary text-primary font-bold hover:bg-primary hover:text-white transition-all">
                        Load More
                    </button>
                </FadeIn>
            </div>
        </section>
    );
}

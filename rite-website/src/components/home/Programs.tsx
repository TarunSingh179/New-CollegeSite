"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";
import { PROGRAMS } from "@/lib/constants";

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.1, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const },
    }),
};

export default function Programs() {
    return (
        <section id="programs" className="py-20 md:py-28 bg-surface">
            <div className="section-container">
                <FadeIn className="text-center mb-14">
                    <span className="inline-block text-sm font-bold text-accent uppercase tracking-widest mb-3">
                        Our Programs
                    </span>
                    <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-extrabold text-heading mb-4">
                        Academic{" "}
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-accent">
                            Programs
                        </span>
                    </h2>
                    <div className="w-20 h-1 bg-linear-to-r from-primary to-secondary mx-auto rounded-full" />
                </FadeIn>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {PROGRAMS.map((program, i) => (
                        <motion.div
                            key={program.slug}
                            custom={i}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.15 }}
                            className="group card-3d bg-white rounded-2xl p-7 shadow-sm hover:shadow-xl border border-gray-100 hover:border-primary/20 transition-all duration-300 cursor-pointer"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-linear-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-5 group-hover:from-primary group-hover:to-accent transition-all duration-500">
                                <program.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-500" />
                            </div>
                            <h3 className="font-heading text-lg font-bold text-heading mb-2 group-hover:text-primary transition-colors">
                                {program.title}
                            </h3>
                            <p className="text-sm text-body leading-relaxed mb-5">
                                {program.description}
                            </p>
                            <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all">
                                Explore Program <ArrowRight className="w-4 h-4" />
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

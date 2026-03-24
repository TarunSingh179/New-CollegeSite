"use client";

import { motion } from "framer-motion";
import { Handshake, FlaskConical, HeartHandshake, BookOpenCheck } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";
import FloatingParticles from "@/components/animations/FloatingParticles";
import { USP_ITEMS } from "@/lib/constants";

const ICONS = [Handshake, FlaskConical, HeartHandshake, BookOpenCheck];

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.12, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const },
    }),
};

export default function WhyChooseUs() {
    return (
        <section className="py-20 md:py-28 bg-white relative overflow-hidden">
            <FloatingParticles count={20} />
            <div className="section-container relative z-10">
                <FadeIn className="text-center mb-14">
                    <span className="inline-block text-sm font-bold text-accent uppercase tracking-widest mb-3">
                        Why RITE
                    </span>
                    <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-extrabold text-heading mb-4">
                        Why Choose{" "}
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-accent">
                            RITE?
                        </span>
                    </h2>
                    <div className="w-20 h-1 bg-linear-to-r from-primary to-secondary mx-auto rounded-full" />
                </FadeIn>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {USP_ITEMS.map((item, i) => {
                        const Icon = ICONS[i % ICONS.length];
                        return (
                            <motion.div
                                key={item.title}
                                custom={i}
                                variants={cardVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.15 }}
                                className="group card-3d relative bg-white rounded-2xl p-7 shadow-sm hover:shadow-xl border border-gray-100 hover:border-primary/20 transition-all duration-300 overflow-hidden"
                            >
                                {/* Corner accent */}
                                <div className="absolute top-0 right-0 w-24 h-24 bg-linear-to-bl from-primary/5 to-transparent rounded-bl-[60px]" />

                                {/* Icon */}
                                <div className="relative w-14 h-14 rounded-2xl bg-linear-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-5 group-hover:from-primary group-hover:to-accent transition-all duration-500">
                                    <Icon className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-500" />
                                </div>

                                {/* Stats badge */}
                                <span className="inline-block text-xs font-bold text-secondary bg-secondary/10 px-3 py-1 rounded-full mb-3">
                                    {item.stats}
                                </span>

                                <h3 className="font-heading text-lg font-bold text-heading mb-2 group-hover:text-primary transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-sm text-body leading-relaxed">
                                    {item.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

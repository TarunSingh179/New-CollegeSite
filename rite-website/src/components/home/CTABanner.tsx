"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

export default function CTABanner() {
    return (
        <section className="relative py-20 md:py-28 overflow-hidden">
            {/* Gradient bg */}
            <div className="absolute inset-0 bg-linear-to-r from-primary via-primary-dark to-accent" />

            {/* Decorative shapes */}
            <motion.div
                animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 left-[5%] w-40 h-40 rounded-full bg-white/5"
            />
            <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-10 right-[10%] w-56 h-56 rounded-3xl bg-secondary/10 rotate-12"
            />

            <div className="relative z-10 section-container text-center text-white">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight">
                        Ready to Join{" "}
                        <span className="text-secondary">RITE</span>?
                    </h2>
                    <p className="text-lg md:text-xl text-white/80 max-w-xl mx-auto mb-10 font-body">
                        Start your engineering journey today — admissions are now open for
                        the 2026‑27 academic session.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href="#apply"
                            className="group flex items-center gap-2 bg-secondary hover:bg-secondary-light text-white font-bold px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
                        >
                            Apply Now
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a
                            href="#"
                            className="flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur text-white font-bold px-8 py-4 rounded-2xl border border-white/25 hover:scale-105 transition-all"
                        >
                            <Download className="w-5 h-5" />
                            Download Brochure
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

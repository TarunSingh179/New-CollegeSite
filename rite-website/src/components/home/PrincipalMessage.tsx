"use client";

import { Quote } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";

export default function PrincipalMessage() {
    return (
        <section className="py-20 md:py-28 bg-surface relative overflow-hidden">
            {/* Decorative pattern */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage:
                        "radial-gradient(circle, var(--color-primary) 1px, transparent 1px)",
                    backgroundSize: "30px 30px",
                }}
            />

            <div className="section-container relative">
                <FadeIn className="text-center mb-14">
                    <span className="inline-block text-sm font-bold text-accent uppercase tracking-widest mb-3">
                        Leadership
                    </span>
                    <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-extrabold text-heading mb-4">
                        Principal&apos;s{" "}
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-accent">
                            Message
                        </span>
                    </h2>
                    <div className="w-20 h-1 bg-linear-to-r from-primary to-secondary mx-auto rounded-full" />
                </FadeIn>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14 items-center max-w-5xl mx-auto">
                    {/* Portrait */}
                    <FadeIn direction="left" className="lg:col-span-2">
                        <div className="relative mx-auto w-60 lg:w-full max-w-xs">
                            <div className="aspect-3/4 rounded-3xl bg-linear-to-br from-primary to-accent p-1 shadow-2xl">
                                <div className="w-full h-full rounded-[22px] bg-linear-to-br from-primary/20 via-accent/10 to-secondary/10 flex items-center justify-center">
                                    <div className="text-center text-white p-6">
                                        <div className="w-24 h-24 mx-auto rounded-full bg-white/15 backdrop-blur flex items-center justify-center mb-4 border-2 border-white/30">
                                            <span className="text-4xl font-extrabold font-heading">P</span>
                                        </div>
                                        <p className="font-bold text-lg">Principal</p>
                                        <p className="text-sm text-white/70">RITE, Bhubaneswar</p>
                                    </div>
                                </div>
                            </div>
                            {/* Decorative element */}
                            <div className="absolute -bottom-3 -right-3 w-20 h-20 rounded-2xl bg-secondary/20 -z-10" />
                            <div className="absolute -top-3 -left-3 w-16 h-16 rounded-full bg-accent/10 -z-10" />
                        </div>
                    </FadeIn>

                    {/* Message */}
                    <FadeIn direction="right" className="lg:col-span-3">
                        <div className="relative">
                            <Quote className="w-12 h-12 text-primary/10 absolute -top-2 -left-2" />
                            <blockquote className="relative z-10 text-body leading-relaxed space-y-4 pl-4 lg:pl-0">
                                <p>
                                    At Radhakrishna Institute of Technology &amp; Engineering, we believe that
                                    education is not just about academics — it is about shaping character,
                                    fostering innovation, and building leaders who can contribute meaningfully
                                    to society.
                                </p>
                                <p>
                                    Our institution is committed to providing a nurturing environment where
                                    students can explore their potential through world‑class infrastructure,
                                    experienced faculty, and industry‑aligned curriculum. We take pride in
                                    our holistic approach that balances technical excellence with personal
                                    growth.
                                </p>
                                <p>
                                    I invite all aspiring engineers, managers, and technologists to join the
                                    RITE family and embark on a transformative journey towards a successful
                                    career.
                                </p>
                            </blockquote>

                            <div className="mt-6 pt-6 border-t border-gray-200">
                                <p className="font-heading font-bold text-lg text-heading">
                                    Dr. Principal Name
                                </p>
                                <p className="text-sm text-primary font-semibold">
                                    Principal, RITE
                                </p>
                                <p className="text-xs text-muted mt-1">
                                    Ph.D., M.Tech · 25+ Years in Academia
                                </p>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
}

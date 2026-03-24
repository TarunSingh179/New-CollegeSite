"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Award } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";
import { RANKINGS } from "@/lib/constants";

export default function Rankings() {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        align: "start",
        slidesToScroll: 1,
    });
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
        emblaApi.on("select", onSelect);
        return () => { emblaApi.off("select", onSelect); };
    }, [emblaApi]);

    // Auto-play
    useEffect(() => {
        if (!emblaApi || isPaused) return;
        const timer = setInterval(() => emblaApi.scrollNext(), 3500);
        return () => clearInterval(timer);
    }, [emblaApi, isPaused]);

    return (
        <section className="py-16 md:py-20 bg-surface">
            <div className="section-container">
                <FadeIn className="text-center mb-10">
                    <span className="inline-block text-sm font-bold text-accent uppercase tracking-widest mb-3">
                        Recognition
                    </span>
                    <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-extrabold text-heading mb-4">
                        Rankings &{" "}
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-accent">
                            Accreditations
                        </span>
                    </h2>
                    <div className="w-20 h-1 bg-linear-to-r from-primary to-secondary mx-auto rounded-full" />
                </FadeIn>

                <div
                    className="relative"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    <div ref={emblaRef} className="overflow-hidden">
                        <div className="flex">
                            {RANKINGS.map((r, i) => (
                                <div
                                    key={i}
                                    className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.33%] px-3"
                                >
                                    <div className="group bg-white rounded-2xl p-7 shadow-sm hover:shadow-xl border border-gray-100 hover:border-primary/20 transition-all duration-300 text-center h-full">
                                        {/* Icon */}
                                        <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-primary/10 to-accent/10 flex items-center justify-center mx-auto mb-5 group-hover:from-primary group-hover:to-accent transition-all duration-500">
                                            <Award className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-500" />
                                        </div>

                                        {/* Highlight badge */}
                                        {r.highlight && (
                                            <span className="inline-block bg-secondary/10 text-secondary font-extrabold text-lg px-4 py-1 rounded-full mb-3">
                                                {r.highlight}
                                            </span>
                                        )}

                                        {/* Body name */}
                                        <h3 className="font-heading text-xl font-bold text-heading mb-2">
                                            {r.body}
                                        </h3>

                                        {/* Detail */}
                                        <p className="text-sm text-body leading-relaxed mb-3">
                                            {r.detail}
                                        </p>

                                        {/* Year */}
                                        <span className="text-xs font-semibold text-muted uppercase tracking-wider">
                                            {r.year}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation arrows */}
                    <button
                        onClick={scrollPrev}
                        aria-label="Previous"
                        className="absolute top-1/2 -translate-y-1/2 -left-3 md:-left-5 w-10 h-10 rounded-full bg-white shadow-lg border border-gray-100 flex items-center justify-center hover:bg-primary hover:text-white transition-colors z-10"
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                        onClick={scrollNext}
                        aria-label="Next"
                        className="absolute top-1/2 -translate-y-1/2 -right-3 md:-right-5 w-10 h-10 rounded-full bg-white shadow-lg border border-gray-100 flex items-center justify-center hover:bg-primary hover:text-white transition-colors z-10"
                    >
                        <ChevronRight className="w-5 h-5" />
                    </button>
                </div>

                {/* Dots */}
                <div className="flex justify-center gap-2 mt-8">
                    {RANKINGS.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => emblaApi?.scrollTo(i)}
                            aria-label={`Go to slide ${i + 1}`}
                            className={`h-2 rounded-full transition-all duration-300 ${i === selectedIndex
                                    ? "w-8 bg-primary"
                                    : "w-2 bg-gray-300 hover:bg-primary/40"
                                }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

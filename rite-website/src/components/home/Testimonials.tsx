"use client";

import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";
import { TESTIMONIALS } from "@/lib/constants";

export default function Testimonials() {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        align: "start",
    });
    const [selectedIndex, setSelectedIndex] = useState(0);

    const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
        emblaApi.on("select", onSelect);
        return () => { emblaApi.off("select", onSelect); };
    }, [emblaApi]);

    // Auto‑play
    useEffect(() => {
        if (!emblaApi) return;
        const timer = setInterval(() => emblaApi.scrollNext(), 5000);
        return () => clearInterval(timer);
    }, [emblaApi]);

    return (
        <section id="testimonials" className="py-20 md:py-28 bg-surface">
            <div className="section-container">
                <FadeIn className="text-center mb-14">
                    <span className="inline-block text-sm font-bold text-accent uppercase tracking-widest mb-3">
                        Testimonials
                    </span>
                    <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-extrabold text-heading mb-4">
                        What Students{" "}
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-accent">
                            Say
                        </span>
                    </h2>
                    <div className="w-20 h-1 bg-linear-to-r from-primary to-secondary mx-auto rounded-full" />
                </FadeIn>

                <div className="relative">
                    <div ref={emblaRef} className="overflow-hidden">
                        <div className="flex">
                            {TESTIMONIALS.map((t) => (
                                <div
                                    key={t.id}
                                    className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.33%] px-3"
                                >
                                    <div className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100 h-full flex flex-col">
                                        {/* Quote icon */}
                                        <Quote className="w-8 h-8 text-primary/20 mb-4" />

                                        {/* Stars */}
                                        <div className="flex gap-0.5 mb-4">
                                            {Array.from({ length: 5 }).map((_, i) => (
                                                <Star
                                                    key={i}
                                                    className={`w-4 h-4 ${i < t.rating
                                                        ? "text-secondary fill-secondary"
                                                        : "text-gray-200"
                                                        }`}
                                                />
                                            ))}
                                        </div>

                                        {/* Quote */}
                                        <p className="text-body text-sm leading-relaxed flex-1 mb-6 italic">
                                            &ldquo;{t.quote}&rdquo;
                                        </p>

                                        {/* Author */}
                                        <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                                            <div className="w-11 h-11 rounded-full bg-linear-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-sm">
                                                {t.name
                                                    .split(" ")
                                                    .map((w) => w[0])
                                                    .join("")
                                                    .slice(0, 2)}
                                            </div>
                                            <div>
                                                <div className="font-heading font-bold text-heading text-sm">
                                                    {t.name}
                                                </div>
                                                <div className="text-xs text-muted">
                                                    {t.course} • {t.year}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Arrows */}
                    <button
                        onClick={scrollPrev}
                        aria-label="Previous testimonial"
                        className="absolute top-1/2 -translate-y-1/2 -left-3 md:-left-5 w-10 h-10 rounded-full bg-white shadow-lg border border-gray-100 flex items-center justify-center hover:bg-primary hover:text-white transition-colors z-10"
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                        onClick={scrollNext}
                        aria-label="Next testimonial"
                        className="absolute top-1/2 -translate-y-1/2 -right-3 md:-right-5 w-10 h-10 rounded-full bg-white shadow-lg border border-gray-100 flex items-center justify-center hover:bg-primary hover:text-white transition-colors z-10"
                    >
                        <ChevronRight className="w-5 h-5" />
                    </button>
                </div>

                {/* Dots */}
                <div className="flex justify-center gap-2 mt-8">
                    {TESTIMONIALS.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => emblaApi?.scrollTo(i)}
                            aria-label={`Go to testimonial ${i + 1}`}
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

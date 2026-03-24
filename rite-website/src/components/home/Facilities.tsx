"use client";

import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";
import { FACILITIES } from "@/lib/constants";

export default function Facilities() {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        align: "start",
        slidesToScroll: 1,
    });
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
    const scrollTo = useCallback((i: number) => emblaApi?.scrollTo(i), [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
        emblaApi.on("select", onSelect);
        return () => { emblaApi.off("select", onSelect); };
    }, [emblaApi]);

    // Auto‑play
    useEffect(() => {
        if (!emblaApi || isPaused) return;
        const timer = setInterval(() => emblaApi.scrollNext(), 4000);
        return () => clearInterval(timer);
    }, [emblaApi, isPaused]);

    return (
        <section id="facilities" className="py-20 md:py-28 bg-white">
            <div className="section-container">
                <FadeIn className="text-center mb-14">
                    <span className="inline-block text-sm font-bold text-accent uppercase tracking-widest mb-3">
                        Campus
                    </span>
                    <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-extrabold text-heading mb-4">
                        World‑Class{" "}
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-accent">
                            Facilities
                        </span>
                    </h2>
                    <div className="w-20 h-1 bg-linear-to-r from-primary to-secondary mx-auto rounded-full" />
                </FadeIn>

                <div
                    className="relative"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    <div ref={emblaRef} className="overflow-hidden rounded-3xl">
                        <div className="flex">
                            {FACILITIES.map((f) => (
                                <div
                                    key={f.title}
                                    className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.33%] px-3"
                                >
                                    <div className="group relative h-72 sm:h-80 rounded-2xl overflow-hidden shadow-lg bg-linear-to-br from-primary/10 to-accent/10">
                                        {/* Gradient placeholder */}
                                        <div className="absolute inset-0 bg-linear-to-br from-primary/20 via-accent/10 to-secondary/10 group-hover:scale-110 transition-transform duration-700" />
                                        {/* Overlay */}
                                        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />
                                        {/* Icon */}
                                        <div className="absolute top-4 right-4 w-12 h-12 rounded-xl bg-white/15 backdrop-blur flex items-center justify-center">
                                            <f.icon className="w-6 h-6 text-white" />
                                        </div>
                                        {/* Text */}
                                        <div className="absolute bottom-0 left-0 right-0 p-6">
                                            <h3 className="text-white font-heading font-bold text-lg mb-1">
                                                {f.title}
                                            </h3>
                                            <p className="text-white/70 text-sm leading-relaxed">
                                                {f.description}
                                            </p>
                                        </div>
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
                    {FACILITIES.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => scrollTo(i)}
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

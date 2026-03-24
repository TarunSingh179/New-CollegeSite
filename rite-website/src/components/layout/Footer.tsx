"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
    GraduationCap,
    MapPin,
    Phone,
    Mail,
    ArrowUp,
    Facebook,
    Twitter,
    Instagram,
    Linkedin,
    Youtube,
    Send,
} from "lucide-react";
import { QUICK_LINKS, PROGRAM_LINKS } from "@/lib/constants";

export default function Footer() {
    const [showTop, setShowTop] = useState(false);

    useEffect(() => {
        const handler = () => setShowTop(window.scrollY > 600);
        window.addEventListener("scroll", handler, { passive: true });
        return () => window.removeEventListener("scroll", handler);
    }, []);

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

    const currentYear = new Date().getFullYear();

    const socials = [
        { icon: Facebook, href: "#", label: "Facebook" },
        { icon: Twitter, href: "#", label: "Twitter" },
        { icon: Instagram, href: "#", label: "Instagram" },
        { icon: Linkedin, href: "#", label: "LinkedIn" },
        { icon: Youtube, href: "#", label: "YouTube" },
    ];

    return (
        <footer className="relative bg-linear-to-b from-gray-900 to-gray-950 text-gray-300">
            {/* wave separator */}
            <div className="absolute -top-px left-0 right-0 overflow-hidden leading-none">
                <svg viewBox="0 0 1440 60" className="w-full h-12 fill-white block">
                    <path d="M0,0 C480,60 960,60 1440,0 L1440,60 L0,60 Z" />
                </svg>
            </div>

            <div className="section-container pt-20 pb-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
                    {/* About */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-9 h-9 rounded-lg bg-linear-to-br from-primary to-accent flex items-center justify-center">
                                <GraduationCap className="w-5 h-5 text-white" />
                            </div>
                            <span className="text-lg font-bold text-white tracking-tight">
                                RITE
                            </span>
                        </div>
                        <p className="text-sm leading-relaxed mb-5 text-gray-400">
                            Radhakrishna Institute of Technology &amp; Engineering — shaping
                            future engineers and leaders since 2012. AICTE Approved &amp; NAAC
                            Accredited.
                        </p>
                        <div className="flex gap-2">
                            {socials.map((s) => (
                                <a
                                    key={s.label}
                                    href={s.href}
                                    aria-label={s.label}
                                    className="w-9 h-9 rounded-full bg-white/5 hover:bg-primary flex items-center justify-center transition-all hover:scale-110"
                                >
                                    <s.icon className="w-4 h-4" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
                            Quick Links
                        </h4>
                        <ul className="space-y-2.5">
                            {QUICK_LINKS.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-sm hover:text-secondary transition-colors hover:translate-x-1 inline-block"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Programs */}
                    <div>
                        <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
                            Programs
                        </h4>
                        <ul className="space-y-2.5">
                            {PROGRAM_LINKS.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-sm hover:text-secondary transition-colors hover:translate-x-1 inline-block"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact + Newsletter */}
                    <div>
                        <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
                            Contact
                        </h4>
                        <ul className="space-y-3 text-sm mb-6">
                            <li className="flex items-start gap-2">
                                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-secondary" />
                                Bhubaneswar, Odisha, India
                            </li>
                            <li className="flex items-center gap-2">
                                <Phone className="w-4 h-4 shrink-0 text-secondary" />
                                +91‑674‑XXXXXXX
                            </li>
                            <li className="flex items-center gap-2">
                                <Mail className="w-4 h-4 shrink-0 text-secondary" />
                                info@riteindia.edu.in
                            </li>
                        </ul>

                        <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">
                            Newsletter
                        </h4>
                        <form
                            onSubmit={(e) => e.preventDefault()}
                            className="flex rounded-xl overflow-hidden border border-white/10"
                        >
                            <input
                                type="email"
                                placeholder="Your email"
                                className="flex-1 bg-white/5 px-3 py-2 text-sm outline-none placeholder:text-gray-500 text-white"
                            />
                            <button
                                type="submit"
                                className="bg-secondary hover:bg-secondary-light px-3 text-white transition-colors"
                                aria-label="Subscribe"
                            >
                                <Send className="w-4 h-4" />
                            </button>
                        </form>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
                    <p>© {currentYear} RITE — All rights reserved.</p>
                    <div className="flex gap-4">
                        <Link href="#" className="hover:text-white transition-colors">
                            Privacy Policy
                        </Link>
                        <Link href="#" className="hover:text-white transition-colors">
                            Terms of Use
                        </Link>
                        <Link href="#" className="hover:text-white transition-colors">
                            Sitemap
                        </Link>
                    </div>
                </div>
            </div>

            {/* Scroll to top */}
            <button
                onClick={scrollToTop}
                aria-label="Back to top"
                className={`fixed bottom-6 right-6 z-50 w-11 h-11 rounded-full bg-primary text-white shadow-xl flex items-center justify-center hover:bg-primary-light hover:scale-110 transition-all ${showTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
                    }`}
            >
                <ArrowUp className="w-5 h-5" />
            </button>
        </footer>
    );
}

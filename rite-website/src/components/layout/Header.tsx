"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { NAV_ITEMS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [programsOpen, setProgramsOpen] = useState(false);
    const [mobileAccordion, setMobileAccordion] = useState<string | null>(null);

    useEffect(() => {
        const handler = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handler, { passive: true });
        return () => window.removeEventListener("scroll", handler);
    }, []);

    // lock body scroll when mobile menu open
    useEffect(() => {
        document.body.style.overflow = mobileOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [mobileOpen]);

    return (
        <>
            <a href="#main-content" className="skip-link">
                Skip to main content
            </a>

            <header
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                    scrolled
                        ? "bg-white/90 backdrop-blur-xl shadow-lg border-b border-gray-100"
                        : "bg-transparent"
                )}
            >
                <div className="section-container flex items-center justify-between h-18 md:h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group z-10">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src="/images/rite-logo.png"
                            alt="RITE Logo"
                            className={cn(
                                "h-10 md:h-12 w-auto transition-all",
                                scrolled ? "" : "brightness-0 invert"
                            )}
                        />
                    </Link>

                    {/* Desktop nav */}
                    <nav className="hidden lg:flex items-center gap-1">
                        {NAV_ITEMS.map((item) => (
                            <div
                                key={item.label}
                                className="relative"
                                onMouseEnter={() => item.children && setProgramsOpen(true)}
                                onMouseLeave={() => item.children && setProgramsOpen(false)}
                            >
                                <Link
                                    href={item.href}
                                    className={cn(
                                        "px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-1",
                                        scrolled
                                            ? "text-heading hover:bg-primary/5 hover:text-primary"
                                            : "text-white/90 hover:text-white hover:bg-white/10"
                                    )}
                                >
                                    {item.label}
                                    {item.children && (
                                        <ChevronDown
                                            className={cn(
                                                "w-3.5 h-3.5 transition-transform",
                                                programsOpen && item.children && "rotate-180"
                                            )}
                                        />
                                    )}
                                </Link>

                                {/* Mega menu */}
                                {item.children && (
                                    <AnimatePresence>
                                        {programsOpen && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: 10 }}
                                                transition={{ duration: 0.2 }}
                                                className="absolute top-full left-0 pt-2 z-50"
                                            >
                                                <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 min-w-[240px]">
                                                    {item.children.map((child) => (
                                                        <Link
                                                            key={child.label}
                                                            href={child.href}
                                                            className="block px-4 py-2.5 rounded-xl text-sm text-body hover:bg-primary/5 hover:text-primary transition-colors font-medium"
                                                        >
                                                            {child.label}
                                                        </Link>
                                                    ))}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                )}
                            </div>
                        ))}
                    </nav>

                    {/* Desktop CTA */}
                    <div className="hidden lg:flex items-center gap-3">
                        <Link
                            href="#"
                            className={cn(
                                "text-sm font-medium px-4 py-2 rounded-lg transition-colors",
                                scrolled
                                    ? "text-body hover:text-primary"
                                    : "text-white/80 hover:text-white"
                            )}
                        >
                            ERP Login
                        </Link>
                        <Link
                            href="#apply"
                            className="text-sm font-bold px-5 py-2.5 rounded-xl bg-secondary text-white hover:bg-secondary-light shadow-lg hover:shadow-xl hover:scale-105 transition-all"
                        >
                            Apply Now
                        </Link>
                    </div>

                    {/* Mobile hamburger */}
                    <button
                        className="lg:hidden z-10 w-10 h-10 flex items-center justify-center"
                        onClick={() => setMobileOpen(!mobileOpen)}
                        aria-label="Toggle menu"
                    >
                        {mobileOpen ? (
                            <X className={cn("w-6 h-6", scrolled ? "text-heading" : "text-white")} />
                        ) : (
                            <Menu className={cn("w-6 h-6", scrolled ? "text-heading" : "text-white")} />
                        )}
                    </button>
                </div>
            </header>

            {/* Mobile overlay */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", stiffness: 300, damping: 35 }}
                        className="fixed inset-0 z-40 bg-white flex flex-col pt-24 px-6 pb-8 overflow-y-auto"
                    >
                        <nav className="flex flex-col gap-1">
                            {NAV_ITEMS.map((item, i) => (
                                <motion.div
                                    key={item.label}
                                    initial={{ opacity: 0, x: 30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.05 }}
                                >
                                    {item.children ? (
                                        <div>
                                            <button
                                                onClick={() =>
                                                    setMobileAccordion(
                                                        mobileAccordion === item.label ? null : item.label
                                                    )
                                                }
                                                className="flex items-center justify-between w-full py-3 text-lg font-semibold text-heading"
                                            >
                                                {item.label}
                                                <ChevronDown
                                                    className={cn(
                                                        "w-5 h-5 transition-transform",
                                                        mobileAccordion === item.label && "rotate-180"
                                                    )}
                                                />
                                            </button>
                                            <AnimatePresence>
                                                {mobileAccordion === item.label && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: "auto", opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        transition={{ duration: 0.25 }}
                                                        className="overflow-hidden pl-4"
                                                    >
                                                        {item.children.map((child) => (
                                                            <Link
                                                                key={child.label}
                                                                href={child.href}
                                                                onClick={() => setMobileOpen(false)}
                                                                className="block py-2 text-body hover:text-primary transition-colors"
                                                            >
                                                                {child.label}
                                                            </Link>
                                                        ))}
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    ) : (
                                        <Link
                                            href={item.href}
                                            onClick={() => setMobileOpen(false)}
                                            className="block py-3 text-lg font-semibold text-heading hover:text-primary transition-colors"
                                        >
                                            {item.label}
                                        </Link>
                                    )}
                                </motion.div>
                            ))}
                        </nav>

                        <div className="mt-8 flex flex-col gap-3">
                            <Link
                                href="#"
                                className="text-center py-3 rounded-xl border-2 border-primary text-primary font-bold hover:bg-primary hover:text-white transition-colors"
                            >
                                ERP Login
                            </Link>
                            <Link
                                href="#apply"
                                className="text-center py-3 rounded-xl bg-secondary text-white font-bold shadow-lg hover:bg-secondary-light transition-colors"
                            >
                                Apply Now
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

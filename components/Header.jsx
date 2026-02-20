"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Languages, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
    { href: "#hero", label: "Home" },
    { href: "#problem", label: "About" },
    { href: "#features", label: "Features" },
    { href: "#pythia", label: "Pythia AI" },
    { href: "#pricing", label: "Price" },
    { href: "#faq", label: "FAQ" },
];

// Mapping of section IDs to the nav link href that should be active
const sectionParentMap = {
    steps: "#features",
    security: "#features",
    impact: "#pythia",
};

export function Header() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("");
    const [currentLang, setCurrentLang] = useState("EN");
    const [langMenuOpen, setLangMenuOpen] = useState(false);

    // Handle Scroll for Shrink Effect & Top Position
    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 50;
            setScrolled(isScrolled);

            // Force "Home" to be active when at the very top
            if (window.scrollY < 100) {
                setActiveSection("#hero");
            }
        };
        window.addEventListener("scroll", handleScroll);
        // Set initial state
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Handle Active Section Detection via Scroll
    useEffect(() => {
        const handleActiveSection = () => {
            const scrollPosition = window.scrollY + 150; // Offset for header height

            // Define all sections to track
            const sections = [
                "hero",
                "problem",
                "features",
                "steps", // grouped under features
                "security", // grouped under features
                "pythia",
                "impact", // grouped under pythia
                "pricing",
                "faq",
                "contact"
            ];

            for (const id of sections) {
                const element = document.getElementById(id);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (
                        scrollPosition >= offsetTop &&
                        scrollPosition < offsetTop + offsetHeight
                    ) {
                        const activeLink = sectionParentMap[id] || `#${id}`;
                        setActiveSection(activeLink);
                        return; // Found the active section, stop checking
                    }
                }
            }

            // Fallback for very top
            if (window.scrollY < 100) {
                setActiveSection("#hero");
            }
        };

        window.addEventListener("scroll", handleActiveSection);
        handleActiveSection(); // Initial check
        return () => window.removeEventListener("scroll", handleActiveSection);
    }, []);

    return (
        <motion.header
            className="fixed top-0 left-0 right-0 z-50 flex justify-center items-start pt-6 px-6 pointer-events-none"
        >
            <motion.nav
                layout
                initial={{ width: "100%", maxWidth: "80rem", borderRadius: "1.5rem" }}
                animate={{
                    width: scrolled ? "auto" : "100%",
                    maxWidth: scrolled ? "fit-content" : "80rem",
                    y: scrolled ? 10 : 0,
                    borderRadius: "9999px",
                }}
                transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 20,
                    mass: 0.5
                }}
                className={cn(
                    "relative pointer-events-auto flex items-center justify-between px-2 py-2 transition-all duration-300",
                    scrolled
                        ? "bg-white/80 backdrop-blur-xl shadow-lg border border-transparent"
                        : "bg-transparent border border-transparent"
                )}
            >
                {/* Logo */}
                <a href="#hero" className={cn("flex items-center gap-2 px-4 transition-all hover:opacity-80", scrolled ? "scale-100" : "scale-100")}>
                    <img
                        src={scrolled ? "/logo-icon.png" : "/logo-full.png"}
                        alt="Salut Logo"
                        className={cn("transition-all duration-300", scrolled ? "h-6 w-6 object-contain" : "h-8")}
                    />
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center bg-[#F5F7F9]/50 rounded-full p-1.5 border border-[#013F40]/5 mx-4">
                    {navLinks.map((link) => {
                        const isActive = activeSection === link.href;
                        return (
                            <a
                                key={link.label}
                                href={link.href}
                                className={cn(
                                    "relative px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-full z-10",
                                    isActive ? "text-[#013F40]" : "text-[#013F40]/60 hover:text-[#013F40]"
                                )}
                            >
                                {isActive && (
                                    <motion.div
                                        layoutId="activeTab"
                                        className="absolute inset-0 bg-white shadow-sm rounded-full -z-10"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                                {link.label}
                            </a>
                        );
                    })}
                </div>

                {/* CTA & Mobile Toggle */}
                <div className="flex items-center gap-2 pr-2 overflow-visible">
                    {/* Language Switcher */}
                    <div className="relative group">
                        <button
                            onClick={() => setLangMenuOpen(!langMenuOpen)}
                            className={cn(
                                "flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-all duration-300",
                                scrolled
                                    ? "bg-[#013F40]/5 hover:bg-[#013F40]/10 text-[#013F40]"
                                    : "bg-white/10 hover:bg-white/20 text-[#013F40]"
                            )}
                        >
                            <Languages size={16} className="text-[#7DD15F]" />
                            <span className="text-sm font-semibold uppercase">{currentLang}</span>
                            <ChevronDown
                                size={14}
                                className={cn("transition-transform duration-300", langMenuOpen && "rotate-180")}
                            />
                        </button>

                        <AnimatePresence>
                            {langMenuOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                    className="absolute top-full right-0 mt-2 min-w-[120px] bg-white border border-[#013F40]/10 rounded-2xl shadow-xl p-2 z-[60]"
                                >
                                    <div className="flex flex-col gap-1">
                                        <button
                                            onClick={() => {
                                                setCurrentLang("EN");
                                                setLangMenuOpen(false);
                                            }}
                                            className={cn(
                                                "w-full text-left px-3 py-2 rounded-xl text-sm transition-colors",
                                                currentLang === "EN" ? "bg-[#7DD15F]/10 text-[#013F40] font-bold" : "hover:bg-gray-50 text-[#013F40]/70"
                                            )}
                                        >
                                            🇬🇧 English
                                        </button>
                                        <button
                                            disabled // Disable Spanish for now as requested
                                            onClick={() => {
                                                // setCurrentLang("ES");
                                                setLangMenuOpen(false);
                                            }}
                                            className="w-full text-left px-3 py-2 rounded-xl text-sm text-[#013F40]/30 cursor-not-allowed"
                                        >
                                            🇪🇸 Spanish <span className="text-[10px] bg-gray-100 px-1 rounded ml-1 italic font-normal">soon</span>
                                        </button>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <a
                        href="#contact"
                        className={cn(
                            "hidden md:inline-flex items-center justify-center rounded-full bg-[#013F40] text-white text-sm font-semibold hover:bg-[#013F40]/90 transition-all shadow-md hover:shadow-lg",
                            scrolled ? "px-4 py-2" : "px-6 py-2.5"
                        )}
                    >
                        Get Started
                    </a>
                    <button
                        className="md:hidden p-2 text-[#013F40] rounded-full hover:bg-black/5"
                        onClick={() => setMobileOpen(!mobileOpen)}
                        aria-label="Toggle menu"
                    >
                        {mobileOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm md:hidden pointer-events-auto"
                        onClick={() => setMobileOpen(false)}
                    >
                        <motion.div
                            initial={{ opacity: 0, y: -20, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -20, scale: 0.95 }}
                            className="absolute top-24 left-4 right-4 bg-white rounded-3xl p-6 shadow-2xl border border-[#013F40]/10 overflow-hidden"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <nav className="flex flex-col gap-2">
                                {navLinks.map((link) => (
                                    <a
                                        key={link.label}
                                        href={link.href}
                                        onClick={() => setMobileOpen(false)}
                                        className={cn(
                                            "p-4 rounded-xl text-lg font-medium transition-colors hover:bg-[#F5F7F9]",
                                            activeSection === link.href ? "text-[#013F40] bg-[#F5F7F9]" : "text-[#013F40]/60"
                                        )}
                                    >
                                        {link.label}
                                    </a>
                                ))}
                            </nav>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}

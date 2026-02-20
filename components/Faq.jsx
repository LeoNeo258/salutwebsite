"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const faqData = [
    {
        question: "Can Salut! replace my current POS system?",
        answer:
            "Absolutely. Salut! is designed as a complete all-in-one ERP, which includes a modern, high-speed Point of Sale interface that works offline and syncs instantly with your inventory.",
    },
    {
        question: "Do I need to buy new hardware?",
        answer:
            "In most cases, no. Salut! runs in the browser and is compatible with standard barcode scanners, receipt printers, and touch screens. We also offer a dedicated hardware kit if you're starting fresh.",
    },
    {
        question: "How does the AI inventory prediction work?",
        answer:
            "Pythia, our AI engine, analyzes your sales history, local events, and even weather patterns to predict exactly what you need to order. It spots trends before they happen, reducing waste and preventing stockouts.",
    },
    {
        question: "How long does it take to get set up?",
        answer:
            "We can get your store migrated and running in as little as 24 hours. Our team handles the data import from your old system so you don't have to manually re-enter products.",
    },
    {
        question: "Is my data secure?",
        answer:
            "Yes. We use enterprise-grade encryption for all data storage and transmission. Your business data is backed up automatically every hour.",
    },
];

function FaqItem({ item, index }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div
            className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--glass-bg)] backdrop-blur-xl overflow-hidden transition-colors duration-300 hover:border-[var(--border-hover)]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
        >
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full px-6 py-5 flex items-center justify-between text-left"
                aria-expanded={isOpen}
            >
                <span className="text-lg font-medium text-[var(--text-primary)] pr-4">
                    {item.question}
                </span>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="shrink-0"
                >
                    <ChevronDown
                        className={`w-5 h-5 transition-colors duration-300 ${isOpen ? "text-[#7DD15F]" : "text-[#013F40]/40"
                            }`}
                    />
                </motion.div>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        <div className="px-6 pb-5 border-t border-[var(--border-subtle)]">
                            <p className="pt-4 text-[var(--text-secondary)] leading-relaxed">
                                {item.answer}
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

export function Faq() {
    return (
        <AnimatedSection id="faq" className="py-20 px-6 relative z-10">
            <div className="mx-auto max-w-7xl">
                <div className="text-center mb-20">
                    <motion.span
                        className="inline-block py-1 px-3 rounded-full bg-[#7DD15F]/10 text-[#013F40] text-xs font-bold uppercase tracking-widest mb-6 border border-[#7DD15F]/20"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        FAQ
                    </motion.span>
                    <motion.h2
                        className="mt-4 text-4xl md:text-5xl font-bold text-[#013F40]"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        Frequently Asked Questions
                    </motion.h2>
                    <motion.p
                        className="mt-4 text-lg text-[#013F40]/70 max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        We&apos;ve heard them all. Here are the ones that matter most.
                    </motion.p>
                </div>

                <div className="max-w-3xl mx-auto space-y-4">
                    {faqData.map((item, i) => (
                        <FaqItem key={i} item={item} index={i} />
                    ))}
                </div>
            </div>
        </AnimatedSection>
    );
}

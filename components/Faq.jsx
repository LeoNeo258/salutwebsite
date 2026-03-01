"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { useLanguage } from "@/components/LanguageProvider";

const faqDataConfig = [
    {
        qKey: "faq.q1.q",
        aKey: "faq.q1.a",
    },
    {
        qKey: "faq.q2.q",
        aKey: "faq.q2.a",
    },
    {
        qKey: "faq.q3.q",
        aKey: "faq.q3.a",
    },
    {
        qKey: "faq.q4.q",
        aKey: "faq.q4.a",
    },
    {
        qKey: "faq.q5.q",
        aKey: "faq.q5.a",
    },
];

function FaqItem({ item, index }) {
    const [isOpen, setIsOpen] = useState(false);
    const { t } = useLanguage();

    return (
        <motion.div
            className="rounded-2xl border border-[var(--border-subtle)] bg-white/95 overflow-hidden transition-colors duration-300 hover:border-[var(--border-hover)]"
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
                    {t(item.qKey)}
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
                                {t(item.aKey)}
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

export function Faq() {
    const { t } = useLanguage();

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
                        {t("faq.badge")}
                    </motion.span>
                    <motion.h2
                        className="mt-4 text-4xl md:text-5xl font-bold text-[#013F40]"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        {t("faq.title")}
                    </motion.h2>
                    <motion.p
                        className="mt-4 text-lg text-[#013F40]/70 max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        {t("faq.description")}
                    </motion.p>
                </div>

                <div className="max-w-3xl mx-auto space-y-4">
                    {faqDataConfig.map((item, i) => (
                        <FaqItem key={i} item={item} index={i} />
                    ))}
                </div>
            </div>
        </AnimatedSection>
    );
}

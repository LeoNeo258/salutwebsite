"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { GlassCard } from "@/components/ui/GlassCard";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";

const stepsDataConfig = [
    {
        number: "1",
        titleKey: "steps.s1.title",
        descKey: "steps.s1.desc",
    },
    {
        number: "2",
        titleKey: "steps.s2.title",
        descKey: "steps.s2.desc",
    },
    {
        number: "3",
        titleKey: "steps.s3.title",
        descKey: "steps.s3.desc",
    },
];

export function Steps() {
    const { t } = useLanguage();

    return (
        <AnimatedSection id="steps" className="py-20 px-6 relative z-10">
            <div className="mx-auto max-w-7xl">

                {/* Header Section */}
                <div className="text-center md:mb-20 mb-16 flex flex-col items-center">
                    <motion.span
                        className="inline-block py-1 px-3 rounded-full bg-[#7DD15F]/10 text-[#013F40] text-xs font-bold uppercase tracking-widest mb-6 border border-[#7DD15F]/20"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        {t("steps.badge")}
                    </motion.span>
                    <motion.h2
                        className="mt-2 text-4xl md:text-6xl font-bold leading-tight text-[#013F40]"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        {t("steps.title")}
                    </motion.h2>
                    <motion.p
                        className="mt-6 text-lg text-[#013F40]/70 max-w-2xl mx-auto mb-10"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        {t("steps.description")}
                    </motion.p>
                    <motion.a
                        href="#contact"
                        className="inline-flex items-center px-8 py-4 rounded-full bg-[#013F40] text-white text-lg font-semibold hover:bg-[#013F40]/90 transition-all shadow-md hover:scale-[1.02]"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        {t("steps.btnStart")} <ArrowRight className="ml-2 w-5 h-5" />
                    </motion.a>
                </div>

                {/* Timeline Section */}
                <div className="relative mt-12 grid md:grid-cols-3 gap-8">
                    {/* Unified continuous static line (Desktop) */}
                    <div className="hidden md:block absolute top-[11px] left-[16.66%] right-[16.66%] h-[2px] bg-[#013F40]/10 z-0" />

                    {/* Unified continuous static line (Mobile) */}
                    <div className="md:hidden absolute top-[11px] bottom-[31px] left-1/2 -translate-x-1/2 w-[2px] bg-[#013F40]/10 z-0" />

                    {stepsDataConfig.map((step, i) => (
                        <motion.div
                            key={step.number}
                            className="group"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2 }}
                        >
                            <div className="flex flex-col items-center">
                                {/* Step number */}
                                <motion.div
                                    className="w-6 h-6 rounded-full bg-[#7DD15F]/60 text-white flex items-center justify-center mb-6 relative z-10 transition-all duration-300"
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ type: "spring", stiffness: 200, damping: 15, delay: i * 0.3 }}
                                />

                                <div className="text-center w-full p-8 rounded-3xl bg-[#F5F7F9] border border-[#013F40]/5 transition-all duration-300 relative z-10">
                                    <h3 className="text-2xl font-bold mb-3 text-[#013F40]">{t(step.titleKey)}</h3>
                                    <p className="text-[#013F40]/70 text-sm md:text-base leading-relaxed">
                                        {t(step.descKey)}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </AnimatedSection>
    );
}

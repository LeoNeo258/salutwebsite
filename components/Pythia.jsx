"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { GlassCard } from "@/components/ui/GlassCard";
import { AtomAnimation } from "@/components/ui/AtomAnimation";
import { useLanguage } from "@/components/LanguageProvider";

const capabilitiesData = [
    {
        titleKey: "pythia.c1.title",
        descKey: "pythia.c1.desc",
    },
    {
        titleKey: "pythia.c2.title",
        descKey: "pythia.c2.desc",
    },
    {
        titleKey: "pythia.c3.title",
        descKey: "pythia.c3.desc",
    },
];

const statsData = [
    { labelKey: "pythia.s1.label", valueKey: "pythia.s1.value", position: "top-[15%] left-0" },
    { labelKey: "pythia.s2.label", valueKey: "pythia.s2.value", position: "bottom-[15%] right-0" },
];

export function Pythia() {
    const { t } = useLanguage();

    return (
        <AnimatedSection id="pythia" className="py-20 px-6 relative z-10">
            <div className="mx-auto max-w-7xl">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left content */}
                    <div>
                        <motion.span
                            className="inline-block py-1 px-3 rounded-full bg-[#7DD15F]/10 text-[#013F40] text-xs font-bold uppercase tracking-widest mb-6 border border-[#7DD15F]/20"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            INTRODUCING PYTHIA
                        </motion.span>
                        <motion.h2
                            className="mt-6 text-4xl md:text-5xl font-bold text-[#013F40]"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                        >
                            Your Store&apos;s AI Helper
                        </motion.h2>
                        <motion.p
                            className="mt-4 text-lg text-[#013F40]/70 leading-relaxed"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            Pythia isn&apos;t just a mascot. It&apos;s a powerful AI engine
                            that analyzes your sales data to make smart decisions for you.
                        </motion.p>

                        <div className="mt-8 space-y-4">
                            {capabilitiesData.map((item, i) => (
                                <motion.div
                                    key={item.titleKey}
                                    className="flex items-start gap-4"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 + i * 0.1 }}
                                >
                                    <div className="w-8 h-8 rounded-full bg-[#7DD15F]/10 flex items-center justify-center shrink-0 mt-0.5">
                                        <Check className="w-4 h-4 text-[#7DD15F]" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-[#013F40]">{t(item.titleKey)}</h4>
                                        <p className="text-[#013F40]/60 text-sm">
                                            {t(item.descKey)}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right — AI orb visual */}
                    <motion.div
                        className="relative h-[400px] flex items-center justify-center"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        {/* Glow backdrop (Optimized) */}
                        <div
                            className="absolute w-64 h-64 rounded-full opacity-60"
                            style={{ background: "radial-gradient(circle, rgba(125,209,95,0.4) 0%, rgba(125,209,95,0) 70%)" }}
                        />

                        <AtomAnimation />

                        {/* Floating stat cards */}
                        {statsData.map((stat, i) => (
                            <motion.div
                                key={stat.labelKey}
                                className={`absolute ${stat.position}`}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5 + i * 0.2 }}
                            >
                                <GlassCard className="p-4" hover={false}>
                                    <span className="text-xs text-[#013F40]/60 block whitespace-nowrap">
                                        {t(stat.labelKey)}
                                    </span>
                                    <strong className="text-2xl font-bold text-[#7DD15F]">
                                        {t(stat.valueKey)}
                                    </strong>
                                </GlassCard>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </AnimatedSection>
    );
}

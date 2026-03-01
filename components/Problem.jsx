"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TrendingUp, Trash2, Zap, Layers } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import Image from "next/image";
import { useLanguage } from "@/components/LanguageProvider";
const features = [
    {
        id: "stock",
        titleKey: "problem.f1.title",
        descKey: "problem.f1.desc",
        icon: TrendingUp,
        color: "bg-blue-100",
        image: "/dashboard.jpg"
    },
    {
        id: "waste",
        titleKey: "problem.f2.title",
        descKey: "problem.f2.desc",
        icon: Trash2,
        color: "bg-red-100",
        image: "/dashboard.jpg"
    },
    {
        id: "efficiency",
        titleKey: "problem.f3.title",
        descKey: "problem.f3.desc",
        icon: Zap,
        color: "bg-yellow-100",
        image: "/dashboard.jpg"
    },
    {
        id: "unified",
        titleKey: "problem.f4.title",
        descKey: "problem.f4.desc",
        icon: Layers,
        color: "bg-purple-100",
        image: "/dashboard.jpg"
    }
];

const AUTO_ROTATE_INTERVAL = 5000; // 5 seconds

export function Problem() {
    const [activeindex, setActiveIndex] = useState(0);
    const [progress, setProgress] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        if (isPaused) return;

        const startTime = Date.now();
        const duration = AUTO_ROTATE_INTERVAL;

        const interval = setInterval(() => {
            const elapsed = Date.now() - startTime;
            const newProgress = Math.min((elapsed / duration) * 100, 100);

            setProgress(newProgress);

            if (elapsed >= duration) {
                // Next slide
                setActiveIndex((prev) => (prev + 1) % features.length);
                setProgress(0);
                clearInterval(interval); // effect will re-run
            }
        }, 50); // Updates every 50ms

        return () => clearInterval(interval);
    }, [activeindex, isPaused]);

    const handleManualClick = (index) => {
        setActiveIndex(index);
        setProgress(0);
    };

    const activeFeature = features[activeindex];
    const { t } = useLanguage();

    return (
        <AnimatedSection id="problem" className="py-20 px-6 relative z-10">
            <div className="mx-auto max-w-7xl">
                {/* Header */}
                <div className="mb-20 grid md:grid-cols-2 gap-12 items-start">
                    <div className="flex flex-col gap-4">
                        <motion.span
                            className="inline-block px-4 py-1.5 rounded-full bg-[#7DD15F]/10 text-[#013F40] text-xs font-bold tracking-widest uppercase w-fit"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            {t("problem.badge")}
                        </motion.span>
                        <motion.h2
                            className="text-4xl md:text-5xl font-bold text-[#013F40] leading-tight text-left"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            {t("problem.title")}
                        </motion.h2>
                    </div>
                    <div className="text-left">
                        <motion.p
                            className="text-xl text-[#013F40]/70 leading-relaxed mb-8"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                        >
                            {t("problem.description")}
                        </motion.p>
                        <motion.a
                            href="#contact"
                            className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white transition-all duration-200 bg-[#013F40] rounded-full hover:bg-[#013F40]/90 hover:shadow-lg hover:-translate-y-0.5"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            {t("problem.btnDemo")}
                        </motion.a>
                    </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    {/* Left: Interactive Content Image */}
                    <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-[#013F40]/10 bg-gray-50 order-2 lg:order-1">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeFeature.id}
                                initial={{ opacity: 0, scale: 1.05 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                className="absolute inset-0"
                            >
                                {/* Placeholder Visual - Replace src with unique screenshots per feature */}
                                <div className={`w-full h-full flex items-center justify-center ${activeFeature.color} relative`}>
                                    {/* Overlay to ensure text readability if needed, or just design aesthetics */}
                                    {/* Using the dashboard image as a placeholder for now */}
                                    <Image
                                        src={activeFeature.image}
                                        alt={activeFeature.title}
                                        fill
                                        className="object-cover object-top"
                                    />

                                    {/* Text Overlay for Placeholder context */}
                                    <div className="absolute inset-0 bg-[#013F40]/10 flex items-center justify-center">
                                        {/* Optional: Add distinctive UI overlays here for each state */}
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Right: Feature List */}
                    <div className="space-y-4 order-1 lg:order-2"
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                    >
                        {features.map((feature, index) => {
                            const isActive = index === activeindex;
                            return (
                                <div
                                    key={feature.id}
                                    onClick={() => handleManualClick(index)}
                                    className={`relative p-6 rounded-2xl cursor-pointer transition-all duration-300 ${isActive
                                        ? "bg-[#F5F7F9]"
                                        : "hover:bg-gray-50 bg-transparent"
                                        }`}
                                >
                                    {/* Progress Bar (Only for active item) */}
                                    {isActive && (
                                        <div className="absolute left-0 bottom-0 h-1 bg-[#013F40]/10 w-full rounded-b-2xl overflow-hidden">
                                            <motion.div
                                                className="h-full bg-[#7DD15F]"
                                                initial={{ width: "0%" }}
                                                animate={{ width: `${progress}%` }}
                                                transition={{ ease: "linear", duration: 0.05 }}
                                            />
                                        </div>
                                    )}

                                    <div className="flex gap-4 items-start">
                                        <div className={`mt-1 p-2 rounded-lg shrink-0 transition-colors ${isActive ? "bg-[#7DD15F]/20 text-[#013F40]" : "bg-gray-100 text-gray-400"
                                            }`}>
                                            <feature.icon size={24} />
                                        </div>
                                        <div>
                                            <h3 className={`text-xl font-bold mb-2 ${isActive ? "text-[#013F40]" : "text-[#013F40]/60"
                                                }`}>
                                                {t(feature.titleKey)}
                                            </h3>
                                            <AnimatePresence>
                                                {isActive && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: "auto", opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        className="overflow-hidden"
                                                    >
                                                        <p className="text-[#013F40]/70 leading-relaxed pb-2">
                                                            {t(feature.descKey)}
                                                        </p>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </AnimatedSection>
    );
}

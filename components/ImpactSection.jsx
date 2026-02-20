"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { cn } from "@/lib/utils";

const stats = [
    {
        label: "ROI",
        value: "384%",
        description: "Average return on investment within the first year of switching to Salut! from legacy systems."
    },
    {
        label: "Waste Reduction",
        value: "35%",
        description: "Minimize spoilage with AI-powered demand forecasting and auto-replenishment."
    },
    {
        label: "Hours Saved",
        value: "1,500+",
        description: "Hours reclaimed annually per store by automating inventory, scheduling, and purchasing."
    },
    {
        label: "Payback",
        value: "< 6 mo",
        description: "Most independent grocers see full system payback in under six months."
    }
];

export function ImpactSection() {
    return (
        <AnimatedSection id="impact" className="py-24 px-6 relative z-10 bg-[#013F40]">
            <div className="mx-auto max-w-7xl">
                {/* Header */}
                <div className="flex flex-col lg:flex-row items-start justify-between gap-8 mb-16">
                    <div className="max-w-3xl">
                        <motion.blockquote
                            className="text-4xl md:text-5xl font-medium text-white mb-6 italic border-l-4 border-[#7DD15F] pl-6 tracking-tight leading-none"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            "It&apos;s like adding 15 full-time employees."
                        </motion.blockquote>
                        <motion.p
                            className="text-lg text-white/70 leading-relaxed"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                        >
                            According to internal data, Salut saves the average independent supermarket over 1,500 hours per year, and delivers industry-leading ROI by cutting waste and optimizing labor.
                        </motion.p>
                    </div>
                    <motion.div
                        className="pt-2"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <a
                            href="#cta"
                            className="inline-flex items-center px-8 py-4 rounded-full bg-white text-[#013F40] text-lg font-bold hover:bg-gray-100 transition-all shadow-md hover:scale-[1.02]"
                        >
                            Get Started <ArrowRight className="ml-2 w-5 h-5" />
                        </a>
                    </motion.div>
                </div>

                {/* Divider */}
                <hr className="border-white/10 mb-16" />

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            className="relative"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 + (i * 0.1) }}
                        >
                            {/* Vertical Line for Desktop (except last item) */}
                            {i !== stats.length - 1 && (
                                <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-px bg-white/10 translate-x-4" />
                            )}

                            <span className="text-sm font-bold uppercase tracking-wider text-[#7DD15F] mb-4 block">
                                {stat.label}
                            </span>
                            <div className="text-5xl md:text-6xl font-medium text-white mb-4 tracking-tight">
                                {stat.value}
                            </div>
                            <p className="text-white/70 leading-relaxed text-sm pr-4">
                                {stat.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Footer note removed */}
            </div>
        </AnimatedSection>
    );
}

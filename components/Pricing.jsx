"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const features = [
    "Predictive Ordering",
    "Inventory Auto-Replenishment",
    "Waste Reduction Dashboard",
    "Smart Shelf Placement"
];

export function Pricing() {
    return (
        <AnimatedSection id="pricing" className="py-20 px-6 relative z-10">
            <div className="mx-auto max-w-4xl text-center">
                <motion.span
                    className="inline-block py-1 px-3 rounded-full bg-[#7DD15F]/10 text-[#013F40] text-xs font-bold uppercase tracking-widest mb-6 border border-[#7DD15F]/20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    SIMPLE PRICING
                </motion.span>
                <motion.h2
                    className="mt-4 text-4xl md:text-5xl font-bold text-[#013F40]"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                >
                    One plan, everything included.
                </motion.h2>

                <motion.div
                    className="mt-12 mx-auto max-w-md bg-white rounded-3xl p-10 shadow-xl border border-[#013F40]/5 relative overflow-hidden"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    {/* Glowing effect */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#7DD15F] to-transparent opacity-50" />
                    <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#7DD15F]/10 blur-3xl rounded-full pointer-events-none" />

                    <div className="text-[#013F40] text-lg font-medium mb-2">Monthly Subscription</div>
                    <div className="flex items-baseline justify-center gap-1 text-[#013F40]">
                        <span className="text-5xl font-bold">€19.99</span>
                        <span className="text-lg opacity-60">/mo</span>
                    </div>
                    <p className="text-sm text-[#013F40]/60 mt-4 mb-8">
                        No hidden fees. Cancel anytime.
                    </p>

                    <div className="space-y-4 text-left mb-10">
                        {features.map((feature) => (
                            <div key={feature} className="flex items-center gap-3">
                                <div className="w-5 h-5 rounded-full bg-[#7DD15F]/20 flex items-center justify-center shrink-0">
                                    <Check className="w-3 h-3 text-[#013F40]" />
                                </div>
                                <span className="text-[#013F40]/80 font-medium">{feature}</span>
                            </div>
                        ))}
                    </div>

                    <a
                        href="#contact"
                        className="block w-full py-4 rounded-xl text-center bg-[#013F40] text-white font-bold text-lg hover:bg-[#013F40]/90 transition-all shadow-lg hover:scale-[1.02]"
                    >
                        Start Free Trial
                    </a>
                </motion.div>
            </div>
        </AnimatedSection>
    );
}

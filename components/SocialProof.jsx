"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { GlassCard } from "@/components/ui/GlassCard";

const logos = [
    "Supermercados Paco",
    "Fresh & Local",
    "Mercado Central",
    "BioStore Spain",
    "La Tienda Verde",
];

const testimonials = [
    {
        quote:
            "Since switching to Salut!, our waste has dropped by 40% and margins are up. Pythia tells us exactly what to order.",
        name: "Antonio Rodriguez",
        role: "Owner, Supermercados Paco",
    },
    {
        quote:
            "The setup was incredibly fast. We were running the new POS in one day. The staff loves how easy it is.",
        name: "Maria Garcia",
        role: "Manager, Fresh & Local",
    },
];

export function SocialProof() {
    return (
        <AnimatedSection id="social-proof" className="py-20 px-6 relative z-10">
            <div className="mx-auto max-w-7xl text-center">
                <motion.span
                    className="text-sm font-medium uppercase tracking-wider text-[#7DD15F]"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Social Proof
                </motion.span>
                <motion.h2
                    className="mt-4 text-4xl md:text-5xl font-bold text-[#013F40]"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                >
                    Trusted by Independent Grocers
                </motion.h2>

                {/* Logo strip */}
                <motion.div
                    className="mt-12 flex flex-wrap justify-center gap-8"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    {logos.map((logo) => (
                        <div
                            key={logo}
                            className="px-6 py-3 rounded-xl bg-white border border-[#013F40]/10 text-[#013F40]/60 font-medium text-sm"
                        >
                            {logo}
                        </div>
                    ))}
                </motion.div>

                {/* Testimonials */}
                <div className="mt-16 grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={t.name}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 + i * 0.1 }}
                        >
                            <GlassCard className="text-left h-full">
                                <p className="text-lg text-[var(--text-secondary)] leading-relaxed italic mb-6">
                                    &ldquo;{t.quote}&rdquo;
                                </p>
                                <div>
                                    <strong className="block text-[var(--text-primary)]">
                                        {t.name}
                                    </strong>
                                    <span className="text-sm text-[var(--text-muted)]">
                                        {t.role}
                                    </span>
                                </div>
                            </GlassCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </AnimatedSection>
    );
}

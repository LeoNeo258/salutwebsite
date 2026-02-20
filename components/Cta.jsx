"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function Cta() {
    return (
        <AnimatedSection id="cta" className="py-20 px-6 relative z-10">
            <div className="mx-auto max-w-7xl text-center">
                <motion.h2
                    className="text-4xl md:text-6xl font-bold text-[#013F40]"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Ready to Modernize?
                </motion.h2>
                <motion.p
                    className="mt-4 text-xl text-[#013F40]/70"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                >
                    Join over 500+ independent supermarkets using Salut!
                </motion.p>

                <motion.div
                    className="mt-10"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    <motion.a
                        href="#"
                        className="inline-flex items-center px-10 py-5 rounded-full bg-[#013F40] text-white text-xl font-bold shadow-lg shadow-[#013F40]/20 hover:shadow-xl hover:bg-[#013F40]/90 transition-all"
                        whileHover={{
                            scale: 1.05,
                        }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Get Free Demo
                    </motion.a>
                </motion.div>

                <motion.p
                    className="mt-4 text-sm text-[var(--text-muted)]"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                >
                    No credit card required • 14-day free trial
                </motion.p>
            </div>
        </AnimatedSection>
    );
}

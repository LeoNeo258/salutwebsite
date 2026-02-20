"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const nodes = [
    { label: "POS", angle: 0 },
    { label: "Inventory", angle: 72 },
    { label: "Purchasing", angle: 144 },
    { label: "Analytics", angle: 216 },
    { label: "Staff", angle: 288 },
];

export function Solution() {
    return (
        <AnimatedSection id="solution" className="py-20 px-6 relative z-10">
            <div className="mx-auto max-w-7xl text-center">
                <motion.span
                    className="text-sm font-medium uppercase tracking-wider text-[#7DD15F]"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    The Solution
                </motion.span>
                <motion.h2
                    className="mt-4 text-4xl md:text-6xl font-bold text-[#013F40]"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                >
                    The All-in-One Solution
                </motion.h2>
                <motion.p
                    className="mt-4 text-lg md:text-xl text-[#013F40]/70 max-w-2xl mx-auto leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    Salut! combines everything you need to run your supermarket into one
                    easy-to-use platform. No more spreadsheets, no more disconnected
                    systems.
                </motion.p>

                {/* Network visualization */}
                <motion.div
                    className="mt-12 relative mx-auto w-[300px] h-[300px] md:w-[400px] md:h-[400px]"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                >
                    {/* Central hub */}
                    <div className="absolute inset-0 flex items-center justify-center z-10">
                        <motion.div
                            className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-[#7DD15F] flex items-center justify-center"
                            animate={{
                                boxShadow: [
                                    "0 0 30px rgba(125,209,95,0.3)",
                                    "0 0 60px rgba(125,209,95,0.5)",
                                    "0 0 30px rgba(125,209,95,0.3)",
                                ],
                            }}
                            transition={{ duration: 3, repeat: Infinity }}
                        >
                            <span className="text-white text-xl md:text-2xl font-bold">
                                Salut!
                            </span>
                        </motion.div>
                    </div>

                    {/* Orbiting ring */}
                    <motion.div
                        className="absolute inset-0"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                    >
                        {nodes.map((node) => {
                            const radius = 130;
                            const rad = (node.angle * Math.PI) / 180;
                            const x = Math.cos(rad) * radius;
                            const y = Math.sin(rad) * radius;

                            return (
                                <div
                                    key={node.label}
                                    className="absolute top-1/2 left-1/2"
                                    style={{
                                        transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                                    }}
                                >
                                    <motion.div
                                        className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[var(--glass-bg)] backdrop-blur-xl border border-[var(--border-subtle)] flex items-center justify-center"
                                        animate={{ rotate: -360 }}
                                        transition={{
                                            duration: 60,
                                            repeat: Infinity,
                                            ease: "linear",
                                        }}
                                        whileHover={{
                                            scale: 1.15,
                                            borderColor: "rgba(212,233,76,0.5)",
                                        }}
                                    >
                                        <span className="text-xs md:text-sm font-semibold text-[var(--text-primary)]">
                                            {node.label}
                                        </span>
                                    </motion.div>
                                </div>
                            );
                        })}
                    </motion.div>

                    {/* Connecting lines (visual circle) */}
                    <div className="absolute inset-[15%] rounded-full border border-dashed border-[var(--border-subtle)]" />
                </motion.div>
            </div>
        </AnimatedSection>
    );
}

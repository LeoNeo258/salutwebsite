"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Shield, Lock, FileCheck, Server, Key, Eye } from "lucide-react";

const securityFeatures = [
    {
        title: "Advanced Data Encryption",
        description: "End-to-end encryption, and hardened infrastructure to protect sensitive information.",
        icon: Lock
    },
    {
        title: "Access control",
        description: "Advanced access control systems, ensure your data stays secure — and always remains yours.",
        icon: Eye
    },
    {
        title: "Secure Architecture",
        description: "Cloud-native infrastructure designed for high availability, performance, and enterprise-grade protection.",
        icon: Server
    }
];

// Compliance Badges Data
const complianceBadges = [
    "GDPR", "SOC 2", "ISO/IEC 27001", "CASA Tier 2", "CCPA", "CPRA", "EU–US DPF", "PCI DSS"
];

const ShieldVisual = () => (
    <div className="relative w-full aspect-square max-w-md mx-auto flex items-center justify-center">
        {/* Abstract radiant background */}
        <div className="absolute inset-0 bg-[#7DD15F]/10 blur-[100px] rounded-full mix-blend-multiply" />
        <div className="absolute inset-4 bg-[#013F40]/5 blur-[60px] rounded-full mix-blend-multiply" />

        {/* Radiating lines (SVG) */}
        <motion.svg
            viewBox="0 0 200 200"
            className="absolute inset-0 w-full h-full opacity-30"
            animate={{ rotate: 360 }}
            transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
        >
            {[...Array(12)].map((_, i) => (
                <line
                    key={i}
                    x1="100" y1="100" x2="100" y2="10"
                    stroke="#013F40"
                    strokeWidth="0.5"
                    strokeDasharray="4 6"
                    transform={`rotate(${i * 30} 100 100)`}
                />
            ))}
            {/* Concentric rings */}
            <circle cx="100" cy="100" r="40" fill="none" stroke="#013F40" strokeWidth="0.5" strokeDasharray="2 4" opacity="0.5" />
            <circle cx="100" cy="100" r="70" fill="none" stroke="#013F40" strokeWidth="0.5" strokeDasharray="2 4" opacity="0.3" />
        </motion.svg>

        {/* Core Shield */}
        <div className="relative z-10 w-48 h-48 bg-white/90 backdrop-blur-xl rounded-[2rem] border border-[#013F40]/10 shadow-2xl flex items-center justify-center overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-[#7DD15F]/20 via-transparent to-transparent opacity-50" />

            <motion.div
                animate={{ y: [-4, 4, -4] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
                <Shield className="w-20 h-20 text-[#013F40]" strokeWidth={1} />
            </motion.div>

            {/* Inner glow line scanning */}
            <motion.div
                className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#7DD15F] to-transparent blur-[1px] opacity-60"
                animate={{ top: ["-10%", "110%", "-10%"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            />
        </div>

        {/* Floating element 1 */}
        <motion.div
            className="absolute top-[15%] right-[15%] w-14 h-14 bg-white rounded-2xl shadow-xl border border-[#013F40]/5 flex items-center justify-center text-[#013F40]"
            animate={{ y: [0, -12, 0], x: [0, 8, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
            <Key className="w-6 h-6" strokeWidth={1.5} />
            <div className="absolute inset-0 border border-[#7DD15F]/20 rounded-2xl scale-110 opacity-50" />
        </motion.div>

        {/* Floating element 2 */}
        <motion.div
            className="absolute bottom-[20%] left-[10%] w-16 h-16 bg-[#013F40] rounded-2xl shadow-xl border border-[#013F40]/5 flex items-center justify-center text-[#7DD15F]"
            animate={{ y: [0, 15, 0], x: [0, -10, 0], rotate: [0, -5, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
            <FileCheck className="w-7 h-7" strokeWidth={1.5} />
            <div className="absolute inset-0 border border-[#7DD15F]/20 rounded-2xl scale-110 opacity-30" />
        </motion.div>
    </div>
);

export function SecuritySection() {
    return (
        <AnimatedSection id="security" className="py-24 px-6 relative z-10 overflow-hidden">
            <div className="mx-auto max-w-7xl">

                {/* Top Section: Hero & Visual */}
                <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
                    <div className="flex flex-col items-start text-left">
                        <motion.span
                            className="inline-block py-1 px-3 rounded-full bg-[#7DD15F]/10 text-[#013F40] text-xs font-bold uppercase tracking-widest mb-6 border border-[#7DD15F]/20"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            SECURITY
                        </motion.span>
                        <motion.h2
                            className="text-4xl md:text-5xl font-bold mb-6 text-[#013F40] leading-tight"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                        >
                            Secure your data 24/7
                        </motion.h2>
                        <motion.p
                            className="text-lg text-[#013F40]/70 max-w-xl leading-relaxed"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            Our ERP built to meet global compliance standards and protect your data at every stage
                        </motion.p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                    >
                        <ShieldVisual />
                    </motion.div>
                </div>

                {/* Middle Section: Compliance Badges */}
                {/* Middle Section: Feature Cards */}
                <div className="grid md:grid-cols-3 gap-8 mb-24">
                    {securityFeatures.map((feature, i) => (
                        <motion.div
                            key={feature.title}
                            className="group p-8 rounded-3xl bg-white/60 backdrop-blur-sm border border-[#013F40]/5 hover:shadow-xl hover:border-[#7DD15F]/20 transition-all duration-300 relative overflow-hidden"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 + i * 0.1 }}
                        >
                            {/* Subtle hover gradient */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[#7DD15F]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative z-10">
                                <div className="w-14 h-14 rounded-2xl bg-[#013F40]/5 flex items-center justify-center mb-6 group-hover:bg-[#7DD15F]/10 transition-colors duration-300 group-hover:scale-110 transform">
                                    <feature.icon className="w-7 h-7 text-[#013F40] group-hover:text-[#7DD15F] transition-colors duration-300" strokeWidth={1.5} />
                                </div>

                                <h3 className="text-xl font-bold text-[#013F40] mb-3 group-hover:text-[#013F40] transition-colors">
                                    {feature.title}
                                </h3>

                                <p className="text-[#013F40]/70 leading-relaxed text-sm lg:text-base">
                                    {feature.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Section: Compliance Badges */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                >
                    <div className="text-center mb-8 text-[11px] font-bold uppercase tracking-[0.2em] text-[#013F40]/50">
                        Certified & Compliant With Global Standards
                    </div>
                    <div className="flex flex-wrap justify-center gap-4 lg:gap-6">
                        {complianceBadges.map((badge, i) => (
                            <motion.div
                                key={badge}
                                className="px-5 py-3 rounded-xl bg-white/50 backdrop-blur-sm border border-[#013F40]/5 text-[#013F40]/80 text-sm font-semibold flex items-center gap-2 hover:bg-white/80 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 group cursor-default"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.6 + i * 0.05 }}
                            >
                                <Shield className="w-4 h-4 text-[#013F40]/40 group-hover:text-[#7DD15F] transition-colors" strokeWidth={2} />
                                {badge}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

            </div>
        </AnimatedSection>
    );
}

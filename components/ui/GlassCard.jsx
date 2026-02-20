"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function GlassCard({ children, className, hover = true, ...props }) {
    return (
        <motion.div
            className={cn(
                "rounded-2xl border border-[var(--border-subtle)] bg-[var(--glass-bg)] backdrop-blur-xl p-8 transition-all duration-500",
                className
            )}
            whileHover={
                hover
                    ? {
                        y: -5,
                        scale: 1.02,
                        backgroundColor: "var(--glass-hover)",
                        borderColor: "var(--border-hover)",
                    }
                    : undefined
            }
            {...props}
        >
            {children}
        </motion.div>
    );
}

"use client";

import { motion } from "framer-motion";

export function BackgroundEffects() {
    return (
        <>
            {/* Dot grid */}
            <div className="dot-grid" />

            {/* Animated gradient blobs - Light Theme */}
            <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden" style={{ transform: "translateZ(0)" }}>
                <motion.div
                    className="absolute top-[30%] right-[5%] w-[500px] h-[500px] rounded-full opacity-30"
                    style={{ background: "radial-gradient(circle, rgba(1,63,64,0.08) 0%, rgba(1,63,64,0) 70%)" }}
                    animate={{
                        scale: [1.1, 0.9, 1.1],
                        rotate: [0, -90, 0],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                />
                <motion.div
                    className="absolute bottom-[0%] left-[20%] w-[800px] h-[800px] rounded-full opacity-40"
                    style={{ background: "radial-gradient(circle, rgba(232,235,239,0.8) 0%, rgba(232,235,239,0) 70%)" }}
                    animate={{
                        scale: [0.95, 1.05, 0.95],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            </div>
        </>
    );
}

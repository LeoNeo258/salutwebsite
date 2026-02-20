"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export function BackgroundEffects() {
    const { scrollYProgress } = useScroll();
    const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
    const y3 = useTransform(scrollYProgress, [0, 1], [0, -100]);

    return (
        <>
            {/* Dot grid */}
            <div className="dot-grid" />

            {/* Animated gradient blobs - Light Theme */}
            <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
                <motion.div
                    className="absolute top-[30%] right-[5%] w-[500px] h-[500px] rounded-full bg-[#013F40] opacity-5 blur-3xl"
                    style={{ y: y2 }}
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
                    className="absolute bottom-[0%] left-[20%] w-[800px] h-[800px] rounded-full bg-[#E8EBEF] opacity-60 blur-3xl"
                    style={{ y: y3 }}
                    animate={{
                        scale: [0.95, 1.05, 0.95],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            </div >
        </>
    );
}

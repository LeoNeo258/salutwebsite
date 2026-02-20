"use client";

import { motion } from "framer-motion";

export function AtomAnimation() {
    return (
        <div className="relative w-80 h-80 flex items-center justify-center">
            {/* Nucleus */}
            <motion.div
                className="absolute w-20 h-20 rounded-full bg-gradient-to-br from-[#7DD15F] to-[#013F40] z-20"
                style={{
                    boxShadow: "0 0 40px rgba(125,209,95,0.5)"
                }}
                animate={{
                    scale: [1, 1.1, 1],
                    boxShadow: [
                        "0 0 30px rgba(125,209,95,0.4)",
                        "0 0 60px rgba(125,209,95,0.7)",
                        "0 0 30px rgba(125,209,95,0.4)",
                    ]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Electron Rings */}
            <div className="absolute inset-0">
                <ElectronOrbit rotate={0} delay={0} />
                <ElectronOrbit rotate={60} delay={0.5} />
                <ElectronOrbit rotate={120} delay={1} />
            </div>
        </div>
    );
}

function ElectronOrbit({ rotate, delay }) {
    return (
        <div
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            style={{ transform: `rotate(${rotate}deg)` }}
        >
            {/* Orbit Path (Visual) */}
            <div className="w-[100%] h-[35%] border border-[#013F40]/30 rounded-[100%] absolute" />

            {/* Rotating Container for Electron */}
            {/* To make it move in an ellipse, we can animate X and Y with sine/cosine phases */}
            <motion.div
                className="absolute w-4 h-4 bg-[#7DD15F] rounded-full shadow-[0_0_15px_#7DD15F] z-10"
                animate={{
                    x: [150, 0, -150, 0, 150], // Width / 2 roughly (adjusted for container size)
                    y: [0, 50, 0, -50, 0],   // Height / 2 roughly
                    scale: [1, 1.2, 1, 0.8, 1], // Perspective depth effect
                    opacity: [1, 1, 1, 0.5, 1], // Hide slightly when behind
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear",
                    delay: delay,
                    times: [0, 0.25, 0.5, 0.75, 1]
                }}
                style={{
                    // Center correction handled by absolute positioning
                }}
            />
        </div>
    );
}

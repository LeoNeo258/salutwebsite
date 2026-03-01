"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Play } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { useLanguage } from "@/components/LanguageProvider";

export function Hero() {
    const { t } = useLanguage();
    const { scrollY } = useScroll();
    // Scale image from 0.8 to 1.0. Setting origin at the top makes it expand gracefully.
    const scale = useTransform(scrollY, [0, 800], [0.8, 1.0]);
    const opacity = useTransform(scrollY, [0, 800], [1, 0.4]);

    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlayFullscreen = () => {
        if (videoRef.current) {
            videoRef.current.muted = false;
            videoRef.current.play();
            setIsPlaying(true);

            if (videoRef.current.requestFullscreen) {
                videoRef.current.requestFullscreen();
            } else if (videoRef.current.webkitRequestFullscreen) {
                videoRef.current.webkitRequestFullscreen();
            } else if (videoRef.current.msRequestFullscreen) {
                videoRef.current.msRequestFullscreen();
            }
        }
    };

    return (
        <AnimatedSection
            id="hero"
            className="relative min-h-screen flex items-center pt-44 pb-20 px-6 overflow-clip"
        >
            {/* MagicUI-style Background Gradient */}
            <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(ellipse_60%_50%at_50%_45%,rgba(125,209,95,0.15),rgba(255,255,255,0))]" />

            <div className="mx-auto max-w-7xl w-full text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-[#7DD15F]/10 text-[#013F40] text-sm font-medium mb-6 border border-[#7DD15F]/20">
                        {t("hero.badge")}
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6 text-[#013F40]">
                        {t("hero.titleLine1")} <br className="hidden lg:block" />
                        <span className="text-[#7DD15F]">{t("hero.titleLine2")}</span>
                    </h1>
                    <p className="text-xl text-[#013F40]/70 max-w-2xl mx-auto mb-10 leading-relaxed">
                        {t("hero.description1")}
                        <span className="text-[#013F40] font-medium">{t("hero.description2")}</span>
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href="#contact"
                            className="inline-flex items-center px-8 py-4 rounded-full bg-[#013F40] text-white text-lg font-semibold shadow-lg shadow-[#013F40]/20 hover:shadow-xl hover:bg-[#013F40]/90 transition-all duration-300 hover:scale-105 active:scale-95"
                        >
                            {t("hero.btnStart")} <ArrowRight className="ml-2 w-5 h-5" />
                        </a>
                        <a
                            href="#features"
                            className="inline-flex items-center px-8 py-4 rounded-full bg-white text-[#013F40] border border-[#013F40]/10 text-lg font-semibold hover:bg-gray-50 transition-all duration-300 hover:scale-105 active:scale-95"
                        >
                            {t("hero.btnFeatures")}
                        </a>
                    </div>
                </motion.div>

                {/* Dashboard Preview */}
                <motion.div
                    className="mt-28 relative z-10"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    <motion.div
                        className="relative rounded-2xl overflow-hidden border border-[#013F40]/10 shadow-2xl bg-white origin-top group"
                        style={{ scale, opacity }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent pointer-events-none z-10" />
                        <video
                            ref={videoRef}
                            className="w-full h-auto block"
                            poster="/dashboard.jpg"
                            playsInline
                            controls={isPlaying}
                            onEnded={() => setIsPlaying(false)}
                            onPause={() => setIsPlaying(false)}
                            onPlay={() => setIsPlaying(true)}
                        >
                            <source src="/demo-video.mp4" type="video/mp4" />
                            <source src="/demo-video.webm" type="video/webm" />
                            Your browser does not support the video tag.
                        </video>

                        {!isPlaying && (
                            <div
                                className="absolute inset-0 z-20 flex items-center justify-center bg-black/5 hover:bg-black/20 transition-colors cursor-pointer"
                                onClick={handlePlayFullscreen}
                            >
                                <motion.div
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="w-24 h-24 bg-white/95 rounded-full flex items-center justify-center shadow-2xl text-[#013F40] transition-colors hover:bg-[#7DD15F] hover:text-white"
                                >
                                    <Play className="w-10 h-10 ml-2" fill="currentColor" />
                                </motion.div>
                            </div>
                        )}
                    </motion.div>
                </motion.div>
            </div>
        </AnimatedSection>
    );
}

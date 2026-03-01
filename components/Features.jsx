"use client";

import { motion } from "framer-motion";
import {
    TrendingUp,
    ShoppingCart,
    Package,
    BarChart3,
    ArrowRight,
    AlertCircle,
    CheckCircle2,
    FileText
} from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/components/LanguageProvider";

// --- Abstract UI Components for Mocks ---

const DemandForecastMock = () => (
    <div className="w-full h-full p-6 flex flex-col justify-end">
        <div className="bg-white/95 rounded-xl p-4 shadow-sm border border-white/40">
            <div className="flex justify-between items-end h-24 gap-2">
                {[40, 65, 55, 80, 70, 90, 85].map((h, i) => (
                    <div key={i} className="w-full bg-gradient-to-t from-[#7DD15F]/20 to-[#7DD15F] rounded-t-sm" style={{ height: `${h}%` }} />
                ))}
            </div>
            <div className="mt-3 flex gap-2 items-center text-[10px] text-[#013F40]/60 font-medium">
                <div className="w-2 h-2 rounded-full bg-[#7DD15F]" />
                <span>Predicted Demand</span>
            </div>
        </div>
    </div>
);

const SupplierAutomationMock = () => (
    <div className="w-full h-full p-6 flex flex-col justify-center">
        <div className="bg-white/95 rounded-xl p-4 shadow-sm border border-white/40 space-y-3">
            {[1, 2, 3].map((_, i) => (
                <div key={i} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/60 flex items-center justify-center shrink-0">
                        <FileText size={14} className="text-[#013F40]/40" />
                    </div>
                    <div className="flex-1 space-y-1.5">
                        <div className="h-2 w-2/3 bg-[#013F40]/10 rounded-full" />
                        <div className="h-1.5 w-1/2 bg-[#013F40]/5 rounded-full" />
                    </div>
                    <div className="w-16 h-6 rounded-md bg-[#013F40]/5 border border-[#013F40]/10" />
                </div>
            ))}
        </div>
    </div>
);

const InventoryControlMock = () => (
    <div className="w-full h-full p-6 flex flex-col justify-center">
        <div className="bg-white/95 rounded-xl overflow-hidden shadow-sm border border-white/40">
            <div className="px-4 py-3 border-b border-[#013F40]/5 flex gap-2">
                <div className="w-2 h-2 rounded-full bg-red-400" />
                <div className="w-2 h-2 rounded-full bg-yellow-400" />
                <div className="w-2 h-2 rounded-full bg-green-400" />
            </div>
            <div className="p-4 space-y-3">
                <div className="flex justify-between items-center bg-white/60 p-2 rounded-lg border border-red-100">
                    <span className="text-xs font-semibold text-[#013F40]/80">Milk (1L)</span>
                    <span className="text-[10px] font-bold text-red-500 bg-red-50 px-2 py-0.5 rounded-full flex items-center gap-1">
                        <AlertCircle size={10} /> Low Stock
                    </span>
                </div>
                <div className="flex justify-between items-center bg-white/40 p-2 rounded-lg">
                    <span className="text-xs font-semibold text-[#013F40]/60">Bread</span>
                    <span className="text-[10px] font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded-full flex items-center gap-1">
                        <CheckCircle2 size={10} /> In Stock
                    </span>
                </div>
            </div>
        </div>
    </div>
);

const BusinessIntelligenceMock = () => (
    <div className="w-full h-full p-6 flex flex-col justify-center">
        <div className="grid grid-cols-2 gap-3">
            <div className="bg-white/95 rounded-xl p-3 shadow-sm border border-white/40">
                <div className="text-[10px] text-[#013F40]/50 mb-1">Revenue</div>
                <div className="text-lg font-bold text-[#013F40]">€24k</div>
                <div className="mt-2 h-1 w-full bg-[#013F40]/5 rounded-full overflow-hidden">
                    <div className="h-full w-[70%] bg-[#7DD15F]" />
                </div>
            </div>
            <div className="bg-white/95 rounded-xl p-3 shadow-sm border border-white/40">
                <div className="text-[10px] text-[#013F40]/50 mb-1">Margin</div>
                <div className="text-lg font-bold text-[#013F40]">18%</div>
                <div className="mt-2 h-1 w-full bg-[#013F40]/5 rounded-full overflow-hidden">
                    <div className="h-full w-[40%] bg-[#013F40]" />
                </div>
            </div>
            <div className="col-span-2 bg-white/95 rounded-xl p-3 shadow-sm border border-white/40 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#7DD15F]/20 flex items-center justify-center">
                    <TrendingUp size={14} className="text-[#013F40]" />
                </div>
                <div>
                    <div className="text-xs font-bold text-[#013F40]">Growth</div>
                    <div className="text-[10px] text-[#013F40]/50">+12.5% vs last month</div>
                </div>
            </div>
        </div>
    </div>
);


const featuresData = [
    {
        icon: TrendingUp,
        titleKey: "features.f1.title",
        descKey: "features.f1.desc",
        highlightKey: "features.f1.highlight",
        colSpan: "lg:col-span-2",
        mock: DemandForecastMock,
        accent: "bg-blue-50/50"
    },
    {
        icon: ShoppingCart,
        titleKey: "features.f2.title",
        descKey: "features.f2.desc",
        highlightKey: "features.f2.highlight",
        colSpan: "lg:col-span-1",
        mock: SupplierAutomationMock,
        accent: "bg-purple-50/50"
    },
    {
        icon: Package,
        titleKey: "features.f3.title",
        descKey: "features.f3.desc",
        highlightKey: "features.f3.highlight",
        colSpan: "lg:col-span-1",
        mock: InventoryControlMock,
        accent: "bg-red-50/50"
    },
    {
        icon: BarChart3,
        titleKey: "features.f4.title",
        descKey: "features.f4.desc",
        highlightKey: "features.f4.highlight",
        colSpan: "lg:col-span-2",
        mock: BusinessIntelligenceMock,
        accent: "bg-green-50/50"
    },
];

function FeatureCard({ feature, index }) {
    const MockComponent = feature.mock;
    const { t } = useLanguage();

    return (
        <motion.div
            className={cn(
                "rounded-3xl overflow-hidden group hover:shadow-xl transition-shadow transition-colors duration-300 border border-[#013F40]/5 bg-white flex flex-col h-full",
                feature.colSpan
            )}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
        >
            {/* Top: Visual Area (60%) */}
            <div className={cn("h-[240px] md:h-[280px] w-full relative overflow-hidden", feature.accent)}>
                <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent" />
                <MockComponent />

                {/* Highlight Badge */}
                {feature.highlightKey && (
                    <div className="absolute top-4 right-4 bg-white/95 px-3 py-1.5 rounded-full shadow-sm border border-[#013F40]/5">
                        <span className="text-xs font-bold text-[#013F40]">{t(feature.highlightKey)}</span>
                    </div>
                )}
            </div>

            {/* Bottom: Content Area (40%) */}
            <div className="p-8 flex flex-col justify-start flex-1 bg-white relative">
                <div className="w-12 h-12 rounded-xl bg-[#013F40]/5 flex items-center justify-center mb-5 group-hover:bg-[#7DD15F]/20 transition-colors duration-300">
                    <feature.icon className="w-6 h-6 text-[#013F40]" />
                </div>

                <h3 className="text-xl font-bold text-[#013F40] mb-3">
                    {t(feature.titleKey)}
                </h3>

                <p className="text-[#013F40]/70 leading-relaxed text-sm md:text-base">
                    {t(feature.descKey)}
                </p>
            </div>
        </motion.div>
    );
}

export function Features() {
    const { t } = useLanguage();

    return (
        <AnimatedSection id="features" className="py-20 relative z-10">
            <div className="mx-auto max-w-7xl px-6">
                <div className="mb-20 text-center">
                    <motion.h2
                        className="mt-4 text-4xl md:text-6xl font-bold leading-tight text-[#013F40]"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        {t("features.title")}
                    </motion.h2>
                    <motion.p
                        className="mt-6 text-lg text-[#013F40]/70 max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        {t("features.description")}
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {featuresData.map((feature, i) => (
                        <FeatureCard key={feature.titleKey} feature={feature} index={i} />
                    ))}
                </div>
            </div>
        </AnimatedSection>
    );
}

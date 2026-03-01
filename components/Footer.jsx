"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/components/LanguageProvider";

export function Footer() {
    const { t } = useLanguage();

    const footerLinks = {
        [t("footer.product")]: [
            { label: t("nav.home"), href: "#hero" },
            { label: t("nav.about"), href: "#problem" },
            { label: t("nav.features"), href: "#features" },
        ],
        "Product_2": [
            { label: t("nav.pythia"), href: "#pythia" },
            { label: t("nav.price"), href: "#pricing" },
            { label: t("nav.faq"), href: "#faq" },
        ],
        [t("footer.legal")]: [
            { label: t("footer.privacy"), href: "#" },
            { label: t("footer.terms"), href: "#" },
        ],
    };

    return (
        <footer className="border-t border-[var(--border-subtle)] py-12 px-6 relative z-10">
            <div className="mx-auto max-w-7xl">
                <div className="flex flex-col md:flex-row justify-between gap-12 items-start md:items-end w-full">
                    {/* Brand */}
                    <div className="md:w-1/3">
                        <a
                            href="#hero"
                            className="inline-block hover:opacity-80 transition-opacity"
                        >
                            <img src="/logo-full.png" alt="Salut Logo" className="h-16 w-auto" />
                        </a>
                        <p className="mt-4 text-sm text-[#013F40]/60 leading-relaxed max-w-xs">
                            {t("footer.slogan")}
                        </p>
                    </div>

                    {/* Link columns container */}
                    <div className="md:w-2/3 grid grid-cols-2 lg:grid-cols-4 gap-8 justify-end w-full">
                        {/* Empty Column for spacing */}
                        <div className="hidden lg:block"></div>

                        {Object.entries(footerLinks).map(([key, links]) => {
                            // Only show title for the first product column and Legal
                            const showTitle = key === t("footer.product") || key === t("footer.legal");

                            return (
                                <div key={key} className="text-left w-full">
                                    {showTitle ? (
                                        <h4 className="font-semibold text-sm uppercase tracking-wider text-[#013F40]/40 mb-4 h-5">
                                            {key}
                                        </h4>
                                    ) : (
                                        // Empty spacer to align links
                                        <div className="mb-4 h-5"></div>
                                    )}
                                    <ul className="space-y-3">
                                        {links.map((link) => (
                                            <li key={link.label}>
                                                <a
                                                    href={link.href}
                                                    className="text-[#013F40]/70 hover:text-[#7DD15F] transition-colors duration-300 font-medium whitespace-nowrap"
                                                >
                                                    {link.label}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="mt-12 pt-6 border-t border-[#013F40]/10 text-center">
                    <p className="text-xs text-[#013F40]/40">
                        {t("footer.rights").replace('{year}', new Date().getFullYear().toString())}
                    </p>
                </div>
            </div>
        </footer>
    );
}

"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import ContactForm from "@/components/ui/ContactForm";

export function ContactSection() {
    return (
        <AnimatedSection id="contact" className="py-20 px-6 relative z-10">
            <div className="mx-auto max-w-4xl bg-white/50 backdrop-blur-sm rounded-[3rem] p-8 md:p-12 border border-[#013F40]/5 shadow-sm">
                <ContactForm />
            </div>
        </AnimatedSection>
    );
}

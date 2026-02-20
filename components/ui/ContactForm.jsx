"use client";

import React, { useState } from "react";
import { User, Mail, Send, Phone, MessageCircle, Copy, Check } from "lucide-react";

export default function ContactForm() {
    const [copiedPhone, setCopiedPhone] = useState(false);
    const [copiedEmail, setCopiedEmail] = useState(false);

    const handleCopy = (text, type) => {
        navigator.clipboard.writeText(text);
        if (type === 'phone') {
            setCopiedPhone(true);
            setTimeout(() => setCopiedPhone(false), 2000);
        } else {
            setCopiedEmail(true);
            setTimeout(() => setCopiedEmail(false), 2000);
        }
    };

    return (
        <div className="flex flex-col items-center text-sm text-[#013F40]">
            <p className="inline-block py-1 px-3 rounded-full bg-[#7DD15F]/10 text-[#013F40] text-xs font-bold uppercase tracking-widest mb-6 border border-[#7DD15F]/20 mx-auto block w-max">
                CONTACT US
            </p>
            <h1 className="text-4xl font-bold py-4 text-center text-[#013F40]">Let&apos;s Get In Touch.</h1>

            <p className="max-md:text-sm text-[#013F40]/70 pb-6 text-center max-w-lg">
                Fill out the form below or use our quick contacts to reach out directly.
            </p>

            {/* Quick Action Cards */}
            <div className="flex justify-center gap-4 w-full max-w-md pb-8 px-4">
                {/* WhatsApp */}
                <a
                    href="https://wa.me/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center p-4 bg-white/60 backdrop-blur-sm border border-[#013F40]/10 rounded-2xl flex-1 hover:border-[#7DD15F]/50 hover:bg-[#7DD15F]/5 hover:shadow-md transition-all group"
                >
                    <MessageCircle className="w-6 h-6 text-[#013F40]/60 group-hover:text-[#25D366] mb-2 transition-colors" />
                    <span className="font-semibold text-xs text-[#013F40]">WhatsApp</span>
                </a>

                {/* Phone */}
                <button
                    type="button"
                    onClick={() => handleCopy('+34 000 000 000', 'phone')}
                    className="flex flex-col items-center justify-center p-4 bg-white/60 backdrop-blur-sm border border-[#013F40]/10 rounded-2xl flex-1 hover:border-[#7DD15F]/50 hover:bg-[#7DD15F]/5 hover:shadow-md transition-all group"
                >
                    {copiedPhone ? (
                        <Check className="w-6 h-6 text-[#7DD15F] mb-2" />
                    ) : (
                        <Phone className="w-6 h-6 text-[#013F40]/60 group-hover:text-[#013F40] mb-2 transition-colors" />
                    )}
                    <span className="font-semibold text-xs text-[#013F40]">{copiedPhone ? 'Copied!' : 'Phone'}</span>
                </button>

                {/* Email */}
                <button
                    type="button"
                    onClick={() => handleCopy('hola@salutmercado.com', 'email')}
                    className="flex flex-col items-center justify-center p-4 bg-white/60 backdrop-blur-sm border border-[#013F40]/10 rounded-2xl flex-1 hover:border-[#7DD15F]/50 hover:bg-[#7DD15F]/5 hover:shadow-md transition-all group"
                >
                    {copiedEmail ? (
                        <Check className="w-6 h-6 text-[#7DD15F] mb-2" />
                    ) : (
                        <Mail className="w-6 h-6 text-[#013F40]/60 group-hover:text-[#013F40] mb-2 transition-colors" />
                    )}
                    <span className="font-semibold text-xs text-[#013F40]">{copiedEmail ? 'Copied!' : 'Email'}</span>
                </button>
            </div>

            <div className="flex items-center w-full max-w-md px-4 mb-8">
                <div className="h-px bg-[#013F40]/10 flex-1" />
                <span className="px-4 text-xs font-medium text-[#013F40]/40 uppercase tracking-wider">Or send a message</span>
                <div className="h-px bg-[#013F40]/10 flex-1" />
            </div>

            <form className="max-w-md w-full px-4 flex flex-col items-center">
                <div className="w-full text-left">
                    <label htmlFor="name" className="font-medium">Full Name</label>
                    <div className="flex items-center mt-2 mb-4 h-12 pl-4 border border-[#013F40]/10 rounded-full focus-within:ring-2 focus-within:ring-[#7DD15F] focus-within:border-[#7DD15F] bg-white transition-all overflow-hidden shadow-sm">
                        <User className="w-5 h-5 text-[#013F40]/50" />
                        <input type="text" className="h-full px-4 w-full outline-none bg-transparent placeholder-[#013F40]/30" placeholder="Enter your full name" required />
                    </div>

                    <label htmlFor="email-address" className="font-medium mt-4">Email Address</label>
                    <div className="flex items-center mt-2 mb-4 h-12 pl-4 border border-[#013F40]/10 rounded-full focus-within:ring-2 focus-within:ring-[#7DD15F] focus-within:border-[#7DD15F] bg-white transition-all overflow-hidden shadow-sm">
                        <Mail className="w-5 h-5 text-[#013F40]/50" />
                        <input type="email" className="h-full px-4 w-full outline-none bg-transparent placeholder-[#013F40]/30" placeholder="Enter your email address" required />
                    </div>

                    <label htmlFor="message" className="font-medium mt-4">Message</label>
                    <textarea rows="4" className="w-full mt-2 p-4 bg-white border border-[#013F40]/10 rounded-3xl resize-none outline-none focus:ring-2 focus:ring-[#7DD15F] focus:border-[#7DD15F] transition-all shadow-sm placeholder-[#013F40]/30" placeholder="Enter your message" required></textarea>
                </div>

                <button type="submit" className="flex items-center justify-center gap-2 mt-8 bg-[#013F40] hover:bg-[#013F40]/90 text-white font-bold py-3.5 w-full rounded-full transition shadow-lg hover:shadow-[#013F40]/20 hover:scale-[1.02] active:scale-[0.98]">
                    Submit Form
                    <Send className="w-5 h-5" />
                </button>
            </form>
        </div>
    );
}

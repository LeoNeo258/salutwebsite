"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { translations } from "@/lib/translations";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
    const [language, setLanguage] = useState("EN");

    // Optional: could persist to localStorage here
    useEffect(() => {
        const savedLang = localStorage.getItem("preferred-language");
        if (savedLang === "EN" || savedLang === "ES") {
            setLanguage(savedLang);
        }
    }, []);

    const handleSetLanguage = (lang) => {
        setLanguage(lang);
        localStorage.setItem("preferred-language", lang);
    };

    const t = (key) => {
        const keys = key.split(".");
        let value = translations[language];

        for (const k of keys) {
            if (value === undefined || value === null) break;
            value = value[k];
        }

        return value || key; // fallback to key if missing
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    return useContext(LanguageContext);
}

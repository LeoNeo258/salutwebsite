"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function AnimatedSection({ children, className, delay = 0, ...props }) {
    return (
        <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay, ease: "easeOut" }}
            className={cn(className)}
            {...props}
        >
            {children}
        </motion.section>
    );
}

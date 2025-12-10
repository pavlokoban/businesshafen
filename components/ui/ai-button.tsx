"use client";

import { motion } from "framer-motion";
import { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

interface AIButtonProps extends ComponentPropsWithoutRef<typeof motion.button> {
  variant?: "primary" | "dark" | "outline" | "ghost";
}

export function AIButton({
  children,
  className,
  variant = "primary",
  ...props
}: AIButtonProps) {
  const base =
    "relative inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 select-none cursor-pointer";

  const variants = {
    // Используем брендовый неон
    primary:
      "bg-brand text-white shadow-[0_0_20px_rgba(0,241,118,0.4)] hover:bg-brand-light hover:text-white",

    // Чёрная кнопка специально для тёмного фона (твоя ситуация!)
    dark:
      "bg-black text-brand border border-brand/40 hover:bg-brand hover:text-black hover:shadow-[0_0_25px_rgba(0,241,118,0.6)]",

    outline:
      "border border-brand text-brand hover:bg-brand/10 hover:text-white",

    ghost:
      "text-brand hover:bg-brand/10 hover:text-black",
  };

  return (
    <motion.button
      type="button"
      whileHover={{ scale: 1.07 }}
      whileTap={{ scale: 0.95 }}
      className={cn(base, variants[variant], className)}
      {...props}
    >
      {children}
    </motion.button>
  );
}

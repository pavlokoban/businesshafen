"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function ScrollFade({ children }: { children: React.ReactNode }) {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return <motion.div style={{ opacity }}>{children}</motion.div>;
}

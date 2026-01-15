"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Container from "@/components/Container";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { OrbitingCircles } from "@/components/ui/orbiting-circles";
import { AIButton } from "@/components/ui/ai-button";
import ScrambledText from "@/components/ui/ScrambledText";
import { gsap } from "gsap";

function generateRealisticGraph(points: number) {
  const values: number[] = [];
  let current = 0.18;

  for (let i = 0; i < points; i++) {
    const progress = i / (points - 1);

    // базовый тренд
    let trend = 0.002;

    // после середины — явное ускорение роста
    if (progress > 0.5) {
      trend += (progress - 0.5) * 0.112;
    }

    // шум
    const noise = (Math.random() - 0.5) * 0.33;

    // редкие провалы (реальные данные)
    const dip =
      Math.random() < 0.07
        ? -(Math.random() * 0.1)
        : 0;

    current += trend + noise + dip;

    // ограничения
    current = Math.max(0.12, current);
    current = Math.min(0.98, current);

    values.push(current);
  }

  return values;
}

/* ------------------------------------------------------------------ */

const GRAPH_POINTS = 150;
const GRAPH_HEIGHT = 260;

function AIIcon({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/80 backdrop-blur-md border border-black/10">
      <Image src={src} alt={alt} width={24} height={24} />
    </div>
  );
}

export default function Hero() {
const titleRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    if (!titleRef.current) return;

    const lines = titleRef.current.querySelectorAll(".line");

    gsap.to(lines, {
      y: "0%",
      duration: 0.6,
      ease: "power3.out",
      stagger: 0.08,
      delay: 0.15,
    });
  }, []);

  const { scrollYProgress } = useScroll();

  // параллакс точек
  const dotsY = useTransform(scrollYProgress, [0, 1], [0, -60]);

  // генерация графика (один раз)
  const graph = useMemo(
    () => generateRealisticGraph(GRAPH_POINTS),
    []
  );

  // задержка появления орбит
  const [showOrbit, setShowOrbit] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setShowOrbit(true), 2200);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative overflow-hidden hero-dots pt-32 pb-24 lg:min-h-screen flex items-center">

{/* PURPLE AMBIENT GLOW */}
<div
  className="
    pointer-events-none
    absolute bottom-[-180px] left-1/2 -translate-x-1/2
    w-[160%] h-[60%]
    bg-[#8b7cff]/35
    blur-[200px]
    opacity-90
    z-[1]
  "
/>

      {/* DOTS PARALLAX */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ y: dotsY }}
      />

      {/* GRAPH */}
      <svg
        viewBox="0 0 1200 300"
        preserveAspectRatio="none"
        className="absolute bottom-0 left-0 w-full h-[45%]"
      >
        <defs>
          <linearGradient id="fadeUp" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0%" stopColor="white" />
            <stop offset="70%" stopColor="white" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>

        {graph.map((v, i) => {
          const x = (i / (GRAPH_POINTS - 1)) * 1200;
          const h = v * GRAPH_HEIGHT;

          return (
            <motion.line
              key={i}
              x1={x}
              x2={x}
              y1={300}
              y2={300 - h}
              stroke="rgba(0,0,0,0.16)"
              strokeWidth="2"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{
                delay: i * 0.015,
                duration: 0.45,
                ease: "easeOut",
              }}
              style={{
                maskImage: "url(#fadeUp)",
                WebkitMaskImage: "url(#fadeUp)",
              }}
            />
          );
        })}
      </svg>

      <Container>
        <div className="grid gap-16 md:grid-cols-2 items-center relative z-10">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.6 }}
          >
            <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium mb-4 border border-brand/40 text-brand">
              KI-freundliche WordPress-Websites & AIO / SEO 🇩🇪
            </span>

            {/* <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tight mb-6">
              Moderne, KI-optimierte Websites
              <span className="block text-brand">in Deutschland</span>
            </h1> */}
           
<h1
 ref={titleRef}
  className="hero-title text-4xl lg:text-7xl font-black leading-[1.05]"
  data-reveal
>
  <span className="line-mask">
    <span className="line">Moderne, KI-optimierte Websites</span>
  </span>
  <span className="line-mask">
    <span className="line">in Deutschland</span>
  </span>
</h1>

            <p className="text-lg mb-10 max-w-xl text-black">
              Wir entwickeln schnelle, strukturierte und AI-freundliche Websites,
              perfekt vorbereitet für Google AI Overviews und moderne Suchsysteme.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/kontaktdaten">
                <AIButton style={{ background: "#00F176", color: "black" }}>
                  Jetzt starten
                </AIButton>
              </Link>
              <Link href="/#services">
                <AIButton variant="outline">Unsere Leistungen</AIButton>
              </Link>
            </div>

            <ScrambledText
              className="mt-6"
              radius={100}
              duration={1.2}
              speed={0.5}
              scrambleChars="!@#$%^&*()_+-=[]{};:,.<>/?"
            >
              ✓ WordPress ✓ Technische SEO ✓ KI-optimierte Struktur
            </ScrambledText>
          </motion.div>

          {/* RIGHT — ORBITS */}
          {showOrbit && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="relative"
            >
              <div className="absolute -inset-8 bg-brand/20 blur-3xl rounded-full" />
  {/* <div className="absolute inset-0 rounded-full bg-[#00f176]/25 blur-[120px] opacity-80" /> */}
     
              <div className="relative h-[520px] w-[520px] mx-auto">
              


  {/* GREEN AI GLOW */}
  <div
    className="
      absolute inset-0 rounded-full
      bg-[#00f176]/25
      blur-[120px]
      opacity-70
    "
  />

  {/* PURPLE AMBIENT GLOW  */}
  <div
    className="
      absolute -bottom-24 left-1/2 -translate-x-1/2
      w-[140%] h-[60%]
      bg-[#8b7cff]/30
      blur-[160px]
      opacity-80
      rounded-full
    "
  />

  {/* ORBIT CONTENT */}
  <div className="relative z-10 h-full w-full">
    {/* CENTER */}
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-24 h-24 rounded-full border border-black/10" />
    </div>

    {/* ORBITS */}
    <OrbitingCircles radius={260} iconSize={36} duration={22}>
      <AIIcon src="/ai/chatgpt.svg" alt="ChatGPT" />
      <AIIcon src="/ai/gemini.svg" alt="Gemini" />
      <AIIcon src="/ai/grok.svg" alt="Grok" />
      <AIIcon src="/ai/chatgpt.svg" alt="Notion" />
      <AIIcon src="/ai/grok.svg" alt="Drive" />
    </OrbitingCircles>

    <OrbitingCircles radius={120} reverse iconSize={30} duration={18}>
      <AIIcon src="/ai/chatgpt.svg" alt="ChatGPT" />
      <AIIcon src="/ai/gemini.svg" alt="Gemini" />
      <AIIcon src="/ai/grok.svg" alt="Notion" />
      <AIIcon src="/ai/gemini.svg" alt="Grok" />
    </OrbitingCircles>
  </div>
</div>
            </motion.div>
          )}

        </div>
      </Container>
    </section>
  );
}

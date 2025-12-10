// "use client";

// import { motion, useScroll, useTransform } from "framer-motion";
// import { useEffect, useState } from "react";
// import { AIButton } from "@/components/ui/ai-button";
// import Container from "@/components/Container";
// import BackgroundAnimation from "../BackgroundAnimation";
// import BackgroundAnimationWrapper from "../BackgroundAnimationWrapper";

// export default function Hero() {
//   // Глобальный скролл (без ref) – так эффект будет точно заметен
//   const { scrollY } = useScroll();

//   // Параллакс для фона (двигается медленнее)
//   const bgY = useTransform(scrollY, [0, 600], [0, -120]);

//   // Параллакс для правого блока (двигается чуть быстрее)
//   const rightY = useTransform(scrollY, [0, 600], [0, 80]);

//   // Небольшой guard, чтобы не было дерганий на сервере
//   const [mounted, setMounted] = useState(false);
//   useEffect(() => setMounted(true), []);
//   if (!mounted) {
//     return null;
//   }

//   return (
//     <section className="relative overflow-hidden bg-black pt-32 pb-20 min-h-[auto] lg:min-h-screen flex items-center">
//       {/* Animated background */}
// <BackgroundAnimationWrapper />

// {/* Elliptical gradients */}
// <div className="absolute inset-0 z-0 pointer-events-none">
//   {/* warm glow */}
//   <div className="
//     absolute top-1/3 left-1/2 -translate-x-1/2
//     w-[120vw] h-[60vh]
//     bg-[radial-gradient(ellipse_at_center,rgba(230,220,160,0.28),transparent_75%)]
//     blur-3xl
//   " />

//   {/* purple lower glow */}
//   <div className="
//     absolute bottom-0 left-1/2 -translate-x-1/2
//     w-[140vw] h-[60vh]
//     bg-[radial-gradient(ellipse_at_center,rgba(120,60,255,0.35),transparent_70%)]
//     blur-[45px]
//   " />

//   {/* vertical line */}
//   <div className="
//     absolute top-[12%] left-1/2 -translate-x-1/2
//     w-[4px] h-[55vh]
//     bg-[linear-gradient(to_bottom,rgba(160,120,255,0.6),rgba(160,120,255,0.05))]
//     blur-sm
//   " />
// </div>


//       {/* Параллакс-слой фона */}
//       <motion.div
//         style={{ y: bgY }}
//         className="absolute inset-0 bg-gradient-to-b from-brand/10 via-transparent to-black opacity-40 pointer-events-none"
//       />

//       <Container>
//         <motion.div
//           initial="hidden"
//           animate="visible"
//           variants={{
//             visible: { transition: { staggerChildren: 0.15 } },
//             hidden: {},
//           }}
//           className="grid gap-12 md:grid-cols-2 items-center relative z-10"
//         >
//           {/* LEFT column */}
//           <motion.div
//             variants={{
//               hidden: { opacity: 0, y: 25 },
//               visible: { opacity: 1, y: 0 },
//             }}
//             transition={{ duration: 0.7 }}
//           >
//             <span className="inline-flex items-center rounded-full border border-brand/40 bg-black/40 backdrop-blur px-4 py-1.5 text-xs font-medium text-brand mb-5" style={{borderColor: "#ffffffff", color: "#ffffffff"}}>
//               KI-freundliche WordPress-Websites & SEO
//             </span>

//             <h1 className="text-4xl sm:text-5xl lg:text-7xl font-display font-semibold tracking-tight mb-6 leading-[1.1]">
//               Moderne, KI-optimierte Websites{" "}
//               <span className="block text-brand drop-shadow-brand">
//                 in Deutschland
//               </span>
//             </h1>

//             <p className="text-slate-300 text-lg leading-relaxed mb-10 max-w-xl">
//               Wir entwickeln schnelle, strukturierte und AI-freundliche Websites,
//               die perfekt für Google AI Overviews und moderne Suchsysteme
//               vorbereitet sind.
//             </p>

//             {/* CTA Buttons */}
//             <div className="flex flex-wrap gap-4">
//               <AIButton variant="primary" style={{background: "#00F176", color: "black"}}>Jetzt starten</AIButton>
//               <AIButton variant="outline">Unsere Leistungen</AIButton>
//             </div>

//             {/* Feature Pills */}
//             <motion.div
//               className="mt-10 flex flex-wrap gap-3"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.4, duration: 0.7 }}
//             >
//               {[
//                 "WordPress-Spezialisierung",
//                 "Technische SEO & Performance",
//                 "KI-optimierte Content-Struktur",
//               ].map((label) => (
//                 <span
//                   key={label}
//                   className="
//                     px-4 py-1.5
//                     text-sm font-medium
//                     rounded-full
//                     bg-brand/10 text-brand 
//                     border border-brand/30
//                     hover:bg-brand/20 hover:border-brand/60 
//                     transition-all
//                     shadow-[0_0_16px_rgba(0,241,118,0.35)]
//                   "
//                   style={{color: "rgb(157 131 228)", borderColor: "rgb(157 131 228)"}}
//                 >
//                   {label}
//                 </span>
//               ))}
//             </motion.div>
//           </motion.div>

//           {/* RIGHT column – parallax block */}
//           <motion.div
//             style={{ y: rightY }}
//             variants={{
//               hidden: { opacity: 0, y: 25 },
//               visible: { opacity: 1, y: 0 },
//             }}
//             transition={{ duration: 0.7 }}
//             className="relative"
//           >
//             {/* Neon glow */}
//             <div className="absolute -inset-8 bg-brand/25 blur-3xl rounded-full opacity-40" />

//             <motion.div
//               initial={{ opacity: 0, scale: 0.92 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.6, delay: 0.25 }}
//               className="relative rounded-2xl bg-black/60 border-brand/20 p-6 shadow-[0_0_40px_rgba(0,241,118,0.18)] backdrop-blur-xl"
//             >
//               <div className="flex items-center justify-between mb-4">
//                 <span className="text-xs font-medium text-slate-400">
//                   Live-Auszug Ihrer Website
//                 </span>
//                 <span className="rounded-full bg-brand/10 px-3 py-0.5 text-[11px] font-semibold text-brand">
//                   KI-freundlich
//                 </span>
//               </div>

//               <div className="space-y-4">
//                 {[
//                   {
//                     title: "Struktur",
//                     tag: "OK",
//                     desc: "Klare Headings, semantische Abschnitte, logische Verlinkung.",
//                   },
//                   {
//                     title: "Performance",
//                     tag: "90+",
//                     desc: "Optimierte Ladezeiten und moderne Lighthouse-Werte.",
//                   },
//                   {
//                     title: "SEO & AI",
//                     tag: "bereit",
//                     desc: "Strukturierte Daten, Meta-Tags und AI-freundliche Inhalte.",
//                   },
//                 ].map((item) => (
//                   <motion.div
//                     key={item.title}
//                     initial={{ opacity: 0, x: 30 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{ duration: 0.6 }}
//                     className="rounded-xl bg-black/40  border-slate-700 px-4 py-3"
//                   >
//                     <div className="flex justify-between text-[13px] text-slate-400 mb-1">
//                       <span>{item.title}</span>
//                       <span className="text-brand font-semibold">
//                         {item.tag}
//                       </span>
//                     </div>
//                     <p className="text-slate-300 text-sm leading-snug">
//                       {item.desc}
//                     </p>
//                   </motion.div>
//                 ))}
//               </div>
//             </motion.div>
//           </motion.div>
//         </motion.div>
//       </Container>
//     </section>
//   );
// }
"use client";

import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { AIButton } from "@/components/ui/ai-button";
import Container from "@/components/Container";
import BackgroundAnimationWrapper from "@/components/BackgroundAnimationWrapper";
import Link from "next/link";

export default function Hero() {
  /** Scroll-based parallax */
  const { scrollYProgress } = useScroll();
  const bgY = useTransform(scrollYProgress, [0, 1], [0, -40]); // мягкое движение вниз
  const cardY = useTransform(scrollYProgress, [0, 1], [0, 25]); // маленький параллакс карточки

  /** Cursor-based parallax */
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 30, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 30, damping: 20 });

  const parallaxX = useTransform(smoothX, (v) => v / 60); // слабее, премиально
  const parallaxY = useTransform(smoothY, (v) => v / 80);

  function onMouseMove(e: React.MouseEvent) {
    const { innerWidth, innerHeight } = window;
    mouseX.set(e.clientX - innerWidth / 2);
    mouseY.set(e.clientY - innerHeight / 2);
  }

  return (
    <section
      onMouseMove={onMouseMove}
      className="
        relative overflow-hidden bg-black 
        pt-32 pb-20 
        min-h-[auto] 
        lg:min-h-screen 
        flex items-center
      "
    >

{/* Premium AI Gradient Background */}
<div className="absolute inset-0 pointer-events-none z-0">
  {/* Центральное свечение снизу */}
  <div className="absolute bottom-[-20%] left-1/2 -translate-x-1/2 w-[120%] h-[70%]
                  bg-[radial-gradient(ellipse_at_center,_rgba(120,80,255,0.28),_rgba(0,0,0,0))]
                  blur-3xl opacity-80" />

  {/* Мягкая виньетка по краям */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,0,0,0),_rgba(0,0,0,0.35))]" />

  {/* Левый премиальный фиолетовый перелив */}
  <div className="absolute left-[-15%] top-[10%] w-[50%] h-[60%]
                  bg-[radial-gradient(circle,_rgba(140,100,255,0.22),_transparent)]
                  blur-2xl opacity-70" />

  {/* Правый зеленый AI-свечение */}
  <div className="absolute right-[-10%] top-[20%] w-[40%] h-[60%]
                  bg-[radial-gradient(circle,_rgba(0,241,118,0.22),_transparent)]
                  blur-2xl opacity-60" />
</div>



      {/* Animated gradient + JSON background */}
         <motion.div>
        <BackgroundAnimationWrapper />
      </motion.div>

      <Container>
        <div className="grid gap-12 md:grid-cols-2 items-center relative z-10">

          {/* LEFT column */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* Badge */}
            <span
              className="
                inline-flex items-center rounded-full 
                px-3 py-1 text-xs font-medium mb-4
                border border-brand/40 bg-black/40 text-brand
              "
            >
              KI-freundliche WordPress-Websites & AIO / SEO 🇩🇪
            </span>

            {/* H1 */}
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-display font-semibold tracking-tight mb-6 leading-tight">
              Moderne, KI-optimierte Websites
              <span className="block text-brand drop-shadow-brand">
                in Deutschland
              </span>
            </h1>

            {/* Description */}
            <p className="text-slate-300 text-lg leading-relaxed mb-10 max-w-xl">
              Wir entwickeln schnelle, strukturierte und AI-freundliche Websites,
              die perfekt für Google AI Overviews und moderne Suchsysteme
              vorbereitet sind.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
            <Link href="/kontaktdaten">
  <AIButton style={{ background:"#00F176", color:"black" }}>
    Jetzt starten
  </AIButton>
</Link>

<Link href="/#services">
  <AIButton variant="outline">
    Unsere Leistungen
  </AIButton>
</Link>

            </div>

            {/* Bullet tags */}
          
          </motion.div>

          {/* RIGHT column (card) */}
          <motion.div
            style={{ y: cardY, x: parallaxX }}
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* Card glow */}
            <div className="absolute -inset-8 bg-brand/20 blur-3xl rounded-full" />

            {/* Card */}
            <div className="relative rounded-2xl bg-black/60 border-brand/20 p-6 backdrop-blur-xl shadow-[0_0_35px_rgba(0,241,118,0.25)]" style={{background: "#f0f8ff00",
    opacity: "0.9"}}>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-medium text-slate-400">
                  Live-Auszug Ihrer Website
                </span>
                <span className="rounded-full bg-brand/10 px-2 py-0.5 text-[11px] font-semibold text-brand">
                  KI-freundlich
                </span>
              </div>

              <div className="space-y-4">
                {[
                  {
                    title: "Struktur",
                    tag: "OK",
                    desc: "Klare Headings, semantische Abschnitte, logische Verlinkung.",
                  },
                  {
                    title: "Performance",
                    tag: "90+",
                    desc: "Optimierte Ladezeiten und moderne Lighthouse-Werte.",
                  },
                  {
                    title: "SEO & AI",
                    tag: "bereit",
                    desc: "Strukturierte Daten, Meta-Tags und AI-freundliche Inhalte.",
                  },
                ].map((item) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="rounded-xl border-brand/20 bg-black/40 px-4 py-3 backdrop-blur"
                  >
                    <div className="flex justify-between text-[13px] text-slate-400 mb-1">
                      <span>{item.title}</span>
                      <span className="text-brand font-semibold">{item.tag}</span>
                    </div>
                    <p className="text-slate-300 text-sm leading-snug">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>

  <div className="mt-10 flex flex-wrap gap-4 text-sm">
              {[
                "WordPress-Spezialisierung",
                "Technische SEO & Performance",
                "KI-optimierte Content-Struktur",
              ].map((item) => (
                <span
                  key={item}
                  className="
                    px-4 py-1.5 rounded-full
                    bg-brand/10 border-brand/30
                    text-brand text-sm font-medium
                    shadow-[0_0_12px_rgba(0,241,118,0.25)]
                  "
                >
                  {item}
                </span>
              ))}
            </div>

          </motion.div>
        </div>
      </Container>
    </section>
  );
}

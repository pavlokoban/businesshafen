"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";


export default function HeaderNew() {
  const [open, setOpen] = useState(false);

  const { scrollY } = useScroll();
const menuWidth = useTransform(
  scrollY,
  [0, 160],
  [620, 560] // ← 560 вверху, 420 при скролле
);

const springWidth = useSpring(menuWidth, {
  stiffness: 170,
  damping: 16,
  mass: 0.9,
});

// ширина: вверху шире → вниз норм
const menuScaleX = useTransform(scrollY, [0, 160], [1.25, 1]);
const springScaleX = useSpring(menuScaleX, {
  damping: 12,
stiffness: 160,
mass: 0.9,
});


  return (
   <header className="fixed top-6 left-1/2 -translate-x-1/2 z-[200] w-full pointer-events-none">

 {/* Header content */}
  <div
    className="
      container mx-auto px-4
      flex items-center justify-between
      h-[78px] w-full
      pointer-events-auto
    "
  >

  {/* Logo */}
 <Link
  href="/"
  className="
    flex items-center gap-3
    h-[44px] px-4
    rounded-full
    glass-ios
    text-black
    font-display text-sm font-medium
  "
>

      <span className="w-7 h-7 rounded-full bg-green-400 shadow-[0_0_14px_rgba(0,255,150,0.45)]" />
      BusinessHafen
    </Link>

 {/* CENTRAL MENU */}
<div
  className="
    relative hidden md:flex items-center justify-center h-[48px]
    isolate
  "
>
  <motion.div
    style={{ width: springWidth }}
    className="
      absolute
      left-1/2 -translate-x-1/2
      h-full
      rounded-full
      glass-ios
      z-0
    "
  />

  <nav
    className="
      relative z-10
      flex items-center gap-8 px-10 h-full
      mix-blend-difference
    text-neutral-500
    "
  >
    <Link href="/">Webentwicklung</Link>
    <Link href="/aio-seo">AIO / SEO</Link>
    <Link href="/about">Über uns</Link>
    <Link href="/kontakt">Kontakt</Link>
  </nav>
</div>


          {/* CTA */}
    <div className="hidden md:block">
      <Link
        href="/kontakt"
        className="
          bg-gradient-to-r from-[#8a4bff] to-[#5a2eff]
          text-white font-semibold
          px-6 py-3 rounded-full
          shadow-[0_4px_20px_rgba(120,50,255,0.5)]
        "
      >
        Projekt besprechen
      </Link>
    </div>


        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-black"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div
          className="
            md:hidden mt-4 mx-auto max-w-7xl
            bg-white/75 backdrop-blur-3xl
            rounded-[32px] shadow-xl 
            p-6 space-y-6 pointer-events-auto
          "
        >
          <Link href="/" className="block text-black text-lg">Webentwicklung</Link>
          <Link href="/aio-seo" className="block text-black text-lg">AIO / SEO</Link>
          <Link href="/about" className="block text-black text-lg">Über uns</Link>
          <Link href="/kontakt" className="block text-black text-lg">Kontakt</Link>

          <Link
            href="/kontakt"
            className="
              block w-full text-center
              bg-gradient-to-r from-[#8a4bff] to-[#5a2eff]
              text-white font-semibold py-3 rounded-full
            "
          >
            Projekt besprechen
          </Link>
        </div>
      )}
    </header>
  );
}

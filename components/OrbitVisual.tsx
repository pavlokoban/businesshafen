"use client";

import Image from "next/image";
import { OrbitingCircles } from "@/components/ui/orbiting-circles";

function AIIcon({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="
      flex items-center justify-center
      w-10 h-10
      rounded-full
      bg-white/80
      backdrop-blur-md
      border border-black/10
      shadow-sm
    ">
      <Image
        src={src}
        alt={alt}
        width={20}
        height={20}
        draggable={false}
      />
    </div>
  );
}

export function OrbitVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* CENTER GLASS */}
      <div
        className="
          absolute z-10
          w-28 h-28 rounded-full
          bg-white/30
          backdrop-blur-2xl
          border border-white/40
          shadow-[0_10px_40px_rgba(0,0,0,0.08)]
        "
      />

      {/* OUTER ORBIT */}
      <OrbitingCircles radius={160} duration={28}>
        <AIIcon src="/ai/chatgpt.svg" alt="ChatGPT" />
        <AIIcon src="/ai/gemini.svg" alt="Gemini" />
        <AIIcon src="/ai/grok.svg" alt="Grok" />
      </OrbitingCircles>

      {/* INNER ORBIT */}
      <OrbitingCircles radius={100} duration={18} reverse>
        <AIIcon src="/ai/chatgpt.svg" alt="ChatGPT" />
        <AIIcon src="/ai/gemini.svg" alt="Gemini" />
      </OrbitingCircles>
    </div>
  );
}
"use client";
import { useId } from "react";

export default function GlassLens({
  children,
  className = "",
  radius = 999,
}: {
  children: React.ReactNode;
  className?: string;
  radius?: number;
}) {
  const id = useId().replace(/:/g, "");

  return (
    <div className={`glass-lens ${className}`}>
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        <defs>
          <filter id={`lens-${id}`}>
            {/* лёгкое смещение */}
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.015"
              numOctaves="2"
              seed="2"
              result="noise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="18"
              xChannelSelector="R"
              yChannelSelector="G"
            />
            {/* мягкость */}
            <feGaussianBlur stdDeviation="0.6" />
          </filter>
        </defs>
      </svg>

      <div
        className="glass-lens-inner"
        style={{
          filter: `url(#lens-${id})`,
          borderRadius: radius,
        }}
      >
        {children}
      </div>
    </div>
  );
}

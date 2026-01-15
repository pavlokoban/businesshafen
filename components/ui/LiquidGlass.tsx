"use client";

import React, { useId } from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  radius?: number; // px
  strength?: number; // 0..30 примерно
  blur?: number; // 0..2
  frosted?: boolean; // оставляем твой glass-ios стиль
};

export default function LiquidGlass({
  children,
  className = "",
  radius = 999,
  strength = 18,
  blur = 0.6,
  frosted = true,
}: Props) {
  const uid = useId().replace(/:/g, "");
  const filterId = `lg-filter-${uid}`;
  const noiseId = `lg-noise-${uid}`;

  return (
    <div
      className={`lg-wrap ${className}`}
      style={{ borderRadius: radius }}
    >
      {/* SVG FILTER (локальный, уникальный) */}
      <svg
        className="lg-svg"
        aria-hidden="true"
        width="0"
        height="0"
      >
        <filter id={filterId} x="-20%" y="-20%" width="140%" height="140%">
          {/* шум / турбулентность */}
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.012"
            numOctaves="2"
            seed="2"
            result={noiseId}
          >
            {/* лёгкая анимация, чтобы “жидкость” жила */}
            <animate
              attributeName="baseFrequency"
              dur="6s"
              values="0.010;0.014;0.010"
              repeatCount="indefinite"
            />
          </feTurbulence>

          {/* displacement */}
          <feDisplacementMap
            in="SourceGraphic"
            in2={noiseId}
            scale={strength}
            xChannelSelector="R"
            yChannelSelector="G"
            result="disp"
          />

          {/* микросмягчение */}
          <feGaussianBlur in="disp" stdDeviation={blur} result="out" />

          <feComposite in="out" in2="out" operator="over" />
        </filter>
      </svg>

      {/* ФОН-ЛИНЗА: тут backdrop + искажение */}
      <div
        className={`lg-bg ${frosted ? "glass-ios" : ""}`}
        style={{
          borderRadius: radius,
          filter: `url(#${filterId})`,
        }}
      >
        {/* хроматическая каёмка как на скрине */}
        <span className="lg-chroma" style={{ borderRadius: radius }} />
        {/* лёгкий “внутренний бликовый” градиент */}
        <span className="lg-highlight" style={{ borderRadius: radius }} />
      </div>

      {/* КОНТЕНТ: НЕ искажается */}
      <div className="lg-content" style={{ borderRadius: radius }}>
        {children}
      </div>
    </div>
  );
}

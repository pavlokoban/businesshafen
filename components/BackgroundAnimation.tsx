"use client";

import { useEffect, useRef } from "react";
import lottie from "lottie-web";

export default function BackgroundAnimation() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const anim = lottie.loadAnimation({
      container: ref.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
    //  path: ' /animations/mission.json',
    //  path: ' /animations/AI-Brain.json',
    //  path: ' /animations/AI-Animation.json',
    //  path: ' /animations/shape.json',
    //  path: ' /animations/Green.json',
    //  path: ' /animations/sphere.json',
    //  path: ' /animations/Planet-galaxy.json',
    //  path: ' /animations/ai-core.json',
     path: ' /animations/Space-Purple.json',
    //  path: ' /animations/ai_test.json',
    });

    return () => anim.destroy();
  }, []);

  return (
    <div
      ref={ref}
      className="
        absolute top-0 right-0 z-0 
        w-[700px] h-[700px]        /* Mobile size */
        md:w-[1200px] md:h-[1000px]  /* Desktop size */
        pointer-events-none        /* не мешает кликам */


        /* MOBILE: centered */
        left-1/2 -translate-x-1/2

        /* DESKTOP: override to right */
        md:left-auto md:right-0 md:translate-x-0
      "
    />
  );
}

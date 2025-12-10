// "use client";

// import BackgroundAnimation from "./BackgroundAnimation";

// export default function BackgroundAnimationWrapper() {
//   return (
//     <div
//       className="absolute inset-0 z-0 pointer-events-none overflow-hidden"
//       style={{
//         maskImage:
//           "linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%)",
//         WebkitMaskImage:
//           "linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%)",
//         opacity: 0.55,
//       }}
//     >
//       <div className="w-full h-full">
//         <BackgroundAnimation />
//       </div>
//     </div>
//   );
// }
"use client";

import BackgroundAnimation from "./BackgroundAnimation";

export default function BackgroundAnimationWrapper() {
  return (
    <div
      className="absolute inset-0 z-0 pointer-events-none overflow-hidden"
      style={{
        // плавное появление слева + мягкие края справа/слева
        WebkitMaskImage:
          "linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,0.2) 8%, rgba(0,0,0,0.6) 16%, rgba(0,0,0,1) 30%, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%)",
        maskImage:
          "linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,0.2) 8%, rgba(0,0,0,0.6) 16%, rgba(0,0,0,1) 30%, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%)",
        opacity: 0.55,
        
      }}
    >
      <div className="w-full h-full">
        <BackgroundAnimation />
      </div>
    </div>
  );
}

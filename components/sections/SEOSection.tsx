// // components/sections/SEOSection.tsx
// import Container from "@/components/Container";

// export default function SEOSection() {
//   return (
//     <section className="bg-slate-50 py-16">
//       <Container>
//         <div className="grid gap-8 md:grid-cols-2 items-center">
//           <div>
//             <h2 className="text-2xl sm:text-3xl font-semibold mb-3">
//               SEO, das echte Ergebnisse bringt
//             </h2>
//             <p className="text-slate-600 mb-4">
//               Wir kombinieren technische SEO, On-Page-Optimierung und
//               Content-Strukturen, damit Ihre Website dort sichtbar ist, wo Ihre
//               Zielgruppe sucht – in Google, lokalen Suchergebnissen und
//               zunehmend in AI-gestützten Overviews.
//             </p>
//           </div>

//           <div className="grid gap-3 text-sm text-slate-700">
//             <div className="rounded-xl border border-slate-200 bg-white px-4 py-3">
//               • Technische SEO & Crawling-Optimierung
//             </div>
//             <div className="rounded-xl border border-slate-200 bg-white px-4 py-3">
//               • Keyword-Strategie & Content-Strukturen
//             </div>
//             <div className="rounded-xl border border-slate-200 bg-white px-4 py-3">
//               • On-Page-Optimierung & Meta-Daten
//             </div>
//             <div className="rounded-xl border border-slate-200 bg-white px-4 py-3">
//               • Backlinks, Autorität & langfristige Sichtbarkeit
//             </div>
//           </div>
//         </div>
//       </Container>
//     </section>
//   );
// }

import Container from "@/components/Container";

export default function SEOSection() {
  return (
    <section className="py-24 bg-black text-white relative">
      {/* Soft vertical glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-brand/10 to-black pointer-events-none" />

      <Container>
        <div className="max-w-4xl relative z-10">
          <h2 className="text-3xl sm:text-5xl font-display font-semibold mb-6">
            SEO, das echte Ergebnisse liefert
          </h2>

          <p className="text-slate-300 text-lg leading-relaxed mb-12">
            Wir kombinieren technische SEO, Content-Struktur und AI-Optimierung, 
            damit Ihre Website in Google, lokalen Suchergebnissen und 
            insbesondere in AI Overviews sichtbar wird.
          </p>

          <div className="grid sm:grid-cols-2 gap-6">
            {[
              "Technische SEO & Crawling-Optimierung",
              "Keyword-Strategie & Content-Strukturen",
              "On-Page SEO & Meta-Daten",
              "Backlinks, Authority & langfristige Sichtbarkeit",
              "AI Overviews Optimierung (Google)",
              "LLM-freundliche Content-Vorbereitung",
            ].map((item) => (
              <div
                key={item}
                className="p-5 rounded-xl2 border border-slate-800 bg-black/60
                hover:border-brand transition shadow-card hover:shadow-brand"
              >
                <p className="text-slate-200">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

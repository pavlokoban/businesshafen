// // components/sections/KISection.tsx
// import Container from "@/components/Container";

// export default function KISection() {
//   return (
//     <section className="bg-slate-50 py-16">
//       <Container>
//         <div className="grid gap-8 md:grid-cols-2 items-start">
//           <div>
//             <h2 className="text-2xl sm:text-3xl font-semibold mb-3">
//               Warum KI-freundliche Websites entscheidend sind
//             </h2>
//             <p className="text-slate-600 mb-4">
//               Suchmaschinen wie Google kombinieren klassische Ergebnisse mit AI
//               Overviews. Damit Ihre Inhalte dort sichtbar werden, muss Ihre
//               Website strukturiert, semantisch sinnvoll aufgebaut und technisch
//               sauber umgesetzt sein.
//             </p>
//             <p className="text-slate-600 mb-6">
//               Wir entwickeln Websites, die sowohl für Nutzer als auch für
//               KI-Systeme leicht interpretierbar sind – ein klarer Vorteil für
//               Sichtbarkeit und Reichweite.
//             </p>
//           </div>

//           <div className="grid gap-3 text-sm text-slate-700">
//             <div className="rounded-xl border border-slate-200 bg-white px-4 py-3">
//               • Saubere Headings & Informationshierarchie
//             </div>
//             <div className="rounded-xl border border-slate-200 bg-white px-4 py-3">
//               • Strukturierte Daten (Schema.org) für relevante Inhalte
//             </div>
//             <div className="rounded-xl border border-slate-200 bg-white px-4 py-3">
//               • Klar definierte Inhaltsblöcke für LLMs & AI Overviews
//             </div>
//             <div className="rounded-xl border border-slate-200 bg-white px-4 py-3">
//               • Optimierte interne Verlinkung & semantische Navigation
//             </div>
//             <div className="rounded-xl border border-slate-200 bg-white px-4 py-3">
//               • Schnelle Ladezeiten und stabile Core Web Vitals
//             </div>
//           </div>
//         </div>
//       </Container>
//     </section>
//   );
// }

import Container from "@/components/Container";

export default function KISection() {
  return (
    <section className="relative py-24 bg-black text-white overflow-hidden">
      {/* Subtle glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-brand/5 to-black pointer-events-none" />

      <Container>
        <div className="relative z-10 max-w-4xl">
          <h2 className="text-3xl sm:text-5xl font-display font-semibold mb-6">
            Warum KI-freundliche Websites entscheidend sind
          </h2>

          <p className="text-slate-300 text-lg leading-relaxed mb-10">
            Suchmaschinen wie Google nutzen zunehmend KI-Systeme, um Inhalte zu 
            verstehen und in AI Overviews darzustellen. Damit Ihre Website dort 
            erscheint, muss sie logisch strukturiert, semantisch aufgebaut und 
            technisch sauber umgesetzt sein.
          </p>

          <div className="grid sm:grid-cols-2 gap-6">
            {[
              "Saubere Headings & klare Informationshierarchie",
              "Strukturierte Daten (Schema.org) für KI-Modelle",
              "Optimierte interne Verlinkung & Content-Architektur",
              "Stabile Core Web Vitals & Performance",
              "LLM-freundliche Inhaltsblöcke",
              "Semantische Navigation & logische Struktur",
            ].map((item) => (
              <div
                key={item}
                className="p-4 border border-slate-800 bg-black/60 rounded-xl2 
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


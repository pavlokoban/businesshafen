// // components/sections/FeaturesSection.tsx
// import Container from "@/components/Container";

// const features = [
//   {
//     title: "KI-freundliche Struktur",
//     text: "Klare Headings, semantische Abschnitte, strukturierte Inhalte und saubere Informationsarchitektur.",
//   },
//   {
//     title: "Moderne WordPress-Webentwicklung",
//     text: "Maßgeschneiderte, schnelle und sichere Websites mit Fokus auf UX, Skalierbarkeit und Performance.",
//   },
//   {
//     title: "Starke technische SEO",
//     text: "Core Web Vitals, strukturierte Daten, interne Verlinkung und saubere On-Page-Optimierung.",
//   },
//   {
//     title: "Transparente Prozesse",
//     text: "Klare Schritte, ehrliche Beratung und verlässliche Betreuung.",
//   },
// ];

// export default function FeaturesSection() {
//   return (
//     <section className="py-20 bg-slate-900">
//       <Container>
//         <h2 className="text-3xl font-display font-semibold mb-8 text-white">
//           Warum Unternehmen mit uns arbeiten
//         </h2>

//         <p className="text-slate-400 max-w-2xl mb-12">
//           Wir verbinden technisches Know-how, klares Design und eine
//           KI-freundliche Denkweise zu Websites, die langfristig Mehrwert liefern
//           – nicht nur optisch, sondern auch messbar.
//         </p>

//         <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
//           {features.map((f) => (
//             <div
//               key={f.title}
//               className="
//                 bg-slate-800/40 
//                 border border-slate-700 
//                 rounded-xl2 
//                 p-6 
//                 shadow-card 
//                 hover:border-brand 
//                 hover:shadow-brand 
//                 transition
//               "
//             >
//               <h3 className="text-lg font-semibold text-brand mb-2">
//                 {f.title}
//               </h3>
//               <p className="text-slate-300 text-sm leading-relaxed">
//                 {f.text}
//               </p>
//             </div>
//           ))}
//         </div>
//       </Container>
//     </section>
//   );
// }

// // import Container from "@/components/Container";

// // const features = [
// //   {
// //     title: "KI-freundliche Struktur",
// //     text: "Klare Headings, semantische Abschnitte, strukturierte Inhalte und saubere Informationsarchitektur.",
// //   },
// //   {
// //     title: "Moderne WordPress-Webentwicklung",
// //     text: "Maßgeschneiderte, schnelle und sichere Websites mit Fokus auf UX, Skalierbarkeit und Performance.",
// //   },
// //   {
// //     title: "Starke technische SEO",
// //     text: "Core Web Vitals, strukturierte Daten, interne Verlinkung und saubere On-Page-Optimierung.",
// //   },
// //   {
// //     title: "Transparente Prozesse",
// //     text: "Klar definierte Schritte, ehrliche Beratung und verlässliche Kommunikation auf Augenhöhe.",
// //   },
// // ];

// // export default function FeaturesSection() {
// //   return (
// //     <section>
// //       <Container>
// //         <div className="max-w-3xl mb-10">
// //           <h2 className="text-2xl sm:text-3xl font-semibold mb-3">
// //             Warum Unternehmen mit uns arbeiten
// //           </h2>
// //           <p className="text-slate-600">
// //             Wir verbinden technisches Know-how, klares Design und eine
// //             KI-freundliche Denkweise zu Websites, die langfristig Mehrwert
// //             liefern – nicht nur optisch, sondern auch messbar.
// //           </p>
// //         </div>

// //         <div className="grid gap-6 sm:grid-cols-2">
// //           {features.map((f) => (
// //             <div
// //               key={f.title}
// //               className="rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-sm hover:shadow-md transition-shadow"
// //             >
// //               <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
// //               <p className="text-sm text-slate-600 leading-relaxed">
// //                 {f.text}
// //               </p>
// //             </div>
// //           ))}
// //         </div>
// //       </Container>
// //     </section>
// //   );
// // }
import Container from "@/components/Container";

const features = [
  {
    title: "KI-freundliche Struktur",
    text: "Klare Informationsarchitektur, semantische Elemente und strukturierte Daten.",
  },
  {
    title: "Moderne Webentwicklung",
    text: "Sauberer Code, modulare Komponenten, skalierbar und performant.",
  },
  {
    title: "Technische SEO",
    text: "Core Web Vitals, Lighthouse, Crawling, interne Verlinkung und vieles mehr.",
  },
  {
    title: "Transparente Prozesse",
    text: "Klare Kommunikation. Verlässliche Planung. Messbare Ergebnisse.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-24 bg-black text-white">
      <Container>
        <h2 className="text-3xl sm:text-5xl font-display font-semibold mb-6">
          Warum Unternehmen mit uns arbeiten
        </h2>

        <p className="text-slate-300 max-w-2xl mb-12 text-lg">
          Wir vereinen technisches Know-how, UX-Design und AI-Optimierung in
          einer klaren, leistungsstarken Website-Struktur.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="
                p-6 rounded-xl2 border border-slate-800 bg-black/60
                hover:border-brand hover:shadow-brand transition shadow-card
              "
            >
              <h3 className="text-xl font-semibold text-brand mb-2">
                {f.title}
              </h3>
              <p className="text-slate-300 text-sm">{f.text}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

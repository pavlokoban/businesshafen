// // components/sections/CTASection.tsx
// import Container from "@/components/Container";

// export default function CTASection() {
//   return (
//     <section className="pt-8">
//       <Container>
//         <div className="rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-10 sm:px-10 sm:py-12 text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
//           <div>
//             <h2 className="text-2xl sm:text-3xl font-semibold mb-3">
//               Bereit für eine moderne, KI-freundliche Website?
//             </h2>
//             <p className="text-sm sm:text-base text-blue-100 max-w-xl">
//               Lassen Sie uns unverbindlich über Ihr Projekt sprechen. 
//               Wir analysieren Ihre aktuelle Situation und entwickeln 
//               eine klare Strategie für Website, SEO und KI-optimierte Inhalte.
//             </p>
//           </div>

//           <div className="flex flex-col gap-3 w-full md:w-auto">
//             <a
//               href="/kontaktdaten"
//               className="inline-flex items-center justify-center rounded-lg bg-white px-5 py-2.5 text-sm font-medium text-blue-700 shadow-sm hover:bg-blue-50 transition-colors"
//             >
//               Kontakt aufnehmen
//             </a>
//             <span className="text-[11px] text-blue-100">
//               Transparent, unverbindlich & praxisorientiert.
//             </span>
//           </div>
//         </div>
//       </Container>
//     </section>
//   );
// }
import Container from "@/components/Container";

export default function CTASection() {
  return (
    <section className="py-24 bg-black text-white relative">
      <div className="absolute inset-0 bg-gradient-to-b from-brand/10 to-black pointer-events-none" />

      <Container>
        <div className="
          relative z-10 bg-black/60 rounded-2xl p-10 border border-slate-800 
          shadow-card hover:shadow-brand transition backdrop-blur-lg
        ">
          <h2 className="text-3xl sm:text-5xl font-display font-semibold mb-6">
            Bereit für eine moderne, KI-freundliche Website?
          </h2>

          <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-3xl">
            Lassen Sie uns unverbindlich über Ihr Projekt sprechen. Wir analysieren
            Ihre aktuelle Situation und entwickeln eine klare Strategie für
            Website, SEO und KI-optimierte Inhalte.
          </p>

          <a
            href="/kontaktdaten"
            className="
              inline-block px-8 py-4 bg-brand text-black font-semibold 
              rounded-xl2 shadow-brand hover:bg-brand-light transition
            "
          >
            Kontakt aufnehmen
          </a>
        </div>
      </Container>
    </section>
  );
}


// // components/sections/ReferencesSection.tsx
// import Container from "@/components/Container";

// const projects = [
//   {
//     name: "Projekt A – Beratungsunternehmen",
//     text: "Neuentwicklung einer WordPress-Website mit klarer Struktur, SEO-Basis und KI-freundlicher Inhaltsaufbereitung.",
//   },
//   {
//     name: "Projekt B – Dienstleister",
//     text: "Relaunch inkl. Performance-Optimierung, moderner UX und technischer SEO für bessere Sichtbarkeit.",
//   },
// ];

// export default function ReferencesSection() {
//   return (
//     <section>
//       <Container>
//         <div className="flex items-end justify-between gap-4 mb-8">
//           <div>
//             <h2 className="text-2xl sm:text-3xl font-semibold mb-3">
//               Ausgewählte Projekte
//             </h2>
//             <p className="text-slate-600 max-w-xl">
//               Eine kleine Auswahl von Websites, bei denen wir Design,
//               Strukturierung und technische Umsetzung verantwortet haben.
//             </p>
//           </div>
//         </div>

//         <div className="grid gap-6 md:grid-cols-2">
//           {projects.map((p) => (
//             <div
//               key={p.name}
//               className="rounded-2xl border border-slate-200 bg-white/90 p-5 shadow-sm"
//             >
//               <h3 className="text-lg font-semibold mb-2">{p.name}</h3>
//               <p className="text-sm text-slate-600">{p.text}</p>
//             </div>
//           ))}
//         </div>
//       </Container>
//     </section>
//   );
// }
import Container from "@/components/Container";

const projects = [
  {
    name: "Projekt A – Beratungsunternehmen",
    text: "Neuentwicklung einer WordPress-Website mit klarer Struktur, SEO-Basis und KI-freundlicher Inhaltsaufbereitung.",
  },
  {
    name: "Projekt B – Dienstleister",
    text: "Relaunch inkl. Performance-Optimierung, moderner UX und technischer SEO für bessere Sichtbarkeit.",
  }
];

export default function ReferencesSection() {
  return (
    <section className="py-24 bg-black text-white">
      <Container>
        <h2 className="text-3xl sm:text-5xl font-display font-semibold mb-10">
          Ausgewählte Projekte
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((p) => (
            <div
              key={p.name}
              className="p-6 border border-slate-800 rounded-xl2 bg-black/60 
              hover:border-brand transition shadow-card hover:shadow-brand"
            >
              <h3 className="text-xl font-semibold text-brand mb-2">
                {p.name}
              </h3>
              <p className="text-slate-300">{p.text}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

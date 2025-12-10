// // components/sections/ServicesSection.tsx
// import Container from "@/components/Container";

// const services = [
//   {
//     title: "Webentwicklung",
//     text: "Moderne WordPress-Websites mit klarer Struktur, hoher Performance und AI-Optimierung.",
//     link: "/web-development",
//   },
//   {
//     title: "AI SEO & Promotion",
//     text: "SEO-Optimierung, technische Struktur, Content-Architektur und AI Overviews Optimierung.",
//     link: "/seo",
//   },
//   {
//     title: "Betreuung & Wartung",
//     text: "Updates, Sicherheit, Backups und fortlaufende Optimierung.",
//     link: "/services",
//   },
// ];

// export default function ServicesSection() {
//   return (
//     <section id="services" className="py-24 bg-slate-950">
//       <Container>
//         <h2 className="text-3xl font-display font-semibold text-white mb-8">
//           Unsere Leistungen
//         </h2>

//         <p className="text-slate-400 max-w-2xl mb-12">
//           Von der ersten Idee bis zur laufenden Betreuung – wir entwickeln
//           Websites und Online-Auftritte, die zu Ihrer Strategie passen.
//         </p>

//         <div className="grid gap-8 md:grid-cols-3">
//           {services.map((s) => (
//             <a
//               key={s.title}
//               href={s.link}
//               className="
//                 bg-slate-900 
//                 rounded-xl2 
//                 border border-slate-700 
//                 p-6 
//                 hover:border-brand 
//                 hover:shadow-brand 
//                 hover:-translate-y-1 
//                 transition 
//                 block
//               "
//             >
//               <h3 className="text-xl font-semibold text-brand mb-2">
//                 {s.title}
//               </h3>
//               <p className="text-slate-300 text-sm mb-4">{s.text}</p>
//               <span className="text-brand-light text-sm">
//                 Mehr erfahren →
//               </span>
//             </a>
//           ))}
//         </div>
//       </Container>
//     </section>
//   );
// }


// // import Container from "@/components/Container";

// // const services = [
// //   {
// //     title: "Webentwicklung",
// //     text: "Moderne WordPress-Websites mit klarer Struktur, hoher Geschwindigkeit und professionellem Design.",
// //     link: "/web-development",
// //   },
// //   {
// //     title: "SEO & Webseiten-Promotion",
// //     text: "On-Page-Optimierung, technische SEO, Content-Strukturen und bessere Sichtbarkeit in Suchmaschinen.",
// //     link: "/seo",
// //   },
// //   {
// //     title: "Betreuung & Wartung",
// //     text: "Updates, Sicherheit, Backups und laufende Optimierung Ihrer bestehenden Website.",
// //     link: "/services",
// //   },
// // ];

// // export default function ServicesSection() {
// //   return (
// //     <section id="services">
// //       <Container>
// //         <div className="flex items-end justify-between gap-4 mb-8">
// //           <div>
// //             <h2 className="text-2xl sm:text-3xl font-semibold mb-3">
// //               Unsere Leistungen
// //             </h2>
// //             <p className="text-slate-600 max-w-xl">
// //               Von der ersten Idee bis zur laufenden Betreuung – wir entwickeln
// //               Websites und Online-Auftritte, die zu Ihrer Strategie passen.
// //             </p>
// //           </div>
// //         </div>

// //         <div className="grid gap-6 md:grid-cols-3">
// //           {services.map((s) => (
// //             <a
// //               key={s.title}
// //               href={s.link}
// //               className="group rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all"
// //             >
// //               <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-600">
// //                 {s.title}
// //               </h3>
// //               <p className="text-sm text-slate-600 mb-3">{s.text}</p>
// //               <span className="text-sm font-medium text-blue-500 group-hover:text-blue-600">
// //                 Mehr erfahren →
// //               </span>
// //             </a>
// //           ))}
// //         </div>
// //       </Container>
// //     </section>
// //   );
// // }
import Container from "@/components/Container";

const services = [
  {
    title: "Webentwicklung",
    text: "Moderne WordPress-Websites mit klarer Struktur, hoher Performance und AI-Optimierung.",
    link: "/web-development",
  },
  {
    title: "AI SEO & Promotion",
    text: "SEO-Optimierung, technische Struktur, Content-Architektur und AI Overviews Optimierung.",
    link: "/seo",
  },
  {
    title: "Betreuung & Wartung",
    text: "Updates, Sicherheit, Backups und fortlaufende Optimierung.",
    link: "/services",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-24 bg-brand text-black relative">
      {/* Soft shadow on top */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/10 pointer-events-none" />

      <Container>
        <h2 className="text-3xl sm:text-5xl font-display font-semibold mb-6">
          Unsere Leistungen
        </h2>

        <p className="text-black/80 max-w-2xl mb-12 text-lg">
          Wir entwickeln digitale Lösungen, die moderne UX, sauberen Code und
          KI-freundliche Struktur miteinander verbinden.
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {services.map((s) => (
            <a
              key={s.title}
              href={s.link}
              className="
                bg-white shadow-xl rounded-xl2 p-6 border border-black/10
                hover:scale-105 hover:shadow-2xl transition-all duration-300
                hover:border-black
              "
            >
              <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
              <p className="text-black/70 mb-4">{s.text}</p>
              <span className="text-black font-medium underline underline-offset-4">
                Mehr erfahren →
              </span>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}


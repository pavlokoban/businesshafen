// export default function Footer() {
//   return (
//     <footer className="mt-20 py-8 border-t border-gray-200">
//       <div className="container mx-auto flex justify-between">
//         <div>
//           <p className="font-semibold">BusinessHafen © {new Date().getFullYear()}</p>
//           <p className="text-sm text-gray-500">Websites • SEO • KI-optimierte Lösungen</p>
//         </div>

//         <nav className="flex flex-col gap-2 text-sm">
//           <a href="/datenschutz" className="hover:text-blue-600">Datenschutz</a>
//           <a href="/impressum" className="hover:text-blue-600">Impressum</a>
//         </nav>
//       </div>
//     </footer>
//   );
// }
"use client";

import Container from "@/components/Container";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative bg-black text-slate-300 py-20 border-t border-white/10">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid gap-10 md:grid-cols-4"
        >
          {/* LOGO */}
          <div>
            <h3 className="text-brand font-display text-2xl font-semibold mb-4">
              BusinessHafen
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              KI-freundliche Webentwicklung, moderne SEO-Strategien und AI-optimierte Inhalte für Unternehmen in Deutschland.
            </p>
          </div>

          {/* LINKS */}
          <div>
            <h4 className="font-semibold text-white mb-3">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/#services" className="hover:text-brand">Leistungen</Link></li>
              <li><Link href="/web-development" className="hover:text-brand">Webentwicklung</Link></li>
              <li><Link href="/seo" className="hover:text-brand">SEO</Link></li>
              <li><Link href="/about" className="hover:text-brand">Über uns</Link></li>
              <li><Link href="/kontakt" className="hover:text-brand">Kontakt</Link></li>
            </ul>
          </div>

          {/* LEGAL */}
          <div>
            <h4 className="font-semibold text-white mb-3">Rechtliches</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/impressum" className="hover:text-brand">Impressum</Link></li>
              <li><Link href="/datenschutz" className="hover:text-brand">Datenschutz</Link></li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="font-semibold text-white mb-3">Kontakt</h4>
            <p className="text-sm text-slate-400 leading-relaxed">
              Frankfurt am Main, Deutschland<br />
              E-Mail: kontakt@businesshafen.de
            </p>
          </div>
        </motion.div>

        {/* BOTTOM */}
        <div className="mt-10 pt-6 border-t border-white/10 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} BusinessHafen – Alle Rechte vorbehalten.
        </div>
      </Container>
    </footer>
  );
}

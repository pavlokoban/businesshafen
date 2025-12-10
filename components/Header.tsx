"use client";

import Link from "next/link";
import Container from "@/components/Container";
import { AIButton } from "@/components/ui/ai-button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-xl border-b border-white/10">
      <Container>
        <div className="flex items-center justify-between py-4">
          {/* LOGO */}
          <Link href="/" className="text-brand font-display text-xl font-semibold">
            BusinessHafen
          </Link>

          {/* DESKTOP MENU */}
          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-200">
            <Link className="hover:text-brand" href="/#services">Leistungen</Link>
            <Link className="hover:text-brand" href="/web-development">Webentwicklung</Link>
            <Link className="hover:text-brand" href="/seo">AIO / SEO</Link>
            <Link className="hover:text-brand" href="/about">Über uns</Link>
            <Link className="hover:text-brand" href="/kontaktdaten">Kontakt</Link>

            <AIButton className="ml-4">Projekt besprechen</AIButton>
          </nav>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden text-white"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* MOBILE ONLY */}
        {open && (
          <div className="md:hidden py-4 space-y-4 text-slate-200 text-sm">
            <Link className="block hover:text-brand" href="/#services">Leistungen</Link>
            <Link className="block hover:text-brand" href="/web-development">Webentwicklung</Link>
            <Link className="block hover:text-brand" href="/seo">SEO</Link>
            <Link className="block hover:text-brand" href="/about">Über uns</Link>
            <Link className="block hover:text-brand" href="/kontaktdaten">Kontakt</Link>

            <AIButton className="w-full">Projekt besprechen</AIButton>
          </div>
        )}
      </Container>
    </header>
  );
}
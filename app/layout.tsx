import './globals.css'
import Header from "@/components/Header";
import CookieBanner from "@/components/CookieBanner";
import Footer from "@/components/Footer";
import { Funnel_Display } from 'next/font/google';


export const metadata = {
  title: "BusinessHafen – KI-freundliche WordPress-Websites & AI SEO | Frankfurt am Main",
  description:
    "BusinessHafen spezialisiert sich auf KI-freundliche WordPress-Webentwicklung, technische SEO und AI-Optimierung für Unternehmen in Deutschland und Frankfurt am Main.",
  openGraph: {
    title: "BusinessHafen – KI-freundliche WordPress-Websites & AI SEO",
    description:
      "Webentwicklung, SEO und AI-optimierte Websites für bessere Sichtbarkeit in Google & AI Overviews.",
    url: "https://businesshafen.vercel.app/",
    siteName: "BusinessHafen",
    locale: "de_DE",
    type: "website",
  },
};


const funnel = Funnel_Display({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
});


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" className={`${funnel}`}>
      <body className="font-base bg-slate-950 text-white">
        <Header />
          <main>{children}</main>
          <CookieBanner />
        <Footer />
      </body>
    </html>
  )
}

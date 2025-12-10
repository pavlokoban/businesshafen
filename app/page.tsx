// app/page.tsx
import Hero from "@/components/sections/Hero";
import FeaturesSection from "@/components/sections/FeaturesSection";
import ServicesSection from "@/components/sections/ServicesSection";
import KISection from "@/components/sections/KISection";
import WebDevSection from "@/components/sections/WebDevSection";
import SEOSection from "@/components/sections/SEOSection";
import ReferencesSection from "@/components/sections/ReferencesSection";
import CTASection from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    // <div className="space-y-24 pb-16">
          <div className="pb-16">
      <Hero />
      <FeaturesSection />
      <ServicesSection />
      <KISection />
      <WebDevSection />
      <SEOSection />
      <ReferencesSection />
      <CTASection />
    </div>
  );
}

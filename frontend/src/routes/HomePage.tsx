import { BenefitsSection } from "../components/landing/BenefitsSection";
import { ContactCtaSection } from "../components/landing/ContactCtaSection";
import { FaqSection } from "../components/landing/FaqSection";
import { FutureDemoSection } from "../components/landing/FutureDemoSection";
import { HeroSection } from "../components/landing/HeroSection";
import { ProcessSection } from "../components/landing/ProcessSection";
import { ServicesSection } from "../components/landing/ServicesSection";

export function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <BenefitsSection />
      <ProcessSection />
      <FutureDemoSection />
      <FaqSection />
      <ContactCtaSection />
    </>
  );
}

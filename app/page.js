import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { Steps } from "@/components/Steps";
import { Features } from "@/components/Features";
import { SecuritySection } from "@/components/SecuritySection";
import { Pythia } from "@/components/Pythia";
import { ImpactSection } from "@/components/ImpactSection";
import { Pricing } from "@/components/Pricing";
import { Faq } from "@/components/Faq";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { BackgroundEffects } from "@/components/BackgroundEffects";

export default function Home() {
  return (
    <>
      <BackgroundEffects />
      <Header />
      <main className="relative z-10">
        <Hero />
        <Problem />
        <Features />
        <Steps />
        <SecuritySection />
        <Pythia />
        <ImpactSection />
        <Pricing />
        <Faq />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

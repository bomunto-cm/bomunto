import Footer from "@/components/common/Footer";
import { HeroHighlightDemo } from "@/components/common/HeroHighlightDemo";
import { AvisClient } from "@/components/sections/avisClient";

import CTASection from "@/components/sections/ctaSection";
import FAQs from "@/components/sections/FAQs";
import HeroSection from "@/components/sections/HeroSection";
import ServiceSection from "@/components/sections/ServiceSection";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="mt-24 md:32 lg:mt-2 px-4 md:px-[9px]">
        <HeroSection />
        <section id="nos-expertises">
          <ServiceSection />
        </section>

        <section id="realizations">
          <AvisClient />
        </section>
        <section id="faqs">
          <FAQs />
        </section>
        <CTASection />
        <Footer />
      </div>
    </main>
  );
}

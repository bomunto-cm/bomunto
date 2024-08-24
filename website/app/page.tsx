import Footer from "@/components/common/Footer";
import { HeroHighlightDemo } from "@/components/common/HeroHighlightDemo";
import NavBar from "@/components/common/NavBar";
import HeroSection from "@/components/sections/HeroSection";
import ServiceSection from "@/components/sections/ServiceSection";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <NavBar />
      <div className="mt-24 md:32 lg:mt-2 px-4 md:px-[9px]">
        <HeroSection />
        <ServiceSection />
        <Footer />
      </div>

    </main>
  );
}

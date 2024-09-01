"use client";

import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import { AnimatedTooltipPreview } from "../common/AnimatedToolTipPreview";


const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

export default function HeroSection() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white">
      <div className="relative isolate pt-4">
        <div className="py-2 sm:py-3 lg:pb-40">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            </div>
            <div className="mx-auto text-center">
              <motion.h1
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: [20, -5, 0],
                }}
                transition={{
                  duration: 0.5,
                  ease: [0.4, 0.0, 0.2, 1],
                }}
                className="text-6xl font-bold tracking-tight text-gray-900 sm:text-8xl"
              >
                Nous ne créons pas seulement un site web, mais nous vous créons
                une{" "}
                <span className="bg-clip-text bg-no-repeat text-transparent italic  bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
                  
                  identité
                </span>
              </motion.h1>
              <p className="mt-6 text-lg max-w-3xl mx-auto font-medium text-wrap leading-8 text-gray-600">
                Design, logo et développement de votre site web, e-commerce,
                transformation digital & webmarketing. Devenez incomparable en
                21 jours, garanti.
              </p>
              <br/>
              <AnimatedTooltipPreview />
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="https://meet.brevo.com/bomunto-group"
                  className="rounded-lg bg-green-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                >
                  Réserver un appel
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

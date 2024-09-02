"use client";

import { useState, MouseEvent } from "react";
import { cn } from "@/lib/utils";
import {
  CodeBracketIcon,
  PencilSquareIcon,
  RocketLaunchIcon,
  WrenchIcon,
  CpuChipIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";
import AnimatedGridPattern from "../magicui/animated-grid-pattern";
import { CardHeader, CardContent, Card } from "../ui/card";
import { CardTitle } from "../ui/card-hover-effect"; // Assurez-vous que ce chemin est correct pour votre projet
import GridPattern from "../magicui/grid-pattern";

type Feature = {
  name: string;
  description: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

const features: Feature[] = [
  {
    name: "Web App Development",
    description:
      "Nous ne construisons pas simplement des applications, nous créons des expériences numériques mémorables. Préparez-vous à un produit qui fera rougir la concurrence.",
    icon: CodeBracketIcon,
  },
  {
    name: "Web Design",
    description:
      "Votre interface sera si esthétique qu'elle pourrait bien devenir la nouvelle référence du design digital. Vous en serez tellement fier que vous envisagerez d'en faire une œuvre d'art",
    icon: PencilSquareIcon,
  },
  {
    name: "Deployments and Hosting",
    description:
      "Avec nous, votre plateforme sera en ligne en un éclair, prête à accueillir vos utilisateurs du monde entier. Pas de souci, nous nous occupons de tout",
    icon: RocketLaunchIcon,
  },
  {
    name: "Maintenance",
    description:
      "Nous assurons que votre application fonctionne de manière fluide et sécurisée, comme une horloge bien réglée. Vous pouvez compter sur nous pour que tout roule sans accrocs.",
    icon: WrenchIcon,
  },
  {
    name: "Full-Stack Development",
    description:
      "Des idées audacieuses ? Nous avons les compétences pour les transformer en réalité. Du design captivant à l’architecture technique solide, nous couvrons tout le processus de développement.",
    icon: CpuChipIcon,
  },
  {
    name: "And Everything Else",
    description:
      "Que vous ayez besoin d'une plateforme e-commerce, d'une landing page percutante, d'un tableau de bord sophistiqué ou de toute autre solution digitale, nous sommes là pour vous accompagner. Pour nous, les limites sont faites pour être repoussées.",
    icon: CheckCircleIcon,
  },
];

export default function ServiceSection() {
  const [hoverStates, setHoverStates] = useState<
    ({ x: number; y: number } | null)[]
  >(new Array(features.length).fill(null));

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>, index: number) => {
    const card = e.currentTarget.getBoundingClientRect();
    const newHoverStates = [...hoverStates];
    newHoverStates[index] = {
      x: e.clientX - card.left,
      y: e.clientY - card.top,
    };
    setHoverStates(newHoverStates);
  };

  const handleMouseLeave = (index: number) => {
    const newHoverStates = [...hoverStates];
    newHoverStates[index] = null;
    setHoverStates(newHoverStates);
  };

  return (
    <div className="relative bg-white">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">
            Nos services
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Nous nous occupons de presque tout !
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            De la conception au déploiement, nous nous occupons de tout pour que
            votre site web soit expédié et prêt à fonctionner !
          </p>
        </div>
        <div className="relative mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card
              key={feature.name}
              className="relative overflow-hidden transition duration-300 ease-out"
              onMouseMove={(e) => handleMouseMove(e, index)}
              onMouseLeave={() => handleMouseLeave(index)}
              style={{
                background: hoverStates[index]
                  ? `radial-gradient(circle at ${hoverStates[index]?.x}px ${hoverStates[index]?.y}px, rgba(99, 102, 241, 0.2) 0%, rgba(99, 102, 241, 0) 80%)`
                  : "transparent",
                transition: "background 0.3s ease-out",
              }}
            >
              <div className="absolute inset-0">
                <GridPattern
                  squares={[
                    [5, 1],
                    [3, 3],
                    [2, 2],
                    [6, 2],
                  ]}
                  className={cn(
                    "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]",
                    "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12 bg-transparent"
                  )}
                />
              </div>
              <div className="relative z-10">
                <CardHeader className="flex items-center space-x-4 p-4">
                  <div className="flex-shrink-0">
                    <feature.icon
                      aria-hidden="true"
                      className="h-8 w-8 text-indigo-600"
                    />
                  </div>
                  <CardTitle className="text-lg font-semibold text-gray-900">
                    {feature.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4">
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

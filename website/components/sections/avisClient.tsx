import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

const testimonials = [
  {
    quote:
      "Nous avons confié la création de notre site web à Bomunto, et nous sommes ravis du résultat. Leur équipe a su comprendre nos besoins spécifiques et créer un site qui non seulement reflète parfaitement notre identité de marque, mais qui est aussi extrêmement fonctionnel et convivial. Le projet a été livré dans les délais impartis et avec un grand professionnalisme. Grâce à leur expertise, notre présence en ligne a été considérablement renforcée, attirant plus de visiteurs et générant davantage de leads. Nous recommandons vivement leurs services.",
    name: "Kevin Dango",
    title: "Moavis",
  },
  {
    quote:
      "Travailler avec Bomunto sur la création de notre maquette a été une expérience formidable. Ils ont fait preuve d'une créativité exceptionnelle et d'une grande attention aux détails, ce qui a permis de créer une maquette innovante et parfaitement alignée avec nos attentes. Leur capacité à comprendre et à traduire nos idées en visuels concrets est impressionnante. Le résultat final dépasse de loin nos attentes, et nous sommes impatients de collaborer à nouveau avec eux sur nos futurs projets.",
    name: "Virginie",
    title: "Vivi Service",
  },

  {
    quote:
      "Je suis extrêmement satisfait du travail accompli par Bomunto dans la réalisation de notre maquette pour un projet d'envergure. Leur professionnalisme, leur rigueur, et leur sens du détail ont été des atouts majeurs tout au long de ce projet complexe. Ils ont su proposer des solutions créatives et adaptées, ce qui a contribué à la réussite du projet. Leur capacité à gérer des projets d'une telle ampleur est impressionnante, et je ne manquerai pas de faire appel à eux pour nos futurs besoins.",
    name: "Jean Jacques Bagui ",
    title: "",
  },
  {
    quote:
      "Nous avons sollicité Bomunto pour la refonte complète de notre site web de formation, et le résultat est tout simplement incroyable. Ils ont su moderniser notre plateforme en intégrant des fonctionnalités avancées tout en rendant l'expérience utilisateur beaucoup plus fluide et intuitive. Leur équipe a démontré une expertise technique et une créativité qui ont transformé notre site en un outil puissant pour nos utilisateurs. Nos étudiants et formateurs apprécient grandement la nouvelle interface, et nous avons déjà observé une augmentation de l'engagement et des inscriptions.",
    name: "Njinkeu Yannick",
    title: "Data Training",
  },
];


const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function AvisClient() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden">
      <div className="mx-auto max-w-2xl lg:text-center">
        <h2 className="text-base mt-6 font-semibold leading-7 text-indigo-600">
          Avis clients
        </h2>
        <p className="my-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Ce qu'ils ont dit de nous
        </p>
      </div>
      <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
    </div>
  );
}

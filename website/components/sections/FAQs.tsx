import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";

const faqs = [
  {
    question: "Est-ce qu'il y'a un engagement lors de l'appel ?",
    answer:
      "Non, il n'y a aucun engagement lors de l'appel. C'est une simple consultation pour discuter de vos besoins.",
  },
  {
    question: "Quels sont les coûts associés à vos services ?",
    answer:
      "Les coûts varient en fonction de la portée du projet, des fonctionnalités demandées, et des exigences spécifiques. Nous vous fournirons un devis détaillé après une consultation initiale pour bien comprendre vos besoins.",
  },
  {
    question: "Offrez-vous une garantie sur vos services ?",
    answer:
      " Oui, nous offrons une garantie sur nos services pour assurer que le site fonctionne comme prévu après son lancement. Nous sommes également disponibles pour corriger tout problème qui pourrait survenir pendant cette période.",
  },
  {
    question: "Refaites-vous des sites web existants ?",
    answer:
      "Oui, nous proposons des services de refonte pour moderniser votre site web existant. Que ce soit pour améliorer l'apparence, ajouter de nouvelles fonctionnalités ou optimiser les performances, nous pouvons vous aider à revitaliser votre site.",
  },
  {
    question: "Quels sont les délais de livraison pour un site web ?",
    answer:
      "Les délais de livraison varient en fonction de la portée du projet et des fonctionnalités demandées. Nous nous efforçons de livrer les projets dans les 30 jours suivant le début de la conception.",
  },
  {
    question:
      "En combien de temps pouvez-vous transformer mon entreprise digitalement ?",
    answer:
      "Nous avons un processus éprouvé pour la transformation digitale, qui peut être réalisé en 30 jours. Cela inclut la création ou la refonte de votre site web, l'intégration de solutions e-commerce, et la mise en place de stratégies de webmarketing efficaces pour propulser votre entreprise dans l'ère numérique.",
  },
  {
    question:
      "Pourquoi devrais-je choisir vos services de design et de création de logo ? ",
    answer: " Nous ne concevons pas de simples logos, mais des identités visuelles complètes qui captivent et inspirent. Nos designs sont conçus pour refléter l'essence de votre marque tout en étant modernes, élégants, et mémorables. En choisissant nos services, vous vous assurez d'avoir une identité visuelle qui se distingue vraiment. "
  },
];

export default function FAQs() {
  return (
    <div id="FAQS" className="">
      <div className="mx-auto max-w-7xl px-6 py-2 sm:py-32 lg:px-8 lg:py-4">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-black">
            Frequently asked questions
          </h2>
          <dl className="mt-10 space-y-4">
            {faqs.map((faq) => (
              <Disclosure key={faq.question} as="div" className="pt-4">
                <dt>
                  <DisclosureButton className="group flex w-full items-start justify-between text-left text-white bg-gray-900 rounded-lg px-4 py-3 hover:bg-gray-800 transition-colors">
                    <span className="text-base font-semibold leading-7">
                      {faq.question}
                    </span>
                    <span className="ml-6 flex h-7 items-center">
                      <PlusSmallIcon
                        aria-hidden="true"
                        className="h-6 w-6 group-data-[open]:hidden"
                      />
                      <MinusSmallIcon
                        aria-hidden="true"
                        className="h-6 w-6 [.group:not([data-open])_&]:hidden text-red-500"
                      />
                    </span>
                  </DisclosureButton>
                </dt>
                <DisclosurePanel
                  as="dd"
                  className="mt-2 pr-12 bg-gray-900 rounded-lg p-4"
                >
                  <p className="text-base leading-7 text-gray-300">
                    {faq.answer}
                  </p>
                </DisclosurePanel>
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}

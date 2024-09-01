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
    question: "Est-ce que vous sous-traitez le travail ?",
    answer:
      "Nous travaillons avec des freelances français qui ont déjà fait leurs preuves sur plusieurs projets précédents. Cela nous permet de développer à un bon rythme et de délivrer un travail d'excellence. De votre côté, vous n'avez pas à vous inquiéter de tout cela, vous serez en relation directe avec Yannis Haismann, qui s’occupera de gérer toutes vos demandes et retours. Vous aurez également accès au tableau Kanban de l'équipe, sur lequel vous pourrez intervenir si vous le souhaitez.",
  },
  // More questions...
];

export default function FAQs() {
  return (
    <div className="">
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

"use client";
import React from "react";
import { Container } from "@/components/Container";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

export const Faq = () => {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <DisclosureButton className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-indigo-500`}
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </DisclosurePanel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
}

const faqdata = [
  {
    question: "What types of businesses do you work with?",
    answer: "We work with businesses of all sizes, from startups to established enterprises, across various industries, tailoring our strategies to meet their unique needs.",
  },
  {
    question: "What industries do you specialize in?",
    answer: "Our expertise spans multiple industries, including technology, retail, healthcare, finance, and more. Our adaptable approach ensures we can add value to any sector.",
  },
  {
    question: "What is the typical duration of a consulting engagement? ",
    answer:
      "The duration varies based on the scope of the project. Some engagements last a few weeks, while others can extend for several months or longer, depending on your goals.",
  },
  {
    question: "What is the cost structure for your consulting services? ",
    answer:
      "Our pricing is project-based or retainer-based, depending on your requirements. We offer transparent and flexible pricing to suit your budget and needs.",
  },
];

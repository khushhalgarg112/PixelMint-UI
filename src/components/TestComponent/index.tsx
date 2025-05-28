"use client";

import React from "react";
import { Accordion } from "../UI/Accordian"; // adjust path as per your project structure

export default function FaqSection() {
  const faqItems1 = [
    {
      title: "What is Pixel Mint?",
      content: (
        <p>
          Pixel Mint is a modern UI component library offering both free and
          premium components tailored for developers and startups.
        </p>
      ),
      defaultOpen: true,
    },
  ];
  const faqItems2 = [
    {
      title: "Is it open source?",
      content: (
        <p>
          The core library is open-source. Premium templates and advanced
          components are sold separately.
        </p>
      ),
    },
  ];

  const faqItems3 = [
    {
      title: "Can I use it in commercial projects?",
      content: (
        <p>
          Absolutely. All components are MIT licensed unless otherwise stated.
        </p>
      ),
    },
  ];

  return (
    <section className="max-w-xl mx-auto py-12">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Frequently Asked Questions
      </h2>
      <Accordion items={faqItems1} variant="default" allowMultipleOpen />
      <Accordion items={faqItems2} variant="ghost" allowMultipleOpen />
      <Accordion items={faqItems3} variant="bordered" allowMultipleOpen />
    </section>
  );
}

"use client";

import React from "react";
import { Accordion } from "@/lib/components";

export default function FaqSection() {
  const faqItems = [
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
    {
      title: "Is it open source?",
      content: (
        <p>
          The core library is open-source. Premium templates and advanced
          components are sold separately.
        </p>
      ),
    },
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
      <div className="space-y-4">
        <Accordion items={faqItems} variant="default" allowMultipleOpen />
        <Accordion items={faqItems} variant="bordered" allowMultipleOpen />
        <Accordion items={faqItems} variant="retro" allowMultipleOpen />
        <Accordion items={faqItems} variant="modern" allowMultipleOpen />
        <Accordion items={faqItems} variant="ghost" allowMultipleOpen />
      </div>
    </section>
  );
}

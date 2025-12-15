"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "Brauche ich technisches Wissen?",
    answer:
      "Nein, überhaupt nicht. Wir richten alles für dich ein. Du musst nur dein Menü zusenden.",
  },
  {
    question: "Wie lange dauert die Einrichtung?",
    answer:
      "In der Regel 3–5 Werktage. Bei einfachen Menüs auch schneller.",
  },
  {
    question: "Kann ich meine Preise selbst ändern?",
    answer:
      "Du schickst uns die Änderungen (per WhatsApp, E-Mail oder Telefon), und wir setzen sie innerhalb von 24–72 Stunden um – je nach Paket.",
  },
  {
    question: "Was passiert mit meinen bestehenden Kunden?",
    answer:
      "Deine Kunden bestellen weiterhin bei dir – nur eben direkt über deine persönliche Sipariso-Bestellseite statt über eine Plattform.",
  },
  {
    question: "Muss ich einen Lieferdienst haben?",
    answer:
      "Nein. Sipariso ist für Abholung oder eigene Auslieferung gedacht. Wir organisieren keine Fahrer.",
  },
  {
    question: "Kann ich Sipariso testen?",
    answer:
      "Ja! Mit unserer 30-Tage-Geld-zurück-Garantie gehst du kein Risiko ein.",
  },
  {
    question: "Was kostet Sipariso nach der Testphase?",
    answer:
      "Es gibt keine separate Testphase. Du zahlst von Anfang an den gewählten Tarif, kannst aber innerhalb von 30 Tagen ohne Angabe von Gründen kündigen und bekommst dein Setup-Fee zurück.",
  },
];

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-gray-200">
      <button
        onClick={onToggle}
        className="w-full py-5 flex items-center justify-between text-left"
      >
        <span className="font-semibold text-gray-700 pr-8">{question}</span>
        <svg
          className={cn(
            "w-5 h-5 text-primary-500 flex-shrink-0 transition-transform duration-200",
            isOpen && "rotate-180"
          )}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      <div
        className={cn(
          "overflow-hidden transition-all duration-200",
          isOpen ? "max-h-96 pb-5" : "max-h-0"
        )}
      >
        <p className="text-gray-600">{answer}</p>
      </div>
    </div>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 bg-white">
      <SectionDivider className="mb-20" />
      <Container>
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-700">
            Häufige Fragen
          </h2>
        </div>

        {/* FAQ List */}
        <div className="max-w-2xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

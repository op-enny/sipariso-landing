"use client";

import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { Tooltip } from "@/components/ui/Tooltip";

interface Feature {
  text: string;
  tooltip?: string;
}

interface Plan {
  name: string;
  description: string;
  items: string;
  setupFee: number;
  monthlyFee: number;
  features: Feature[];
  popular: boolean;
}

const plans: Plan[] = [
  {
    name: "Starter",
    description: "Für kleine Betriebe",
    items: "Bis 50 Artikel",
    setupFee: 149,
    monthlyFee: 99,
    features: [
      { text: "Eigene Bestellseite" },
      { text: "Store Owner Panel" },
      { text: "Order Tracking" },
      { text: "Produkt- & Preispflege (48–72h)" },
      { text: "E-Mail Support" },
    ],
    popular: false,
  },
  {
    name: "Growth",
    description: "Für wachsende Betriebe",
    items: "Bis 250 Artikel",
    setupFee: 199,
    monthlyFee: 129,
    features: [
      { text: "Alles aus Starter" },
      { text: "Erweiterte Produktpflege (24–48h)" },
      { text: "Bevorzugte Bearbeitung" },
      { text: "Telefon-Support" },
    ],
    popular: true,
  },
  {
    name: "Scale",
    description: "Für große Sortimente",
    items: "Bis 500 Artikel",
    setupFee: 299,
    monthlyFee: 179,
    features: [
      { text: "Alles aus Growth" },
      { text: "Premium Produktpflege (24h)" },
      { text: "Höchste Priorität" },
      { text: "Persönlicher Ansprechpartner" },
      {
        text: "Mehrere Standorte möglich",
        tooltip: "Mit Aufpreis möglich – kontaktieren Sie uns für Details",
      },
    ],
    popular: false,
  },
];

function CheckItemWithTooltip({ feature }: { feature: Feature }) {
  return (
    <div className="flex items-start gap-3">
      <svg
        className="w-5 h-5 text-success-500 mt-0.5 flex-shrink-0"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2.5}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
      {feature.tooltip ? (
        <Tooltip content={feature.tooltip}>
          <span className="text-gray-600">{feature.text}</span>
        </Tooltip>
      ) : (
        <span className="text-gray-600">{feature.text}</span>
      )}
    </div>
  );
}

export function Pricing() {
  const openCalendly = () => {
    window.open("https://calendly.com/rbxn36/sipariso-kennenlernen", "_blank");
  };

  return (
    <section id="pricing" className="py-20 bg-gradient-pricing">
      <SectionDivider className="mb-20" />
      <Container>
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-700">
            Preise: Transparent & planbar
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Keine versteckten Kosten. Keine Provision. Nur ein fairer Festpreis.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              variant={plan.popular ? "highlighted" : "bordered"}
              className={`relative ${plan.popular ? "md:scale-105" : ""}`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <Badge
                  variant="accent"
                  className="absolute -top-3 left-1/2 -translate-x-1/2"
                >
                  ⭐ Beliebt
                </Badge>
              )}

              {/* Plan Header */}
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-gray-700">{plan.name}</h3>
                <p className="text-gray-500 text-sm">{plan.description}</p>
                <p className="text-primary-500 text-sm font-medium mt-1">
                  {plan.items}
                </p>
              </div>

              {/* Pricing */}
              <div className="text-center mb-6">
                <div className="text-sm text-gray-500 mb-2">
                  <span className="font-semibold text-gray-700">
                    {plan.setupFee} €
                  </span>{" "}
                  einmalig Setup
                </div>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold text-gray-700">
                    {plan.monthlyFee} €
                  </span>
                  <span className="text-gray-500">/ Monat</span>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-3 mb-6">
                {plan.features.map((feature, index) => (
                  <CheckItemWithTooltip key={index} feature={feature} />
                ))}
              </div>

              {/* CTA Button */}
              <Button
                onClick={openCalendly}
                variant={plan.popular ? "primary" : "secondary"}
                className="w-full"
              >
                {plan.name} wählen
              </Button>
            </Card>
          ))}
        </div>

        {/* Footer note */}
        <p className="text-center text-sm text-gray-500 mt-8">
          Alle Preise zzgl. MwSt.
        </p>
      </Container>
    </section>
  );
}

"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { Sparkle } from "@/components/decorative/Sparkle";

const CALENDLY_URL = "https://calendly.com/rbxn36/sipariso-kennenlernen";

export function FinalCTA() {
  const openCalendly = () => {
    window.open(CALENDLY_URL, "_blank");
  };

  return (
    <section className="py-20 bg-gradient-cta">
      <SectionDivider className="mb-20" />
      <Container>
        <div className="max-w-2xl mx-auto text-center">
          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-700 relative inline-block">
            Bereit, Provisionen zu sparen?
            <Sparkle className="absolute -right-8 -top-4 text-accent-500 w-8 h-8" />
          </h2>

          {/* Scarcity Message */}
          <p className="mt-6 text-lg text-gray-600">
            <strong className="text-gray-700">
              Wir nehmen aktuell nur 20 neue Stores pro Monat auf.
            </strong>
            <br />
            So garantieren wir persönliche Betreuung und schnelles Setup.
          </p>

          {/* CTA Button */}
          <div className="mt-10 relative inline-block">
            <Button onClick={openCalendly} size="xl">
              Gespräch vereinbaren →
            </Button>
          </div>

          {/* Trust text */}
          <p className="mt-4 text-sm text-gray-500">
            Kostenlos & unverbindlich – keine Zahlungsdaten erforderlich
          </p>
        </div>
      </Container>
    </section>
  );
}

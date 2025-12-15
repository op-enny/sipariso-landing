"use client";

import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { CheckItem } from "@/components/ui/CheckItem";

const CALENDLY_URL = "https://calendly.com/rbxn36/sipariso-kennenlernen";

export function WaitlistForm() {
  return (
    <section id="waitlist" className="py-20 bg-white">
      <SectionDivider className="mb-20" />
      <Container>
        <div className="max-w-2xl mx-auto text-center">
          {/* Section Header */}
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-700">
            Lass uns sprechen
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Kostenlos & ohne Verpflichtung
          </p>

          {/* Card */}
          <Card variant="bordered" className="mt-10 text-left">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              {/* Left - Info */}
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-700 mb-4">
                  Kennenlerngespräch
                </h3>
                <p className="text-gray-600 mb-6">
                  In 15 Minuten besprechen wir, wie Sipariso dir helfen kann –
                  unverbindlich und kostenlos.
                </p>

                <div className="space-y-3">
                  <CheckItem>Deine Situation verstehen</CheckItem>
                  <CheckItem>Passende Lösung finden</CheckItem>
                  <CheckItem>Offene Fragen klären</CheckItem>
                  <CheckItem>Nächste Schritte besprechen</CheckItem>
                </div>
              </div>

              {/* Right - CTA */}
              <div className="flex-shrink-0 text-center">
                <div className="w-20 h-20 bg-primary-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-10 h-10 text-primary-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <p className="text-sm text-gray-500 mb-4">ca. 15 Minuten</p>
                <Button
                  size="lg"
                  onClick={() => window.open(CALENDLY_URL, "_blank")}
                >
                  Termin buchen →
                </Button>
              </div>
            </div>
          </Card>

          {/* Trust text */}
          <p className="mt-6 text-sm text-gray-500">
            Keine Zahlungsdaten erforderlich • 100% unverbindlich
          </p>
        </div>
      </Container>
    </section>
  );
}

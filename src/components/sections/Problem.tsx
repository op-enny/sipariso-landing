"use client";

import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { Underline } from "@/components/decorative/Underline";

export function Problem() {
  return (
    <section className="py-20 bg-gradient-problem">
      <SectionDivider className="mb-20" />
      <Container>
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-700">
              Das Problem: Du verlierst bei jeder Bestellung{" "}
              <span className="relative inline-block">
                Geld
                <Underline className="absolute -bottom-2 left-0 w-full text-error-500" />
              </span>
            </h2>
            <p className="mt-6 text-lg text-gray-600">
              Lieferplattformen nehmen dir{" "}
              <strong className="text-gray-700">15–30 % Provision</strong> – bei
              jeder einzelnen Bestellung.
            </p>
          </div>

          {/* Calculator Card */}
          <Card variant="bordered" className="max-w-xl mx-auto">
            <h3 className="text-lg font-semibold text-gray-700 mb-6 flex items-center gap-2">
              <svg
                className="w-5 h-5 text-error-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
              Rechenbeispiel
            </h3>

            <div className="space-y-4">
              {/* Row 1 */}
              <div className="flex justify-between items-center py-3 border-b border-gray-100">
                <span className="text-gray-600">Bestellungen pro Monat</span>
                <span className="font-semibold text-gray-700">100</span>
              </div>

              {/* Row 2 */}
              <div className="flex justify-between items-center py-3 border-b border-gray-100">
                <span className="text-gray-600">
                  Durchschnittlicher Bestellwert
                </span>
                <span className="font-semibold text-gray-700">25 €</span>
              </div>

              {/* Row 3 - Loss */}
              <div className="flex justify-between items-center py-3 border-b border-gray-100">
                <span className="text-gray-600">Provision (20%)</span>
                <span className="font-bold text-xl text-error-500">
                  500 € Verlust
                </span>
              </div>

              {/* Row 4 - Yearly Loss */}
              <div className="flex justify-between items-center py-3 bg-error-500/5 -mx-6 px-6 rounded-lg">
                <span className="font-medium text-gray-700">Pro Jahr</span>
                <span className="font-bold text-2xl text-error-500">
                  6.000 € weg
                </span>
              </div>
            </div>
          </Card>

          {/* Bottom Text */}
          <p className="text-center mt-8 text-gray-600">
            Und das Schlimmste?{" "}
            <strong className="text-gray-700">
              Du hast keinen direkten Kontakt zu deinen eigenen Kunden.
            </strong>
          </p>
        </div>
      </Container>
    </section>
  );
}

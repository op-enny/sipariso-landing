import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { CheckItem } from "@/components/ui/CheckItem";

export function Guarantee() {
  return (
    <section className="py-20 bg-gradient-success">
      <SectionDivider className="mb-20" />
      <Container>
        <div className="max-w-2xl mx-auto">
          <Card className="border-2 border-success-500 text-center">
            {/* Shield Icon */}
            <div className="w-20 h-20 bg-success-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-10 h-10 text-success-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>

            {/* Title */}
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-700 mb-2">
              Dein Risiko: Null.
            </h2>
            <h3 className="text-xl font-semibold text-success-500 mb-6">
              30 Tage Geld-zurück-Garantie
            </h3>

            {/* Description */}
            <p className="text-gray-600 mb-6">
              Wenn Sipariso nicht zu dir passt, bekommst du dein Setup-Fee{" "}
              <strong className="text-gray-700">vollständig zurück</strong>.
            </p>

            {/* Benefits */}
            <div className="flex flex-col sm:flex-row justify-center gap-6 text-left max-w-sm mx-auto">
              <CheckItem>Ohne Fragen</CheckItem>
              <CheckItem>Ohne Kleingedrucktes</CheckItem>
              <CheckItem>Ohne Wartezeit</CheckItem>
            </div>

            {/* Bottom tagline */}
            <p className="mt-8 text-lg font-medium text-gray-700">
              Wir sind erst zufrieden, wenn du es bist.
            </p>
          </Card>
        </div>
      </Container>
    </section>
  );
}

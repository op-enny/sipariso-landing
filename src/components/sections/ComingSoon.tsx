import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { SectionDivider } from "@/components/ui/SectionDivider";

export function ComingSoon() {
  return (
    <section className="py-20 bg-white">
      <SectionDivider className="mb-20" />
      <Container>
        <div className="max-w-2xl mx-auto">
          <Card className="bg-gray-50 text-center">
            {/* Badge */}
            <Badge variant="outline" className="mb-4">
              🚀 Coming Soon
            </Badge>

            {/* Title */}
            <h2 className="text-2xl font-bold text-gray-700 mb-4">
              KI-Bestellassistent
            </h2>

            {/* Description */}
            <p className="text-gray-600 mb-6">
              Wir entwickeln einen KI-Bot, der Bestellungen automatisch per Chat
              annehmen kann. Für alle zahlenden Kunden{" "}
              <strong className="text-gray-700">kostenlos</strong>, sobald
              verfügbar.
            </p>

            {/* Icon */}
            <div className="w-16 h-16 bg-primary-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-primary-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                />
              </svg>
            </div>

            {/* Disclaimer */}
            <p className="text-xs text-gray-500">
              Der KI-Bot ist in Entwicklung. Zeitpunkt und Funktionsumfang
              können variieren.
            </p>
          </Card>
        </div>
      </Container>
    </section>
  );
}

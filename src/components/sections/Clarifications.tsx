import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { CheckItem } from "@/components/ui/CheckItem";

const doItems = [
  "Bestellungen annehmen",
  "Technik & Einrichtung",
  "Produkt- & Preispflege",
  "Support bei Fragen",
];

const dontItems = [
  "Auslieferung übernehmen",
  "Fahrer organisieren",
  "Marketing für dich machen",
  "Deine Kunden anrufen",
];

export function Clarifications() {
  return (
    <section className="py-20 bg-white">
      <SectionDivider className="mb-20" />
      <Container>
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-700">
            Gut zu wissen
          </h2>
        </div>

        {/* Comparison Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {/* What we do */}
          <Card variant="bordered">
            <h3 className="font-semibold text-gray-700 mb-6 flex items-center gap-2">
              <span className="w-8 h-8 bg-success-500/10 rounded-full flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-success-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </span>
              Was Sipariso macht
            </h3>
            <div className="space-y-3">
              {doItems.map((item, index) => (
                <CheckItem key={index}>{item}</CheckItem>
              ))}
            </div>
          </Card>

          {/* What we don't do */}
          <Card variant="bordered">
            <h3 className="font-semibold text-gray-700 mb-6 flex items-center gap-2">
              <span className="w-8 h-8 bg-error-500/10 rounded-full flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-error-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </span>
              Was Sipariso NICHT macht
            </h3>
            <div className="space-y-3">
              {dontItems.map((item, index) => (
                <CheckItem key={index} variant="error">
                  {item}
                </CheckItem>
              ))}
            </div>
          </Card>
        </div>

        {/* Note */}
        <p className="text-center mt-8 text-gray-600 max-w-xl mx-auto">
          <strong className="text-gray-700">
            Abholung oder Auslieferung organisierst du selbst
          </strong>{" "}
          – wie bisher auch.
        </p>
      </Container>
    </section>
  );
}

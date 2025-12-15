import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { CircleHighlight } from "@/components/decorative/CircleHighlight";

export function SavingsComparison() {
  return (
    <section className="py-20 bg-white">
      <SectionDivider className="mb-20" />
      <Container>
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-700">
            Deine Ersparnis: Eine einfache Rechnung
          </h2>
        </div>

        {/* Comparison Table */}
        <div className="max-w-3xl mx-auto">
          <Card variant="bordered" className="overflow-hidden p-0">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="py-4 px-6 text-left text-gray-500 font-medium bg-gray-50">
                    100 Bestellungen/Monat à 25 €
                  </th>
                  <th className="py-4 px-6 text-center bg-error-500/5 text-gray-700 font-semibold">
                    Lieferplattform
                    <span className="block text-xs font-normal text-gray-500">
                      (20% Provision)
                    </span>
                  </th>
                  <th className="py-4 px-6 text-center bg-accent-500/10 text-gray-700 font-semibold">
                    Sipariso
                    <span className="block text-xs font-normal text-gray-500">
                      (Starter)
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-100">
                  <td className="py-4 px-6 text-gray-600">Monatliche Kosten</td>
                  <td className="py-4 px-6 text-center text-error-500 font-semibold">
                    500 € Provision
                  </td>
                  <td className="py-4 px-6 text-center text-gray-700 font-semibold">
                    99 € Festpreis
                  </td>
                </tr>
                <tr className="border-t border-gray-100">
                  <td className="py-4 px-6 text-gray-700 font-semibold">
                    Deine monatliche Ersparnis
                  </td>
                  <td className="py-4 px-6 text-center text-gray-400">—</td>
                  <td className="py-4 px-6 text-center">
                    <CircleHighlight className="text-accent-500">
                      <span className="font-bold text-xl text-accent-600">
                        +401 €
                      </span>
                    </CircleHighlight>
                  </td>
                </tr>
                <tr className="border-t border-gray-100 bg-gray-50">
                  <td className="py-4 px-6 text-gray-700 font-semibold">
                    Deine jährliche Ersparnis
                  </td>
                  <td className="py-4 px-6 text-center text-gray-400">—</td>
                  <td className="py-4 px-6 text-center font-bold text-2xl text-success-500">
                    +4.812 €
                  </td>
                </tr>
              </tbody>
            </table>
          </Card>

          {/* Break-even callout */}
          <Card className="mt-8 bg-gray-50">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-accent-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">💡</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-700 mb-1">
                  Break-Even-Punkt
                </h3>
                <p className="text-gray-600">
                  <strong className="text-gray-700">
                    Ab nur 18 Bestellungen im Monat
                  </strong>{" "}
                  hast du die Sipariso-Kosten wieder drin. Alles darüber ist
                  reiner Gewinn für dich.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </Container>
    </section>
  );
}

import { Container } from "@/components/ui/Container";
import { SectionDivider } from "@/components/ui/SectionDivider";

const features = [
  {
    title: "Deine eigene Bestellseite",
    description:
      "Kunden bestellen über deine persönliche Sipariso-Bestellseite – kein Umweg über Drittanbieter. Deine Marke, deine Kunden, dein Umsatz.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
        />
      </svg>
    ),
  },
  {
    title: "Store Owner Panel",
    description:
      "Alle Bestellungen auf einen Blick. Übersichtlich für dich und dein Team. Keine komplizierten Systeme – einfach und klar.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"
        />
      </svg>
    ),
  },
  {
    title: "Order Tracking",
    description:
      "Angenommen → In Vorbereitung → Bereit. Deine Kunden wissen immer, wo ihre Bestellung steht.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
        />
      </svg>
    ),
  },
  {
    title: "Produkt- & Preispflege durch uns",
    description:
      "Du schickst uns Änderungen per WhatsApp, E-Mail oder Telefon. Wir setzen sie um – innerhalb von 24–48 Stunden.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
        />
      </svg>
    ),
  },
];

export function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <SectionDivider className="mb-20" />
      <Container>
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-700">
            Was bekommst du konkret?
          </h2>
        </div>

        {/* Features Grid */}
        <div className="space-y-16 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row gap-8 items-center ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Icon/Visual */}
              <div className="flex-shrink-0">
                <div className="w-32 h-32 bg-primary-500/10 rounded-2xl flex items-center justify-center text-primary-500">
                  {feature.icon}
                </div>
              </div>

              {/* Content */}
              <div className={index % 2 === 1 ? "md:text-right" : ""}>
                <h3 className="text-xl font-bold text-gray-700 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

import { Container } from "@/components/ui/Container";
import { SectionDivider } from "@/components/ui/SectionDivider";

const steps = [
  {
    number: 1,
    title: "Anmelden",
    description:
      "Du trägst dich in die Warteliste ein. Wir melden uns innerhalb von 24 Stunden.",
    duration: "1 Minute",
  },
  {
    number: 2,
    title: "Menü zusenden",
    description:
      "Du schickst uns dein Menü – als Foto, PDF oder Excel. Egal welches Format, wir kümmern uns darum.",
    duration: "5 Minuten",
  },
  {
    number: 3,
    title: "Wir richten ein",
    description:
      "Setup, Design, Integration, Testlauf. Du musst nichts machen.",
    duration: "3–5 Werktage",
  },
  {
    number: 4,
    title: "Du gehst live",
    description:
      "Erste Bestellungen kommen rein. Ab jetzt sparst du bei jeder Bestellung.",
    duration: "🎉 Fertig",
  },
];

export function HowItWorks() {
  return (
    <section className="py-20 bg-gradient-blue">
      <SectionDivider className="mb-20" />
      <Container>
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-700">
            So funktioniert der Start
          </h2>
        </div>

        {/* Steps */}
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 relative">
            {/* Connection line (desktop only) */}
            <div className="hidden md:block absolute top-8 left-[12.5%] right-[12.5%] h-0.5 bg-gray-200" />

            {steps.map((step, index) => (
              <div key={index} className="relative text-center">
                {/* Step number */}
                <div className="relative z-10 w-16 h-16 bg-primary-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 shadow-lg shadow-primary-500/30">
                  {step.number}
                </div>

                {/* Hand-drawn arrow (mobile & between steps) */}
                {index < steps.length - 1 && (
                  <svg
                    className="hidden md:block absolute top-6 -right-4 w-8 h-8 text-primary-500"
                    viewBox="0 0 32 32"
                    fill="none"
                  >
                    <path
                      d="M8 16 Q 16 10, 24 16"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      fill="none"
                    />
                    <path
                      d="M20 12 L 24 16 L 20 20"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                    />
                  </svg>
                )}

                {/* Content */}
                <h3 className="font-semibold text-gray-700 mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-600 mb-3">{step.description}</p>

                {/* Duration badge */}
                <span className="inline-block px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                  ⏱ {step.duration}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

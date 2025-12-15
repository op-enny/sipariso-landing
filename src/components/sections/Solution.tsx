import { Container } from "@/components/ui/Container";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { CheckItem } from "@/components/ui/CheckItem";

export function Solution() {
  return (
    <section className="py-20 bg-gradient-blue">
      <SectionDivider className="mb-20" />
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          {/* Section Header */}
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-700">
            Die Lösung:{" "}
            <span className="text-primary-500">Sipariso</span>
          </h2>
          <p className="mt-6 text-lg text-gray-600">
            Sipariso ist dein eigenes Bestellsystem –{" "}
            <strong className="text-gray-700">
              ohne Provision, ohne Technikstress.
            </strong>
          </p>

          {/* Features */}
          <div className="mt-10 grid sm:grid-cols-3 gap-6 text-left">
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="w-12 h-12 bg-primary-500/10 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-primary-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-700 mb-2">
                Menü-Einrichtung
              </h3>
              <p className="text-sm text-gray-600">
                Wir richten dein komplettes Menü für dich ein.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <div className="w-12 h-12 bg-primary-500/10 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-primary-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-700 mb-2">
                Produktpflege
              </h3>
              <p className="text-sm text-gray-600">
                Änderungen? Wir kümmern uns darum.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <div className="w-12 h-12 bg-primary-500/10 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-primary-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-700 mb-2">
                Technische Betreuung
              </h3>
              <p className="text-sm text-gray-600">
                Support bei allen technischen Fragen.
              </p>
            </div>
          </div>

          {/* Bottom text */}
          <div className="mt-12 p-6 bg-primary-500/5 rounded-xl">
            <p className="text-lg text-gray-700">
              Du konzentrierst dich auf das, was du am besten kannst:{" "}
              <strong>dein Geschäft führen.</strong>
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

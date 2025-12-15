import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="bg-primary-900 text-white py-16">
      <Container>
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Sipariso</h3>
            <p className="text-gray-400 max-w-sm">
              Bestellungen annehmen. Provisionen sparen. Kontrolle behalten.
            </p>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-semibold mb-4">Kontakt</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center gap-2">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a
                  href="mailto:hallo@sipariso.de"
                  className="hover:text-accent-500 transition-colors"
                >
                  hallo@sipariso.de
                </a>
              </li>
              <li className="text-sm">Erreichbar: Mo–Fr, 9–18 Uhr</li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h4 className="font-semibold mb-4">Rechtliches</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a
                  href="/impressum"
                  className="hover:text-accent-500 transition-colors"
                >
                  Impressum
                </a>
              </li>
              <li>
                <a
                  href="/datenschutz"
                  className="hover:text-accent-500 transition-colors"
                >
                  Datenschutz
                </a>
              </li>
              <li>
                <a
                  href="/agb"
                  className="hover:text-accent-500 transition-colors"
                >
                  AGB
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Sipariso. Alle Rechte vorbehalten.
            </p>
            <p className="text-gray-500 text-sm">
              Made with ❤️ in Germany
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}

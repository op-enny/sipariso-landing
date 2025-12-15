"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Sparkle } from "@/components/decorative/Sparkle";
import { Arrow } from "@/components/decorative/Arrow";

const CALENDLY_URL = "https://calendly.com/rbxn36/sipariso-kennenlernen";

export function Hero() {
  const openCalendly = () => {
    window.open(CALENDLY_URL, "_blank");
  };

  return (
    <section className="relative min-h-screen flex items-center pt-24 md:pt-28 bg-white overflow-hidden">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center py-12 lg:py-0">
          {/* Left Column - Text Content */}
          <div className="max-w-xl">
            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-700 leading-tight">
              <span className="block">Bestellungen</span>
              <span className="block">annehmen.</span>
              <span className="block relative inline-flex items-center">
                Provisionen
                <Sparkle className="absolute -right-8 -top-2 text-accent-500 w-6 h-6 sm:w-8 sm:h-8" />
              </span>
              <span className="block">sparen.</span>
              <span className="block">Kontrolle</span>
              <span className="block">behalten.</span>
            </h1>

            {/* Subheadline */}
            <p className="mt-6 text-lg sm:text-xl text-gray-600 leading-relaxed max-w-lg">
              Dein eigenes Bestellsystem – ohne 15–30 % Provision an
              Lieferplattformen. Wir übernehmen Technik & Einrichtung. Du
              konzentrierst dich auf dein Geschäft.
            </p>

            {/* CTA Section */}
            <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="relative">
                <Button onClick={openCalendly} size="lg">
                  Kostenloses Gespräch buchen →
                </Button>
                {/* Hand-drawn arrow */}
                <Arrow className="hidden sm:block absolute -right-16 top-1/2 -translate-y-1/2 text-primary-500 rotate-[30deg]" />
              </div>
            </div>

            {/* Trust text */}
            <p className="mt-4 text-sm text-gray-500">
              Keine Zahlungsdaten erforderlich
            </p>

            {/* Scroll indicator */}
            <div className="hidden lg:flex items-center gap-2 mt-12 text-gray-400">
              <svg
                className="w-5 h-5 animate-bounce"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
              <span className="text-sm">Mehr erfahren</span>
            </div>
          </div>

          {/* Right Column - Hero Image */}
          <div className="relative lg:h-[600px] flex items-center justify-center">
            {/* Placeholder for hero image */}
            <div className="relative w-full max-w-md lg:max-w-none">
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-accent-500/10 rounded-3xl transform rotate-3" />

              {/* Image container */}
              <div className="relative bg-gray-100 rounded-2xl overflow-hidden aspect-[4/5] shadow-2xl rotate-3">
                <Image
                  src="/hero-image1.png"
                  alt="Sipariso - Restaurant Bestellsystem"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Floating stats card */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-4 border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-success-500/10 rounded-full flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-success-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Monatliche Ersparnis</p>
                    <p className="text-lg font-bold text-success-500">+411 €</p>
                  </div>
                </div>
              </div>

              {/* Floating order card */}
              <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg p-4 border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent-500/10 rounded-full flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-accent-500"
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
                  <div>
                    <p className="text-xs text-gray-500">Neue Bestellung</p>
                    <p className="text-sm font-semibold text-gray-700">#1234</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

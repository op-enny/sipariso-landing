"use client";

import { useState, useEffect } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const CALENDLY_URL = "https://calendly.com/rbxn36/sipariso-kennenlernen";

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const openCalendly = () => {
    window.open(CALENDLY_URL, "_blank");
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-sm shadow-sm"
          : "bg-white"
      )}
    >
      <Container>
        <nav className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-gray-700">
              Sipariso
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("features")}
              className="text-gray-600 hover:text-primary-500 transition-colors"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="text-gray-600 hover:text-primary-500 transition-colors"
            >
              Preise
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-gray-600 hover:text-primary-500 transition-colors"
            >
              FAQ
            </button>
            <Button
              onClick={openCalendly}
              size="sm"
            >
              Termin buchen →
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menu öffnen"
          >
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4 border-t border-gray-100">
            <div className="flex flex-col gap-2 pt-4">
              <button
                onClick={() => scrollToSection("features")}
                className="px-4 py-2 text-left text-gray-600 hover:text-primary-500 hover:bg-gray-50 rounded-lg"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection("pricing")}
                className="px-4 py-2 text-left text-gray-600 hover:text-primary-500 hover:bg-gray-50 rounded-lg"
              >
                Preise
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="px-4 py-2 text-left text-gray-600 hover:text-primary-500 hover:bg-gray-50 rounded-lg"
              >
                FAQ
              </button>
              <Button
                onClick={openCalendly}
                className="mt-2"
              >
                Termin buchen →
              </Button>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}

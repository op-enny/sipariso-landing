import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Sipariso – Bestellsystem für Restaurants & Märkte ohne Provision",
  description:
    "Nimm Bestellungen über deine persönliche Sipariso-Bestellseite an – ohne 15-30% Provision an Lieferplattformen. Wir übernehmen Technik & Einrichtung.",
  keywords:
    "Bestellsystem, Restaurant, Lieferplattform Alternative, ohne Provision, Bestellannahme",
  openGraph: {
    title: "Sipariso – Bestellungen annehmen ohne Provision",
    description:
      "Spare bis zu 30% Provision. Dein eigenes Bestellsystem für Restaurant oder Markt.",
    type: "website",
    locale: "de_DE",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sipariso – Bestellungen annehmen ohne Provision",
    description:
      "Spare bis zu 30% Provision. Dein eigenes Bestellsystem für Restaurant oder Markt.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={inter.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}

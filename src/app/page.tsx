import {
  Header,
  Hero,
  Problem,
  Solution,
  TargetAudience,
  Features,
  SavingsComparison,
  Pricing,
  Testimonials,
  HowItWorks,
  Clarifications,
  ComingSoon,
  Guarantee,
  FAQ,
  FinalCTA,
  Footer,
} from "@/components/sections";
import { WaitlistForm } from "@/components/forms";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <TargetAudience />
        <Features />
        <SavingsComparison />
        <Pricing />
        <Testimonials />
        <HowItWorks />
        <Clarifications />
        <ComingSoon />
        <Guarantee />
        <FAQ />
        <WaitlistForm />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}

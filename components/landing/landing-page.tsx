import { FaqSection } from "./faq";
import { Footer } from "./footer";
import { Header } from "./header";
import { Hero } from "./hero";
import { MainzBetaSection } from "./mainz-beta";
import { ProblemSection } from "./problem";
import { WaitlistSection } from "./waitlist-form";

export function LandingPage() {
  return (
    <main className="min-h-screen bg-[#fffaf3] text-piatto-ink">
      <Header />
      <Hero />
      <ProblemSection />
      <MainzBetaSection />
      <WaitlistSection />
      <FaqSection />
      <Footer />
    </main>
  );
}

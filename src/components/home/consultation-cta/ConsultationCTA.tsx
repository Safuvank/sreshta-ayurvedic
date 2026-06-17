import { Container } from "../Hero/Container";
import { CTAContent } from "./CTAContent";
import { CTAStats } from "./CTAStats";

export const ConsultationCTA = () => {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32 bg-[#2F5D50]">
      {/* Decorative Premium Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C9A86A] rounded-full opacity-10 blur-[150px] pointer-events-none" />
      
      {/* Optional: Add a subtle noise or pattern overlay here if you have one */}
      <div className="absolute inset-0 bg-[url('/images/pattern-overlay.png')] opacity-5 mix-blend-overlay pointer-events-none" />

      <Container>
        <div className="relative z-10">
          <CTAContent />

          <div className="mt-16 lg:mt-24">
            <CTAStats />
          </div>
        </div>
      </Container>
    </section>
  );
};
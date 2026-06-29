import { FadeIn } from "@/components/ui/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/ui/StaggerContainer";

export default function WhyGrinXO() {
  return (
    <section className="sec why" id="why">
      <div className="wrap">
        <FadeIn delay={0.1} direction="up" className="sec-head center">
          <p className="eyebrow" style={{ color: "#f6c3bd" }}>The GrinXO difference</p>
          <h2>Planning made warmer, simpler, child-centric</h2>
        </FadeIn>
        <StaggerContainer className="why-grid" staggerDelay={0.15}>
          <StaggerItem className="why-card group hover:bg-[#341744] hover:scale-[1.02] transition-all duration-300">
            <span className="ic group-hover:scale-110 transition-transform duration-300">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 21C12 21 4 13.5 4 8.5A4.5 4.5 0 0112 6a4.5 4.5 0 018 2.5C20 13.5 12 21 12 21z"/></svg>
            </span>
            <h3>Built around your child</h3>
            <p>We start with your child&apos;s age, interests and personality, so the celebration feels like theirs.</p>
          </StaggerItem>
          <StaggerItem className="why-card group hover:bg-[#341744] hover:scale-[1.02] transition-all duration-300">
            <span className="ic group-hover:scale-110 transition-transform duration-300">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg>
            </span>
            <h3>Curated, not crowded</h3>
            <p>We send a short, relevant shortlist that fits your date and budget, not a directory to wade through.</p>
          </StaggerItem>
          <StaggerItem className="why-card group hover:bg-[#341744] hover:scale-[1.02] transition-all duration-300">
            <span className="ic group-hover:scale-110 transition-transform duration-300">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V7M3 7l9 6 9-6M3 7l9-4 9 4"/></svg>
            </span>
            <h3>One conversation</h3>
            <p>Venue, food, décor, entertainment and photography, coordinated through a single, friendly chat.</p>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
}

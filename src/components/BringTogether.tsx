import { FadeIn } from "@/components/ui/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/ui/StaggerContainer";

export default function BringTogether() {
  return (
    <section className="sec" id="bring">
      <div className="wrap">
        <FadeIn delay={0.1} direction="up" className="sec-head center">
          <p className="eyebrow">One place, the whole celebration</p>
          <h2>Everything a birthday needs, brought together</h2>
          <p>Instead of searching across dozens of pages and providers, plan around your child in a single conversation.</p>
        </FadeIn>
        
        <StaggerContainer className="cats" staggerDelay={0.05}>
          <StaggerItem className="cat group hover:scale-[1.02] transition-transform duration-300">
            <span className="ic group-hover:scale-110 transition-transform duration-300" style={{ background: "#F3EBF4" }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="#764897" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><path d="M9 22V12h6v10"/></svg>
            </span>
            <h3>Venues &amp; experiences</h3>
            <p>Soft play, trampoline parks, gaming, VR, go-karting, banquets and more.</p>
          </StaggerItem>
          <StaggerItem className="cat group hover:scale-[1.02] transition-transform duration-300">
            <span className="ic group-hover:scale-110 transition-transform duration-300" style={{ background: "#FDEAE8" }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="#EF776E" strokeWidth="2"><path d="M18 8h1a4 4 0 010 8h-1"/><path d="M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4z"/><path d="M6 1v3M10 1v3M14 1v3"/></svg>
            </span>
            <h3>Catering</h3>
            <p>Thoughtfully curated food, with flavours that delight guests of every age.</p>
          </StaggerItem>
          <StaggerItem className="cat group hover:scale-[1.02] transition-transform duration-300">
            <span className="ic group-hover:scale-110 transition-transform duration-300" style={{ background: "#F3EBF4" }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="#764897" strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M5 12H2M22 12h-3M5 5l2 2M17 17l2 2M5 19l2-2M17 7l2-2"/></svg>
            </span>
            <h3>Decoration</h3>
            <p>Themes, styling and personalised elements that transform the space.</p>
          </StaggerItem>
          <StaggerItem className="cat group hover:scale-[1.02] transition-transform duration-300">
            <span className="ic group-hover:scale-110 transition-transform duration-300" style={{ background: "#FDEAE8" }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="#EF776E" strokeWidth="2"><path d="M12 2l2.4 7.4H22l-6 4.4 2.3 7.2-6.3-4.6-6.3 4.6L8 13.8 2 9.4h7.6z"/></svg>
            </span>
            <h3>Entertainment</h3>
            <p>Magicians, game hosts, performers and activities that keep the energy up.</p>
          </StaggerItem>
          <StaggerItem className="cat group hover:scale-[1.02] transition-transform duration-300">
            <span className="ic group-hover:scale-110 transition-transform duration-300" style={{ background: "#F3EBF4" }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="#764897" strokeWidth="2"><path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/><circle cx="12" cy="13" r="4"/></svg>
            </span>
            <h3>Photography</h3>
            <p>Candid joy, family moments and the little memories worth keeping.</p>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
}

import { waLink } from "@/lib/wa";
import { FadeIn } from "@/components/ui/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/ui/StaggerContainer";
import { WhatsAppIcon } from "@/components/ui/Icons";

export default function HowItWorks() {
  return (
    <section className="sec how" id="how">
      <div className="wrap">
        <FadeIn delay={0.1} direction="up" className="sec-head center">
          <p className="eyebrow">Simple from first idea to confirmed</p>
          <h2>How GrinXO works</h2>
          <p>We do the searching and coordinating. You make the choices that matter.</p>
        </FadeIn>
        <StaggerContainer className="steps" staggerDelay={0.08}>
          <StaggerItem className="step group">
            <div className="num transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#5d3a79]">1</div>
            <h3>Tell us about your child</h3>
            <p>Share your child&apos;s age, the party date, your locality in Gurgaon and a rough guest count.</p>
          </StaggerItem>
          <StaggerItem className="step group">
            <div className="num transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#5d3a79]">2</div>
            <h3>We curate the options</h3>
            <p>We send a short, hand-picked set of venues and experiences that genuinely fit, not an endless list.</p>
          </StaggerItem>
          <StaggerItem className="step group">
            <div className="num transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#5d3a79]">3</div>
            <h3>Add food, décor &amp; more</h3>
            <p>Choose your venue, then add catering, decoration, entertainment or photography as you like.</p>
          </StaggerItem>
          <StaggerItem className="step group">
            <div className="num transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#5d3a79]">4</div>
            <h3>Confirm &amp; relax</h3>
            <p>We help you confirm the booking and coordinate with providers so the day runs smoothly.</p>
          </StaggerItem>
        </StaggerContainer>
        <FadeIn delay={0.2} direction="up" className="how-cta">
          <a className="btn btn-wa hover:scale-105 transition-transform" href={waLink} target="_blank" rel="noopener">
            <WhatsAppIcon width={20} height={20} />
            Start your plan on WhatsApp
          </a>
        </FadeIn>
      </div>
    </section>
  );
}

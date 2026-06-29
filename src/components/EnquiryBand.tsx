import { waLink } from "@/lib/wa";
import { FadeIn } from "@/components/ui/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/ui/StaggerContainer";
import { WhatsAppIcon, CheckIcon } from "@/components/ui/Icons";

export default function EnquiryBand() {
  return (
    <section className="enquiry" id="enquiry">
      <div className="wrap relative z-10">
        <FadeIn delay={0.1} direction="up">
          <h2>Planning a birthday in the next 60 days?</h2>
          <p>Send us a message and we&apos;ll get started. Here&apos;s all we need to begin:</p>
        </FadeIn>
        <StaggerContainer className="checklist" staggerDelay={0.1}>
          <StaggerItem><span><CheckIcon width={18} height={18} style={{ flex: 'none' }} /> Your child&apos;s age</span></StaggerItem>
          <StaggerItem><span><CheckIcon width={18} height={18} style={{ flex: 'none' }} /> Party date</span></StaggerItem>
          <StaggerItem><span><CheckIcon width={18} height={18} style={{ flex: 'none' }} /> Your locality</span></StaggerItem>
          <StaggerItem><span><CheckIcon width={18} height={18} style={{ flex: 'none' }} /> Rough guest count</span></StaggerItem>
        </StaggerContainer>
        <FadeIn delay={0.4} direction="up">
          <a className="btn btn-wa-on-coral hover:scale-105 transition-transform shadow-xl" href={waLink} target="_blank" rel="noopener">
            <WhatsAppIcon width={20} height={20} />
            Message us on WhatsApp
          </a>
        </FadeIn>
      </div>
    </section>
  );
}

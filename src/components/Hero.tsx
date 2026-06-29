import Image from "next/image";
import { waLink } from "@/lib/wa";
import { FadeIn } from "@/components/ui/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/ui/StaggerContainer";
import { WhatsAppIcon, CheckIcon, HeartIcon } from "@/components/ui/Icons";

export default function Hero() {
  return (
    <section className="hero relative" id="top">
      {/* Subtle animated background / Spotlight equivalent effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent opacity-50" aria-hidden="true" />
      
      <div className="wrap hero-grid relative z-10">
        <StaggerContainer staggerDelay={0.06}>
          <StaggerItem>
            <p className="eyebrow">Gurgaon · child-centric birthdays</p>
          </StaggerItem>
          <StaggerItem>
            <h1>Plan your child&apos;s birthday party in minutes.</h1>
          </StaggerItem>
          <StaggerItem>
            <svg className="smile" viewBox="0 0 128 34" fill="none"><path d="M4 6c20 28 100 28 120 0" stroke="#EF776E" strokeWidth="8" strokeLinecap="round"/></svg>
          </StaggerItem>
          <StaggerItem>
            <p className="tagline">Because every birthday deserves a Wow!</p>
          </StaggerItem>
          <StaggerItem>
            <p className="lede">Discover and book the right venue, food, décor, entertainment and photography, brought together around your child.</p>
          </StaggerItem>
          <StaggerItem>
            <p className="sub">Tell us your child&apos;s age, the date and your locality. We&apos;ll help you bring the whole celebration together.</p>
          </StaggerItem>
          <StaggerItem>
            <div className="hero-ctas">
              <a className="btn btn-wa group hover:scale-105 transition-transform" href={waLink} target="_blank" rel="noopener">
                <WhatsAppIcon width={20} height={20} />
                Start planning on WhatsApp
              </a>
              <a className="btn btn-outline hover:scale-105 transition-transform" href="#how">See how it works</a>
            </div>
          </StaggerItem>
          <StaggerItem>
            <p className="hero-note">
              <CheckIcon width={16} height={16} style={{ flex: 'none' }} />
              One chat. We curate the options, you choose.
            </p>
          </StaggerItem>
        </StaggerContainer>

        <FadeIn delay={0.2} direction="left" className="hero-art" aria-hidden="true">
          <div className="hero-photo hover:shadow-2xl transition-shadow duration-500">
            <Image src="/assets/photo-hero.jpg" alt="" width={500} height={440} style={{ objectFit: "cover", width: "100%", height: 440 }} priority />
            <div className="hero-photo-badge">
              <HeartIcon width={22} height={22} style={{ flex: 'none' }} />
              <span>Made for your child</span>
            </div>
          </div>
        </FadeIn>
      </div>
      <div className="curve z-20">
        <svg viewBox="0 0 1440 70" preserveAspectRatio="none" fill="#FBF7F4"><path d="M0,40 C360,80 1080,0 1440,40 L1440,70 L0,70 Z"/></svg>
      </div>
    </section>
  );
}

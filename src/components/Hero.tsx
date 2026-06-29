import Image from "next/image";
import { waLink } from "@/lib/wa";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap hero-grid">
        <div>
          <p className="eyebrow">Gurgaon · child-centric birthdays</p>
          <h1>Plan your child&apos;s birthday party in minutes.</h1>
          <svg className="smile" viewBox="0 0 128 34" fill="none"><path d="M4 6c20 28 100 28 120 0" stroke="#EF776E" strokeWidth="8" strokeLinecap="round"/></svg>
          <p className="tagline">Because every birthday deserves a Wow!</p>
          <p className="lede">Discover and book the right venue, food, décor, entertainment and photography — brought together around your child.</p>
          <p className="sub">Tell us your child&apos;s age, the date and your locality. We&apos;ll help you bring the whole celebration together.</p>
          <div className="hero-ctas">
            <a className="btn btn-wa" href={waLink} target="_blank" rel="noopener">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.945C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.51 5.26l-.999 3.648 3.738-.985zm5.422-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
              Start planning on WhatsApp
            </a>
            <a className="btn btn-outline" href="#how">See how it works</a>
          </div>
          <p className="hero-note">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5"/></svg>
            One chat. We curate the options — you choose.
          </p>
        </div>

        <div className="hero-art" aria-hidden="true">
          <div className="hero-photo">
            <Image src="/assets/photo-hero.jpg" alt="" width={500} height={440} style={{ objectFit: "cover", width: "100%", height: 440 }} />
            <div className="hero-photo-badge">
              <svg viewBox="0 0 24 24" fill="none" stroke="#EF776E" strokeWidth="2.4"><path d="M12 21C12 21 4 13.5 4 8.5A4.5 4.5 0 0112 6a4.5 4.5 0 018 2.5C20 13.5 12 21 12 21z"/></svg>
              <span>Made for your child</span>
            </div>
          </div>
        </div>
      </div>
      <div className="curve">
        <svg viewBox="0 0 1440 70" preserveAspectRatio="none" fill="#FBF7F4"><path d="M0,40 C360,80 1080,0 1440,40 L1440,70 L0,70 Z"/></svg>
      </div>
    </section>
  );
}

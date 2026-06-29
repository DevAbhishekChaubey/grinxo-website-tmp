import Image from "next/image";
import { waLink } from "@/lib/wa";
import { FadeIn } from "@/components/ui/FadeIn";
import { WhatsAppIcon } from "@/components/ui/Icons";

export default function Footer() {
  return (
    <footer>
      <FadeIn delay={0.1} direction="up" className="wrap">
        <div className="foot-grid">
          <div>
            <div className="logo">
              <Image src="/assets/logo.png" alt="GrinXO" width={100} height={30} />
            </div>
            <span className="soon-pill hover:bg-white hover:text-black transition-colors duration-300"><span className="dot"></span> Full booking platform launching soon</span>
            <p>The easiest way for parents to discover and book child-centric birthday experiences. Starting in Gurgaon, growing across Delhi NCR.</p>
          </div>
          <div>
            <h4>Explore</h4>
            <ul>
              <li><a className="hover:text-white transition-colors" href="#bring">What we do</a></li>
              <li><a className="hover:text-white transition-colors" href="#how">How it works</a></li>
              <li><a className="hover:text-white transition-colors" href="#experiences">Experiences</a></li>
              <li><a className="hover:text-white transition-colors" href="#why">Why GrinXO</a></li>
            </ul>
          </div>
          <div className="foot-contact">
            <h4>Get in touch</h4>
            <ul>
              <li><a className="hover:text-white transition-colors" href={waLink} target="_blank" rel="noopener">
                <WhatsAppIcon width={18} height={18} style={{ flex: 'none' }} />
                +91 73033 37001
              </a></li>
              <li><a className="hover:text-white transition-colors" href="mailto:hello@grinxo.com">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2z"/><path d="M22 6l-10 7L2 6"/></svg>
                hello@grinxo.com
              </a></li>
              <li style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="#EF776E" strokeWidth="2" style={{ width: 18, height: 18 }}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                Gurgaon, Delhi NCR
              </li>
            </ul>
          </div>
        </div>
        <div className="foot-bottom">
          <span>&copy; 2026 GrinXO. All rights reserved.</span>
          <span>You bring the love. GrinXO helps bring the birthday together.</span>
        </div>
        <div className="foot-credits">
          Images by <a className="hover:text-white transition-colors" href="https://www.freepik.com" target="_blank" rel="noopener">freepik</a>,
          <a className="hover:text-white transition-colors" href="https://www.freepik.com" target="_blank" rel="noopener">frimufilms</a> and
          <a className="hover:text-white transition-colors" href="https://www.freepik.com" target="_blank" rel="noopener">freepic.diller</a> on Freepik.
        </div>
      </FadeIn>
    </footer>
  );
}

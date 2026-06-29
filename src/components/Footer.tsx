import Image from "next/image";
import { waLink } from "@/lib/wa";
import { FadeIn } from "@/components/ui/FadeIn";

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
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.945C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.51 5.26l-.999 3.648 3.738-.985z"/></svg>
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

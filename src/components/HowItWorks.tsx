import { waLink } from "@/lib/wa";

export default function HowItWorks() {
  return (
    <section className="sec how" id="how">
      <div className="wrap">
        <div className="sec-head center">
          <p className="eyebrow">Simple from first idea to confirmed</p>
          <h2>How GrinXO works</h2>
          <p>We do the searching and coordinating. You make the choices that matter.</p>
        </div>
        <div className="steps">
          <div className="step">
            <div className="num">1</div>
            <h3>Tell us about your child</h3>
            <p>Share your child&apos;s age, the party date, your locality in Gurgaon and a rough guest count.</p>
          </div>
          <div className="step">
            <div className="num">2</div>
            <h3>We curate the options</h3>
            <p>We send a short, hand-picked set of venues and experiences that genuinely fit — not an endless list.</p>
          </div>
          <div className="step">
            <div className="num">3</div>
            <h3>Add food, décor &amp; more</h3>
            <p>Choose your venue, then add catering, decoration, entertainment or photography as you like.</p>
          </div>
          <div className="step">
            <div className="num">4</div>
            <h3>Confirm &amp; relax</h3>
            <p>We help you confirm the booking and coordinate with providers so the day runs smoothly.</p>
          </div>
        </div>
        <div className="how-cta">
          <a className="btn btn-wa" href={waLink} target="_blank" rel="noopener">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.945C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.51 5.26l-.999 3.648 3.738-.985zm5.422-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
            Start your plan on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

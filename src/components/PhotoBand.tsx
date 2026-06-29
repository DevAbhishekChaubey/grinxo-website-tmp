import Image from "next/image";

export default function PhotoBand() {
  return (
    <section className="photo-band">
      <Image src="/assets/photo-ribbons.jpg" alt="" fill style={{ objectFit: "cover" }} />
      <div className="photo-band-overlay">
        <div className="wrap">
          <p className="band-quote">You bring the love.<br />GrinXO helps bring the birthday together.</p>
        </div>
      </div>
    </section>
  );
}

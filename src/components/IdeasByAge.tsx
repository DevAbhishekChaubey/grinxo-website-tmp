import Image from "next/image";

const ages = [
  {
    title: "Little ones",
    desc: "Soft play, gentle activities and safe, comfortable spaces for first birthdays and toddlers.",
    src: "/assets/photo-toddler.jpg",
  },
  {
    title: "Big-kid adventures",
    desc: "Trampolines, soft-play worlds, themed parties and hands-on fun that keeps the energy high.",
    src: "/assets/photo-kid.jpg",
  },
  {
    title: "Tweens & teens",
    desc: "Gaming, VR, go-karting, bowling and mystery rooms — social, active and genuinely cool.",
    src: "/assets/photo-teen.jpg",
  },
];

export default function IdeasByAge() {
  return (
    <section className="sec ages">
      <div className="wrap">
        <div className="sec-head center">
          <p className="eyebrow">Right for every age</p>
          <h2>Birthday ideas, by age</h2>
          <p>Every age loves something different. We match the experience to where your child is right now.</p>
        </div>
        <div className="age-grid">
          {ages.map((age) => (
            <div className="age-card" key={age.title}>
              <div className="age-img">
                <Image src={age.src} alt="" width={350} height={230} style={{ objectFit: "cover", width: "100%", height: 230 }} />
                <span className="age-pill">{age.title}</span>
              </div>
              <h3>{age.title}</h3>
              <p>{age.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { FadeIn } from "@/components/ui/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/ui/StaggerContainer";

const experiences = [
  {
    name: "Trampoline parks",
    color: "#764897",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15 15 0 010 20M12 2a15 15 0 000 20" />
      </svg>
    ),
  },
  {
    name: "Gaming arcades",
    color: "#EF776E",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M6 11h4M8 9v4" />
        <circle cx="15" cy="10" r="1" />
        <circle cx="18" cy="13" r="1" />
        <rect x="2" y="6" width="20" height="12" rx="6" />
      </svg>
    ),
  },
  {
    name: "Soft play areas",
    color: "#8a5aad",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="4" y="8" width="16" height="8" rx="2" />
        <path d="M8 8V5h8v3" />
        <path d="M9 16v3M15 16v3" />
      </svg>
    ),
  },
  {
    name: "Virtual reality",
    color: "#e85f56",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="7" width="20" height="10" rx="2" />
        <path d="M6 7V5a2 2 0 012-2h8a2 2 0 012 2v2" />
      </svg>
    ),
  },
  {
    name: "Go-karting",
    color: "#EF776E",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M5 17l2-9h10l2 9" />
        <path d="M3 17h18" />
        <path d="M7 21h10" />
        <circle cx="8" cy="20" r="1" />
        <circle cx="16" cy="20" r="1" />
      </svg>
    ),
  },
  {
    name: "Bowling",
    color: "#764897",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="9" r="7" />
        <path d="M9 8h.01M15 8h.01M9 12c1 1 5 1 6 0" />
      </svg>
    ),
  },
  {
    name: "Mystery rooms",
    color: "#8a5aad",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M9 3v18M3 9h6" />
        <path d="M14 7l4 4-4 4" />
      </svg>
    ),
  },
  {
    name: "Pool parties",
    color: "#e85f56",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M2 16s2-2 5-2 5 2 5 2 2-2 5-2 5 2 5 2M2 20s2-2 5-2 5 2 5 2 2-2 5-2 5 2 5 2" />
        <circle cx="12" cy="6" r="3" />
      </svg>
    ),
  },
];

export default function Experiences() {
  return (
    <section className="sec experiences-sec" id="experiences">
      <div className="wrap">
        <FadeIn delay={0.1} direction="up" className="sec-head center">
          <p className="eyebrow">Ideas by what your child loves</p>
          <h2>Birthday experiences to explore</h2>
          <p>From little ones to teens, venues and activities suited to your child&apos;s age, energy and interests.</p>
        </FadeIn>
        <StaggerContainer className="exp-grid" staggerDelay={0.05}>
          {experiences.map((exp) => (
            <StaggerItem className="exp group hover:scale-[1.03] transition-all duration-300 hover:shadow-xl relative overflow-hidden" style={{ background: exp.color }} key={exp.name}>
              <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-300" />
              <div className="relative z-10 group-hover:scale-110 transition-transform duration-300 origin-top-left">
                {exp.svg}
              </div>
              <b className="relative z-10">{exp.name}</b>
            </StaggerItem>
          ))}
        </StaggerContainer>
        <FadeIn delay={0.2} direction="up">
          <p className="tag-soft">Also: banquet halls, hotels and farmhouses for larger celebrations. Tell us your child&apos;s interests and we&apos;ll match the experience.</p>
        </FadeIn>
      </div>
    </section>
  );
}

import { leadershipList } from "../data/portfolioData";

// ── Timeline item ───────────────────────────────────────────
function LeadershipItem({ item, index }) {
  const isEven = index % 2 === 0;

  return (
    <div className="relative flex flex-col md:flex-row md:items-center">
      {/* Red glowing dot on the line */}
      <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#ff2a2a] shadow-[0_0_12px_rgba(255,42,42,0.6)] z-10" />

      {/* Even = card LEFT, spacer RIGHT; Odd = spacer LEFT, card RIGHT */}
      {isEven ? (
        <>
          <div
            className="ml-10 md:ml-0 md:w-[45%] md:pr-10 md:text-right"
            data-aos="fade-right"
            data-aos-delay={index * 100}
          >
            <Card item={item} />
          </div>
          <div className="hidden md:block md:w-[55%]" />
        </>
      ) : (
        <>
          <div className="hidden md:block md:w-[55%]" />
          <div
            className="ml-10 md:ml-0 md:w-[45%] md:pl-10 md:text-left"
            data-aos="fade-left"
            data-aos-delay={index * 100}
          >
            <Card item={item} />
          </div>
        </>
      )}
    </div>
  );
}

// ── Card content ────────────────────────────────────────────
function Card({ item }) {
  return (
    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-red-500/30 hover:shadow-[0_0_20px_rgba(255,42,42,0.08)] transition-all duration-300">
      {/* Badge */}
      <span className="inline-block px-3 py-1 rounded-full bg-red-500/10 text-red-400 text-[10px] uppercase tracking-widest font-bold mb-3">
        {item.badge}
      </span>

      {/* Title */}
      <h3 className="text-xl font-black text-white hover:text-[#ff2a2a] transition-colors duration-300 mb-1">
        {item.title}
      </h3>

      {/* Role */}
      <p className="font-mono text-xs uppercase tracking-widest text-red-400 mb-3">
        {item.role}
      </p>

      {/* Description */}
      <p className="text-sm text-white/60 leading-relaxed">
        {item.description}
      </p>
    </div>
  );
}

// ── Leadership section ──────────────────────────────────────
// Dark section with a vertical timeline of activities. Hidden when empty.
export default function Leadership() {
  // Don't render the section if there are no activities
  if (!leadershipList || leadershipList.length === 0) return null;

  return (
    <section className="bg-[#0a0a0a] bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px] pt-24 pb-32 px-6 md:px-12 relative overflow-hidden">
      {/* ── Torn-paper top divider (red → dark) ── */}
      <div className="absolute top-0 left-0 w-full rotate-180 -translate-y-[1px] leading-none">
        <svg
          className="w-full h-12 md:h-20"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          fill="#ff2a2a"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z" />
        </svg>
      </div>

      <div className="max-w-5xl mx-auto">
        {/* ── Header ── */}
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white/70 text-xs uppercase tracking-widest font-semibold mb-4">
            Activities
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase">
            Leadership & Engagement
          </h2>
          <p className="text-white/50 mt-3 max-w-lg mx-auto">
            Communities, events, and initiatives I&apos;ve been part of.
          </p>
        </div>

        {/* ── Vertical timeline ── */}
        <div className="relative">
          {/* Centre / left line */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#ff2a2a] via-red-500/50 to-white/10" />

          <div className="flex flex-col gap-12">
            {leadershipList.map((item, index) => (
              <LeadershipItem key={item.title} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

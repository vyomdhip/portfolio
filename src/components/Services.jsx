import { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useMotionValueEvent,
} from "framer-motion";
import { skillsContent } from "../data/portfolioData";

// ── Hanging Tag Card ────────────────────────────────────────
function TagCard({
  number,
  title,
  text,
  className = "",
  aosDelay = 0,
  aosType = "fade-up",
  pathLength,
  containerRef,
}) {
  const [isActive, setIsActive] = useState(false);
  const cardRef = useRef(null);

  useMotionValueEvent(pathLength, "change", (latest) => {
    if (containerRef.current && cardRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const cardRect = cardRef.current.getBoundingClientRect();
      const cardTop = cardRect.top - containerRect.top + 50;
      const currentLineY = latest * containerRect.height;
      setIsActive(currentLineY >= cardTop);
    }
  });

  return (
    <div
      ref={cardRef}
      data-aos={aosType}
      data-aos-delay={aosDelay}
      className={`w-72 sm:w-80 rounded-[2rem] p-2 transition-all duration-700 ${
        isActive
          ? "bg-[#ff2a2a] shadow-[0_0_40px_rgba(255,42,42,0.4)] text-white"
          : "bg-white shadow-[0_10px_30px_rgba(0,0,0,0.06)] text-gray-900 border border-gray-100"
      } ${className}`}
    >
      {/* Punched hole circle at the top */}
      <div
        className={`mx-auto w-4 h-4 rounded-full border-2 transition-colors duration-700 ${
          isActive
            ? "bg-red-800 border-white/50"
            : "bg-gray-200 border-gray-300"
        }`}
      />

      {/* Inner panel */}
      <div
        className={`mt-8 p-8 min-h-[220px] rounded-[1.5rem] transition-colors duration-700 ${
          isActive ? "bg-red-700/50 text-white" : "bg-[#f4f4f4] text-gray-600"
        }`}
      >
        <p
          className={`font-serif italic text-4xl font-black select-none mb-2 ${
            isActive ? "text-white/80" : "text-gray-400"
          }`}
        >
          {number}
        </p>
        <h3
          className={`text-2xl font-black mb-3 ${
            isActive ? "text-white" : "text-gray-900"
          }`}
        >
          {title}
        </h3>
        <p className="text-sm leading-relaxed">{text}</p>
      </div>
    </div>
  );
}

// ── Process / Services Section ──────────────────────────────
export default function Services() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const pathLength = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 20,
    restDelta: 0.001,
  });

  // Desktop card positioning & tilts
  const cardConfigs = [
    {
      className:
        "md:absolute md:top-[10px] md:right-[5%] lg:right-[10%] rotate-2 md:rotate-6",
      aosType: "fade-left",
      aosDelay: 100,
    },
    {
      className:
        "md:absolute md:top-[450px] md:left-[5%] lg:left-[10%] -rotate-2 md:-rotate-6",
      aosType: "fade-right",
      aosDelay: 200,
    },
    {
      className:
        "md:absolute md:top-[700px] md:right-[5%] lg:right-[15%] rotate-1 md:rotate-3",
      aosType: "fade-left",
      aosDelay: 300,
    },
    {
      className:
        "md:absolute md:top-[1050px] md:left-[15%] lg:left-[25%] -rotate-1 md:-rotate-3",
      aosType: "fade-right",
      aosDelay: 400,
    },
  ];

  const desktopD =
    "M 650,200 C 400,300 200,400 300,600 C 400,800 750,750 700,950 C 650,1150 400,1150 300,1200";

  return (
    <section
      id="process"
      ref={containerRef}
      className="bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px] pt-24 pb-32 px-6 md:px-12 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto relative md:h-[1350px]">
        {/* ── Header block ── */}
        <div
          data-aos="fade-up"
          className="mb-12 md:mb-0 md:absolute top-10 left-0 md:w-[450px] z-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-gray-100 border border-gray-200 text-gray-700 text-xs uppercase tracking-widest font-semibold mb-4">
            {skillsContent.badge}
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] text-gray-900 relative">
            {skillsContent.heading}
            {/* Small hand-drawn arrow */}
            <svg
              className="inline-block w-8 h-8 ml-2 text-black align-bottom"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 4 Q 10 10 15 15 M 15 15 L 10 15 M 15 15 L 15 10" />
            </svg>
          </h2>
          <p className="text-gray-500 mt-4 leading-relaxed">
            {skillsContent.description}
          </p>
        </div>

        {/* ── Desktop SVG dashed progress path ── */}
        <svg
          className="hidden md:block absolute top-0 left-0 w-full h-[1350px] pointer-events-none z-0"
          viewBox="0 0 1000 1350"
          preserveAspectRatio="none"
        >
          {/* Faint guide path */}
          <path
            d={desktopD}
            fill="none"
            stroke="#cbd5e1"
            strokeWidth="2"
            strokeDasharray="8 10"
          />

          <defs>
            <mask id="path-mask">
              <motion.path
                d={desktopD}
                fill="none"
                stroke="white"
                strokeWidth="20"
                style={{ pathLength }}
              />
            </mask>
          </defs>

          {/* Masked real dashed path */}
          <path
            d={desktopD}
            fill="none"
            stroke="black"
            strokeWidth="2"
            strokeDasharray="8 10"
            mask="url(#path-mask)"
          />
        </svg>

        {/* ── Mobile SVG vertical dashed progress path ── */}
        <svg
          className="md:hidden absolute top-0 left-1/2 -translate-x-1/2 w-4 h-full pointer-events-none z-0"
          viewBox="0 0 4 100"
          preserveAspectRatio="none"
        >
          {/* Faint guide path */}
          <path
            d="M 2,0 L 2,100"
            fill="none"
            stroke="#cbd5e1"
            strokeWidth="2"
            strokeDasharray="4 6"
            vectorEffect="non-scaling-stroke"
          />

          <defs>
            <mask id="path-mask-mobile">
              <motion.path
                d="M 2,0 L 2,100"
                fill="none"
                stroke="white"
                strokeWidth="20"
                vectorEffect="non-scaling-stroke"
                style={{ pathLength }}
              />
            </mask>
          </defs>

          {/* Masked real dashed path */}
          <path
            d="M 2,0 L 2,100"
            fill="none"
            stroke="black"
            strokeWidth="2"
            strokeDasharray="4 6"
            mask="url(#path-mask-mobile)"
            vectorEffect="non-scaling-stroke"
          />
        </svg>

        {/* ── Process Cards ── */}
        <div className="flex flex-col gap-8 md:gap-12 items-center md:block relative z-10">
          {skillsContent.cards.map((card, index) => {
            const config = cardConfigs[index] || {};
            return (
              <TagCard
                key={card.number}
                number={card.number}
                title={card.title}
                text={card.text}
                className={config.className}
                aosDelay={config.aosDelay}
                aosType={config.aosType}
                pathLength={pathLength}
                containerRef={containerRef}
              />
            );
          })}
        </div>

        {/* ── Hand-written end note ── */}
        <div className="hidden md:block absolute top-[1250px] left-[60%] font-['Caveat',cursive] text-3xl text-gray-600 rotate-6 select-none pointer-events-none">
          {skillsContent.endText}
        </div>
      </div>
    </section>
  );
}

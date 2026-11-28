import { useState } from "react";
import { motion } from "framer-motion";
import QRCode from "react-qr-code";
import stackImage from "../assets/about/profile.png";
import { aboutContent, personalInfo, socialLinks } from "../data/portfolioData";

// ── About section ───────────────────────────────────────────
// Red section with an animated flip-card ID badge and bio text.
export default function About() {
  const [flipped, setFlipped] = useState(false);

  // QR code links to LinkedIn, falls back to email
  const qrValue =
    socialLinks.linkedin || `mailto:${personalInfo.emails.primary}`;

  return (
    <section
      id="about"
      className="bg-[#ff2a2a] pt-20 pb-40 px-6 md:px-12 relative overflow-hidden"
    >
      {/* ── Decorative 4-point stars ── */}
      <svg
        className="absolute top-10 right-10 w-10 h-10 text-black opacity-30 animate-pulse"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z" />
      </svg>
      <svg
        className="absolute bottom-32 left-10 w-8 h-8 text-black opacity-30 animate-pulse"
        style={{ animationDelay: "1s" }}
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z" />
      </svg>

      {/* ── Inner layout ── */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-start">
        {/* ── Left — ID badge on a lanyard (flip card) ── */}
        <motion.div
          className="w-full md:w-[350px] shrink-0 relative flex flex-col items-center pt-32"
          initial={{ y: -300, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            type: "spring",
            stiffness: 110,
            damping: 9,
            mass: 1.1,
          }}
        >
          {/* Lanyard string */}
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-3 h-60 bg-black rounded-b-sm" />

          {/* Clip */}
          <div className="absolute top-[110px] left-1/2 -translate-x-1/2 w-10 h-5 bg-gray-400 rounded-sm z-10" />

          {/* ── Flip-card wrapper ── */}
          <button
            type="button"
            aria-label="Flip ID card"
            aria-pressed={flipped}
            onClick={() => setFlipped((prev) => !prev)}
            className="relative w-[280px] max-w-full -rotate-3 hover:rotate-0 transition-transform duration-500 [perspective:1200px] focus:outline-none cursor-pointer"
          >
            {/* Inner rotating plane */}
            <div
              className="relative w-full aspect-[3/4] transition-transform duration-700 [transform-style:preserve-3d]"
              style={{
                transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
              }}
            >
              {/* ── FRONT face — photo badge ── */}
              <div className="absolute inset-0 [backface-visibility:hidden]">
                <div className="w-full h-full bg-gray-900 rounded-2xl p-3 shadow-[0_20px_60px_rgba(0,0,0,0.5)] flex flex-col overflow-hidden">
                  {/* Top cutout slot */}
                  <div className="mx-auto w-12 h-3 bg-gray-700 rounded-full mb-3 shrink-0" />
                  {/* Photo */}
                  <img
                    src={stackImage}
                    alt="Vyomdhip P — Java Full Stack Developer, TAP Academy student"
                    className="w-full flex-1 min-h-0 rounded-xl object-cover object-top"
                  />
                </div>
              </div>

              {/* ── BACK face — visiting card ── */}
              <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)]">
                <div className="w-full h-full bg-gradient-to-br from-[#141414] to-[#1f1f1f] rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.5)] flex flex-col overflow-hidden">
                  {/* Red accent bar */}
                  <div className="w-full h-1.5 bg-[#ff2a2a] shrink-0" />

                  <div className="p-5 flex flex-col justify-between flex-1 text-left">
                    {/* Name & title */}
                    <div>
                      <p className="text-xl font-black text-white">
                        {personalInfo.brandName}
                        <span className="text-[#ff2a2a]">.</span>
                      </p>
                      <p className="text-xs uppercase tracking-widest text-red-400 mt-1">
                        {personalInfo.title}
                      </p>
                    </div>

                    {/* Divider */}
                    <div className="border-t border-white/10 my-3" />

                    {/* Contact rows */}
                    <div className="flex flex-col gap-2">
                      {/* Email */}
                      {personalInfo.emails.primary && (
                        <a
                          href={`mailto:${personalInfo.emails.primary}`}
                          onClick={(e) => e.stopPropagation()}
                          className="flex items-center gap-2 text-xs text-white/85 hover:text-white transition-colors"
                        >
                          <svg className="w-4 h-4 text-red-400 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                          <span className="truncate">{personalInfo.emails.primary}</span>
                        </a>
                      )}

                      {/* Phone */}
                      {personalInfo.phone && (
                        <a
                          href={`tel:${personalInfo.phone}`}
                          onClick={(e) => e.stopPropagation()}
                          className="flex items-center gap-2 text-xs text-white/85 hover:text-white transition-colors"
                        >
                          <svg className="w-4 h-4 text-red-400 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                          {personalInfo.phone}
                        </a>
                      )}

                      {/* Location */}
                      {personalInfo.location && (
                        <span className="flex items-center gap-2 text-xs text-white/85">
                          <svg className="w-4 h-4 text-red-400 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          {personalInfo.location}
                        </span>
                      )}

                      {/* LinkedIn */}
                      {socialLinks.linkedin && (
                        <a
                          href={socialLinks.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="flex items-center gap-2 text-xs text-white/85 hover:text-white transition-colors"
                        >
                          <svg className="w-4 h-4 text-red-400 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                          </svg>
                          LinkedIn
                        </a>
                      )}

                      {/* GitHub */}
                      {socialLinks.github && (
                        <a
                          href={socialLinks.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="flex items-center gap-2 text-xs text-white/85 hover:text-white transition-colors"
                        >
                          <svg className="w-4 h-4 text-red-400 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                          </svg>
                          GitHub
                        </a>
                      )}
                    </div>

                    {/* QR code */}
                    <div className="flex items-center gap-3 mt-auto pt-3">
                      <div
                        className="bg-white rounded-lg p-2 shrink-0"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <QRCode value={qrValue} size={76} />
                      </div>
                      <span className="text-[10px] text-white/60">
                        Scan to
                        <br />
                        connect
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </button>

          {/* Flip hint */}
          <p className="text-xs font-bold text-black/60 mt-4">
            Tap the card to flip ↻
          </p>
        </motion.div>

        {/* ── Right — heading & bio ── */}
        <div data-aos="fade-left">
          <h2 className="text-4xl md:text-5xl font-black text-black mb-6">
            {aboutContent.heading}
          </h2>
          <p
            className="text-lg font-bold leading-relaxed text-red-50"
            dangerouslySetInnerHTML={{ __html: aboutContent.bio }}
          />
        </div>
      </div>

      {/* ── Torn-paper divider ── */}
      <div className="absolute bottom-0 left-0 w-full leading-none">
        <svg
          className="w-full h-auto"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          fill="white"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z" />
        </svg>
      </div>
    </section>
  );
}

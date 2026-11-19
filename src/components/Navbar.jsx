import { useState, useEffect } from "react";
import { personalInfo } from "../data/portfolioData";

// ── Navigation bar ──────────────────────────────────────────
// Fixed top bar with scroll-aware styling & mobile drawer.
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Track scroll position to toggle navbar background
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = ["Home", "About", "Skills", "Projects", "Contact"];

  const hireMeMailto = `mailto:${personalInfo.emails.primary}?subject=Hiring Inquiry – Portfolio&body=Hello ${personalInfo.name},%0D%0A%0D%0AI came across your portfolio and would like to discuss an opportunity with you.%0D%0A%0D%0ALooking forward to hearing from you.%0D%0ABest Regards,`;

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isOpen
          ? "bg-[#ff2a2a] py-4"
          : isScrolled
            ? "bg-transparent py-4"
            : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* ── Logo ── */}
        <a href="#" className="text-white text-2xl font-black">
          {personalInfo.brandName}
          <span className="text-red-500">.</span>
        </a>

        {/* ── Desktop links (centre) ── */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="group relative text-white/80 hover:text-white font-medium transition-colors"
            >
              {link}
              {/* animated underline */}
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-red-500 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* ── Hire Me pill (desktop) ── */}
        <a
          href={hireMeMailto}
          className="hidden md:block px-6 py-2.5 rounded-full bg-white/10 border border-white/20 text-white font-semibold backdrop-blur-md hover:bg-white/20 hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] transition-all duration-300"
        >
          Hire Me
        </a>

        {/* ── Hamburger button (mobile) ── */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            // X icon
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            // Hamburger icon
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* ── Mobile dropdown ── */}
      <div
        className={`md:hidden absolute top-full w-full bg-[#ff2a2a] shadow-2xl overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-6 pt-2 flex flex-col">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="text-white font-bold text-lg py-3 border-b border-white/20 hover:text-black transition-colors"
            >
              {link}
            </a>
          ))}

          {/* Full-width Hire Me button */}
          <a
            href={hireMeMailto}
            className="mt-4 block w-full text-center py-3 rounded-full bg-white text-red-500 font-bold text-lg hover:bg-gray-100 transition-colors"
          >
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  );
}

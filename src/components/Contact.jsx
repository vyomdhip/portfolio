import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  emailjsConfig,
  personalInfo,
  socialLinks,
} from "../data/portfolioData";

// ── Contact Section ─────────────────────────────────────────
// Full-bleed dark section with parallax backdrop word and red card form.
export default function Contact() {
  const ref = useRef(null);
  const formRef = useRef(null);
  const [status, setStatus] = useState("idle"); // 'idle' | 'sending' | 'success' | 'error'

  // Parallax scroll effect for the giant backdrop typography
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "30%"]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === "sending") return;

    setStatus("sending");

    const form = formRef.current;
    if (!form) return;

    const firstName = form.querySelector("#firstName")?.value?.trim() || "";
    const lastName = form.querySelector("#lastName")?.value?.trim() || "";
    const email = form.querySelector("#email")?.value?.trim() || "";
    const message = form.querySelector("#message")?.value?.trim() || "";

    if (!firstName || !email || !message) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
      return;
    }

    const { serviceId, templateId, publicKey } = emailjsConfig;
    const isConfigured =
      Boolean(serviceId) &&
      Boolean(templateId) &&
      Boolean(publicKey) &&
      serviceId !== "YOUR_EMAILJS_SERVICE_ID" &&
      templateId !== "YOUR_EMAILJS_TEMPLATE_ID" &&
      publicKey !== "YOUR_EMAILJS_PUBLIC_KEY";

    if (!isConfigured) {
      // Fallback to mailto draft if EmailJS variables are not set
      const mailtoUrl = `mailto:${personalInfo.emails.primary}?subject=${encodeURIComponent(
        `Portfolio Contact from ${firstName} ${lastName}`.trim()
      )}&body=${encodeURIComponent(
        `From: ${firstName} ${lastName}\nEmail: ${email}\n\n${message}`
      )}`;

      window.open(mailtoUrl, "_blank");
      setStatus("success");
      form.reset();
      setTimeout(() => setStatus("idle"), 3000);
      return;
    }

    try {
      const emailjs = await import("@emailjs/browser");
      await emailjs.sendForm(
        serviceId,
        templateId,
        formRef.current,
        publicKey
      );
      setStatus("success");
      form.reset();
    } catch (err) {
      console.error("EmailJS submission error:", err);
      setStatus("error");
    } finally {
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <section
      ref={ref}
      id="contact"
      className="bg-[#0a0a0a] w-full min-h-screen relative overflow-hidden flex items-end pt-32 border-t border-gray-900"
    >
      {/* ── Background Parallax Typography (Behind) ── */}
      <motion.div
        style={{ y }}
        className="absolute top-8 left-0 w-full pointer-events-none z-0 overflow-hidden"
      >
        <div
          className="text-[25vw] leading-[0.75] font-black uppercase tracking-tighter select-none scale-y-[1.6] origin-top text-white/5 whitespace-nowrap pl-4"
          style={{ fontFamily: "'Impact', 'Arial Black', sans-serif" }}
        >
          Contact
        </div>
      </motion.div>

      {/* ── In Front: Red Card Form ── */}
      <div
        data-aos="fade-up"
        className="relative z-10 bg-[#ff2a2a] w-full md:w-[85%] lg:w-[75%] ml-auto p-8 md:p-16 rounded-tl-[3rem] shadow-2xl"
      >
        {/* Header row */}
        <div className="flex items-center justify-between pb-8 border-b border-white/20">
          <span className="text-xs uppercase tracking-[0.2em] text-white/90 font-bold">
            Reach Me
          </span>
          {socialLinks.instagram && (
            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full bg-white/20 hover:bg-white text-white hover:text-[#ff2a2a] text-xs font-bold uppercase tracking-wider transition-all duration-300"
            >
              DM on Instagram
            </a>
          )}
        </div>

        {/* Contact form */}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col gap-12 mt-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Left column — inputs */}
            <div className="flex flex-col gap-8">
              <div>
                <input
                  id="firstName"
                  name="first_name"
                  type="text"
                  placeholder="First Name *"
                  aria-label="First Name"
                  required
                  className="w-full bg-transparent border-b border-white/40 pb-3 text-lg placeholder-white text-white focus:border-white focus:outline-none transition-colors"
                />
              </div>
              <div>
                <input
                  id="lastName"
                  name="last_name"
                  type="text"
                  placeholder="Last Name"
                  aria-label="Last Name"
                  className="w-full bg-transparent border-b border-white/40 pb-3 text-lg placeholder-white text-white focus:border-white focus:outline-none transition-colors"
                />
              </div>
              <div>
                <input
                  id="email"
                  name="user_email"
                  type="email"
                  placeholder="Email Address *"
                  aria-label="Email Address"
                  required
                  className="w-full bg-transparent border-b border-white/40 pb-3 text-lg placeholder-white text-white focus:border-white focus:outline-none transition-colors"
                />
              </div>
            </div>

            {/* Right column — textarea */}
            <div className="flex flex-col">
              <textarea
                id="message"
                name="message"
                placeholder="Your Message *"
                aria-label="Your Message"
                required
                className="w-full bg-transparent border-b border-white/40 pb-3 text-lg placeholder-white text-white focus:border-white focus:outline-none resize-none min-h-[120px] h-full transition-colors"
              />
            </div>
          </div>

          {/* Bottom row — consent, note & submit */}
          <div className="flex flex-col gap-6 pt-6 border-t border-white/20">
            {/* Permission checkbox */}
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="consent"
                required
                className="mt-1 accent-black w-4 h-4 rounded cursor-pointer"
              />
              <label
                htmlFor="consent"
                className="text-xs text-white/90 cursor-pointer select-none leading-relaxed"
              >
                I agree that my submitted data will be collected and stored for communication purposes.
              </label>
            </div>

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pt-2">
              <div className="flex flex-col gap-1 text-xs text-white/80 max-w-md">
                <p>
                  Your message will be sent directly to my inbox. I typically respond within 24-48 hours.
                </p>
                <p>
                  Need urgent response? Email me directly at{" "}
                  <a
                    href={`mailto:${personalInfo.emails.primary}`}
                    className="underline font-bold text-white hover:text-black transition-colors"
                  >
                    {personalInfo.emails.primary}
                  </a>
                </p>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === "sending"}
                className={`px-8 py-4 rounded-full border font-bold text-base transition-all duration-300 flex items-center justify-center gap-3 shrink-0 ${
                  status === "sending"
                    ? "bg-white/20 border-white/40 text-white cursor-not-allowed"
                    : status === "success"
                      ? "bg-emerald-600 border-emerald-600 text-white cursor-default"
                      : status === "error"
                        ? "bg-red-950 border-red-900 text-white"
                        : "group bg-transparent border-white text-white hover:bg-white hover:text-[#ff2a2a] cursor-pointer"
                }`}
              >
                {status === "sending" && (
                  <>
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v8H4z"
                      />
                    </svg>
                    <span>Sending...</span>
                  </>
                )}
                {status === "success" && <span>Sent Successfully ✓</span>}
                {status === "error" && <span>Failed — Try Again</span>}
                {status === "idle" && (
                  <>
                    <span>Send Message</span>
                    <svg
                      className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </>
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

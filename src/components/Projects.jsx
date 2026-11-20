import { projects, socialLinks } from "../data/portfolioData";

// ── Inline SVG icons ────────────────────────────────────────
function GitHubIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

function ExternalLinkIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
    </svg>
  );
}

// ── Project card ────────────────────────────────────────────
function ProjectCard({ project, aosDelay }) {
  const borderClass = project.isFlagship
    ? "bg-gradient-to-r from-red-500/50 via-white/10 to-red-500/30 hover:from-red-500/70 hover:via-white/20 hover:to-red-500/50"
    : "bg-white/10 hover:bg-white/15";

  return (
    <div data-aos="fade-up" data-aos-delay={aosDelay}>
      {/* Gradient border wrapper */}
      <div className={`p-[1px] rounded-2xl transition-all duration-300 ${borderClass}`}>
        {/* Inner panel */}
        <div className="rounded-2xl p-6 md:p-8 backdrop-blur-md bg-[#0f0f0f]/90">
          {/* Badge */}
          {project.badge && (
            <span className="inline-block px-3 py-1 rounded-full bg-red-500/10 text-red-400 text-xs uppercase tracking-widest font-bold mb-4">
              {project.badge}
            </span>
          )}

          {/* Number + title row */}
          <div className="flex items-baseline gap-4 mb-4">
            <span className="text-5xl font-black text-white/10 italic font-serif select-none leading-none">
              {project.number}
            </span>
            <h3 className="text-2xl md:text-3xl font-black text-white">
              {project.title}
            </h3>
          </div>

          {/* Description */}
          <p className="text-white/60 mb-6 max-w-2xl leading-relaxed">
            {project.description}
          </p>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.techTags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-white/70 hover:bg-red-600/20 hover:text-red-400 hover:border-red-500/30 transition-all duration-300"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap gap-3">
            {/* GitHub button */}
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/15 text-white text-sm font-semibold hover:bg-white/10 hover:border-white/30 transition-all duration-300"
              >
                <GitHubIcon className="w-4 h-4" />
                GitHub
              </a>
            )}

            {/* Demo button */}
            {project.links.demo ? (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-red-600 text-white text-sm font-semibold hover:bg-red-700 hover:shadow-[0_0_20px_rgba(255,42,42,0.3)] transition-all duration-300"
              >
                Live Demo
                <ExternalLinkIcon className="w-4 h-4" />
              </a>
            ) : (
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-white/30 text-sm font-semibold cursor-not-allowed"
              >
                Demo Coming Soon
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Projects section ────────────────────────────────────────
// Dark section with project cards and a link to GitHub.
export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-[#0a0a0a] bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px] pt-24 pb-32 px-6 md:px-12"
    >
      <div className="max-w-6xl mx-auto">
        {/* ── Header ── */}
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white/70 text-xs uppercase tracking-widest font-semibold mb-4">
            Featured Projects
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white">
            Work that speaks for itself
          </h2>
          <p className="text-white/50 mt-4 max-w-lg mx-auto">
            A selection of projects I&apos;ve built, from full-stack apps to
            data-driven tools.
          </p>
        </div>

        {/* ── Project cards ── */}
        <div className="flex flex-col gap-6 md:gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              aosDelay={(index + 1) * 100}
            />
          ))}
        </div>

        {/* ── Explore all repos ── */}
        <div className="text-center mt-14" data-aos="fade-up" data-aos-delay="200">
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/15 text-white font-semibold hover:bg-white/10 hover:border-white/30 transition-all duration-300"
          >
            <GitHubIcon className="w-5 h-5" />
            Explore All My Repositories
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// portfolioData.js — Single source of truth for all portfolio content
// This one file controls ALL the text and links on the website.
// ============================================================

export const personalInfo = {
  name: "Vyomdhip P",
  firstName: "Vyomdhip P",
  brandName: "Vyomdhip P", // shown in the preloader, navbar and footer
  title: "Java Full Stack Developer",
  location: "Bengaluru, India",
  phone: "",
  emails: {
    primary: "vyomdhip1132003@gmail.com",
    secondary: "",
  },
  summary:
    "I'm a recent B.E. Computer Science and Engineering graduate from Rajarajeswari College of Engineering, passionate about software development, problem-solving, and continuously learning new technologies to build meaningful solutions.",
  resumeUrl: "/vyomdhip_resume.pdf", // put the PDF inside /public
};

// TAP Academy — the academy you trained with. Used in the footer credit.
export const academy = {
  name: "TAP Academy",
  url: "https://thetapacademy.com/",
};

export const socialLinks = {
  github: "https://github.com/vyomdhip",
  linkedin: "https://www.linkedin.com/in/vyomdhip-p",
  instagram: "",
};

export const heroContent = {
  greeting: "Hi, I'm Vyomdhip P",
  titleHighlight: "Java Full Stack Developer",
  subtitle:
    "Building full-stack web applications with Java and the MERN stack that solve real-world problems and deliver great user experiences.",
  ctaPrimary: { text: "View My Work", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: "mailto:vyomdhip1132003@gmail.com?subject=Hiring Inquiry – Portfolio&body=Hello,%0D%0A%0D%0AI came across your portfolio and would like to discuss an opportunity with you.%0D%0A%0D%0ABest Regards,",
  },
  ctaResume: { text: "Download Resume", href: "/vyomdhip_resume.pdf" },
};

export const aboutContent = {
  heading: "Hello!",
  // HTML is allowed here (rendered with dangerouslySetInnerHTML) — keep it YOUR OWN trusted text.
  bio: `Hi, I'm <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Vyomdhip P</span>, a Java Full Stack Developer based in Bengaluru who thrives at the intersection of logic and creativity. With a B.E. in Computer Science from Rajarajeswari College of Engineering, I build full-stack applications that solve real problems — currently sharpening my skills through the placement training program at TAP Academy. Outside of development, I sharpen my strategic thinking through chess, express my creative side through video editing, and constantly explore new ways to design engaging web experiences.`,
  techStack: ["Java", "React", "Node.js", "MongoDB"],
};

export const skillsContent = {
  badge: "My Process",
  heading: "Here's how I turn ideas into real-world products",
  description:
    "A structured approach from understanding the problem to shipping reliable solutions.",
  cards: [
    {
      number: "01",
      title: "Research",
      text: "I dive deep into the problem space, study user needs, and evaluate technologies that fit the project scope.",
    },
    {
      number: "02",
      title: "Design",
      text: "I sketch out system architecture, design REST APIs, and create UI layouts that prioritize usability.",
    },
    {
      number: "03",
      title: "Develop",
      text: "I write modular, well-documented code — building features incrementally and testing at every stage.",
    },
    {
      number: "04",
      title: "Deploy",
      text: "I deploy to cloud platforms, set up monitoring, and iterate based on real-world feedback.",
    },
  ],
  endText: "Ready to ship!",
};

export const technicalSkills = {
  categories: [
    {
      title: "Programming",
      skills: [{ name: "Java" }, { name: "JavaScript" }, { name: "Python" }],
    },
    {
      title: "Web Development",
      skills: [
        { name: "React.js" },
        { name: "Node.js" },
        { name: "Express.js" },
        { name: "HTML & CSS" },
      ],
    },
    {
      title: "Databases",
      skills: [{ name: "MongoDB" }, { name: "SQL" }, { name: "DBMS" }],
    },
    {
      title: "Tools & Cloud",
      skills: [
        { name: "Git & GitHub" },
        { name: "AWS" },
        { name: "REST APIs" },
      ],
    },
  ],
};

export const leadershipList = [];

export const internshipsList = [
  {
    organization: "SuprMentr Technologies Pvt. Ltd.",
    role: "MERN Stack Development Intern",
    duration: "Feb 2026 - May 2026",
    skills: [
      "Frontend Development",
      "Backend Development",
      "REST API Design",
      "Database Integration",
      "Authentication",
      "Responsive UI",
    ],
    tech: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "JavaScript",
      "REST APIs",
      "Git & GitHub",
    ],
  },
];

export const softSkillsList = [
  {
    name: "Team Collaboration",
    icon: "🤝",
    desc: "Coordinated with mentors and peers during my MERN stack internship, contributing to shared codebases and collaborative code reviews.",
  },
  {
    name: "Communication",
    icon: "💬",
    desc: "I document my code thoroughly and explain technical decisions clearly, ensuring smooth handoffs and knowledge sharing.",
  },
  {
    name: "Adaptability",
    icon: "🔄",
    desc: "Transitioned between multiple tech stacks — Java, MERN, and Python ML — adapting quickly to each project's unique requirements.",
  },
  {
    name: "Creativity",
    icon: "🎨",
    desc: "I combine my passion for video editing and design with development, crafting visually compelling and user-friendly web experiences.",
  },
];

export const projects = [
  {
    id: "subtrackr",
    number: "01",
    badge: "🚀 Flagship Project",
    title: "SubTrackr – Subscription Management App",
    description:
      "Full-stack application to track subscriptions, manage recurring expenses, receive renewal reminders, view analytics, and generate PDF reports.",
    techTags: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Recharts",
    ],
    links: {
      github: "https://github.com/vyomdhip",
      demo: "https://subscription-management-app-2hk9.onrender.com/login",
    },
    isFlagship: true,
  },
  {
    id: "buzzlocator",
    number: "02",
    badge: null,
    title: "BuzzLocator – Business Location Recommender",
    description:
      "Recommends suitable business locations by analyzing demand, footfall, income, competition, rent, and other factors to support investment decisions.",
    techTags: [
      "Python",
      "Streamlit",
      "FastAPI",
      "Pandas",
      "Scikit-learn",
      "Machine Learning",
    ],
    links: {
      github: "https://github.com/vyomdhip",
      demo: "",
    },
    isFlagship: false,
  },
  {
    id: "global-military-intelligence",
    number: "03",
    badge: null,
    title: "Global Military Intelligence",
    description:
      "Interactive defense analysis portal featuring military inventories, geographical maps, conflict tracking, military news, and nation comparisons.",
    techTags: [
      "HTML",
      "CSS",
      "JavaScript",
      "Leaflet.js",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    links: {
      github: "https://github.com/vyomdhip",
      demo: "",
    },
    isFlagship: false,
  },
];

// Used only by the optional Certificates component (bonus step)
export const certificates = {
  featured: [],
  viewAllUrl: "https://www.linkedin.com/in/vyomdhip-p",
};

export const education = {
  degree: "B.E. Computer Science and Engineering",
  institution: "Rajarajeswari College of Engineering",
  cgpa: "2022 - 2026",
  graduation: "2026",
  twelfth: "",
  tenth: "",
};

export const footerContent = {
  taglines: [
    "Java Full Stack Developer",
    "MERN · Java · Cloud",
    "Building meaningful web solutions",
  ],
  credential: "B.E. Computer Science and Engineering",
  copyright: `© ${new Date().getFullYear()} Vyomdhip P | Built with React`,
};

// EmailJS — read from .env.local (variables must start with VITE_)
export const emailjsConfig = {
  serviceId:
    import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId:
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey:
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};

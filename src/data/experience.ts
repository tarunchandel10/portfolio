export interface Experience {
  role: string;
  company: string;
  location: string;
  duration: string;
  description: string;
  tech: string[];
}

export const experiences: Experience[] = [
  {
    role: "Senior Developer (Frontend Developer)",
    company: "RAMP Infotech",
    location: "Noida, India",
    duration: "September 2025 — March 2026",
    description:
      "Built modern CRM interfaces with clean, user-focused UI/UX and responsive layouts, developed scalable components with Tailwind CSS, and integrated APIs to power dynamic, data-driven features.",
    tech: ["HTML", "CSS", "JavaScript", "React.js", "Tailwind CSS"],
  },
  {
    role: "Frontend Developer (Remote)",
    company: "Holiday Factory",
    location: "Dubai, U.A.E",
    duration: "October 2022 — September 2025",
    description:
      "Developed and maintained responsive web applications, collaborated with cross-functional teams on scalable front-end architectures, and ensured performance optimization and cross-browser compatibility.",
    tech: ["JavaScript", "jQuery", "HTML", "CSS"],
  },
  {
    role: "Frontend Developer",
    company: "Deepdive Media Pvt Ltd",
    location: "Mohali, India",
    duration: "March 2022 — September 2022",
    description:
      "Built and optimized web applications, working closely with UX/UI designers to translate wireframes into high-quality code, and resolved front-end issues to improve overall user experience.",
    tech: ["React.js", "Next.js", "HTML", "CSS", "Bootstrap"],
  },
  {
    role: "Frontend Developer",
    company: "Five Rivers Solutions",
    location: "Mohali, India",
    duration: "May 2021 — March 2022",
    description:
      "Developed responsive, user-friendly web apps and optimized applications for performance and scalability.",
    tech: ["Umbraco", "HTML", "CSS", "JavaScript", "jQuery", "Bootstrap"],
  },
  {
    role: "Frontend Developer",
    company: "Uniconserve",
    location: "Mohali, India",
    duration: "November 2019 — December 2020",
    description:
      "Designed and developed responsive web apps, and created engaging social media visuals to support brand visibility and marketing efforts.",
    tech: ["WordPress", "HTML", "CSS", "JavaScript", "jQuery", "Bootstrap"],
  },
  {
    role: "Frontend Developer",
    company: "Cyberorama",
    location: "Ghumarwin, India",
    duration: "May 2019 — October 2020, January 2021 — April 2021",
    description:
      "Created custom WordPress templates and themes for tailored website layouts, designed responsive email templates compatible with major clients, and produced website imagery to enhance visual appeal.",
    tech: ["WordPress", "HTML", "CSS", "Photoshop"],
  },
];

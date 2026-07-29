export interface SkillCategory {
  title: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "jQuery", "React.js", "Next.js", "Tailwind CSS", "Bootstrap", "SCSS"],
  },
  {
    title: "CMS & Design",
    skills: ["WordPress", "Umbraco", "Photoshop"],
  },
  {
    title: "Tools",
    skills: ["Git", "Postman"],
  },
];

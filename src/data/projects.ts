export interface Project {
  title: string;
  description: string;
  image: string;
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: "Coupongini",
    description:
      "A savings platform offering top coupon codes and deals across stores, earning affiliate commissions while delivering the best offers to shoppers.",
    image: "/images/projects/coupongini.png",
    tech: ["React.js", "Next.js", "HTML5", "SCSS", "Bootstrap"],
    liveUrl: "https://www.coupongini.com/",
    featured: true,
  },
  {
    title: "Finnovationz",
    description:
      "A full-stack financial platform providing financial education, tools and news for retail investors, with React interfaces backed by an Express/MongoDB API.",
    image: "/images/projects/finnovationz.png",
    tech: ["React.js", "Next.js", "Express.js", "MongoDB"],
    liveUrl: "https://www.finnovationz.com/",
    featured: true,
  },
  {
    title: "Dealcraker",
    description:
      "An influencer marketing platform that matches brands with influencers and performance marketers to run collaborative campaigns across social channels.",
    image: "/images/projects/dealcraker.png",
    tech: ["React.js", "Next.js"],
    liveUrl: "https://www.dealcraker.com/",
  },
  {
    title: "Holiday Factory Premium",
    description:
      "A UAE-based tour operator site offering all-in-one premium vacation packages bundling flights, stays, guided tours and transfers worldwide.",
    image: "/images/projects/holidayfactorypremium.png",
    tech: ["HTML", "CSS", "JavaScript", "jQuery"],
    liveUrl: "https://holidayfactorypremium.com/",
  },
  {
    title: "Charkos Global",
    description:
      "A healthcare recruitment and consultancy site connecting qualified healthcare professionals with organizations across Europe, the Middle East and Australia.",
    image: "/images/projects/charkosglobal.png",
    tech: ["HTML", "CSS", "JavaScript", "jQuery"],
    liveUrl: "https://charkosglobal.com/",
  },
  {
    title: "Wave Kitchens",
    description:
      "A Sydney-based joinery and cabinetry company site showcasing fully custom-made kitchens, bathrooms, furniture and wardrobes.",
    image: "/images/projects/wavekitchens.png",
    tech: ["WordPress", "HTML", "CSS", "JavaScript"],
    liveUrl: "https://www.wavekitchens.com.au/",
  },
  {
    title: "U.S. Watch Parts",
    description:
      "An online retailer for watch components and repair supplies, including movements, batteries, bands, crystals and replacement parts.",
    image: "/images/projects/uswatchparts.png",
    tech: ["WordPress", "HTML", "CSS", "JavaScript"],
    liveUrl: "https://uswatchparts.com/",
  },
  {
    title: "30 Little Gibbs",
    description:
      "A luxury residential project site for a Malabar Hill, Mumbai apartment development, built around privacy and wellness-focused living.",
    image: "/images/projects/30littlegibbs.png",
    tech: ["WordPress", "HTML", "CSS", "JavaScript"],
    liveUrl: "https://30littlegibbs.com/",
  },
  {
    title: "Hilston Park",
    description:
      "A residential outdoor activity centre in Wales offering guided group activities and historic estate accommodation for schools, corporate groups and private visitors.",
    image: "/images/projects/hilstonpark.png",
    tech: ["Umbraco", "HTML", "CSS", "JavaScript"],
    liveUrl: "https://hilstonpark.com/",
  },
  {
    title: "VoIP Experts",
    description:
      "A UK telecommunications provider site for cloud-based business phone systems, covering features, packages and support for businesses of all sizes.",
    image: "/images/projects/voipexperts.png",
    tech: ["Umbraco", "HTML", "CSS", "JavaScript"],
    liveUrl: "https://voipexperts.co.uk/",
  },
];

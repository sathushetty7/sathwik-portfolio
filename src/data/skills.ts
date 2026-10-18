export type SkillGroup = {
  number: string;
  title: string;
  description: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    number: "01",
    title: "DEVELOPMENT",
    description: "Building interfaces and functional web applications with modern frontend architectures.",
    skills: [
      "HTML & CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
    ],
  },
  {
    number: "02",
    title: "PROGRAMMING",
    description: "Strengthening programming fundamentals, system design, and algorithmic problem-solving.",
    skills: [
      "Python",
      "C",
      "Java",
      "Data Structures",
      "Algorithms",
    ],
  },
  {
    number: "03",
    title: "DATA & AI",
    description: "Exploring data analysis, machine learning pipelines, and intelligent AI systems.",
    skills: [
      "SQL",
      "Excel",
      "Pandas",
      "Machine Learning",
      "Deep Learning",
      "Generative AI",
    ],
  },
  {
    number: "04",
    title: "TOOLS",
    description: "Modern toolchains for software development, collaboration, and creative engineering.",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Flutter",
      "Streamlit",
      "DaVinci Resolve",
    ],
  },
];

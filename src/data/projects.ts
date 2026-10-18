export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: string;
  year: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  metrics?: string;
  featured: boolean;
  accentColor?: string;
}

export const projects: Project[] = [
  {
    id: "coastal-kits",
    title: "Coastal Kits",
    tagline: "High-Performance Surf Gear & Modular E-Commerce Architecture",
    description:
      "A bespoke e-commerce platform crafted for coastal gear and active kits. Features sub-second dynamic page transitions, modular inventory state machines, and an intuitive product builder designed for seamless user conversion.",
    category: "Full-Stack Development",
    year: "2024",
    image: "/images/projects/coastal-kits.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe API", "PostgreSQL"],
    liveUrl: "https://github.com/sathushetty7/coastal-kits",
    githubUrl: "https://github.com/sathushetty7/coastal-kits",
    metrics: "Sub-100ms interaction latency · 99.8% Lighthouse Performance",
    featured: true,
    accentColor: "#3B82F6",
  },
  {
    id: "astroview",
    title: "AstroView",
    tagline: "Interactive Deep Space Telemetry & Satellite Visualizer",
    description:
      "Telemetry dashboard rendering real-time orbital trajectories, celestial coordinates, and satellite observation data. Engineered with WebGL star mapping, Keplerian orbital computations, and instant telemetry parsing.",
    category: "Data Visualization & WebGL",
    year: "2024",
    image: "/images/projects/astroview.png",
    tags: ["React", "Three.js", "Python", "FastAPI", "WebSockets"],
    liveUrl: "https://github.com/sathushetty7/astroview",
    githubUrl: "https://github.com/sathushetty7/astroview",
    metrics: "Fluid 60 FPS rendering on 12,000+ tracked space bodies",
    featured: true,
    accentColor: "#8B5CF6",
  },
  {
    id: "datapulse",
    title: "DataPulse",
    tagline: "Real-Time AI Stream Analytics & Anomaly Detection Engine",
    description:
      "High-throughput event streaming platform that flags operational anomalies in milliseconds. Combines recurrent neural models with distributed streaming pipelines to provide actionable insights for mission-critical infrastructure.",
    category: "AI & Distributed Systems",
    year: "2023 - 2024",
    image: "/images/projects/datapulse.png",
    tags: ["Python", "PyTorch", "Next.js", "Redis", "Kafka", "Docker"],
    liveUrl: "https://github.com/sathushetty7/datapulse",
    githubUrl: "https://github.com/sathushetty7/datapulse",
    metrics: "50,000+ events/sec throughput with sub-5ms anomaly alerts",
    featured: true,
    accentColor: "#10B981",
  },
];

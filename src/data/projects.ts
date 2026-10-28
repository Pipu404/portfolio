export type Project = {
  slug: string;
  title: string;
  summary: string;
  highlights: string[];
  role: string;
  tech: string[];
  links: { label: string; href: string }[];
  image?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "knights-realm",
    title: "Knight's Realm — Chess Platform",
    summary:
      "A full chess platform for players, students and coaches, with real-time online play, a computer opponent and structured learning tools.",
    highlights: [
      "Real-time online multiplayer with Socket.IO, plus local and vs-computer play powered by Stockfish",
      "Legal move validation, chess clocks, pawn promotion and checkmate detection with Chess.js",
      "Role-based dashboards for players, students and coaches",
      "Puzzles, homework management, performance analytics and Elo rating tracking",
      "Responsive UI that keeps the board, both players and the latest move on a phone screen",
    ],
    role: "Full-stack developer",
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Socket.IO",
      "Prisma",
      "PostgreSQL",
      "Redis",
      "Stockfish",
      "Chess.js",
    ],
    links: [{ label: "GitHub", href: "https://github.com/Pipu404/Knight-s_Realm" }],
    featured: true,
  },
  {
    slug: "corehead",
    title: "CoreHead — Intelligent Blog Builder",
    summary:
      "A visual blog-building platform for creating, customising and publishing responsive blog content through an intuitive interface.",
    highlights: [
      "Led the team and coordinated development across frontend and backend",
      "Reusable layout templates: create, edit, delete and publish",
      "Global default and category-specific template assignment",
      "Layout configuration validation and dynamic layout resolution",
    ],
    role: "Team leader & full-stack developer",
    tech: ["Next.js", "React", "Tailwind CSS", "Node.js", "Express.js", "Prisma", "PostgreSQL"],
    links: [
      { label: "Frontend", href: "https://github.com/Pipu404/corehead-frontend" },
      { label: "Backend", href: "https://github.com/Pipu404/corehead-backend" },
    ],
  },
  {
    slug: "mushroom-biz",
    title: "Mushroom Biz App",
    summary:
      "A business management app that centralises mushroom cultivation and sales — production, inventory, expenses and orders in one place.",
    highlights: [
      "Production tracking for cultivation activities",
      "Inventory, expense and customer order management",
      "Designed and built the whole app solo — planning, frontend, backend and database integration",
    ],
    role: "Solo project · Full-stack developer",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    links: [{ label: "GitHub", href: "https://github.com/Pipu404/mushroom-biz-app" }],
  },
  {
    slug: "robotic-pet-dog",
    title: "Robotic Pet Dog",
    summary:
      "An interactive robotic pet dog prototype built as a first-year hardware and embedded systems project.",
    highlights: [
      "Power supply management for stable power to all components",
      "Touch sensor integration so the robot responds to interaction",
      "Programmed movements with servo motors and microcontrollers",
    ],
    role: "Hardware & embedded developer",
    tech: ["Arduino", "C/C++", "Sensors", "Servo Motors"],
    links: [],
  },
];

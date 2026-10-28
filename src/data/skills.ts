export type SkillGroup = { name: string; skills: string[] };

export const skillGroups: SkillGroup[] = [
  { name: "Languages", skills: ["Java", "Python", "C", "JavaScript", "TypeScript", "PHP"] },
  { name: "Frontend", skills: ["HTML5", "CSS3", "React", "Next.js", "Tailwind CSS"] },
  { name: "Backend", skills: ["Node.js", "Express.js", "Spring Boot", "Socket.IO", "REST APIs"] },
  { name: "Databases", skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Prisma ORM"] },
  { name: "Tools & DevOps", skills: ["Git", "GitHub", "Docker", "Postman", "Railway"] },
  { name: "Embedded & IoT", skills: ["Arduino", "Raspberry Pi"] },
  { name: "Concepts", skills: ["OOP", "RBAC", "Agile", "Real-time systems"] },
];

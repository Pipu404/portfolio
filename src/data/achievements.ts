export type Achievement = {
  title: string;
  detail: string;
  kind: "award" | "competition" | "sport";
};

export const achievements: Achievement[] = [
  { title: "Winner — Best Project for Women Empowerment", detail: "SHEroes", kind: "award" },
  {
    title: "First Runner-Up — Best Project for Women Empowerment",
    detail: "AurorAWE",
    kind: "award",
  },
  {
    title: "Most Outstanding Prospect of the Year 2024/25",
    detail: "Leo Club of the University of Moratuwa",
    kind: "award",
  },
  {
    title: "5th Place — North Western Province Women's Chess Team",
    detail: "48th National Sports Games, 2024",
    kind: "competition",
  },
  {
    title: "University Kabaddi Team",
    detail: "University of Moratuwa, 2025 – 2026",
    kind: "sport",
  },
];

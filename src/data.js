export const profile = {
  name: "YOUR NAME",
  headline: "Backend • Data • Open Source Engineer",
  aboutShort: "Short 2–3 line intro about you goes here.",
  aboutLong:
    "Write a slightly longer paragraph about your background, interests, and goals. Keep it professional and concise.",
  resume: "/resume.pdf",
  contact: {
    email: "your@email.com",
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourprofile"
  }
};

/* ================= PROJECTS (10 TOTAL) ================= */
export const projects = [
  {
    title: "Project 1 Name",
    description:
      "2–3 lines explaining what the project does, your role, tech used, and outcome.",
    tech: "React, Spring Boot, MySQL",
    link: "https://github.com/yourusername/project1"
  },
  {
    title: "Project 2 Name",
    description:
      "Add more detail here — problem statement, approach, result.",
    tech: "Python, Pandas, Power BI",
    link: ""
  },
  // ➕ Add up to 10 projects
];

/* ================= CERTIFICATIONS ================= */
export const certifications = {
  professional: [
    { name: "IBM Machine Learning", link: "" },
    { name: "IBM DevOps", link: "" },
    { name: "Google Data Analytics", link: "" },
    { name: "AWS Cloud Practitioner", link: "" },
    { name: "Meta Frontend", link: "" }
  ],
  participation: [
    { name: "SWOC 2025", link: "" },
    { name: "Hackathon XYZ", link: "" },
    { name: "Open Source Summit", link: "" },
    { name: "College Tech Fest", link: "" },
    { name: "Coding Marathon", link: "" }
  ],
  workshops: [
    { name: "Docker Workshop", link: "" },
    { name: "Power BI Bootcamp", link: "" },
    { name: "ML Workshop", link: "" },
    { name: "Web Security Seminar", link: "" },
    { name: "System Design Talk", link: "" }
  ]
};

/* ================= OPEN SOURCE ================= */
export const openSource = [
  {
    project: "Project Name",
    description: "What you contributed and impact.",
    link: "https://github.com/org/repo"
  }
];

/* ================= TECH STACK ================= */
export const techStack = {
  web: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "React"],
  backend: ["Spring Boot", "Firebase"],
  data: ["Python", "Pandas", "NumPy", "Matplotlib", "Excel", "Power BI", "Tableau"],
  ml: ["Scikit-Learn", "PyTorch", "R"],
  databases: ["MongoDB", "MySQL"],
  devops: ["Git", "Docker", "Postman"],
  ides: ["VS Code", "IntelliJ IDEA"]
};

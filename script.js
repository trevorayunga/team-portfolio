const skills = [
  "JavaScript",
  "Node.js",
  "Express",
  "PostgreSQL",
  "Prisma",
  "React",
  "HTML & CSS",
  "Python",
  "Git & GitHub",
];

const projects = [
  {
    title: "Devprac",
    description:
      "Node.js/Express backend with Prisma and PostgreSQL for practicing REST API design and database modelling.",
    tags: ["Node.js", "Express", "Prisma", "PostgreSQL"],
    link: "https://github.com/trevorayunga",
  },
  {
    title: "Multi-Vendor E-commerce Platform",
    description:
      "A full-stack marketplace supporting multiple independent vendors, built as a recurring side project.",
    tags: ["Full-Stack", "E-commerce"],
    link: "https://github.com/trevorayunga",
  },
  {
    title: "Portfolio Website",
    description:
      "This site — a single-page portfolio built with a partner, deployed on GitHub Pages.",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/trevorayunga",
  },
];

// ===== Render skills =====
function renderSkills() {
  const list = document.getElementById("skills-list");
  if (!list) return;
 
  const fragment = document.createDocumentFragment();
  skills.forEach((skill) => {
    const li = document.createElement("li");
    li.textContent = skill;
    fragment.appendChild(li);
  });
  list.appendChild(fragment);
}


// ===== Init =====
document.addEventListener("DOMContentLoaded", () => {
  renderSkills();
  renderProjects();
});
 
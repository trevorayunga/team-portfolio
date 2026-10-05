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
// ===== Render projects =====
function renderProjects() {
  const container = document.getElementById("projects-list");
  if (!container) return;
 
  const fragment = document.createDocumentFragment();
 
  projects.forEach((project) => {
    const card = document.createElement("article");
    card.className = "project-card";
 
    const title = document.createElement("h3");
    title.textContent = project.title;
 
    const desc = document.createElement("p");
    desc.textContent = project.description;
 
    const tagList = document.createElement("ul");
    tagList.className = "project-tags";
    project.tags.forEach((tag) => {
      const tagItem = document.createElement("li");
      tagItem.textContent = tag;
      tagList.appendChild(tagItem);
    });
 
    card.appendChild(title);
    card.appendChild(desc);
    card.appendChild(tagList);
 
    if (project.link) {
      const link = document.createElement("a");
      link.className = "project-link";
      link.href = project.link;
      link.target = "_blank";
      link.rel = "noopener";
      link.textContent = "View on GitHub →";
      card.appendChild(link);
    }
 
    fragment.appendChild(card);
  });
 
  container.appendChild(fragment);
}

// ===== Init =====
document.addEventListener("DOMContentLoaded", () => {
  renderSkills();
  renderProjects();
});
 
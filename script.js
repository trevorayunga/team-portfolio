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

const testimonials = [
  {
    quote:
      "Trevor explains complex systems concepts in a way that actually sticks. One of the clearest lecturers I've had.",
    author: "Student",
   
  },
  {
    quote:
      "Reliable collaborator who ships clean, well-documented code and communicates clearly throughout a project.",
    author: "Project Partner",
    
  },
  {
    quote:
      "Turned a messy set of requirements into a working backend faster than we expected, without cutting corners.",
    author: "Collaborator",
    
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

// ===== Render testimonials =====
function renderTestimonials() {
  const container = document.getElementById("testimonials-list");
  if (!container) return;
 
  const fragment = document.createDocumentFragment();
 
  testimonials.forEach((item) => {
    const card = document.createElement("article");
    card.className = "testimonial-card";
 
    const quote = document.createElement("blockquote");
    quote.textContent = `"${item.quote}"`;
 
    const cite = document.createElement("cite");
    const strong = document.createElement("strong");
    strong.textContent = item.author;
    cite.appendChild(strong);
    if (item.role) {
      cite.append(`, ${item.role}`);
    }
 
    card.appendChild(quote);
    card.appendChild(cite);
    fragment.appendChild(card);
  });
 
  container.appendChild(fragment);
}
// ===== Init =====
document.addEventListener("DOMContentLoaded", () => {
  renderSkills();
  renderProjects();
  renderTestimonials();
});
 
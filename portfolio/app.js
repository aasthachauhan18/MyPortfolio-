const profile = {
  name: "Aastha Chauhan",
  role: "Full Stack Developer",
  location: "Ahmedabad, Gujarat",
  email: "chauhanaastha1810@gmail.com",
  phone: "7862041290",
  github: "https://github.com/aasthachauhan18",
  resume: "./public/files/AasthaChauhan_FullStack_resume.pdf",
  summary:
    "Full Stack Developer building practical MERN applications with responsive interfaces, REST APIs, authentication, dashboards, CRUD modules, and database-driven workflows."
};

const capabilities = [
  {
    title: "I build usable interfaces",
    detail: "Responsive pages, clean dashboards, forms, tables, cards, filters, status labels, and reusable React components."
  },
  {
    title: "I connect frontend to backend",
    detail: "REST APIs, Axios calls, protected routes, JWT authentication, validation, and user role based flows."
  },
  {
    title: "I understand real workflows",
    detail: "Orders, invoices, bookings, inventory, task status, admin screens, and business data management modules."
  }
];

const projects = [
  {
    title: "Printing Management System",
    type: "Full Stack",
    image: "./public/images/printing-ui-screenshot.png",
    stack: ["React", "Node", "Express", "MongoDB", "JWT", "Tailwind"],
    description: "Shows my ability to build a business management system with role-based dashboards, pricing logic, quotations, orders, and invoices.",
    highlights: ["Pricing workflows", "Reusable forms", "Protected dashboards"]
  },
  {
    title: "Aabhushan Jeweler Management",
    type: "Dashboard",
    image: "./public/images/jewelry-hero.jpg",
    stack: ["React", "Node", "Express", "MongoDB", "RBAC"],
    description: "Shows dashboard thinking for product catalogs, customers, staff, inventory, orders, and sales operations.",
    highlights: ["JWT login", "Inventory modules", "Sales overview"]
  },
  {
    title: "Smart Tasks & Notes",
    type: "Full Stack",
    image: "./public/images/tasks-ui-screenshot.png",
    stack: ["MERN", "React Router", "Axios", "MongoDB"],
    description: "Shows CRUD, filtering, status management, private routes, and API-connected task workflows.",
    highlights: ["Dark/light mode", "Status tracking", "Responsive pages"]
  },
  {
    title: "Bike Rental System",
    type: "Full Stack",
    image: "./public/images/bike-ui-screenshot.png",
    stack: ["React", "Node", "Express", "MongoDB"],
    description: "Shows multi-role application flow with listings, bookings, payment screens, and admin/user dashboards.",
    highlights: ["Role dashboards", "Booking status", "Payment flow"]
  },
  {
    title: "Novique Furniture",
    type: "Frontend",
    image: "./public/images/furniture-hero.png",
    stack: ["HTML", "CSS", "JavaScript", "Responsive UI"],
    description: "Shows frontend layout, product presentation, responsive sections, and brand-focused visual structure.",
    highlights: ["Product visuals", "Landing sections", "Retail UI"]
  },
  {
    title: "SkinCare Website",
    type: "Frontend",
    image: "./public/images/skincare-hero.png",
    stack: ["HTML", "CSS", "JavaScript"],
    description: "Shows attractive ecommerce-style UI with product sections, offers, customer visuals, and responsive styling.",
    highlights: ["Product cards", "Offer layout", "Brand styling"]
  },
  {
    title: "Hyundai Showcase",
    type: "Frontend",
    image: "./public/images/hyundai-car.avif",
    stack: ["HTML", "CSS", "JavaScript"],
    description: "Shows landing page structure, vehicle presentation, navigation, and clean section-based frontend design.",
    highlights: ["Hero layout", "Vehicle cards", "Brand navigation"]
  }
];

const skillGroups = [
  { title: "Frontend", items: ["HTML5", "CSS3", "JavaScript ES6+", "React.js", "React Router", "Tailwind CSS", "Bootstrap"] },
  { title: "Backend", items: ["Node.js", "Express.js", "REST APIs", "JWT Auth", "Bcrypt", "Axios", "Fetch API"] },
  { title: "Database", items: ["MongoDB", "Mongoose", "Schema Design", "CRUD Operations", "Database-driven Modules"] },
  { title: "Workflow", items: ["Git", "GitHub", "VS Code", "Postman", "Vercel", "Render", "Figma", "Canva"] }
];

const experience = [
  {
    label: "Training",
    title: "Full Stack / MERN Stack Development",
    detail: "Frameboxx IT, Ahmedabad - practical training in React.js, Node.js, Express.js, MongoDB, routing, JWT authentication, API integration, and responsive UI."
  },
  {
    label: "Experience",
    title: "Freelance / Internship Project Exposure",
    detail: "Worked on a US client project, gaining practical experience with requirement understanding, UI implementation, project communication, and building web application features for real-world use."
  },
  {
    label: "Education",
    title: "B.Sc. Information Technology",
    detail: "Gujarat University, 2023 - 2026."
  },
  {
    label: "Focus",
    title: "Clean UI and API-connected dashboards",
    detail: "Reusable components, form validation, tables, cards, protected pages, status labels, search/filter ideas, and mobile-first layouts."
  }
];

function projectMarkup(items) {
  return items.map((project) => `
    <article class="project-card" data-type="${project.type}">
      <div class="screenshot">
        <img src="${project.image}" alt="${project.title} project screenshot" loading="lazy" />
        <div class="screen-caption">${project.type}</div>
      </div>
      <div class="project-body">
        <span class="proof-label">Project Proof</span>
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <ul class="highlight-list">${project.highlights.map((item) => `<li>${item}</li>`).join("")}</ul>
        <div class="tag-row">${project.stack.map((item) => `<span>${item}</span>`).join("")}</div>
      </div>
    </article>
  `).join("");
}

function renderPortfolio() {
  const root = document.getElementById("root");
  const types = ["All", ...new Set(projects.map((project) => project.type))];

  root.innerHTML = `
    <header class="site-header">
      <a class="brand" href="#top" aria-label="Aastha Chauhan home"><span>AC</span><strong>Aastha Chauhan</strong></a>
      <button class="nav-toggle" type="button" aria-label="Toggle navigation" aria-expanded="false"><span></span><span></span><span></span></button>
      <nav class="nav-links">
        <a href="#about">About</a><a href="#capabilities">Capabilities</a><a href="#projects">Projects</a><a href="#skills">Skills</a><a href="#contact">Contact</a>
        <a class="nav-cta" href="${profile.resume}" target="_blank" rel="noreferrer">Resume</a>
      </nav>
    </header>
    <main>
      <section class="hero" id="top">
        <div class="scene-decor" aria-hidden="true"><span class="cube cube-one"></span><span class="cube cube-two"></span><span class="ring ring-one"></span><span class="ring ring-two"></span></div>
        <div class="hero-content">
          <p class="eyebrow">Full Stack Developer</p>
          <h1>Aastha Chauhan</h1>
          <h2 class="hero-title">I build clean MERN applications that are easy to use and ready for real workflows.</h2>
          <p class="hero-copy">${profile.summary}</p>
          <div class="hero-actions">
            <a class="button primary" href="#projects">View Projects</a>
            <a class="button secondary" href="${profile.resume}" target="_blank" rel="noreferrer">Download Resume</a>
            <a class="button ghost" href="mailto:${profile.email}">Contact Me</a>
          </div>
          <div class="hire-strip"><span>Responsive UI</span><span>API Integration</span><span>US Client Exposure</span></div>
          <dl class="quick-stats">
            <div><dt>7</dt><dd>Featured projects</dd></div>
            <div><dt>MERN</dt><dd>Primary stack</dd></div>
            <div><dt>2025+</dt><dd>Training and builds</dd></div>
          </dl>
        </div>
        <div class="hero-visual">
          <div class="portrait">
            <div class="profile-image-wrap"><img src="./public/images/aastha-profile.png" alt="Aastha Chauhan profile" /></div>
            <div class="profile-copy"><strong>${profile.role}</strong><small>${profile.location}</small><em>Freelance / internship experience</em></div>
            <div class="profile-focus">
              <div><span>01</span><p>Clean responsive UI</p></div>
              <div><span>02</span><p>REST API integration</p></div>
              <div><span>03</span><p>Dashboard workflows</p></div>
            </div>
          </div>
        </div>
      </section>
      <section class="section about" id="about">
        <div class="section-heading"><p class="eyebrow">About</p><h2>Frontend care with backend understanding.</h2></div>
        <div class="about-grid">
          <p>I build responsive React interfaces and connect them with Node.js, Express, MongoDB, and REST APIs. My projects focus on practical business workflows: authentication, protected pages, dashboards, CRUD modules, forms, tables, bookings, orders, and status tracking.</p>
          <div class="contact-strip"><a href="mailto:${profile.email}">${profile.email}</a><a href="tel:${profile.phone}">${profile.phone}</a><a href="${profile.github}" target="_blank" rel="noreferrer">GitHub</a></div>
        </div>
      </section>
      <section class="section capability-section" id="capabilities">
        <div class="section-heading"><p class="eyebrow">What I Bring</p><h2>A developer who can turn UI screens into working application flows.</h2></div>
        <div class="capability-grid">${capabilities.map((item, index) => `<article class="capability-card"><span>${String(index + 1).padStart(2, "0")}</span><h3>${item.title}</h3><p>${item.detail}</p></article>`).join("")}</div>
      </section>
      <section class="section projects" id="projects">
        <div class="section-heading wide">
          <div><p class="eyebrow">Projects</p><h2>Selected work that demonstrates my development ability.</h2></div>
          <div class="filters">${types.map((type) => `<button class="filter${type === "All" ? " active" : ""}" type="button" data-filter="${type}">${type}</button>`).join("")}</div>
        </div>
        <div class="project-grid">${projectMarkup(projects)}</div>
      </section>
      <section class="section skills" id="skills">
        <div class="section-heading"><p class="eyebrow">Skills</p><h2>Tools I use to build complete web experiences.</h2></div>
        <div class="skill-groups">${skillGroups.map((group) => `<article class="skill-group"><h3>${group.title}</h3><div class="skill-grid">${group.items.map((skill) => `<span>${skill}</span>`).join("")}</div></article>`).join("")}</div>
      </section>
      <section class="section journey">
        <div class="section-heading"><p class="eyebrow">Journey</p><h2>Training, experience, education, and project practice.</h2></div>
        <div class="timeline">${experience.map((item) => `<article class="timeline-item"><span>${item.label}</span><h3>${item.title}</h3><p>${item.detail}</p></article>`).join("")}</div>
      </section>
      <section class="section contact" id="contact">
        <div class="contact-copy"><p class="eyebrow">Contact</p><h2>Hiring a developer who can build, debug, and keep improving.</h2><p>Open to full-stack developer roles, internships, and project-based opportunities where I can contribute clean UI, API integration, and practical MERN development.</p></div>
        <div class="contact-actions"><a class="button primary" href="mailto:${profile.email}">Email Aastha</a><a class="button secondary" href="${profile.github}" target="_blank" rel="noreferrer">Open GitHub</a><a class="button ghost" href="${profile.resume}" target="_blank" rel="noreferrer">Download Resume</a></div>
      </section>
    </main>
    <footer class="footer"><p>Designed and developed with React, CSS, and Node.js.</p><a href="mailto:${profile.email}">${profile.email}</a></footer>
  `;

  bindInteractions();
}

function bindInteractions() {
  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");
  navToggle.addEventListener("click", () => {
    const open = navLinks.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(open));
  });

  document.querySelectorAll(".filter").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".filter").forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      const filter = button.dataset.filter;
      document.querySelectorAll(".project-card").forEach((card) => {
        card.hidden = filter !== "All" && card.dataset.type !== filter;
      });
    });
  });

  const selector = ".project-card, .capability-card, .skill-group, .timeline-item, .portrait";
  document.addEventListener("mousemove", (event) => {
    const card = event.target.closest(selector);
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    card.style.setProperty("--rx", `${(((y / rect.height) - 0.5) * -10).toFixed(2)}deg`);
    card.style.setProperty("--ry", `${(((x / rect.width) - 0.5) * 10).toFixed(2)}deg`);
    card.style.setProperty("--mx", `${x}px`);
    card.style.setProperty("--my", `${y}px`);
  });
  document.addEventListener("mouseout", (event) => {
    const card = event.target.closest(selector);
    if (!card || card.contains(event.relatedTarget)) return;
    card.style.setProperty("--rx", "0deg");
    card.style.setProperty("--ry", "0deg");
  });
}

renderPortfolio();

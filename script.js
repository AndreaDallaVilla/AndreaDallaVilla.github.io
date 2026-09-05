const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  revealElements.forEach((el) => observer.observe(el));
} else {
  revealElements.forEach((el) => el.classList.add("visible"));
}

document.getElementById("year").textContent = new Date().getFullYear();

// Small live GitHub touch: update the public repository count when the API is available.
// The page still works normally if the request is blocked or rate-limited.
fetch("https://api.github.com/users/AndreaDallaVilla", {
  headers: { Accept: "application/vnd.github+json" }
})
  .then((response) => {
    if (!response.ok) throw new Error("GitHub API unavailable");
    return response.json();
  })
  .then((profile) => {
    if (Number.isFinite(profile.public_repos)) {
      document.getElementById("repo-count").textContent = profile.public_repos;
    }
  })
  .catch(() => {});


// =========================================================
// v5 REAL PRESENTER
// =========================================================
const presenterProjects = [
  {
    short: "ALPINE",
    type: "Bachelor thesis · Robotics",
    title: "ALPINE — Climbing Robot",
    description: "High-level integration and experimental work for a climbing robot, connecting attitude control, rope/winch coordination, odometry and high-level command logic.",
    tags: ["ROS", "C++", "Control", "Real Robot"],
    image: "assets/alpine-robot.jpeg",
    generated: false,
    media: "https://www.youtube.com/@Andrea_Dalla_Villa/search?query=ALPINE",
    mediaAction: "Watch video ▶",
    links: [
      ["Thesis repository", "https://github.com/AndreaDallaVilla/Bachelor-thesis"],
      ["ALPINE project", "https://github.com/alpine-robot"],
      ["Video", "https://www.youtube.com/@Andrea_Dalla_Villa/search?query=ALPINE"]
    ]
  },
  {
    short: "Distributed SpMV",
    type: "Parallel Computing",
    title: "Distributed SpMV",
    description: "Shared- and distributed-memory sparse matrix–vector multiplication, exploring OpenMP scheduling, MPI decomposition and strong/weak scaling.",
    tags: ["C", "OpenMP", "MPI", "HPC"],
    generated: true,
    generatedTitle: "Distributed SpMV",
    generatedSub: "OpenMP · MPI · HPC",
    media: "https://github.com/AndreaDallaVilla/PARCO-Computing-2026-242637",
    mediaAction: "Open repository ↗",
    links: [
      ["Open repository", "https://github.com/AndreaDallaVilla/PARCO-Computing-2026-242637"]
    ]
  },
  {
    short: "NipponQuest",
    type: "FPGA · Digital Design",
    title: "NipponQuest",
    description: "A complete FPGA game for the Nexys 4 DDR board, built in VHDL with hardware-oriented game logic and video output.",
    tags: ["VHDL", "FPGA", "Vivado", "Digital Logic"],
    generated: true,
    generatedTitle: "NipponQuest",
    generatedSub: "FPGA · VHDL · GAME",
    media: "https://github.com/AndreaDallaVilla/NipponQuest_FPGAgame",
    mediaAction: "Open repository ↗",
    links: [
      ["Open repository", "https://github.com/AndreaDallaVilla/NipponQuest_FPGAgame"]
    ]
  },
  {
    short: "UR5 Pick & Place",
    type: "Robot Perception · Manipulation",
    title: "UR5 Pick & Place",
    description: "Autonomous object detection and manipulation using a UR5, RGB-D perception, inverse kinematics and ROS/Gazebo integration.",
    tags: ["ROS", "YOLO", "ZED", "IK"],
    image: "assets/ur5-thumbnail.jpeg",
    generated: false,
    media: "https://www.youtube.com/@Andrea_Dalla_Villa/search?query=UR5",
    mediaAction: "Watch video ▶",
    links: [
      ["Open repository", "https://github.com/acristoforetti-1-pixel/lab_myproject"],
      ["Video", "https://www.youtube.com/@Andrea_Dalla_Villa/search?query=UR5"]
    ]
  },
  {
    short: "SICURA",
    type: "Embedded Systems · Smart Security",
    title: "SICURA",
    description: "Smart security prototype built around sensing, local actuation and real-time alerts, developed as a complete embedded-mechatronic system.",
    tags: ["Embedded", "Sensors", "Actuation", "IoT"],
    image: "assets/sicura-thumbnail.jpeg",
    generated: false,
    media: "https://www.youtube.com/watch?v=OyNxdv6P7Q0",
    mediaAction: "Watch video ▶",
    links: [
      ["Open repository", "https://github.com/anass03/Sicura"],
      ["Video", "https://www.youtube.com/watch?v=OyNxdv6P7Q0"]
    ]
  },
  {
    short: "RoadEye",
    type: "Software Engineering · Mobility",
    title: "RoadEye",
    description: "A road-safety reporting platform focused on geolocated alerts, incident prioritization, authority workflows and a clear mobile-first UX.",
    tags: ["Maps", "UX", "Web/App", "Product"],
    image: "assets/roadeye-thumbnail.jpeg",
    generated: false,
    media: "https://www.youtube.com/@Andrea_Dalla_Villa/search?query=RoadEye",
    mediaAction: "Watch video ▶",
    links: [
      ["Video", "https://www.youtube.com/@Andrea_Dalla_Villa/search?query=RoadEye"]
    ]
  }
];

const triggerEls = [...document.querySelectorAll(".project-trigger")];
const grippedProject = document.getElementById("grippedProject");
const ur5Robot = document.getElementById("ur5Robot");
const projectTypeEl = document.getElementById("projectType");
const projectNumberEl = document.getElementById("projectNumber");
const projectTitleEl = document.getElementById("projectTitle");
const projectDescriptionEl = document.getElementById("projectDescription");
const projectTagsEl = document.getElementById("projectTags");
const projectLinksEl = document.getElementById("projectLinks");
const projectImageEl = document.getElementById("projectImage");
const generatedPreviewEl = document.getElementById("generatedPreview");
const generatedTitleEl = generatedPreviewEl?.querySelector(".generated-title");
const generatedSubEl = generatedPreviewEl?.querySelector("small");
const mediaLinkEl = document.getElementById("projectMediaLink");
const mediaActionEl = document.getElementById("mediaAction");
const presenterCaptionEl = document.getElementById("presenterCaption");

let activePresenterIndex = 0;
let presenterBusy = false;
let queuedPresenterIndex = null;

function fillPresenter(index) {
  const p = presenterProjects[index];
  if (!p) return;

  projectTypeEl.textContent = p.type;
  projectNumberEl.textContent = `${String(index + 1).padStart(2, "0")} / ${String(presenterProjects.length).padStart(2, "0")}`;
  projectTitleEl.textContent = p.title;
  projectDescriptionEl.textContent = p.description;

  projectTagsEl.innerHTML = p.tags.map(tag => `<span>${tag}</span>`).join("");
  projectLinksEl.innerHTML = p.links
    .map(([label, href]) => `<a href="${href}" target="_blank" rel="noreferrer">${label} ↗</a>`)
    .join("");

  mediaLinkEl.href = p.media;
  mediaActionEl.textContent = p.mediaAction;

  if (p.generated) {
    projectImageEl.hidden = true;
    generatedPreviewEl.hidden = false;
    generatedTitleEl.textContent = p.generatedTitle;
    generatedSubEl.textContent = p.generatedSub;
  } else {
    generatedPreviewEl.hidden = true;
    projectImageEl.hidden = false;
    projectImageEl.src = p.image;
  }

  triggerEls.forEach((el, i) => el.classList.toggle("active", i === index));
  presenterCaptionEl.textContent = `Holding project ${String(index + 1).padStart(2, "0")} — ${p.short}`;

  ur5Robot.classList.remove("pose-1", "pose-2", "pose-3", "pose-4", "pose-5", "pose-6");
  ur5Robot.classList.add(`pose-${index + 1}`);
}

function switchPresenter(index) {
  if (index === activePresenterIndex || index < 0 || index >= presenterProjects.length) return;

  if (presenterBusy) {
    queuedPresenterIndex = index;
    return;
  }

  presenterBusy = true;
  grippedProject.classList.remove("switch-in");
  grippedProject.classList.add("switch-out");

  window.setTimeout(() => {
    fillPresenter(index);
    activePresenterIndex = index;

    grippedProject.classList.remove("switch-out");
    void grippedProject.offsetWidth;
    grippedProject.classList.add("switch-in");

    window.setTimeout(() => {
      grippedProject.classList.remove("switch-in");
      presenterBusy = false;

      if (queuedPresenterIndex !== null && queuedPresenterIndex !== activePresenterIndex) {
        const q = queuedPresenterIndex;
        queuedPresenterIndex = null;
        switchPresenter(q);
      } else {
        queuedPresenterIndex = null;
      }
    }, 520);
  }, 260);
}

fillPresenter(0);

if ("IntersectionObserver" in window && triggerEls.length) {
  const presenterObserver = new IntersectionObserver(
    entries => {
      const candidates = entries
        .filter(e => e.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

      if (!candidates.length) return;
      const index = Number(candidates[0].target.dataset.index);
      if (Number.isFinite(index)) switchPresenter(index);
    },
    {
      root: null,
      threshold: [0.35, 0.5, 0.65],
      rootMargin: "-20% 0px -20% 0px"
    }
  );

  triggerEls.forEach(el => presenterObserver.observe(el));
}

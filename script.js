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
// v5.2 — centered presenter with cleaner motion
// =========================================================
const presenterProjects = [
  {
    short: "ALPINE",
    type: "Bachelor thesis · Robotics",
    title: "ALPINE — Climbing Robot",
    description:
      "High-level integration and experimental work for a climbing robot, connecting attitude control, rope/winch coordination, odometry and high-level command logic.",
    tags: ["ROS", "C++", "Control", "Real Robot"],
    image: "assets/alpine-robot.jpeg",
    generated: false,
    media: "https://www.youtube.com/@Andrea_Dalla_Villa/search?query=ALPINE",
    mediaAction: "Watch video ▶",
    links: [
      ["Thesis repository", "https://github.com/AndreaDallaVilla/Bachelor-thesis"],
      ["ALPINE project", "https://github.com/alpine-robot"],
      ["Video", "https://www.youtube.com/@Andrea_Dalla_Villa/search?query=ALPINE"]
    ],
    poses: {
      present: { shoulder: 2, elbow: -2, wrist: 2 },
      carry:   { shoulder: 9, elbow: 8, wrist: -3 },
      pick:    { shoulder: 17, elbow: 19, wrist: -12 }
    }
  },
  {
    short: "Distributed SpMV",
    type: "Parallel Computing",
    title: "Distributed SpMV",
    description:
      "Shared- and distributed-memory sparse matrix–vector multiplication, exploring OpenMP scheduling, MPI decomposition and strong/weak scaling.",
    tags: ["C", "OpenMP", "MPI", "HPC"],
    generated: true,
    generatedTitle: "Distributed SpMV",
    generatedSub: "OpenMP · MPI · HPC",
    media: "https://github.com/AndreaDallaVilla/PARCO-Computing-2026-242637",
    mediaAction: "Open repository ↗",
    links: [["Open repository", "https://github.com/AndreaDallaVilla/PARCO-Computing-2026-242637"]],
    poses: {
      present: { shoulder: 5, elbow: -5, wrist: 5 },
      carry:   { shoulder: 10, elbow: 9, wrist: -3 },
      pick:    { shoulder: 17, elbow: 18, wrist: -12 }
    }
  },
  {
    short: "NipponQuest",
    type: "FPGA · Digital Design",
    title: "NipponQuest",
    description:
      "A complete FPGA game for the Nexys 4 DDR board, built in VHDL with hardware-oriented game logic and video output.",
    tags: ["VHDL", "FPGA", "Vivado", "Digital Logic"],
    generated: true,
    generatedTitle: "NipponQuest",
    generatedSub: "FPGA · VHDL · GAME",
    media: "https://github.com/AndreaDallaVilla/NipponQuest_FPGAgame",
    mediaAction: "Open repository ↗",
    links: [["Open repository", "https://github.com/AndreaDallaVilla/NipponQuest_FPGAgame"]],
    poses: {
      present: { shoulder: -1, elbow: 1, wrist: -2 },
      carry:   { shoulder: 8, elbow: 8, wrist: -4 },
      pick:    { shoulder: 16, elbow: 19, wrist: -13 }
    }
  },
  {
    short: "UR5 Pick & Place",
    type: "Robot Perception · Manipulation",
    title: "UR5 Pick & Place",
    description:
      "Autonomous object detection and manipulation using a UR5, RGB-D perception, inverse kinematics and ROS/Gazebo integration.",
    tags: ["ROS", "YOLO", "ZED", "IK"],
    image: "assets/ur5-thumbnail.jpeg",
    generated: false,
    media: "https://www.youtube.com/@Andrea_Dalla_Villa/search?query=UR5",
    mediaAction: "Watch video ▶",
    links: [
      ["Open repository", "https://github.com/acristoforetti-1-pixel/lab_myproject"],
      ["Video", "https://www.youtube.com/@Andrea_Dalla_Villa/search?query=UR5"]
    ],
    poses: {
      present: { shoulder: 4, elbow: -3, wrist: 3 },
      carry:   { shoulder: 9, elbow: 8, wrist: -3 },
      pick:    { shoulder: 16, elbow: 18, wrist: -11 }
    }
  },
  {
    short: "SICURA",
    type: "Embedded Systems · Smart Security",
    title: "SICURA",
    description:
      "Smart security prototype built around sensing, local actuation and real-time alerts, developed as a complete embedded-mechatronic system.",
    tags: ["Embedded", "Sensors", "Actuation", "IoT"],
    image: "assets/sicura-thumbnail.jpeg",
    generated: false,
    media: "https://www.youtube.com/watch?v=OyNxdv6P7Q0",
    mediaAction: "Watch video ▶",
    links: [
      ["Open repository", "https://github.com/anass03/Sicura"],
      ["Video", "https://www.youtube.com/watch?v=OyNxdv6P7Q0"]
    ],
    poses: {
      present: { shoulder: -2, elbow: 2, wrist: -3 },
      carry:   { shoulder: 8, elbow: 8, wrist: -3 },
      pick:    { shoulder: 16, elbow: 19, wrist: -12 }
    }
  },
  {
    short: "RoadEye",
    type: "Software Engineering · Mobility",
    title: "RoadEye",
    description:
      "A road-safety reporting platform focused on geolocated alerts, incident prioritization, authority workflows and a clear mobile-first UX.",
    tags: ["Maps", "UX", "Web/App", "Product"],
    image: "assets/roadeye-thumbnail.jpeg",
    generated: false,
    media: "https://www.youtube.com/@Andrea_Dalla_Villa/search?query=RoadEye",
    mediaAction: "Watch video ▶",
    links: [["Video", "https://www.youtube.com/@Andrea_Dalla_Villa/search?query=RoadEye"]],
    poses: {
      present: { shoulder: 3, elbow: -5, wrist: 5 },
      carry:   { shoulder: 9, elbow: 8, wrist: -3 },
      pick:    { shoulder: 16, elbow: 18, wrist: -12 }
    }
  }
];

const triggerEls = [...document.querySelectorAll(".project-trigger")];
const presenterWindow = document.getElementById("presenterWindow");
const motionLayer = document.querySelector(".project-motion-layer");
const shoulderJoint = document.querySelector(".shoulder");
const elbowJoint = document.querySelector(".elbow");
const wristJoint = document.querySelector(".wrist");
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
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

let activePresenterIndex = 0;
let presenterBusy = false;
let queuedPresenterIndex = null;

const CARD_STATES = {
  present:     { x: 0,    y: 0,   rotate: 0,   scale: 1.00, opacity: 1, blur: 0   },
  carry:       { x: -76,  y: 44,  rotate: -3,  scale: .93,  opacity: 1, blur: 0   },
  pick:        { x: -160, y: 98,  rotate: -6,  scale: .84,  opacity: 1, blur: .3  },
  stackHidden: { x: -224, y: 136, rotate: -9,  scale: .74,  opacity: 0, blur: 1.2 },
  retract:     { x: -128, y: 58,  rotate: -4,  scale: .90,  opacity: .55, blur: .5 }
};

const wait = (ms) => new Promise((resolve) => window.setTimeout(resolve, ms));
const nextFrame = () => new Promise((resolve) => requestAnimationFrame(() => resolve()));

function setRobotPose(pose, duration = 620) {
  [shoulderJoint, elbowJoint, wristJoint].forEach((joint) => {
    if (joint) {
      joint.style.transition = `transform ${duration}ms cubic-bezier(.22,.61,.16,1)`;
    }
  });
  if (shoulderJoint) shoulderJoint.style.transform = `rotate(${pose.shoulder}deg)`;
  if (elbowJoint) elbowJoint.style.transform = `rotate(${pose.elbow}deg)`;
  if (wristJoint) wristJoint.style.transform = `rotate(${pose.wrist}deg)`;
}

function setCardState(state, duration = 520, easing = "cubic-bezier(.22,.61,.16,1)") {
  if (!motionLayer) return;
  motionLayer.style.transition = [
    `transform ${duration}ms ${easing}`,
    `opacity ${Math.max(180, Math.round(duration * .72))}ms ease`,
    `filter ${Math.max(180, Math.round(duration * .72))}ms ease`
  ].join(", ");
  motionLayer.style.transform = `translate(${state.x}px, ${state.y}px) rotate(${state.rotate}deg) scale(${state.scale})`;
  motionLayer.style.opacity = String(state.opacity);
  motionLayer.style.filter = `blur(${state.blur}px)`;
}

function fillPresenter(index) {
  const p = presenterProjects[index];
  if (!p) return;

  projectTypeEl.textContent = p.type;
  projectNumberEl.textContent = `${String(index + 1).padStart(2, "0")} / ${String(presenterProjects.length).padStart(2, "0")}`;
  projectTitleEl.textContent = p.title;
  projectDescriptionEl.textContent = p.description;
  projectTagsEl.innerHTML = p.tags.map((tag) => `<span>${tag}</span>`).join("");
  projectLinksEl.innerHTML = p.links.map(([label, href]) => `<a href="${href}" target="_blank" rel="noreferrer">${label} ↗</a>`).join("");
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
  presenterCaptionEl.textContent = `Showing project ${String(index + 1).padStart(2, "0")} — ${p.short}`;
}

async function switchPresenter(index) {
  if (index === activePresenterIndex || !Number.isFinite(index)) return;
  if (presenterBusy) {
    queuedPresenterIndex = index;
    return;
  }

  const current = presenterProjects[activePresenterIndex];
  const next = presenterProjects[index];
  if (!next) return;

  presenterBusy = true;
  presenterWindow?.classList.add("is-switching");

  if (prefersReducedMotion) {
    fillPresenter(index);
    activePresenterIndex = index;
    setRobotPose(next.poses.present, 0);
    setCardState(CARD_STATES.present, 0, "linear");
    presenterBusy = false;
    presenterWindow?.classList.remove("is-switching");
    return;
  }

  // Put away current project
  setRobotPose(current.poses.carry, 280);
  setCardState(CARD_STATES.retract, 260);
  await wait(260);

  setRobotPose(next.poses.pick, 420);
  setCardState(CARD_STATES.stackHidden, 380);
  await wait(390);

  // Load new project while hidden in the stack
  fillPresenter(index);
  activePresenterIndex = index;
  setCardState(CARD_STATES.stackHidden, 0, "linear");
  await nextFrame();
  await nextFrame();

  // Pick it up
  setRobotPose(next.poses.pick, 180);
  setCardState(CARD_STATES.pick, 320);
  await wait(210);

  // Carry it toward the center
  setRobotPose(next.poses.carry, 430);
  setCardState(CARD_STATES.carry, 430);
  await wait(390);

  // Present it
  setRobotPose(next.poses.present, 520);
  setCardState(CARD_STATES.present, 520);
  await wait(520);

  presenterWindow?.classList.remove("is-switching");
  presenterBusy = false;

  if (queuedPresenterIndex !== null && queuedPresenterIndex !== activePresenterIndex) {
    const q = queuedPresenterIndex;
    queuedPresenterIndex = null;
    switchPresenter(q);
  } else {
    queuedPresenterIndex = null;
  }
}

function initPresenter() {
  if (!motionLayer) return;
  fillPresenter(0);
  setRobotPose(presenterProjects[0].poses.present, 0);
  setCardState(CARD_STATES.present, 0, "linear");

  triggerEls.forEach((el) => {
    el.addEventListener("click", () => {
      const index = Number(el.dataset.index);
      if (Number.isFinite(index)) switchPresenter(index);
    });
  });

  if ("IntersectionObserver" in window && triggerEls.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (!visible.length) return;
        const index = Number(visible[0].target.dataset.index);
        if (Number.isFinite(index)) switchPresenter(index);
      },
      {
        threshold: [0.4, 0.58, 0.78],
        rootMargin: "-12% 0px -12% 0px"
      }
    );

    triggerEls.forEach((el) => observer.observe(el));
  }
}

initPresenter();


// v5.3 centered progress control
const progressItems = [...document.querySelectorAll(".presenter-progress-item")];

function updatePresenterProgress(index) {
  progressItems.forEach((item, i) => item.classList.toggle("active", i === index));
}

// Extend the existing fillPresenter without changing its content logic.
const originalFillPresenter = fillPresenter;
fillPresenter = function(index) {
  originalFillPresenter(index);
  updatePresenterProgress(index);
};

progressItems.forEach((item) => {
  item.addEventListener("click", () => {
    const index = Number(item.dataset.index);
    if (!Number.isFinite(index)) return;

    const target = triggerEls[index];
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "center" });
    } else {
      switchPresenter(index);
    }
  });
});

updatePresenterProgress(activePresenterIndex);

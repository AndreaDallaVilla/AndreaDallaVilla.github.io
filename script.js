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
// v5.5 — click-to-pick project presenter
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
    pickPose: { shoulder: -12, elbow: 23, wrist: -12, baseX: -6, baseY: 2, baseR: -4.5 },
    carryPose:{ shoulder: 4, elbow: 13, wrist: -2,  baseX: -2, baseY: 1, baseR: -1.4 },
    presentPose:{ shoulder: 2, elbow: -4, wrist: 6, baseX: 0, baseY: 0, baseR: 0.0 }
  },
  {
    short: "SpMV",
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
    pickPose: { shoulder: -3, elbow: 24, wrist: -13, baseX: -3, baseY: 2, baseR: -2.6 },
    carryPose:{ shoulder: 6, elbow: 13, wrist: -2,  baseX: -1, baseY: 1, baseR: -1.0 },
    presentPose:{ shoulder: 5, elbow: -6, wrist: 7, baseX: 0, baseY: 0, baseR: 0.8 }
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
    pickPose: { shoulder: 8, elbow: 24, wrist: -14, baseX: 0, baseY: 2, baseR: 0.2 },
    carryPose:{ shoulder: 8, elbow: 13, wrist: -3,  baseX: 0, baseY: 1, baseR: -0.6 },
    presentPose:{ shoulder: -1, elbow: 1, wrist: 0, baseX: 0, baseY: 0, baseR: -0.8 }
  },
  {
    short: "UR5",
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
    pickPose: { shoulder: -10, elbow: 19, wrist: -10, baseX: -6, baseY: 2, baseR: -4.2 },
    carryPose:{ shoulder: 3, elbow: 11, wrist: -1,  baseX: -2, baseY: 1, baseR: -1.1 },
    presentPose:{ shoulder: 4, elbow: -4, wrist: 6, baseX: 0, baseY: 0, baseR: 0.4 }
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
    pickPose: { shoulder: -1, elbow: 19, wrist: -11, baseX: -3, baseY: 2, baseR: -2.3 },
    carryPose:{ shoulder: 5, elbow: 11, wrist: -2,  baseX: -1, baseY: 1, baseR: -0.8 },
    presentPose:{ shoulder: -1, elbow: 1, wrist: 1, baseX: 0, baseY: 0, baseR: -0.4 }
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
    pickPose: { shoulder: 10, elbow: 19, wrist: -11, baseX: 1, baseY: 2, baseR: 1.2 },
    carryPose:{ shoulder: 7, elbow: 11, wrist: -2,  baseX: 0, baseY: 1, baseR: -0.2 },
    presentPose:{ shoulder: 3, elbow: -6, wrist: 7, baseX: 0, baseY: 0, baseR: 0.6 }
  }
];

const presenterWindow = document.getElementById("presenterWindow");
const grippedProject = document.getElementById("grippedProject");
const motionLayer = document.querySelector(".project-motion-layer");
const robotEl = document.getElementById("ur5Robot");
const shoulderJoint = robotEl?.querySelector(".shoulder");
const elbowJoint = robotEl?.querySelector(".elbow");
const wristJoint = robotEl?.querySelector(".wrist");
const topFinger = robotEl?.querySelector(".finger-top");
const bottomFinger = robotEl?.querySelector(".finger-bottom");
const progressItems = [...document.querySelectorAll(".presenter-progress-item")];

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

const PRESENT_STATE = { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1, blur: 0 };
const CARRY_STATE =   { x: -84, y: -36, rotate: -2, scale: 0.88, opacity: 1, blur: 0 };
const OUT_STATE =     { x: 62, y: 18, rotate: 2,  scale: 0.98, opacity: 0, blur: 1.0 };

const wait = (ms) => new Promise((resolve) => window.setTimeout(resolve, ms));
const nextFrame = () => new Promise((resolve) => requestAnimationFrame(() => resolve()));

function setRobotPose(pose, duration = 560) {
  [shoulderJoint, elbowJoint, wristJoint].forEach((joint) => {
    if (joint) joint.style.transition = `transform ${duration}ms cubic-bezier(.22,.61,.16,1)`;
  });

  if (shoulderJoint) shoulderJoint.style.transform = `rotate(${pose.shoulder}deg)`;
  if (elbowJoint) elbowJoint.style.transform = `rotate(${pose.elbow}deg)`;
  if (wristJoint) wristJoint.style.transform = `rotate(${pose.wrist}deg)`;

  if (robotEl) {
    robotEl.style.transition = `transform ${duration}ms cubic-bezier(.22,.61,.16,1)`;
    robotEl.style.transform = `translate(${pose.baseX || 0}px, ${pose.baseY || 0}px) rotate(${pose.baseR || 0}deg)`;
  }
}

function setGripper(openAmount = 0, duration = 220) {
  [topFinger, bottomFinger].forEach((finger) => {
    if (finger) finger.style.transition = `transform ${duration}ms cubic-bezier(.22,.61,.36,1)`;
  });

  if (topFinger) {
    topFinger.style.transformOrigin = "598px 270px";
    topFinger.style.transform = `translate(0px, ${-1 - (4 * openAmount)}px) rotate(${-2 - (19 * openAmount)}deg)`;
  }

  if (bottomFinger) {
    bottomFinger.style.transformOrigin = "598px 296px";
    bottomFinger.style.transform = `translate(0px, ${1 + (4 * openAmount)}px) rotate(${2 + (19 * openAmount)}deg)`;
  }
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

function getSourceState(index) {
  const button = progressItems[index];
  if (!button || !presenterWindow || !grippedProject) {
    return { x: -160, y: -160, rotate: -6, scale: 0.56, opacity: 0, blur: 1 };
  }

  const buttonRect = button.getBoundingClientRect();
  const cardRect = grippedProject.getBoundingClientRect();

  const sourceX = buttonRect.left + (buttonRect.width * 0.5);
  const sourceY = buttonRect.top + (buttonRect.height * 0.72);
  const anchorX = cardRect.left + (cardRect.width * 0.42);
  const anchorY = cardRect.top + 26;

  const columnOffset = (index % 3) - 1;
  const rowOffset = index < 3 ? -1 : 1;

  return {
    x: Math.round(sourceX - anchorX),
    y: Math.round(sourceY - anchorY),
    rotate: (-5 + (columnOffset * 2)) + (rowOffset * 0.8),
    scale: 0.56,
    opacity: 0,
    blur: 1.1
  };
}

function getCarryFromSource(sourceState) {
  return {
    x: Math.round(sourceState.x * 0.46),
    y: Math.round(sourceState.y * 0.38),
    rotate: sourceState.rotate * 0.35,
    scale: 0.84,
    opacity: 1,
    blur: 0
  };
}

function updateProgress(index) {
  progressItems.forEach((item, i) => item.classList.toggle("active", i === index));
}

function fillPresenter(index) {
  const p = presenterProjects[index];
  if (!p) return;

  projectTypeEl.textContent = p.type;
  projectNumberEl.textContent = `${String(index + 1).padStart(2, "0")} / ${String(presenterProjects.length).padStart(2, "0")}`;
  projectTitleEl.textContent = p.title;
  projectDescriptionEl.textContent = p.description;
  projectTagsEl.innerHTML = p.tags.map((tag) => `<span>${tag}</span>`).join("");
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

  updateProgress(index);
  presenterCaptionEl.textContent = `Click a project above and the UR5 will pick it`;
}

async function switchPresenter(index) {
  if (!Number.isFinite(index) || index < 0 || index >= presenterProjects.length) return;
  if (index === activePresenterIndex && !presenterBusy) return;

  if (presenterBusy) {
    queuedPresenterIndex = index;
    return;
  }

  const nextProject = presenterProjects[index];
  const sourceState = getSourceState(index);
  const carryState = getCarryFromSource(sourceState);

  presenterBusy = true;
  presenterWindow?.classList.add("is-switching");

  if (prefersReducedMotion) {
    fillPresenter(index);
    activePresenterIndex = index;
    setRobotPose(nextProject.presentPose, 0);
    setGripper(0, 0);
    setCardState(PRESENT_STATE, 0, "linear");
    presenterBusy = false;
    presenterWindow?.classList.remove("is-switching");
    return;
  }

  // Put away current card
  setRobotPose(presenterProjects[activePresenterIndex].carryPose, 260);
  setCardState(OUT_STATE, 220);
  await wait(230);

  // Go upward to the selected source box
  setRobotPose(nextProject.pickPose, 520);
  setGripper(1, 220);
  setCardState(sourceState, 0, "linear");
  await nextFrame();
  motionLayer.style.opacity = "0";
  await wait(360);

  // Swap the content while "at the source"
  fillPresenter(index);
  activePresenterIndex = index;
  setCardState(sourceState, 0, "linear");
  motionLayer.style.opacity = "0";
  await nextFrame();

  // Grasp the selected project card
  setGripper(1, 0);
  setCardState({ ...sourceState, opacity: 1, blur: 0.4 }, 180);
  await wait(120);
  setGripper(0, 200);
  await wait(150);

  // Carry it down from the top source boxes
  setRobotPose(nextProject.carryPose, 420);
  setCardState(carryState, 420);
  await wait(360);

  // Place/present in the main position
  setRobotPose(nextProject.presentPose, 540);
  setCardState(PRESENT_STATE, 540);
  await wait(540);

  presenterBusy = false;
  presenterWindow?.classList.remove("is-switching");

  if (queuedPresenterIndex !== null && queuedPresenterIndex !== activePresenterIndex) {
    const q = queuedPresenterIndex;
    queuedPresenterIndex = null;
    switchPresenter(q);
  } else {
    queuedPresenterIndex = null;
  }
}

function initPresenter() {
  if (!motionLayer || !robotEl) return;

  fillPresenter(0);
  setRobotPose(presenterProjects[0].presentPose, 0);
  setGripper(0, 0);
  setCardState(PRESENT_STATE, 0, "linear");

  progressItems.forEach((item) => {
    item.addEventListener("click", () => {
      const index = Number(item.dataset.index);
      if (Number.isFinite(index)) switchPresenter(index);
    });
  });
}

initPresenter();

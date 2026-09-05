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
// v5.4 — strong robot motion + scroll lock through repos
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
    ],
    poses: {
      present: { shoulder: 1, elbow: -5, wrist: 7, baseX: 0, baseY: 0, baseR: 0 },
      carry:   { shoulder: 10, elbow: 8, wrist: -2, baseX: -4, baseY: 1, baseR: -1.2 },
      pick:    { shoulder: 19, elbow: 19, wrist: -14, baseX: -10, baseY: 5, baseR: -2.2 }
    }
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
    links: [["Open repository", "https://github.com/AndreaDallaVilla/PARCO-Computing-2026-242637"]],
    poses: {
      present: { shoulder: 5, elbow: -7, wrist: 8, baseX: 0, baseY: 0, baseR: 0.8 },
      carry:   { shoulder: 11, elbow: 7, wrist: -1, baseX: -4, baseY: 1, baseR: -0.4 },
      pick:    { shoulder: 20, elbow: 18, wrist: -13, baseX: -9, baseY: 5, baseR: -2.2 }
    }
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
    links: [["Open repository", "https://github.com/AndreaDallaVilla/NipponQuest_FPGAgame"]],
    poses: {
      present: { shoulder: -2, elbow: 0, wrist: 0, baseX: 0, baseY: 0, baseR: -0.8 },
      carry:   { shoulder: 8, elbow: 9, wrist: -3, baseX: -3, baseY: 1, baseR: -1.1 },
      pick:    { shoulder: 17, elbow: 19, wrist: -14, baseX: -9, baseY: 5, baseR: -2.4 }
    }
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
    ],
    poses: {
      present: { shoulder: 4, elbow: -4, wrist: 6, baseX: 0, baseY: 0, baseR: 0.4 },
      carry:   { shoulder: 10, elbow: 7, wrist: -2, baseX: -4, baseY: 1, baseR: -0.8 },
      pick:    { shoulder: 18, elbow: 18, wrist: -13, baseX: -9, baseY: 5, baseR: -2.0 }
    }
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
    ],
    poses: {
      present: { shoulder: -1, elbow: 1, wrist: 1, baseX: 0, baseY: 0, baseR: -0.5 },
      carry:   { shoulder: 8, elbow: 8, wrist: -3, baseX: -3, baseY: 1, baseR: -1.0 },
      pick:    { shoulder: 17, elbow: 19, wrist: -14, baseX: -9, baseY: 5, baseR: -2.2 }
    }
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
    links: [["Video", "https://www.youtube.com/@Andrea_Dalla_Villa/search?query=RoadEye"]],
    poses: {
      present: { shoulder: 3, elbow: -6, wrist: 7, baseX: 0, baseY: 0, baseR: 0.6 },
      carry:   { shoulder: 10, elbow: 8, wrist: -2, baseX: -4, baseY: 1, baseR: -0.8 },
      pick:    { shoulder: 18, elbow: 18, wrist: -13, baseX: -9, baseY: 5, baseR: -2.1 }
    }
  }
];

const workSection = document.getElementById("work");
const presenterWindow = document.getElementById("presenterWindow");
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
const progressItems = [...document.querySelectorAll(".presenter-progress-item")];
const motionLayer = document.querySelector(".project-motion-layer");
const robotEl = document.getElementById("ur5Robot");
const robotSvg = robotEl?.querySelector("svg");
const shoulderJoint = robotEl?.querySelector(".shoulder");
const elbowJoint = robotEl?.querySelector(".elbow");
const wristJoint = robotEl?.querySelector(".wrist");
const topFinger = robotEl?.querySelector(".finger-top");
const bottomFinger = robotEl?.querySelector(".finger-bottom");

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const LAST_INDEX = presenterProjects.length - 1;
let activePresenterIndex = 0;
let presenterBusy = false;
let queuedPresenterIndex = null;
let lastWheelTime = 0;
let touchStartY = 0;

const CARD_STATES = {
  present:     { x: 0,   y: 0,   rotate: 0,   scale: 1.00, opacity: 1, blur: 0.0 },
  carry:       { x: -80, y: 38,  rotate: -3,  scale: .93,  opacity: 1, blur: 0.0 },
  pick:        { x: -155,y: 88,  rotate: -6,  scale: .84,  opacity: 1, blur: .2 },
  stackHidden: { x: -222,y: 128, rotate: -8,  scale: .74,  opacity: 0, blur: 1.0 },
  outgoing:    { x: 72,  y: -4,  rotate: 2,   scale: .985, opacity: 0, blur: 1.1 }
};

const wait = (ms) => new Promise((resolve) => window.setTimeout(resolve, ms));
const nextFrame = () => new Promise((resolve) => requestAnimationFrame(() => resolve()));

function setRobotPose(pose, duration = 620) {
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
  const topRotate = -2 - (16 * openAmount);
  const bottomRotate = 2 + (16 * openAmount);
  const topShift = -1 - (3 * openAmount);
  const bottomShift = 1 + (3 * openAmount);

  [topFinger, bottomFinger].forEach((finger) => {
    if (finger) finger.style.transition = `transform ${duration}ms cubic-bezier(.22,.61,.36,1)`;
  });

  if (topFinger) {
    topFinger.style.transformOrigin = "598px 270px";
    topFinger.style.transform = `translate(0px, ${topShift}px) rotate(${topRotate}deg)`;
  }
  if (bottomFinger) {
    bottomFinger.style.transformOrigin = "598px 296px";
    bottomFinger.style.transform = `translate(0px, ${bottomShift}px) rotate(${bottomRotate}deg)`;
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

  presenterCaptionEl.textContent = `Project ${String(index + 1).padStart(2, "0")} / ${String(presenterProjects.length).padStart(2, "0")} — scroll or click to browse`;
  updateProgress(index);
}

async function switchPresenter(index) {
  if (index === activePresenterIndex || !Number.isFinite(index) || index < 0 || index > LAST_INDEX) return;
  if (presenterBusy) {
    queuedPresenterIndex = index;
    return;
  }

  presenterBusy = true;
  presenterWindow?.classList.add("is-switching");

  const current = presenterProjects[activePresenterIndex];
  const next = presenterProjects[index];

  if (prefersReducedMotion) {
    fillPresenter(index);
    activePresenterIndex = index;
    setRobotPose(next.poses.present, 0);
    setGripper(0, 0);
    setCardState(CARD_STATES.present, 0, "linear");
    presenterBusy = false;
    presenterWindow?.classList.remove("is-switching");
    return;
  }

  // Present -> retract slightly to the right
  setRobotPose(current.poses.carry, 320);
  setCardState(CARD_STATES.outgoing, 260);
  await wait(250);

  // Move to stack and open gripper
  setRobotPose(next.poses.pick, 500);
  setGripper(1, 220);
  setCardState(CARD_STATES.stackHidden, 430);
  await wait(430);

  // Swap content while hidden in stack
  fillPresenter(index);
  activePresenterIndex = index;
  setCardState(CARD_STATES.stackHidden, 0, "linear");
  await nextFrame();
  await nextFrame();

  // Grasp new card
  setRobotPose(next.poses.pick, 120);
  setGripper(1, 0);
  setCardState(CARD_STATES.pick, 260);
  await wait(120);
  setGripper(0, 220);
  await wait(130);

  // Carry toward center
  setRobotPose(next.poses.carry, 420);
  setCardState(CARD_STATES.carry, 420);
  await wait(360);

  // Present the new card
  setRobotPose(next.poses.present, 560);
  setCardState(CARD_STATES.present, 560);
  await wait(560);

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

function inPresenterZone() {
  if (!workSection) return false;
  const rect = workSection.getBoundingClientRect();
  return rect.top <= 120 && rect.bottom >= window.innerHeight * 0.6;
}

function maybeInterceptScroll(direction, event) {
  if (!inPresenterZone() || presenterBusy) return false;

  if (direction > 0 && activePresenterIndex < LAST_INDEX) {
    event?.preventDefault?.();
    switchPresenter(activePresenterIndex + 1);
    return true;
  }

  if (direction < 0 && activePresenterIndex > 0) {
    event?.preventDefault?.();
    switchPresenter(activePresenterIndex - 1);
    return true;
  }

  return false;
}

function onWheel(event) {
  const now = Date.now();
  if (Math.abs(event.deltaY) < 18) return;
  if (now - lastWheelTime < 520) {
    if (inPresenterZone() && ((event.deltaY > 0 && activePresenterIndex < LAST_INDEX) || (event.deltaY < 0 && activePresenterIndex > 0))) {
      event.preventDefault();
    }
    return;
  }

  const intercepted = maybeInterceptScroll(Math.sign(event.deltaY), event);
  if (intercepted) {
    lastWheelTime = now;
  }
}

function onKeyDown(event) {
  if (!inPresenterZone() || presenterBusy) return;
  if (event.key === "ArrowDown" || event.key === "PageDown") {
    if (activePresenterIndex < LAST_INDEX) {
      event.preventDefault();
      switchPresenter(activePresenterIndex + 1);
    }
  } else if (event.key === "ArrowUp" || event.key === "PageUp") {
    if (activePresenterIndex > 0) {
      event.preventDefault();
      switchPresenter(activePresenterIndex - 1);
    }
  }
}

function onTouchStart(event) {
  if (!event.touches?.length) return;
  touchStartY = event.touches[0].clientY;
}

function onTouchMove(event) {
  if (!event.touches?.length) return;
  const currentY = event.touches[0].clientY;
  const delta = touchStartY - currentY;
  if (Math.abs(delta) < 28) return;

  const intercepted = maybeInterceptScroll(Math.sign(delta), event);
  if (intercepted) {
    touchStartY = currentY;
  }
}

function initPresenter() {
  if (!motionLayer) return;

  fillPresenter(0);
  setRobotPose(presenterProjects[0].poses.present, 0);
  setGripper(0, 0);
  setCardState(CARD_STATES.present, 0, "linear");

  progressItems.forEach((item) => {
    item.addEventListener("click", () => {
      const index = Number(item.dataset.index);
      if (Number.isFinite(index)) switchPresenter(index);
    });
  });

  window.addEventListener("wheel", onWheel, { passive: false });
  window.addEventListener("keydown", onKeyDown);
  window.addEventListener("touchstart", onTouchStart, { passive: true });
  window.addEventListener("touchmove", onTouchMove, { passive: false });
}

initPresenter();

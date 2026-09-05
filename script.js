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
// v5.1 MOTION POLISHED PRESENTER
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
      present: { shoulder: 1, elbow: -2, wrist: 2 },
      carry:   { shoulder: 9, elbow: 11, wrist: -5 },
      pick:    { shoulder: 18, elbow: 24, wrist: -16 }
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
      present: { shoulder: 5, elbow: -7, wrist: 7 },
      carry:   { shoulder: 11, elbow: 12, wrist: -3 },
      pick:    { shoulder: 20, elbow: 23, wrist: -14 }
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
      present: { shoulder: -3, elbow: 4, wrist: -2 },
      carry:   { shoulder: 8, elbow: 14, wrist: -7 },
      pick:    { shoulder: 17, elbow: 24, wrist: -17 }
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
      present: { shoulder: 6, elbow: -4, wrist: 4 },
      carry:   { shoulder: 10, elbow: 12, wrist: -4 },
      pick:    { shoulder: 19, elbow: 23, wrist: -14 }
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
      present: { shoulder: -2, elbow: 5, wrist: -4 },
      carry:   { shoulder: 7, elbow: 13, wrist: -7 },
      pick:    { shoulder: 17, elbow: 25, wrist: -17 }
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
      present: { shoulder: 3, elbow: -6, wrist: 6 },
      carry:   { shoulder: 9, elbow: 12, wrist: -4 },
      pick:    { shoulder: 18, elbow: 22, wrist: -15 }
    }
  }
];

const triggerEls = [...document.querySelectorAll(".project-trigger")];
const presenterWindow = document.getElementById("presenterWindow");
const grippedProject = document.getElementById("grippedProject");
const motionLayer = grippedProject?.querySelector(".project-motion-layer");
const ur5Robot = document.getElementById("ur5Robot");
const shoulderJoint = ur5Robot?.querySelector(".shoulder");
const elbowJoint = ur5Robot?.querySelector(".elbow");
const wristJoint = ur5Robot?.querySelector(".wrist");
const gripBars = [...document.querySelectorAll(".grip-contact span")];
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
  present: { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1, blur: 0 },
  carry: { x: -118, y: 72, rotate: -4, scale: 0.9, opacity: 1, blur: 0.2 },
  pick: { x: -238, y: 152, rotate: -8, scale: 0.78, opacity: 1, blur: 0.8 },
  stackHidden: { x: -265, y: 185, rotate: -11, scale: 0.72, opacity: 0, blur: 1.8 },
  outgoing: { x: 82, y: -8, rotate: 2.6, scale: 0.985, opacity: 0, blur: 1.4 }
};

const wait = (ms) => new Promise((resolve) => window.setTimeout(resolve, ms));
const nextFrame = () => new Promise((resolve) => requestAnimationFrame(() => resolve()));

function setJointTransition(duration = 760) {
  [shoulderJoint, elbowJoint, wristJoint].forEach((joint) => {
    if (!joint) return;
    joint.style.transition = `transform ${duration}ms cubic-bezier(.22,.61,.16,1)`;
  });
}

function setRobotPose(pose, duration = 760) {
  if (!pose) return;
  setJointTransition(duration);
  if (shoulderJoint) shoulderJoint.style.transform = `rotate(${pose.shoulder}deg)`;
  if (elbowJoint) elbowJoint.style.transform = `rotate(${pose.elbow}deg)`;
  if (wristJoint) wristJoint.style.transform = `rotate(${pose.wrist}deg)`;
}

function setGripState(state) {
  const isOpen = state === "open";
  gripBars.forEach((bar, index) => {
    const sign = index === 0 ? -1 : 1;
    const rotate = isOpen ? 16 * sign : 7 * sign;
    const shiftX = isOpen ? -3 : 0;
    const shiftY = isOpen ? 7 * sign : 0;
    bar.style.transform = `translate(${shiftX}px, ${shiftY}px) rotate(${rotate}deg)`;
    bar.style.boxShadow = isOpen
      ? "0 0 16px rgba(105,226,255,.22)"
      : "0 0 13px rgba(105,226,255,.08)";
  });
}

function setCardState(state, duration = 560, easing = "cubic-bezier(.22,.61,.16,1)") {
  if (!motionLayer) return;
  motionLayer.style.transition = [
    `transform ${duration}ms ${easing}`,
    `opacity ${Math.max(180, Math.round(duration * 0.72))}ms ease`,
    `filter ${Math.max(180, Math.round(duration * 0.72))}ms ease`,
    `box-shadow ${Math.max(180, Math.round(duration * 0.6))}ms ease`
  ].join(", ");
  motionLayer.style.transform = `translate(${state.x}px, ${state.y}px) rotate(${state.rotate}deg) scale(${state.scale})`;
  motionLayer.style.opacity = String(state.opacity);
  motionLayer.style.filter = `blur(${state.blur}px)`;
  motionLayer.style.boxShadow = state.opacity < 0.4
    ? "0 10px 25px rgba(0,0,0,.12)"
    : "0 24px 56px rgba(0,0,0,.28)";
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

  triggerEls.forEach((el, i) => el.classList.toggle("active", i === index));
  presenterCaptionEl.textContent = `Holding project ${String(index + 1).padStart(2, "0")} — ${p.short}`;
}

async function switchPresenter(index) {
  if (index === activePresenterIndex || index < 0 || index >= presenterProjects.length) return;
  if (presenterBusy) {
    queuedPresenterIndex = index;
    return;
  }

  presenterBusy = true;
  presenterWindow?.classList.add("is-switching");
  grippedProject?.classList.remove("ready");

  const nextProject = presenterProjects[index];

  if (prefersReducedMotion) {
    fillPresenter(index);
    activePresenterIndex = index;
    setRobotPose(nextProject.poses.present, 0);
    setGripState("closed");
    setCardState(CARD_STATES.present, 0, "linear");
    presenterWindow?.classList.remove("is-switching");
    grippedProject?.classList.add("ready");
    presenterBusy = false;
    if (queuedPresenterIndex !== null && queuedPresenterIndex !== activePresenterIndex) {
      const q = queuedPresenterIndex;
      queuedPresenterIndex = null;
      switchPresenter(q);
    }
    return;
  }

  setGripState("closed");
  setRobotPose(presenterProjects[activePresenterIndex].poses.carry, 250);
  setCardState(CARD_STATES.outgoing, 240);
  await wait(240);

  setGripState("open");
  setRobotPose(nextProject.poses.pick, 460);
  setCardState(CARD_STATES.stackHidden, 420);
  await wait(430);

  fillPresenter(index);
  activePresenterIndex = index;
  setCardState(CARD_STATES.stackHidden, 0, "linear");
  await nextFrame();
  await nextFrame();

  setGripState("open");
  setRobotPose(nextProject.poses.pick, 180);
  setCardState(CARD_STATES.pick, 320);
  await wait(120);

  setGripState("closed");
  setRobotPose(nextProject.poses.carry, 390);
  setCardState(CARD_STATES.carry, 390);
  await wait(360);

  setRobotPose(nextProject.poses.present, 540);
  setCardState(CARD_STATES.present, 520);
  await wait(540);

  presenterWindow?.classList.remove("is-switching");
  grippedProject?.classList.add("ready");
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
  if (!motionLayer || !ur5Robot) return;
  fillPresenter(0);
  setRobotPose(presenterProjects[0].poses.present, 0);
  setGripState("closed");
  setCardState(CARD_STATES.present, 0, "linear");
  grippedProject.classList.add("ready");

  triggerEls.forEach((el) => {
    el.addEventListener("click", () => {
      const index = Number(el.dataset.index);
      if (Number.isFinite(index)) switchPresenter(index);
    });
  });

  if ("IntersectionObserver" in window && triggerEls.length) {
    const presenterObserver = new IntersectionObserver(
      (entries) => {
        const candidates = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (!candidates.length) return;
        const index = Number(candidates[0].target.dataset.index);
        if (Number.isFinite(index)) switchPresenter(index);
      },
      {
        root: null,
        threshold: [0.35, 0.55, 0.75],
        rootMargin: "-18% 0px -18% 0px"
      }
    );

    triggerEls.forEach((el) => presenterObserver.observe(el));
  }
}

initPresenter();

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
// v5 — UR5 presenter scroll logic
// =========================================================
const projectSteps = document.querySelectorAll(".project-step");
const heldCards = document.querySelectorAll(".held-card");
const presenter = document.getElementById("ur5Presenter");

function activateProject(projectId, poseId) {
  projectSteps.forEach((step) => {
    step.classList.toggle("active", step.dataset.project === projectId);
  });

  heldCards.forEach((card) => {
    card.classList.toggle("active", card.dataset.project === projectId);
  });

  if (presenter) {
    presenter.classList.remove("pose-1", "pose-2", "pose-3");
    presenter.classList.add(`pose-${poseId || 1}`);
  }
}

if ("IntersectionObserver" in window && projectSteps.length) {
  const stepObserver = new IntersectionObserver(
    (entries) => {
      const visibleEntries = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

      if (visibleEntries.length) {
        const active = visibleEntries[0].target;
        activateProject(active.dataset.project, active.dataset.pose);
      }
    },
    {
      root: null,
      threshold: [0.35, 0.5, 0.7],
      rootMargin: "-10% 0px -25% 0px"
    }
  );

  projectSteps.forEach((step) => stepObserver.observe(step));
}

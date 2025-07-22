// Project data with minimalist titles
const projects = [
  {
    id: 1,
    title: "Silence",
    year: "2021",
    image:
      "https://cdn.cosmos.so/7d47d4e2-0eff-4e2f-9734-9d24a8ba067e?format=jpeg"
  },
  {
    id: 2,
    title: "Resonance",
    year: "2022",
    image:
      "https://cdn.cosmos.so/5eee2d2d-3d4d-4ae5-96d4-cdbae70a2387?format=jpeg"
  },
  {
    id: 3,
    title: "Essence",
    year: "2022",
    image:
      "https://cdn.cosmos.so/def30e8a-34b2-48b1-86e1-07ec5c28f225?format=jpeg"
  },
  {
    id: 4,
    title: "Void",
    year: "2023",
    image:
      "https://cdn.cosmos.so/44d7cb23-6759-49e4-9dc1-acf771b3a0d1?format=jpeg"
  },
  {
    id: 5,
    title: "Presence",
    year: "2023",
    image:
      "https://cdn.cosmos.so/7712fe42-42ca-4fc5-9590-c89f2db99978?format=jpeg"
  },
  {
    id: 6,
    title: "Flow",
    year: "2024",
    image:
      "https://cdn.cosmos.so/cbee1ec5-01b6-4ffe-9f34-7da7980454cf?format=jpeg"
  },
  {
    id: 7,
    title: "Clarity",
    year: "2024",
    image:
      "https://cdn.cosmos.so/2e91a9d1-db85-4499-ad37-6222a6fea23b?format=jpeg"
  },
  {
    id: 8,
    title: "Breath",
    year: "2024",
    image:
      "https://cdn.cosmos.so/ff2ac3d3-fa94-4811-89f6-0d008b27e439?format=jpeg"
  },
  {
    id: 9,
    title: "Stillness",
    year: "2025",
    image:
      "https://cdn.cosmos.so/c39a4043-f489-4406-8018-a103a3f89802?format=jpeg"
  },
  {
    id: 10,
    title: "Surrender",
    year: "2025",
    image:
      "https://cdn.cosmos.so/e5e399f2-4050-463b-a781-4f5a1615f28e?format=jpeg"
  }
];

let projectsContainer;
let toggleButtons;
let popupOverlay, popupImage;
let popupHideTimeout = null;
let popupShowTimeout = null;
let currentHoveredItem = null;
let isPopupVisible = false;
let lastMouseMoveTime = 0;
let lastInteractionTime = 0;
let mouseOverImageContainer = false;
let debounceDelay = 50; // Debounce delay in ms
let isMouseDown = false; // Track mouse button state

let currentView = "list";
let isAnimating = false;
let lenis; // Lenis smooth scroll instance

document.addEventListener("DOMContentLoaded", function () {
  projectsContainer = document.getElementById("projects-container");
  toggleButtons = document.querySelectorAll(".toggle-btn");
  popupOverlay = document.getElementById("popup-overlay");
  popupImage = popupOverlay.querySelector(".popup-image");

  // Initialize GSAP plugins
  const { gsap } = window;

  // Check if GSAP plugins are available before using them
  if (gsap) {
    if (gsap.registerPlugin) {
      if (window.Flip) gsap.registerPlugin(window.Flip);
      if (window.ScrollTrigger) gsap.registerPlugin(window.ScrollTrigger);
      if (window.CustomEase) {
        gsap.registerPlugin(window.CustomEase);
        // Only create custom ease if the plugin is available
        window.CustomEase.create("customEase", "0.6, 0.01, 0.05, 1");
      }
    }
  }

  // Initialize Lenis for smooth scrolling
  initLenis();

  renderProjects();
  attachHoverEvents();
  setupGlobalEvents();
  setupLogoAnimations();
  setupFooterAnimation();

  forceImageLoad();
  initialAnimation();

  toggleButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const viewType = btn.dataset.view;
      toggleView(viewType);
    });
  });
});

// Initialize Lenis smooth scrolling
function initLenis() {
  // Initialize a new Lenis instance for smooth scrolling
  lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Exponential easing
    direction: "vertical",
    gestureDirection: "vertical",
    smooth: true,
    mouseMultiplier: 1,
    smoothTouch: false,
    touchMultiplier: 2,
    infinite: false
  });

  // Synchronize Lenis scrolling with GSAP's ScrollTrigger plugin
  lenis.on("scroll", ScrollTrigger.update);

  // Add Lenis's requestAnimationFrame (raf) method to GSAP's ticker
  // This ensures Lenis's smooth scroll animation updates on each GSAP tick
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000); // Convert time from seconds to milliseconds
  });

  // Disable lag smoothing in GSAP to prevent any delay in scroll animations
  gsap.ticker.lagSmoothing(0);
}

// Setup header logo animation with clip-path
function setupLogoAnimations() {
  const { gsap } = window;
  if (!gsap) return;

  // Prepare header logo paths for animation
  const headerLogoPaths = document.querySelectorAll(".header-logo .logo-path");

  // Make the header logo container visible
  gsap.to(".header-logo", {
    opacity: 1,
    duration: 0.5,
    ease: "power2.out"
  });

  // Set initial state for each path - hidden with clip-path
  gsap.set(headerLogoPaths, {
    clipPath: "inset(100% 0 0 0)", // Hide from bottom
    opacity: 1 // Full opacity
  });

  // Animate each path from bottom with stagger
  gsap.to(headerLogoPaths, {
    clipPath: "inset(0% 0 0 0)", // Reveal from bottom
    duration: 1.2,
    ease: "power2.out",
    stagger: 0.15,
    delay: 0.3
  });
}

// Setup footer animation with ScrollTrigger
function setupFooterAnimation() {
  const { gsap } = window;
  const ScrollTrigger = window.ScrollTrigger;
  if (!gsap || !ScrollTrigger) return;

  // Ensure footer logo is visible
  gsap.set(".footer-logo", { opacity: 1 });

  // Prepare footer logo paths for animation
  const footerLogoPaths = document.querySelectorAll(".footer-logo .logo-path");

  // Set initial state for each path - hidden with clip-path
  gsap.set(footerLogoPaths, {
    clipPath: "inset(100% 0 0 0)", // Hide from bottom
    opacity: 1 // Full opacity
  });

  // Create ScrollTrigger for footer logo animation
  ScrollTrigger.create({
    trigger: ".footer-logo",
    start: "top 80%",
    onEnter: () => {
      // Animate each path from bottom with stagger
      gsap.to(footerLogoPaths, {
        clipPath: "inset(0% 0 0 0)", // Reveal from bottom
        duration: 1.2,
        ease: "power2.out",
        stagger: 0.15
      });
    },
    once: true
  });

  // Animate footer sections
  ScrollTrigger.batch(".footer-section", {
    start: "top 90%",
    onEnter: (batch) => {
      gsap.from(batch, {
        opacity: 0,
        y: 30,
        stagger: 0.1,
        duration: 0.8,
        ease: "power2.out"
      });
    },
    once: true
  });

  // Animate footer header
  ScrollTrigger.create({
    trigger: ".footer-header",
    start: "top 85%",
    onEnter: () => {
      gsap.from(".light-text", {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: "power2.out"
      });

      gsap.from(".bold-text", {
        opacity: 0,
        y: 20,
        duration: 0.8,
        delay: 0.2,
        ease: "power2.out"
      });
    },
    once: true
  });
}

// Debounce function to prevent rapid firing
function debounce(func, delay) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), delay);
  };
}

// Setup global events for tracking mouse and scroll
function setupGlobalEvents() {
  // Global mousemove event to track current hovered item (with debounce)
  document.addEventListener("mousemove", handleGlobalMouseMove);

  // Add scroll event listener to update popup when scrolling (with debounce)
  document.addEventListener("scroll", debounce(handleScroll, debounceDelay), {
    passive: true
  });

  // Track mouse button state
  document.addEventListener("mousedown", () => {
    isMouseDown = true;
  });
  document.addEventListener("mouseup", () => {
    isMouseDown = false;
  });

  // Add a global mouseout event to handle edge cases
  document.addEventListener("mouseout", (e) => {
    // If mouse leaves the document
    if (e.relatedTarget === null || e.relatedTarget.nodeName === "HTML") {
      hidePopup();
      mouseOverImageContainer = false;
      currentHoveredItem = null;
    }
  });
}

// Handle global mouse movement to track hovered items
function handleGlobalMouseMove(e) {
  lastMouseMoveTime = Date.now();
  lastInteractionTime = Date.now();

  if (currentView === "grid") {
    handleGridViewMouseMove(e);
  } else if (currentView === "list") {
    handleListViewMouseMove(e);
  }
}

// Handle mouse movement in grid view
function handleGridViewMouseMove(e) {
  // For grid view, check if mouse is over any image container
  const imageContainers = document.querySelectorAll(
    ".grid-view .project-image-container"
  );
  let foundContainer = null;

  imageContainers.forEach((container) => {
    const rect = container.getBoundingClientRect();
    if (
      e.clientX >= rect.left &&
      e.clientX <= rect.right &&
      e.clientY >= rect.top &&
      e.clientY <= rect.bottom
    ) {
      foundContainer = container;
    }
  });

  if (foundContainer) {
    // Mouse is over an image container
    mouseOverImageContainer = true;
    if (popupHideTimeout) {
      clearTimeout(popupHideTimeout);
      popupHideTimeout = null;
    }

    const projectItem = foundContainer.closest(".project-item");
    if (projectItem !== currentHoveredItem) {
      currentHoveredItem = projectItem;
      updatePopupFromItem(projectItem);
    }
  } else {
    // Mouse is not over any image container
    mouseOverImageContainer = false;

    // Only start the hide timeout if we're not rapidly moving between containers
    if (isPopupVisible) {
      if (popupHideTimeout) clearTimeout(popupHideTimeout);
      popupHideTimeout = setTimeout(() => {
        // Check if we've moved to another container in the meantime
        if (!mouseOverImageContainer) {
          hidePopup();
          currentHoveredItem = null; // Reset current hovered item
        }
      }, 150); // Short delay to allow moving between containers
    }
  }
}

// Handle mouse movement in list view
function handleListViewMouseMove(e) {
  // For list view, check if mouse is over any project item
  const projectItems = document.querySelectorAll(".list-view .project-item");
  let foundItem = null;

  projectItems.forEach((item) => {
    const rect = item.getBoundingClientRect();
    // Add a small buffer (2px) to improve detection reliability
    if (
      e.clientX >= rect.left - 2 &&
      e.clientX <= rect.right + 2 &&
      e.clientY >= rect.top - 2 &&
      e.clientY <= rect.bottom + 2
    ) {
      foundItem = item;
    }
  });

  if (foundItem) {
    if (foundItem !== currentHoveredItem) {
      currentHoveredItem = foundItem;

      // Clear any pending hide timeout
      if (popupHideTimeout) {
        clearTimeout(popupHideTimeout);
        popupHideTimeout = null;
      }

      // Use a short delay before showing to prevent flickering
      if (popupShowTimeout) clearTimeout(popupShowTimeout);
      popupShowTimeout = setTimeout(() => {
        updatePopupFromItem(foundItem);
      }, 10);
    }
  } else {
    // Only hide if we're actually outside all items
    if (popupHideTimeout) clearTimeout(popupHideTimeout);
    popupHideTimeout = setTimeout(() => {
      hidePopup();
      currentHoveredItem = null; // Reset current hovered item
    }, 150);
  }
}

// Handle scroll events to update popup
function handleScroll() {
  if (!isPopupVisible) return;

  // Find which item is currently in view
  const containers =
    currentView === "grid"
      ? document.querySelectorAll(".project-image-container")
      : document.querySelectorAll(".project-item");

  const viewportHeight = window.innerHeight;
  const viewportCenter = viewportHeight / 2;

  let closestContainer = null;
  let closestDistance = Infinity;

  containers.forEach((container) => {
    const rect = container.getBoundingClientRect();
    const itemCenter = rect.top + rect.height / 2;
    const distance = Math.abs(itemCenter - viewportCenter);

    if (
      distance < closestDistance &&
      rect.top < viewportHeight &&
      rect.bottom > 0
    ) {
      closestDistance = distance;
      closestContainer = container;
    }
  });

  if (closestContainer) {
    const projectItem = closestContainer.closest(".project-item");
    if (projectItem !== currentHoveredItem) {
      currentHoveredItem = projectItem;
      updatePopupFromItem(projectItem);
    }
  }
}

// Update popup from a project item
function updatePopupFromItem(item) {
  if (!item) return;

  const projectId = item.dataset.id;
  const project = projects.find((p) => p.id == projectId);

  if (project) {
    showPopup(project.image);
  }
}

// Ensure images are loaded
function forceImageLoad() {
  projects.forEach((project) => {
    const img = new Image();
    img.crossOrigin = "anonymous"; // Add crossOrigin to avoid CORS issues
    img.onload = function () {
      const domImg = document.querySelector(
        `.project-item[data-id="${project.id}"] .project-image`
      );
      if (domImg) domImg.src = this.src;
    };
    img.src = project.image;
  });
}

// Initial project items animation
function initialAnimation() {
  const { gsap } = window;
  if (!gsap) return;

  gsap.set(".project-item", { opacity: 0, y: 30 });
  gsap.to(".project-item", {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: "power2.out",
    stagger: { each: 0.08, from: "start" }
  });
}

// Render project items
function renderProjects() {
  projectsContainer.innerHTML = "";
  projects.forEach((project) => {
    const projectItem = document.createElement("div");
    projectItem.classList.add("project-item");
    projectItem.dataset.id = project.id;
    projectItem.innerHTML = `
      <div class="project-image-container">
        <img class="project-image" src="${project.image}" alt="${project.title}" crossorigin="anonymous">
      </div>
      <div class="project-title">${project.title}</div>
      <div class="project-year">${project.year}</div>
    `;
    projectsContainer.appendChild(projectItem);
  });
}

// Attach hover events to image containers
function attachHoverEvents() {
  // Remove any existing event listeners first
  removeAllHoverEvents();

  // For list view, attach to project items
  if (currentView === "list") {
    const projectItems = document.querySelectorAll(".list-view .project-item");
    projectItems.forEach((item) => {
      // Use a data attribute to track hover state
      item.dataset.hovered = "false";

      item.addEventListener("mouseenter", listItemMouseEnter);
      item.addEventListener("mouseleave", listItemMouseLeave);
    });
  }

  // For grid view, attach to image containers ONLY
  if (currentView === "grid") {
    const imageContainers = document.querySelectorAll(
      ".grid-view .project-image-container"
    );
    imageContainers.forEach((container) => {
      // Use a data attribute to track hover state
      container.dataset.hovered = "false";

      container.addEventListener("mouseenter", gridContainerMouseEnter);
      container.addEventListener("mouseleave", gridContainerMouseLeave);
    });
  }
}

// Remove all hover events before reattaching
function removeAllHoverEvents() {
  const projectItems = document.querySelectorAll(".project-item");
  projectItems.forEach((item) => {
    item.removeEventListener("mouseenter", listItemMouseEnter);
    item.removeEventListener("mouseleave", listItemMouseLeave);
  });

  const imageContainers = document.querySelectorAll(".project-image-container");
  imageContainers.forEach((container) => {
    container.removeEventListener("mouseenter", gridContainerMouseEnter);
    container.removeEventListener("mouseleave", gridContainerMouseLeave);
  });
}

// List view mouse event handlers
function listItemMouseEnter() {
  if (currentView !== "list") return;

  this.dataset.hovered = "true";
  if (popupHideTimeout) {
    clearTimeout(popupHideTimeout);
    popupHideTimeout = null;
  }
  currentHoveredItem = this;

  // Small delay to prevent flickering
  setTimeout(() => {
    // Only show if we're still hovering
    if (this.dataset.hovered === "true") {
      const projectId = this.dataset.id;
      const project = projects.find((p) => p.id == projectId);
      if (project) {
        showPopup(project.image);
      }
    }
  }, 10);
}

function listItemMouseLeave() {
  if (currentView !== "list") return;

  this.dataset.hovered = "false";

  // Don't hide immediately, give time to move to another item
  if (popupHideTimeout) clearTimeout(popupHideTimeout);
  popupHideTimeout = setTimeout(() => {
    // Check if we've moved to another item
    const anyHovered = Array.from(
      document.querySelectorAll(".list-view .project-item")
    ).some((p) => p.dataset.hovered === "true");
    if (!anyHovered) {
      hidePopup();
      currentHoveredItem = null;
    }
  }, 150);
}

// Grid view mouse event handlers
function gridContainerMouseEnter() {
  if (currentView !== "grid") return;

  this.dataset.hovered = "true";
  mouseOverImageContainer = true;
  if (popupHideTimeout) {
    clearTimeout(popupHideTimeout);
    popupHideTimeout = null;
  }

  const projectItem = this.closest(".project-item");
  currentHoveredItem = projectItem;

  // Small delay to prevent flickering
  setTimeout(() => {
    // Only show if we're still hovering
    if (this.dataset.hovered === "true") {
      const img = this.querySelector(".project-image");
      if (img && img.src) {
        showPopup(img.src);
      }
    }
  }, 10);
}

function gridContainerMouseLeave() {
  if (currentView !== "grid") return;

  this.dataset.hovered = "false";
  mouseOverImageContainer = false;

  // Don't hide immediately, give time to move to another container
  if (popupHideTimeout) clearTimeout(popupHideTimeout);
  popupHideTimeout = setTimeout(() => {
    // Check if we've moved to another container
    const anyHovered = Array.from(
      document.querySelectorAll(".grid-view .project-image-container")
    ).some((c) => c.dataset.hovered === "true");
    if (!anyHovered) {
      hidePopup();
      currentHoveredItem = null;
    }
  }, 150);
}

// Popup functions using custom easing
function showPopup(src) {
  if (!src) return;

  const { gsap } = window;
  if (!gsap) return;

  if (popupOverlay.style.display !== "flex") {
    // Initial opening of the overlay - use normal animation speed
    isPopupVisible = true;
    popupImage.src = src;
    popupOverlay.style.display = "flex";
    gsap.fromTo(
      popupOverlay,
      { opacity: 0 },
      { opacity: 1, duration: 0.5, ease: "power2.out" }
    );
  } else if (popupImage.src !== src) {
    // Switching images in an already open overlay - use faster animation
    gsap.to(popupImage, {
      opacity: 0,
      duration: 0.1, // Much faster fade out
      ease: "power2.out",
      onComplete: () => {
        popupImage.src = src;
        gsap.to(popupImage, {
          opacity: 1,
          duration: 0.1, // Much faster fade in
          ease: "power2.out"
        });
      }
    });
  }
}

function hidePopup() {
  // Don't hide if we're in the middle of a rapid interaction
  if (Date.now() - lastInteractionTime < 100) return;

  const { gsap } = window;
  if (!gsap) return;

  isPopupVisible = false;

  gsap.to(popupOverlay, {
    opacity: 0,
    duration: 0.5,
    ease: "power2.out",
    onComplete: () => {
      popupOverlay.style.display = "none";
    }
  });
}

// Toggle between list and grid views with FLIP animation
function toggleView(viewType) {
  if (currentView === viewType || isAnimating) return;
  isAnimating = true;

  // Hide popup during view transition
  hidePopup();
  currentHoveredItem = null;
  mouseOverImageContainer = false;

  // Clear any pending timeouts
  if (popupHideTimeout) {
    clearTimeout(popupHideTimeout);
    popupHideTimeout = null;
  }

  if (popupShowTimeout) {
    clearTimeout(popupShowTimeout);
    popupShowTimeout = null;
  }

  const { gsap } = window;
  const Flip = window.Flip;

  if (!gsap || !Flip) {
    // Fallback to basic toggle if GSAP or Flip is not available
    projectsContainer.classList.remove(`${currentView}-view`);
    projectsContainer.classList.add(`${viewType}-view`);
    toggleButtons.forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.view === viewType);
    });
    currentView = viewType;
    isAnimating = false;
    attachHoverEvents();
    return;
  }

  const projectItems = document.querySelectorAll(".project-item");
  const titleElements = document.querySelectorAll(".project-title");
  const yearElements = document.querySelectorAll(".project-year");
  const imageContainers = document.querySelectorAll(".project-image-container");
  const imageElements = document.querySelectorAll(".project-image");

  // In list view, show transitioning images briefly
  if (viewType === "list") {
    imageContainers.forEach((container) =>
      container.classList.add("transitioning-to-list")
    );
  }

  const state = Flip.getState([
    projectItems,
    titleElements,
    yearElements,
    imageContainers
  ]);
  projectsContainer.classList.remove(`${currentView}-view`);
  projectsContainer.classList.add(`${viewType}-view`);
  toggleButtons.forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.view === viewType);
  });
  currentView = viewType;

  if (viewType === "grid") {
    gsap.set(imageContainers, {
      display: "block",
      visibility: "visible",
      opacity: 1
    });
    gsap.set(imageElements, { clipPath: "inset(100% 0% 0% 0%)" });
  }

  Flip.from(state, {
    duration: 1,
    ease: "power2.out",
    absolute: true,
    nested: true,
    onEnter: (elements) =>
      gsap.fromTo(
        elements,
        { opacity: 0 },
        { opacity: 1, duration: 0.5, ease: "power2.out" }
      ),
    onLeave: (elements) =>
      gsap.to(elements, { opacity: 0, duration: 0.5, ease: "power2.out" }),
    onComplete: () => {
      viewType === "grid" ? animateImagesIn() : animateImagesOut();
      // Re-attach hover events after view change
      attachHoverEvents();
    }
  });
}

// Animate images in for grid view
function animateImagesIn() {
  const { gsap } = window;
  if (!gsap) {
    isAnimating = false;
    return;
  }

  const imageElements = document.querySelectorAll(".project-image");
  gsap.to(imageElements, {
    clipPath: "inset(0% 0% 0% 0%)",
    duration: 1,
    ease: "power2.out",
    stagger: 0.06,
    onComplete: () => {
      isAnimating = false;
      // Ensure hover events are properly attached after animation
      attachHoverEvents();
    }
  });
}

// Animate images out for list view
function animateImagesOut() {
  const { gsap } = window;
  if (!gsap) {
    isAnimating = false;
    return;
  }

  const imageElements = document.querySelectorAll(".project-image");
  const imageContainers = document.querySelectorAll(".project-image-container");
  gsap.to(imageElements, {
    clipPath: "inset(0% 0% 100% 0%)",
    duration: 1,
    ease: "power2.out",
    stagger: 0.06,
    onComplete: () => {
      imageContainers.forEach((container) =>
        container.classList.remove("transitioning-to-list")
      );
      gsap.set(imageContainers, { display: "none", visibility: "hidden" });
      isAnimating = false;
      // Ensure hover events are properly attached after animation
      attachHoverEvents();
    }
  });
}
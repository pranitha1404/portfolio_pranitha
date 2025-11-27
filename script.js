// Mobile menu toggle
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });

  Array.from(navLinks.querySelectorAll("a")).forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("show");
    });
  });
}

// Set current year in footer
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// Back to top button
const backToTopBtn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (!backToTopBtn) return;
  if (window.scrollY > 300) {
    backToTopBtn.classList.add("show");
  } else {
    backToTopBtn.classList.remove("show");
  }
});

if (backToTopBtn) {
  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// Theme toggle (dark / light)
const themeToggle = document.getElementById("themeToggle");
const BODY = document.body;
const THEME_KEY = "pranitha_theme";

const savedTheme = localStorage.getItem(THEME_KEY);
if (savedTheme === "light") {
  BODY.classList.add("light-mode");
}

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    BODY.classList.toggle("light-mode");
    const mode = BODY.classList.contains("light-mode") ? "light" : "dark";
    localStorage.setItem(THEME_KEY, mode);
  });
}

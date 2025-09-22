// --- Badge Color Selector ---
function updateCustomizableColor(color) {
  const badges = document.querySelectorAll(".badge");
  for (let i = 0; i < badges.length; i++) {
    badges[i].style.backgroundColor = color;
  }
  const cards = document.querySelectorAll(".card");
  for (let x = 0; x < cards.length; x++) {
    cards[x].style.boxShadow = `0 10px 20px ${color}`;
  }

  document.querySelector(".image-title").style.color = color;
  document.querySelector(".intro-img").style.borderColor = color;

  const dividers = document.querySelectorAll("hr.special-border");
  for (let x = 0; x < dividers.length; x++) {
    dividers[x].style.borderColor = color;
  }

  // --- AI generated content for skills page ---

  // Update skill progress bars
  const progressBars = document.querySelectorAll(".skill-progress");
  for (let i = 0; i < progressBars.length; i++) {
    progressBars[i].style.background = color;
  }

  // Update skill bubbles
  const bubbles = document.querySelectorAll(".skill-bubble");
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].style.background = color;
  }

  // Update hexagons
  const hexagons = document.querySelectorAll(".skill-hexagon");
  for (let i = 0; i < hexagons.length; i++) {
    hexagons[i].style.background = color;
    // Update pseudo-elements through CSS variable
    hexagons[i].style.setProperty("--hexagon-color", color);
  }

  // Update certification badge color
  const certBadges = document.querySelectorAll(".cert-badge");
  for (let i = 0; i < certBadges.length; i++) {
    certBadges[i].style.color = color;
  }

  // Update skill card top border
  const skillCards = document.querySelectorAll(".skill-card::before");
  // Since pseudo-elements can't be directly accessed, we'll add a CSS variable approach
  document.documentElement.style.setProperty("--accent-color", color);

  // --- end of AI generated content for skills page ---
}

document
  .querySelector(".red-button-special")
  .addEventListener("click", () => updateCustomizableColor("#800000"));
document
  .querySelector(".orange-button-special")
  .addEventListener("click", () => updateCustomizableColor("#6f4e37"));
document
  .querySelector(".green-button-special")
  .addEventListener("click", () => updateCustomizableColor("#586f37"));
document
  .querySelector(".blue-button-special")
  .addEventListener("click", () => updateCustomizableColor("#37586f"));
document
  .querySelector(".purple-button-special")
  .addEventListener("click", () => updateCustomizableColor("#4e376f"));
document
  .querySelector(".pink-button-special")
  .addEventListener("click", () => updateCustomizableColor("#9F2B68"));

// --- Light/Dark Mode Selector ---

// Save current state
let isDark = false;

function setDarkMode() {
  isDark = !isDark; // switch state
  document.querySelector("body").style.backgroundColor = isDark
    ? "#121212"
    : "#ffffff";
  document.querySelector(".navbar").style.backgroundColor = isDark
    ? "#121212"
    : "#ffffff";
  document.querySelector(".footer").style.backgroundColor = isDark
    ? "#121212"
    : "#ffffff";
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    card.style.borderColor = isDark ? "#121212" : "#ffffff";
  });

  document.querySelector("body").style.color = isDark ? "#ffffff" : "#000000"; // Text color switch
  document.querySelector(".navbar-brand").style.color = isDark
    ? "#ffffff"
    : "#000000";
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach((link) => {
    link.style.color = isDark ? "#ffffff" : "#000000";
  });
  document.querySelector(".bi.bi-github").style.color = isDark
    ? "#ffffff"
    : "#000000";
  document.querySelector(".bi.bi-linkedin").style.color = isDark
    ? "#ffffff"
    : "#000000";
  document.querySelector(".btn.moon-button").style.color = isDark
    ? "#ffffff"
    : "#000000";
  document.querySelector(".border-x-axis").style.borderColor = isDark
    ? "#ffffff"
    : "#000000";
}

document
  .querySelector(".moon-button")
  .addEventListener("click", () => setDarkMode());

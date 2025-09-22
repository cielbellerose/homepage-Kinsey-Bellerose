// --- Badge Color Selector ---
function updateBadgeColor(color) {
  const badges = document.querySelectorAll(".badge");
  for (let i = 0; i < badges.length; i++) {
    badges[i].style.backgroundColor = color;
  }
}

document
  .querySelector(".red-button-special")
  .addEventListener("click", () => updateBadgeColor("red"));
document
  .querySelector(".orange-button-special")
  .addEventListener("click", () => updateBadgeColor("orange"));
document
  .querySelector(".yellow-button-special")
  .addEventListener("click", () => updateBadgeColor("yellow"));
document
  .querySelector(".green-button-special")
  .addEventListener("click", () => updateBadgeColor("green"));
document
  .querySelector(".blue-button-special")
  .addEventListener("click", () => updateBadgeColor("blue"));
document
  .querySelector(".purple-button-special")
  .addEventListener("click", () => updateBadgeColor("purple"));

// --- Light/Dark Mode Selector ---

// Save current state
let isDark = false;

function setDarkMode() {
  isDark = !isDark; // switch state
  document.querySelector("body").style.backgroundColor = isDark
    ? "#121212"
    : "#ffffff";
  document.querySelector("body").style.color = isDark ? "#ffffff" : "#000000";
}

document
  .querySelector(".moon-button")
  .addEventListener("click", () => setDarkMode());

import "./style.css";

// *** SELECTORS ***

const menu1 = document.querySelector(".menu-list li:first-child");
const dropdown = document.querySelector(".dropdown");

// *** EVENT LISTENER ***

menu1.addEventListener("mouseover", (e) => {
  e.preventDefault();
  dropdown.classList.add("show");
});

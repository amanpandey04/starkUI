const btnNav = document.querySelector(".nav-icon");
const sidebar = document.querySelector(".sidebar");
const container = document.querySelector(".container");
const body = document.querySelector("body");

function showEventHandler() {
  sidebar.focus();
  sidebar.classList.add("show-sidebar");
  container.classList.add("blur");
  body.style.overflow = "hidden";
}

function hideEventHandler() {
  if (sidebar.classList.contains("show-sidebar")) {
    sidebar.classList.remove("show-sidebar");
  }

  if (container.classList.contains("blur")) {
    container.classList.remove("blur");
  }

  if ((body.style.overflow = "hidden")) {
    body.style.overflow = "auto";
  }
}

btnNav.addEventListener("click", showEventHandler);
sidebar.addEventListener("blur", hideEventHandler);

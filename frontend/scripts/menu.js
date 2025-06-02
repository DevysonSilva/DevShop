document.getElementById("menuToggle").addEventListener("click", () => {
  document.getElementById("sidebar").classList.add("active");
});

document.getElementById("closeSidebar").addEventListener("click", () => {
  document.getElementById("sidebar").classList.remove("active");
});
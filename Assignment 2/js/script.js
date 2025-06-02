let mylabels = document.querySelectorAll(".nav-link");
mylabels.forEach((label) => {
  label.addEventListener("click", () => {
    document.querySelector(".active")?.classList.remove("active");
    label.classList.add("active");
  });
});

let myTabs = document.querySelectorAll(".tab");

myTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    document.querySelector(".active-tab")?.classList.remove("active-tab");
    tab.classList.add("active-tab");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const tabButtons = document.querySelectorAll(".tabs__button");
  const tabPanes = document.querySelectorAll(".tabs__pane");

  tabButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const target = document.querySelector(this.getAttribute("data-target"));

      // Remove active class from all buttons and panes
      tabButtons.forEach((btn) => btn.classList.remove("tabs__button--active"));
      tabPanes.forEach((pane) => pane.classList.remove("tabs__pane--active"));

      // Add active class to the clicked button and corresponding pane
      this.classList.add("tabs__button--active");
      target.classList.add("tabs__pane--active");
    });
  });
});
/* ============= Tempalte Windows switching ============ */
let currentWindow = 0;
const windows = document.querySelectorAll(".templates__window");

function navigate(windowIndex) {
  windows[currentWindow].classList.remove("active");
  currentWindow = windowIndex;
  windows[currentWindow].classList.add("active");
}
navigate(0);

/* ============= Contributors Windows switching ============ */
let currentWindowCont = 0;
const windowsCont = document.querySelectorAll(".contributors__window");

function navigateCont(windowIndex) {
  windowsCont[currentWindowCont].classList.remove("active");
  currentWindowCont = windowIndex;
  windowsCont[currentWindowCont].classList.add("active");
}
navigateCont(0);

/* ============= Projects Windows switching ============ */
let currentWindowProj = 0;
const windowsProj = document.querySelectorAll(".projects__window");

function navigateProj(windowIndex) {
  windowsProj[currentWindowProj].classList.remove("active");
  currentWindowProj = windowIndex;
  windowsProj[currentWindowProj].classList.add("active");
}
navigateProj(0);

/* Template names click: for demo purpose */
document.querySelectorAll(".templates__lists li").forEach((item, i) => {
  item.addEventListener("click", function () {
    navigate(1);
  });
});

/* Projects names click: for demo purpose */
document.querySelectorAll(".projects__lists li").forEach((item, i) => {
  item.addEventListener("click", function () {
    navigateProj(1);
  });
});

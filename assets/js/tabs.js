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

/* Template names click */
document.querySelectorAll(".templates__lists li").forEach((item) => {
  item.addEventListener("click", function () {
    navigate(1);
  });
});

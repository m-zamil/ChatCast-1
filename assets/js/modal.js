// Get modal trigger buttons and close buttons
const openModalButtons = document.querySelectorAll(".openModalButton");
const closeModalButtons = document.querySelectorAll(".closeModalButton");

// Function to open the modal by ID
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.style.display = "flex";
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden"; // Disable background scrolling
  modal.querySelector(".modal__content").focus(); // Set focus to modal content
}

// Function to close the modal
function closeModal(modal) {
  modal.style.display = "none";
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = ""; // Restore background scrolling
}

// Open modal event delegation
openModalButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const modalId = e.target.getAttribute("data-modal");
    openModal(modalId);
  });
});

// Close modal event delegation
closeModalButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const modal = e.target.closest(".modal");
    closeModal(modal);
  });
});

// Close modal when clicking on backdrop
document.querySelectorAll(".modal__backdrop").forEach((backdrop) => {
  backdrop.addEventListener("click", (e) => {
    const modal = e.target.closest(".modal");
    closeModal(modal);
  });
});

// Close modal on pressing ESC key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    const visibleModal = document.querySelector('.modal[aria-hidden="false"]');
    if (visibleModal) {
      closeModal(visibleModal);
    }
  }
});

// Return focus to the button that triggered the modal when closing
const modalTriggerButtons = document.querySelectorAll(".openModalButton");
modalTriggerButtons.forEach((button) => {
  button.addEventListener("focus", (e) => {
    // Store button reference for focus return when closing the modal
    e.target._lastFocusedButton = e.target;
  });
});

// Focus management: Return focus to the last focused button when modal closes
closeModalButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const modal = e.target.closest(".modal");
    closeModal(modal);

    // Return focus to the last focused button
    const triggerButton = modal.querySelector("[data-modal]");
    if (triggerButton && triggerButton._lastFocusedButton) {
      triggerButton._lastFocusedButton.focus();
    }
  });
});

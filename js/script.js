// Constants
const modalSection = document.querySelector(".modal");
const modalButton = document.querySelector(".availability-search-button");
const searchForm = modalSection.querySelector(".search-form");
const arrivalDate = modalSection.querySelector(".search-field-arrival");
const departureDate = modalSection.querySelector(".search-field-departure");
const adultsAmount = modalSection.querySelector(".search-field-adults");
const childrenAmount = modalSection.querySelector(".search-field-children");

// Buttons
const arrivalCalendar = modalSection.querySelector(".arrival-block button");
const departureCalendar = modalSection.querySelector(".departure-block button");
const adultsAmountDecrease = modalSection.querySelector(".guests-block span:first-of-type button:first-of-type");
const adultsAmountIncrease = modalSection.querySelector(".guests-block span:first-of-type button:last-of-type");
const childrenAmountDecrease = modalSection.querySelector(".guests-block span:last-of-type button:first-of-type");
const childrenAmountIncrease = modalSection.querySelector(".guests-block span:last-of-type button:last-of-type");
const modalSubmitButton = modalSection.querySelector(".search-button");

// Variables
let isStorageSupport = true;
let siteStorage = "";

// Functions


// Event Handlers

// Hide Modal Section On Page Load
window.onload = modalSection.classList.add("modal-animate-up");

modalButton.addEventListener("click", function (evt) {
  if (modalSection.classList.contains("modal-animate-up")) {
    modalSection.classList.remove("modal-animate-up");
    modalSection.classList.add("modal-animate-down");
    modalSection.focus();
  }
  else if (modalSection.classList.contains("modal-animate-down")) {
    modalSection.classList.remove("modal-animate-down");
    modalSection.classList.add("modal-animate-up");
    if (modalSection.classList.contains("modal-animate-error")) {
      modalSection.classList.remove("modal-animate-error");
    }
  }
});

// Modal Section Buttons
adultsAmountDecrease.addEventListener("click", function (evt) {
  this.nextElementSibling.stepDown();
});

adultsAmountIncrease.addEventListener("click", function (evt) {
  this.previousElementSibling.stepUp();
});

childrenAmountDecrease.addEventListener("click", function (evt) {
  this.nextElementSibling.stepDown();
});

childrenAmountIncrease.addEventListener("click", function (evt) {
  this.previousElementSibling.stepUp();
});

// Check LocalStorage Support
try {
  siteStorage = localStorage.getItem("arrivalDate");
} catch (err) {
  isStorageSupport = false;
}

// Check Form
searchForm.addEventListener("submit", function (evt) {
  if (!arrivalDate.value || !departureDate.value || !adultsAmount.value || !childrenAmount.value) {
    evt.preventDefault();
    modalSection.classList.add("modal-animate-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("arrivalDate", arrivalDate.value);
      localStorage.setItem("departureDate", departureDate.value);
      localStorage.setItem("adultsAmount", adultsAmount.value);
      localStorage.setItem("childrenAmount", childrenAmount.value);
    }
  }
});

modalSubmitButton.addEventListener("click", function (evt) {
  if (modalSection.classList.contains("modal-animate-error")) {
    modalSection.classList.remove("modal-animate-error");
  }
});

// Catch ESC key
window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    // if (evt.key === 0x1B) {
    if (modalSection.classList.contains("modal-animate-down")) {
      evt.preventDefault();
      modalSection.classList.remove("modal-animate-down");
      modalSection.classList.add("modal-animate-up");
    }
  }
});

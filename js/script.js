// Variables
const modalSection = document.querySelector(".modal");
const modalButton = document.querySelector(".availability-search-button");
const arrivalCalendar = document.querySelector(".arrival-block button");
const departureCalendar = document.querySelector(".departure-block button");
const adultsAmountDecrease = document.querySelector(".guests-block span:first-of-type button:first-of-type");
const adultsAmountIncrease = document.querySelector(".guests-block span:first-of-type button:last-of-type");
const childrenAmountDecrease = document.querySelector(".guests-block span:last-of-type button:first-of-type");
const childrenAmountIncrease = document.querySelector(".guests-block span:last-of-type button:last-of-type");
const modalSubmitButton = document.querySelector(".search-button");

// Functions


// Event Handlers

// Hide Modal Section On Page Load
// window.onload = modalSection.classList.add("modal-hide");
window.onload = modalSection.classList.add("modal-animate");

// Show / Hide Modal Section
modalButton.addEventListener("click", function (evt) {
    modalSection.classList.toggle("modal-animate");
    if (modalSection.classList.contains("modal-hide")) {
        modalSection.focus();
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

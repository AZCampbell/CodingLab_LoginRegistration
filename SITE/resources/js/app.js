// Declare variables for the form

// Declare DOM elements to be used in JS
const formOpenButton = document.querySelector("#form-open"); // button that opens form
const home = document.querySelector(".home"); // login form's parent
const formContainer = document.querySelector(".form_container"); // login form container
const formCloseButton = document.querySelector(".form_close"); // button that closes form
const signupButton = document.querySelector("#signup"); // button that switches to signup form
const loginButton = document.querySelector("#login"); // button that switches to login form
const pwShowHide = document.querySelectorAll(".pw_hide"); // password show/hide buttons

// Add "show" class to login form's parent and remove inert attribute
formOpenButton.addEventListener("click", (e) => {
  home.classList.add("show"); // Add class to make form visible
  home.removeAttribute("inert"); // Remove inert attribute to make form interactive
});

// Remove "show" class from login form's parent and add inert attribute
formCloseButton.addEventListener("click", (e) => {
  home.classList.remove("show"); // Remove class to make form invisible
  home.setAttribute("inert", true); // Add inert attribute to make form non-interactive
});

pwShowHide.forEach((icon) => {
  // Add an event listener to each password show/hide icon
  icon.addEventListener("click", () => {
    // Get the input element that is a sibling of the clicked icon
    let getPWInput = icon.parentElement.querySelector("input");
    // If the type of the input is "password", set it to "text"
    if (getPWInput.type === "password") {
      getPWInput.setAttribute("type", "text");
      // Replace the "uil-eye-slash" class with "uil-eye" on the clicked icon
      icon.classList.replace("uil-eye-slash", "uil-eye");
    } else {
      // If the type of the input is not "password", set it to "password"
      getPWInput.setAttribute("type", "password");
      // Replace the "uil-eye" class with "uil-eye-slash" on the clicked icon
      icon.classList.replace("uil-eye", "uil-eye-slash");
    }
  });
});
// Prevent default action of link, which is to navigate to a new page
signupButton.addEventListener("click", (e) => {
  e.preventDefault();
  // Add an "active" class to the form container, which changes its display from "none" to "block"
  formContainer.classList.add("active");
});

// Prevent default action of link, which is to navigate to a new page
loginButton.addEventListener("click", (e) => {
  e.preventDefault();
  // Remove the "active" class from the form container, which changes its display from "block" to "none"
  formContainer.classList.remove("active");
});

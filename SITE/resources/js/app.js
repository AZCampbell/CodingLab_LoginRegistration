// Declare variables for the form

// The form open button element
const formOpenButton = document.querySelector("#form-open"); // The element with id="form-open"

// The home section element
const home = document.querySelector(".home"); // The element with class="home"

// The form container element
const formContainer = document.querySelector(".form_container"); // The element with class="form_container"

// The form close button element
const formCloseButton = document.querySelector(".form_close"); // The element with class="form_close"

// The signup button element
const signupButton = document.querySelector("#signup"); // The element with id="signup"

// The login button element
const loginButton = document.querySelector("#login"); // The element with id="login"

// The password show/hide icon elements
const pwShowHide = document.querySelectorAll(".pw_hide"); // The elements with class="pw_hide"


// When the form open button is clicked, add the "show" class to the home section
// and remove the "inert" attribute, allowing the section to be visible
formOpenButton.addEventListener("click", (e) => {
  home.classList.add("show");
  home.removeAttribute("inert");
});

// When the form close button is clicked, remove the "show" class from the home section
// and add the "inert" attribute to hide the section again
formCloseButton.addEventListener("click", (e) => {
  home.classList.remove("show");
  home.setAttribute("inert", true);
});

pwShowHide.forEach((icon) => {
  // For each icon with the class "pw_hide"
  icon.addEventListener("click", () => {
    // When the icon is clicked
    let getPWInput = icon.parentElement.querySelector("input");
    // Get the input element in the same parent as the clicked icon

    if (getPWInput.type === "password") {
      // If the input type is currently "password",
      getPWInput.setAttribute("type", "text");
      // change the input type to "text"
      icon.classList.replace("uil-eye-slash", "uil-eye");
      // and replace the class of the icon to "uil-eye"
    } else {
      // Else if the input type is currently "text",
      getPWInput.setAttribute("type", "password");
      // change the input type to "password"
      icon.classList.replace("uil-eye", "uil-eye-slash");
      // and replace the class of the icon to "uil-eye-slash"
    }
  });
  // When the icon is clicked, toggle the input type and the icon class
});


// When signup button is clicked, prevent default behavior
// of submitting the form, and add the active class to the form container
signupButton.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("clicked and should add active class");
  formContainer.classList.add("active");
});

// When login button is clicked, prevent default behavior
// of submitting the form, and remove the active class to the form container
loginButton.addEventListener("click", (e) => {
  e.preventDefault();
  formContainer.classList.remove("active");

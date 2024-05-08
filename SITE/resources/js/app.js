// Declare variables for the form

const formOpenButton = document.querySelector("#form-open");
const home = document.querySelector(".home");
const formContainer = document.querySelector(".form_container");
const formCloseButton = document.querySelector(".form_close");
const signupButton = document.querySelector("#signup");
const loginButton = document.querySelector("#login");
const pwShowHide = document.querySelectorAll(".pw_hide");

formOpenButton.addEventListener("click", (e) => {
  home.classList.add("show");
  home.removeAttribute("inert"); // WARNING: `this` is not `my_element`
});
formCloseButton.addEventListener("click", (e) => {
  home.classList.remove("show");
  home.setAttribute("inert", true);
});

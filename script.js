const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
const contactForm = document.getElementById("contact-form");
const formSuccess = document.getElementById("form-success");

navToggle.addEventListener("click", () => {
  navToggle.classList.toggle("active");
  navLinks.classList.toggle("open");
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navToggle.classList.remove("active");
    navLinks.classList.remove("open");
  });
});

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  contactForm.hidden = true;
  formSuccess.hidden = false;
});

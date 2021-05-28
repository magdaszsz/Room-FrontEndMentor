const navToggle = document.querySelector(".nav__icon");
const menu = document.querySelector("nav");

navToggle.addEventListener("click", () => {
  menu.classList.toggle("show");
});

const previous = document.querySelector(".prev");
const next = document.querySelector(".next");

// positioning the slides

const slides = document.querySelectorAll(".slide");

slides.forEach((slide, index) => {
  slide.style.left = `${100 * index}%`;
});
let counter = 0;

// moving the slides

previous.addEventListener("click", () => {
  counter--;
  if (counter < 0) counter = slides.length - 1;
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
});

next.addEventListener("click", () => {
  counter++;
  if (counter >= slides.length) counter = 0;
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
});

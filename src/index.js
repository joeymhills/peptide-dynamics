import { animate, stagger, inView } from "motion"

// Remove preload class once page is fully loaded

window.addEventListener('load', function() {
  Array.from(document.getElementsByTagName('body')).forEach(function(el) {
    el.classList.remove('preload');
  });
});

// Add class to navigation when scrolling down

document.addEventListener('scroll', function() {
  const header = document.querySelector('.header-main');
  if (window.scrollY >= 20) {
    header.classList.add('fade-in');
  } else {
    header.classList.remove('fade-in');
  }
});

// Add class when mobile navigation icon is clicked

Array.from(document.getElementsByClassName('nav-toggle')).forEach(function(el) {
  el.addEventListener('click', function() {
    Array.from(document.getElementsByTagName('body')).forEach(function(el) {
      el.classList.toggle('no-scroll');
    });
    Array.from(document.getElementsByClassName('header-main')).forEach(function(el) {
      el.classList.toggle('active');
    });
  });
});

// Prevent background from scrolling on mobile when navigation is toggled

document.addEventListener('touchmove', function(evt) {
  evt.preventDefault();
});
//animates "Services" when it comes into view
//TODO: Fix this with the css to make the boxes start at y+400
inView(document.getElementById("services"), () => {
  animate(
    ".stagger",
    { transform: "none"},
    { delay: stagger(0.1), duration: 0.8, easing: [.22, .03, .26, 1] })},
    { amount: .6});

inView(document.getElementById("slide-right"), () => {
  animate(
    ".slide-right",
    { opacity: 1, transform: "none" },
    { delay: 0.2, duration: 0.9, easing: [0.17, 0.55, 0.55, 1] })},
    { amount: .5});


inView(".slide-left", () => {
  animate(
    ".slide-left",
    { opacity: 1, transform: "none" },
    { delay: 0.2, duration: 0.9, easing: [0.17, 0.55, 0.55, 1] })},
    { amount: 0});

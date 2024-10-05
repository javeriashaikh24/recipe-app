const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", function(e) {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", function(e) {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__image img", Object.assign({}, scrollRevealOption, {
  origin: "right",
}));
ScrollReveal().reveal(".header__content h2", Object.assign({}, scrollRevealOption, {
  delay: 500,
}));
ScrollReveal().reveal(".header__content h1", Object.assign({}, scrollRevealOption, {
  delay: 1000,
}));

ScrollReveal().reveal(".order__card", Object.assign({}, scrollRevealOption, {
  interval: 500,
}));

ScrollReveal().reveal(".event__content", {
  duration: 1000,
});

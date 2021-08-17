const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const burgerIcon = burger.getElementsByClassName("fa-bars")[0];

  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
    burgerIcon.classList.toggle("fa-times");
  });
};

navSlide();

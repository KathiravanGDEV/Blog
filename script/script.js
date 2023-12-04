window.addEventListener("scroll", function () {
  if (window.scrollY > 560) {
    document.querySelector(".header").classList.add("active");
  } else {
    document.querySelector(".header").classList.remove("active");
  }
});

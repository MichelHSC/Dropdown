const backToTop = document.querySelector("#top");

window.addEventListener("scroll", function () {
  const scrollTop =
    this.window.pageYOffset || this.document.documentElement.scrollTop;

  if (scrollTop > 500) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
});

backToTop.addEventListener("click", function (e) {
  e.preventDefault();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })

});

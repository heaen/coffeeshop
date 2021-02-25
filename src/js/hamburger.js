function hamburger() {
  const menuBtn = document.querySelector(".menu-btn");
  const closeBtn = document.querySelector(".menu-close-button");
  const menu = document.querySelector(".nav-mobile");

  menuBtn.addEventListener("click", () => {
    menu.classList.add("open");
    document.body.style.overflow = "hidden";
    document.body.style.height = "100vh";
    document.body.style.position = "fixed";
  });

  closeBtn.addEventListener("click", () => {
    menu.classList.remove("open");
    document.body.style.overflow = "auto";
    document.body.style.height = "auto";
    document.body.style.position = "static";
  });
}

export default hamburger;

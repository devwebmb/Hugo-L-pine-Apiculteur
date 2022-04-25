let toggleBar = document.getElementById("bars");
let mobileUl = document.getElementById("mobile-ul");
let navView = false;

(() => {
  toggleBar.addEventListener("click", () => {
    navView = !navView;
    console.log(navView);

    if (navView) {
      mobileUl.classList.add("display");
      toggleBar.src = "./assets/icons/xmark-solid.svg";
    } else if (!navView) {
      mobileUl.classList.remove("display");
      toggleBar.src = "./assets/icons/bars-solid.svg";
    }
  });
})();

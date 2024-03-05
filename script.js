// hamburger code
function toggleMenu() {
  const menu = document.querySelector(".menu-link");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// mode button code
document.body.style = "background-color: var(--bs-dark);transition: 0.5s;";
const sun =
  "https://img.icons8.com/ios/50/FFFFFF/sun--v1.png"; //https://img.icons8.com/ios/50/sun--v1.png
  
const moon =
  // "https://www.uplooder.net/img/image/2/addf703a24a12d030968858e0879b11e/moon.svg";
  "https://img.icons8.com/sf-regular/48/moon-symbol.png";
 
var theme = "dark";
const root = document.querySelector(":root");
const container = document.getElementsByClassName("theme-container")[0];
const themeIcon = document.getElementById("theme-icon");
container.addEventListener("click", setTheme);
function setTheme() {
  document.querySelectorAll("section").forEach((element) => {
    console.log(element.classList.contains("dark"));
    element.classList.contains("dark")
      ? element.classList.remove("dark")
      : element.classList.add("dark");
  });

  document.getElementById("desktop-nav").classList.contains("dark")
    ? document.getElementById("desktop-nav").classList.remove("dark")
    : document.getElementById("desktop-nav").classList.add("dark");

    document.getElementById("footer").classList.contains("dark")
    ? document.getElementById("footer").classList.remove("dark")
    : document.getElementById("footer").classList.add("dark");
  
    document.getElementById("hamburger-nav").classList.contains("dark")
    ? document.getElementById("hamburger-nav").classList.remove("dark")
    : document.getElementById("hamburger-nav").classList.add("dark");
  switch (theme) {
    case "dark":
      setLight();
      theme = "light";
      break;
    case "light":
      setDark();
      theme = "dark";
      break;
  }
}
function setLight() {
  root.style.setProperty(
    "--bs-dark",
    "linear-gradient(318.32deg, #c3d1e4 0%, #dde7f3 55%, #d4e0ed 100%)"
  );
  container.classList.remove("shadow-dark");
  setTimeout(() => {
    container.classList.add("shadow-light");
    themeIcon.classList.remove("change");
  }, 300);
  themeIcon.classList.add("change");
  themeIcon.src = moon;
}
function setDark() {
  root.style.setProperty("--bs-dark", "#212529");
  container.classList.remove("shadow-light");
  setTimeout(() => {
    container.classList.add("shadow-dark");
    themeIcon.classList.remove("change");
  }, 300);
  themeIcon.classList.add("change");
  themeIcon.src = sun;
}

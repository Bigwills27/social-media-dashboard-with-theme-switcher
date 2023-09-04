const body = document.querySelector("body");
const header = document.querySelector("header");
const toggle = document.querySelector(".switch>input");
const slider = document.querySelector(".slider");
const currentTheme = document.querySelector(".current-theme");
const dashHead = document.querySelector(".dash-heading");
const card = document.querySelectorAll(".card");
const followers = document.querySelectorAll(".followers");

const overviewHead = document.querySelector(".overview-head");
const overview = document.querySelectorAll(".overview");
const digit = document.querySelectorAll(".digit");

toggle.addEventListener("click", () => {
  localStorage.clear();
  if (toggle.checked == true) {
    localStorage.setItem("toggleStateD", toggle.checked);
    currentTheme.textContent = "Dark Mode";
    body.style.backgroundColor = "hsl(230, 17%, 14%)";
    header.style.backgroundColor = "hsl(232, 19%, 15%)";
    dashHead.style.color = "white";
    slider.style.backgroundImage = "var(--toogle-linear)";
    card.forEach((ca) => {
      ca.style.backgroundColor = "hsl(228, 28%, 20%)";
    });
    followers.forEach((follower) => {
      follower.style.color = "white";
    });
    overviewHead.style.color = "white";

    overview.forEach((view) => {
      view.style.backgroundColor = "hsl(228, 28%, 20%)";
    });
    digit.forEach((digi) => {
      digi.style.color = "white";
    });
  } else {
    localStorage.setItem("toggleStateL", toggle.checked);
    currentTheme.textContent = "Light Mode";
    body.style.backgroundColor = "white";
    header.style.backgroundColor = "var(--Very-Pale-Blue-TopBG-Pattern)";
    dashHead.style.color = "black";
    slider.style.backgroundImage = "var(--color-grey)";
    card.forEach((ca) => {
      ca.style.backgroundColor = "var(--Light-Grayish-Blue-CardBG)";
    });
    followers.forEach((follower) => {
      follower.style.color = "black";
    });

    overviewHead.style.color = "var(--Dark-Grayish-Blue-Text)";

    overview.forEach((view) => {
      view.style.backgroundColor = "var(--Light-Grayish-Blue-CardBG)";
    });

    digit.forEach((digi) => {
      digi.style.color = "black";
    });
  }
});

window.addEventListener("load", () => {
  if (Boolean(localStorage.toggleStateD) == true) {
    toggle.checked = Boolean(localStorage.toggleStateD);
    isDark();
  } else if (Boolean(localStorage.toggleStateL) == false) {
    toggle.checked = Boolean(localStorage.toggleStateL);
    isLight();
  }
});

function isDark() {
  currentTheme.textContent = "Dark Mode";
  body.style.backgroundColor = "hsl(230, 17%, 14%)";
  header.style.backgroundColor = "hsl(232, 19%, 15%)";
  dashHead.style.color = "white";
  slider.style.backgroundImage = "var(--toogle-linear)";
  card.forEach((ca) => {
    ca.style.backgroundColor = "hsl(228, 28%, 20%)";
  });
  followers.forEach((follower) => {
    follower.style.color = "white";
  });
  overviewHead.style.color = "white";

  overview.forEach((view) => {
    view.style.backgroundColor = "hsl(228, 28%, 20%)";
  });
  digit.forEach((digi) => {
    digi.style.color = "white";
  });

  return;
}

function isLight() {
  currentTheme.textContent = "Light Mode";
  body.style.backgroundColor = "white";
  header.style.backgroundColor = "var(--Very-Pale-Blue-TopBG-Pattern)";
  dashHead.style.color = "black";
  slider.style.backgroundImage = "var(--color-grey)";
  card.forEach((ca) => {
    ca.style.backgroundColor = "var(--Light-Grayish-Blue-CardBG)";
  });
  followers.forEach((follower) => {
    follower.style.color = "black";
  });

  overviewHead.style.color = "var(--Dark-Grayish-Blue-Text)";

  overview.forEach((view) => {
    view.style.backgroundColor = "var(--Light-Grayish-Blue-CardBG)";
  });

  digit.forEach((digi) => {
    digi.style.color = "black";
  });
}

// toggle.addEventListener("click", () => {
//   localStorage.setItem("toggleState", toggle.checked);
// });

// Add an event listener to capture style changes and store them
// toggle.addEventListener("click", (event) => {
//   const targetElement = event.target;
//   const styleProperty = targetElement.getAttribute("data-style-property");
//   const styleValue = targetElement.value;

//   document.documentElement.style.setProperty(styleProperty, styleValue);

//   // Store the updated styles in localStorage
//   localStorage.setItem(
//     "pageStyle",
//     document.documentElement.getAttribute("style")
//   );
// });

// window.addEventListener("load", () => {
//   const storedStyle = localStorage.getItem("pageStyle");
//   console.log(storedStyle);
//   if (storedStyle) {
//     document.documentElement.setAttribute("style", storedStyle);
//   }
// });

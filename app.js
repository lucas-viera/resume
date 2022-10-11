function sendMail() {
  var link =
    "mailto:lucasviera.portfolio@gmail.com" +
    "?cc=" +
    "&subject=" +
    encodeURIComponent(
      "Portfolio message from " + document.getElementById("name").value
    ) +
    "&body=" +
    encodeURIComponent(
      document.getElementById("message").value + "\nRespond to"
    ) +
    document.getElementById("email").value;

  window.location.href = link;
}

const burgerBtn = document.querySelector("#burger-menu-btn");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");

burgerBtn.addEventListener("click", () => {
  ul.classList.toggle("show");
  console.log("click on burger");
});

// Close hamburger menu when a link is clicked

// Select nav links
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((link) =>
  link.addEventListener("click", () => {
    ul.classList.remove("show");
  })
);

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

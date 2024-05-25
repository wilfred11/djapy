window.addEventListener("load", () => {
  const container = document.querySelector("#navbarMain");
  var buttons = container.querySelectorAll("div>a.nav-item");
  var pathArray = window.location.pathname.split("/");
  for (let i = 0; i < buttons.length; i++) {
    if (buttons[i].getAttribute("href") === "/" + pathArray[1]) {
      buttons[i].className += " active";
    }
  }
});
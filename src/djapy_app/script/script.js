window.addEventListener("load", (event) => {
    const container = document.querySelector("#navbarMain");
    buttons = container.querySelectorAll("div>a.nav-item");
    var pathArray = window.location.pathname.split('/');
    for (var i = 0; i < buttons.length; i++) {
         if(buttons[i].getAttribute("href")== "/"+pathArray[1]) {
            buttons[i].className+=" active";
         }
    }
});
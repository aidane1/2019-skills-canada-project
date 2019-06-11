function toggleNavBar() {
    let navbar = document.getElementById("nav-bar");
    if (navbar.getAttribute("extended") === "false") {
        navbar.style.maxHeight = "300px";
        navbar.setAttribute("extended", "true");
    } else {
        navbar.style.maxHeight = "0px";
        navbar.setAttribute("extended", "false");
    }
}

window.onresize = function() {
    console.log(window.innerWidth);
    let navbar = document.getElementById("nav-bar")
    if (window.innerWidth > 768) {
        navbar.style.maxHeight = "70px";
        navbar.setAttribute("extended", "false");
    } else {
        navbar.style.maxHeight = "0px";
        navbar.setAttribute("extended", "false");
    }
}
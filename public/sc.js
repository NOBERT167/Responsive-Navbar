let collapseLink = document.querySelector("#collapseLink");
let navLinks = document.querySelectorAll("#collapseLink li");
let menuIcon = document.querySelector("#menuIcon");
let crossIcon = document.querySelector("#crossIcon");

console.log(navLinks);

// Toggle Menu Icon and Cross Icons alternatively.
function toggleIcons () {
    menuIcon.classList.toggle("hidden");
    crossIcon.classList.toggle("hidden");
    collapseLink.classList.toggle("hidden");
}

// Make the navigation links hidden when a navlink is clicked.
function makeHiddenNav () {
    if (collapseLink.classList.contains("absolute")) {
        collapseLink.classList.add("hidden");
    }
}

// Attaching the listeners.
menuIcon.addEventListener("click", toggleIcons);
crossIcon.addEventListener("click", toggleIcons);
navLinks.forEach((nav) => {
    nav.addEventListener("click", makeHiddenNav);
});
const navlist = document.querySelector(".navlist");
const menuBtn = document.querySelector(".ri-menu-line");

menuBtn.onclick = function () {
    navlist.classList.toggle("active");
    menuBtn.classList.toggle("ri-arrow-up-double-line");
};

window.addEventListener("scroll", () => {
    document.querySelector("nav").classList.toggle("scrolling", scrollY > 50);
});

let portofolioTabs = document.getElementsByClassName("portofolio-tab");
let tabContents = document.getElementsByClassName("tab-content");

function tabOpen(x) {
    for (portofolioTab of portofolioTabs) {
        portofolioTab.classList.remove("active");
    }
    for (tabContent of tabContents) {
        tabContent.classList.remove("active-content");
    }
    event.currentTarget.classList.add("active");
    document.getElementById(x).classList.add("active-content");
}
let themeBtn = document.querySelector("#theme-btn");

themeBtn.onclick = function () {
    themeBtn.classList.toggle("ri-sun-line");
    if (themeBtn.classList.contains("ri-sun-line")) {
        document.body.classList.add("active");
    } else {
        document.body.classList.remove("active");
    }
};
const typed = new Typed(".multiple-text", {
    strings: ["web developer, atlet, UI/UX Design"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    lope: true,
});

const sr = scrollreveal({
    distance: "200px",
    duration: 3500,
    delay: 200,
    reset: true,
});
sr.reveal(".home-container h3", {origin: "top"});
sr.reveal(".home-container h1", {origin: "left"});
sr.reveal(".home-container p", {origin: "left"});
sr.reveal(".home-container .right", {origin: "right"});
sr.reveal(".social-icons-container", {origin: "right"});
sr.reveal(".about-container .tittle", {origin: "right"});
sr.reveal(".about-container h3", {origin: "bottom"});
sr.reveal(".about-container p", {origin: "bottom"});
sr.reveal(".about-container .left", {origin: "left"});
sr.reveal(".about-container .right", {origin: "right"});
sr.reveal(".portofolio-container", {origin: "bottom"});
sr.reveal(".portofolio .tittle", {origin: "top"});
sr.reveal(".portofolio-buttons", {origin: "left"});
sr.reveal(".contact .tittle", {origin: "top"});
sr.reveal(".contact .row .box", {origin: "right"});
sr.reveal(".contact .row .contact-form", {origin: "left"});
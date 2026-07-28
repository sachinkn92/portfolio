// ===============================
// Typing Animation
// ===============================

new Typed("#typing", {
    strings: [
        "Software Engineer",
        "Full Stack Developer",
        "Android Developer",
        "AI / ML Enthusiast",
        "Cloud Engineer"
    ],
    typeSpeed: 70,
    backSpeed: 40,
    backDelay: 1800,
    loop: true
});


// ===============================
// Mobile Menu
// ===============================

const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector("#menu");

menuBtn.addEventListener("click", () => {

    if (menu.style.display === "flex") {
        menu.style.display = "none";
    } else {
        menu.style.display = "flex";
        menu.style.flexDirection = "column";
        menu.style.position = "absolute";
        menu.style.top = "70px";
        menu.style.right = "30px";
        menu.style.background = "#1e293b";
        menu.style.padding = "20px";
        menu.style.borderRadius = "12px";
        menu.style.gap = "15px";
    }

});


// ===============================
// Active Navigation
// ===============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


// ===============================
// Scroll Reveal Animation
// ===============================

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.15

});

document.querySelectorAll(".card,.project,.timeline-card,.cert-list div,.contact p")
.forEach(el => {

    el.classList.add("hidden");

    observer.observe(el);

});


// ===============================
// Particles Background
// ===============================

tsParticles.load("particles", {

    background: {

        color: {
            value: "#0f172a"
        }

    },

    fpsLimit: 60,

    particles: {

        number: {

            value: 80

        },

        color: {

            value: "#38bdf8"

        },

        links: {

            enable: true,

            distance: 140,

            color: "#38bdf8",

            opacity: 0.3

        },

        move: {

            enable: true,

            speed: 2

        },

        opacity: {

            value: 0.4

        },

        size: {

            value: 3

        }

    }

});


// ===============================
// Smooth Navbar Background
// ===============================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.background = "rgba(2,6,23,.95)";
        header.style.boxShadow = "0 8px 25px rgba(0,0,0,.4)";

    } else {

        header.style.background = "rgba(15,23,42,.7)";
        header.style.boxShadow = "none";

    }

});


// ===============================
// Scroll To Top Button
// ===============================

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

document.body.appendChild(topBtn);

topBtn.style.position = "fixed";
topBtn.style.bottom = "25px";
topBtn.style.right = "25px";
topBtn.style.width = "50px";
topBtn.style.height = "50px";
topBtn.style.border = "none";
topBtn.style.borderRadius = "50%";
topBtn.style.cursor = "pointer";
topBtn.style.background = "#38bdf8";
topBtn.style.color = "#000";
topBtn.style.fontSize = "22px";
topBtn.style.display = "none";
topBtn.style.zIndex = "999";

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.onclick = () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

};

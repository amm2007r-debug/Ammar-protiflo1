// ===========================
// 1. Language Switching
// ===========================

const langBtn = document.getElementById("langBtn");

let currentLang = "ar";

langBtn.addEventListener("click", function () {

    currentLang = currentLang === "ar" ? "en" : "ar";

    document.documentElement.lang = currentLang;

    document.documentElement.dir =
        currentLang === "ar" ? "rtl" : "ltr";

    document.body.classList.toggle(
        "english",
        currentLang === "en"
    );

    document.querySelectorAll("[data-ar][data-en]").forEach(element => {

        element.textContent =
            element.getAttribute(`data-${currentLang}`);

    });

    langBtn.textContent = currentLang === "ar" ? "EN" : "AR";

});


// ===========================
// 2. Mobile Navigation
// ===========================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("active");

    menuBtn.textContent =
        navLinks.classList.contains("active") ? "✕" : "☰";

});


// Close menu after clicking a link

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");
        menuBtn.textContent = "☰";

    });

});


// ===========================
// 3. Scroll Reveal Animation
// ===========================

const revealElements = document.querySelectorAll(
    ".section-heading, .about-box, .stat-card, .skill-card, .project-card, .contact-box"
);

revealElements.forEach(element => {
    element.classList.add("reveal");
});

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("visible");

            observer.unobserve(entry.target);

        }

    });

}, {
    threshold: 0.12
});

revealElements.forEach(element => {
    observer.observe(element);
});
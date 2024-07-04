// JavaScript for smooth scrolling
document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.getElementById("navbar");
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("#navbar a");

    window.addEventListener("scroll", () => {
        let current = "";

        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - sectionHeight /7) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href").substring(1) === current) {
                link.classList.add("active");
            }
        });

        // Show/hide the navbar
        if (current !== "home") {
            navbar.style.top = "0";
        } else {
            navbar.style.top = "-100px";
        }
    });

// Smooth scrolling for navigation links
    navLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: "smooth"
            });
        });
    });
});


//adjustHeight

function adjustMenuHeight(){
const menuContainer=document.getElementById("menu2");
const menuContent=document.getElementById("content1");

const contentHeight=menuContent.offsetHeight;

menuContainer.style.maxHeight="${contentHeight}px";
}

adjustMenuHeight();

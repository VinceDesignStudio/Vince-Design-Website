// gsap.registerPlugin(ScrollTrigger);


// // Elements
// const projects_section = document.querySelector(".");

// // Animations
// gsap.to(projects_section, {
//     scrollTrigger: projects_section, // start animation when "projects_section" enters the viewport
//     x: 500
// });




const navigation_menu = document.querySelector(".navigation-section");

function handleScroll() {
    const isPageScrolled = window.pageYOffset > 26;
    
    navigation_menu.classList.toggle("navigation-scroll-fixed", isPageScrolled);
}

window.addEventListener("scroll", handleScroll);
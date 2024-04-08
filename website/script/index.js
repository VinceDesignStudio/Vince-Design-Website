const arrow_right = document.querySelector(".arrow-right");
const arrow_left = document.querySelector(".arrow-left");
const testimonial_content = document.querySelectorAll(".testimonial-content");
const testimonial_wrapper = document.querySelector('.testimonial-wrapper')
const scroll_to_top = document.querySelector(".scroll-to-top")
const navigation_menu = document.querySelector(".navigation")
const navigation_menu_container = document.querySelector(".navigation-menu")
const nav_menu = document.querySelector(".nav-menu")
const navigation_button = document.querySelector(".navigation-button")

const slider_status_number = document.querySelector('.slider-status-number');


const state = {
    current: 0
};

const nextSlide = () => {
    if (state.current >= testimonial_content.length - 1) {
        console.log("button disabled");
    } else {
        state.current++;
        updateTestimonial();
        console.log(state.current);
    }
};

const prevSlide = () => {
    if (state.current <= 0) {
        console.log("button disabled");
    } else {
        state.current--;
        updateTestimonial();
        console.log(state.current);
    }
};

const updateTestimonial = () => {
    testimonial_wrapper.innerHTML = testimonial_content[state.current].innerHTML;
};

arrow_right.addEventListener("click", nextSlide);
arrow_left.addEventListener("click", prevSlide);



window.addEventListener("scroll", ()=>{
    if(window.pageYOffset > 76)
        scroll_to_top.style.display = "block"
    else
        scroll_to_top.style.display = "none"
})

scroll_to_top.addEventListener("click", ()=>{
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
})

function handleScroll() {
    const isPageScrolled = window.pageYOffset > 76;
    
    navigation_menu.classList.toggle("navigation-scroll", isPageScrolled);
    navigation_menu_container.classList.toggle("navigation-menu-container", isPageScrolled);
    nav_menu.classList.toggle("navigation-scroll-link", isPageScrolled);
    navigation_button.classList.toggle("navigation-button-scroll", isPageScrolled);
}

window.addEventListener("scroll", handleScroll);
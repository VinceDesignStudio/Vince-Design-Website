const arrow_right = document.querySelector(".arrow-right");
const arrow_left = document.querySelector(".arrow-left");
const testimonial_content = document.querySelectorAll(".testimonial-content");
const scroll_to_top = document.querySelector(".scroll-to-top")
const navigation_menu = document.querySelector(".navigation")
const navigation_menu_container = document.querySelector(".navigation-menu")
const nav_menu = document.querySelector(".nav-menu")
const navigation_button = document.querySelector(".navigation-button")


let state = {
    current: 0
};

let add = ()=>{

    // testimonial_content[current++]
    if(state.current > 3)
    {
        state.current = 0;
    }
    console.log(testimonial_content[state.current++])

    // console.log(state.current++)

    // console.log(testimonial_content[state.current++])

}

// let subtract = ()=>{
//     console.log(testimonial_content[state.current + 1])

//     // testimonial_content[current++]
//     if(state.current > 3)
//     {
//         state.current = 0;
//     }
// }
arrow_right.addEventListener("click", add)



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
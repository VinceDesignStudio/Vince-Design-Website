let hamburger_menu_icon = document.querySelector(".hamburger-menu-icon");
let mobile_nav_menu_list_container = document.querySelector(".mobile-nav-menu-list-container")

hamburger_menu_icon.addEventListener("click", ()=>{
    mobile_nav_menu_list_container.style.display = "block"
})
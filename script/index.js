let hamburger_menu_icon = document.querySelector(".hamburger-menu-icon");
let mobile_nav_menu_list_container = document.querySelector(".mobile-nav-menu-list-container")

hamburger_menu_icon.addEventListener("click", ()=>{
    mobile_nav_menu_list_container.style.display = "block"
})


// Cookie consent code

document.addEventListener("DOMContentLoaded", ()=>{
    const necessary_cookies_consent_btn = document.querySelector("#necessary-cookies-consent-btn");
    const accept_all_cookies_consent_btn = document.querySelector("#accept-all-cookies-consent-btn")
    const cookie_banner_section = document.querySelector("#cookie-banner-section")


    const necessary_cookies_consent = (e)=>{
    e.preventDefault();

        localStorage.setItem("necessaryCookiesConsentStatus", "true");
        // console.log(localStorage.getItem("necessaryCookiesConsentStatus"));
        cookie_banner_section_hide()
    }

    const accept_all_cookies_consent = (e)=>{
    e.preventDefault();

        localStorage.setItem("acceptAllCookiesConsentStatus", "true");
        // console.log(localStorage.getItem("necessaryCookiesConsentStatus"));
        cookie_banner_section_hide()
    }


    const cookie_banner_section_hide = ()=>{
    if(localStorage.getItem("necessaryCookiesConsentStatus") === "true" || localStorage.getItem("acceptAllCookiesConsentStatus") === "true" )
        {
        cookie_banner_section.style.display = "none";
        }
    }

    cookie_banner_section_hide();


    necessary_cookies_consent_btn.addEventListener("click", necessary_cookies_consent);
    accept_all_cookies_consent_btn.addEventListener("click", accept_all_cookies_consent);
})


// Faq section
const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
  const trigger = faq.querySelector(".title-dropdown-wrapper");

  const closedIcon = faq.querySelector(".faq-closed-icon");
  const expandedIcon = faq.querySelector(".faq-expanded-icon");

  trigger.addEventListener("click", () => {

    faqs.forEach((item) => {
      if (item !== faq) {
        item.classList.remove("active");

        const otherClosed =
          item.querySelector(".faq-closed-icon");

        const otherExpanded =
          item.querySelector(".faq-expanded-icon");

        otherClosed.style.display = "block";
        otherExpanded.style.display = "none";
      }
    });

    faq.classList.toggle("active");

    if (faq.classList.contains("active")) {
      closedIcon.style.display = "none";
      expandedIcon.style.display = "block";
    } else {
      closedIcon.style.display = "block";
      expandedIcon.style.display = "none";
    }
  });
});
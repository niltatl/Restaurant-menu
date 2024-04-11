'use strict'; //(daha güvenli kod yazmak için)


//!navbar toggle (gezinme cubugu gecisi)

const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const menuToggleBtn = document.querySelector("[data-nav-toggle-btn]");

menuToggleBtn.addEventListener("click", function () {
    navbar.classList.toggle("active");
    this.classList.toggle("active");
});

for (let i = 0; i < navbarLinks.length; i++) { //! gezinme cubugnu tek tek gezdiriyor
    navbarLinks[i].addEventListener("click", function() {
        navbar.classList.toggle("active");
        menuToggleBtn.classList.toggle("active");
    })
}

/* header sticky */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function() {
    if (window.scrollY >= 100) {
        header.classList.add("active");
    }
});

//! elems(ögeler) ve submit(göndermek) demek

//!search box toggle

const searchBtn = document.querySelector("[data-search-btn]");
const searchContainer = document.querySelector("[data-search-container]");
const searchSubmitBtn = document.querySelector("[data-search-submit-btn]");
const searchCloseBtn = document.querySelector("[data-search-close-btn]");

const searchBoxElems = [searchBtn, searchSubmitBtn, searchCloseBtn];

for (let i = 0; i < searchBoxElems.length; i++) {
    searchBoxElems[i].addEventListener("click", function()) {
        searchContainer.classList.toggle("active");
        document.body.classList.toggle("active");
    }
}

//bisikletin hareketi

const deliveryBoy = document.querySelector("[data-delivery-boy]");

let deliveryBoyMove = -80; //ne kadar hareket edicegini belirtiyor
let lastScrollPos = 0; //son kaydırma pozisyonunu takip ediyor

window.addEventListener("scroll", function()) {
    let deliveryBoyTopPops = deliveryBoy.getBoundingClientRect().top;
    //deliveryBoy SAYFA uzerındeki pozisyonunu hesaplar
}

if (deliveryBoyTopPos < 500 && deliveryBoyTopPops > -250) {
    let activeScrollPos = window.scrollY; //anlık kaydırma pozisyonunu alır

    if(lastScrollPos < activeScrollPos) {
        deliveryBoyMove += 1; //kullanıcının asagı veya yukarı kaydırıp kaydırmadıgını kontrol eder.
    } else {
        deliveryBoyMove -= 1;
    }

    lastScrollPos = activeScrollPos;
    deliveryBoy.style.transform = `translateX(${deliveryBoyMove}px)`;
    //'deliveryBoy' ogesinin 'translateX' ozellıgını kullanarak yatay olarak
    //hareket ettirir.

}
let navInfo = document.querySelector(".nav-info");
let nav = document.querySelector(".bar");
let closeBtn = document.querySelector(".close");

nav.addEventListener("click", () => {
  if (nav) {
    navInfo.classList.add("show");
  }
});

closeBtn.addEventListener("click", () => {
  if (closeBtn) {
    navInfo.classList.remove("show");
  }
});

// inner navbar / nav section

let allBtns = document.querySelectorAll(".nav-btn");
let NavBtnCont = document.querySelectorAll(".nav-btn-container");

for (let b = 0; b < allBtns.length; b++) {
  allBtns[b].addEventListener("click", function () {
    const data = this.dataset.nav;
    const ids = document.getElementById(data);
    var allContent = document.querySelectorAll(".nav-links");

    for (let s = 0; s < allContent.length; s++) {
      allContent[s].style.display = "none";
    }

    for (let s = 0; s < allBtns.length; s++) {
      allBtns[s].classList.remove("active");
    }

    this.classList.add("active");
    ids.style.display = "block";
  });
}

for (let i = 0; i < NavBtnCont.length; i++) {
  NavBtnCont[i].addEventListener("click", function () {
    let imgActive = document.querySelectorAll(".isActive");

    for (let s = 0; s < imgActive.length; s++) {}
  });
}

document.querySelector(".nav-btn").click();

// swiper js

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,

  autoplay: {
    delay: 1800,
    disableOnInteraction: false,
  },
  
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});


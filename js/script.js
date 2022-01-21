function testWebP(callback) {
  let webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };
  webP.src = webP.src =
    "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
  if (support == true) {
    document.querySelector("body").classList.add("webp");
  }
});

let mainNav = document.querySelector(".main-nav");
let navToggle = document.querySelector(".main-nav__toggle");
let chooseLink = document.querySelectorAll(".site-list__item a");

navToggle.addEventListener("click", function () {
  if (mainNav.classList.contains("main-nav--closed")) {
    mainNav.classList.remove("main-nav--closed");
    mainNav.classList.add("main-nav--opened");
  } else {
    mainNav.classList.remove("main-nav--opened");
    mainNav.classList.add("main-nav--closed");
  }

  chooseLink.forEach(function (e) {
    e.addEventListener("click", function () {
      if (mainNav.classList.contains("main-nav--opened")) {
        mainNav.classList.remove("main-nav--opened");
        mainNav.classList.add("main-nav--closed");
      }
    });
  });
});

if (document.querySelector(".workouts-images")) {
  new Swiper(".workouts-wrapper", {
    loop: true,

    autoplay: {
      delay: 5000,
    },
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    grabCursor: true,
    speed: 500,

    navigation: {
      nextEl: ".button-right",
      prevEl: ".button-left",
    },
    breakpoints: {
      834: {
        spaceBetween: 30,
      },
    },
  });
}

if (document.querySelector(".community-images")) {
  new Swiper(".community-wrapper", {
    loop: true,

    autoplay: {
      delay: 5000,
    },
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    grabCursor: true,
    speed: 500,

    navigation: {
      nextEl: ".button-right",
      prevEl: ".button-left",
    },

    breakpoints: {
      834: {
        spaceBetween: 30,
      },
    },
  });
}

if (document.querySelector(".faq")) {
  let questionItem = document.querySelectorAll(".question-item");
  questionItem.forEach(function (e) {
    e.addEventListener("click", function () {
      if (e.classList.contains("question-item--closed")) {
        e.classList.remove("question-item--closed");
        e.classList.add("question-item--opened");
      } else {
        e.classList.remove("question-item--opened");
        e.classList.add("question-item--closed");
      }
    });
  });
}

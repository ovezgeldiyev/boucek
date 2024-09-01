// menu start
var menu = document.getElementById("menu");
var menuBtn = document.getElementById("menuBtn");
var body = document.body;
let header = document.getElementById("header");
menuBtn.onclick = function () {
  menu.classList.toggle("active");
  menuBtn.classList.toggle("active");
  body.classList.toggle("active");
  header.classList.toggle("active");
};
window.addEventListener("click", function (e) {
  if (e.target == menu) {
    menu.classList.remove("active");
    menuBtn.classList.remove("active");
    body.classList.remove("active");
    header.classList.remove("active");
  }
});

// menu end
// scroll start
function scrollFunc() {
  if (window.scrollY >= 60) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
window.onscroll = function () {
  scrollFunc();
};
// scroll end

// sliders
$(function () {
  $(".offer__inner-slider").slick({
    dots: true,
    infinite: true,
    centerMode: false,
    fade: true,
    arrows: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 931,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  });
});
$(function () {
  $(".article__inner-gallery").slick({
    dots: false,
    infinite: true,
    centerMode: false,
    arrows: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 931,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 541,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        },
      },
    ],
  });
});
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  const inputs = document.querySelectorAll(".contactForm__input");
  inputs.forEach((item) => {
    const inputItem = item.querySelector("input");
    const selectItem = item.querySelector("select");
    const label = item.querySelector("label");
    if (selectItem) {
      selectItem.onchange = () => {
        label.classList.add("top");
      };
    }
    if (inputItem) {
      if (inputItem.value.length != 0) {
        label.classList.add("top");
      } else {
        label.classList.remove("top");
      }
      inputItem.onchange = () => {
        if (inputItem.value.length != 0) {
          label.classList.add("top");
        } else {
          label.classList.remove("top");
        }
      };
    }
  });
}
// video start
const playBtn = document.getElementById("play");
if (playBtn) {
  const banner = document.getElementById("banner");
  const playBtnText = playBtn.querySelector("b");

  playBtn.addEventListener("click", function () {
    if (video.paused == true) {
      video.play();

      playBtn.classList.toggle("active");
      banner.classList.toggle("active");
      playBtnText.innerHTML = "Pause video";
    } else {
      video.pause();

      playBtn.classList.remove("active");
      banner.classList.remove("active");
      playBtnText.innerHTML = "pustit video";
    }
  });

  video.onclick = function () {
    if (video.paused == true) {
      video.play();

      playBtn.classList.toggle("active");
      banner.classList.toggle("active");
      playBtnText.innerHTML = "Pause video";
    } else {
      video.pause();

      playBtn.classList.remove("active");
      banner.classList.remove("active");
      playBtnText.innerHTML = "pustit video";
    }
  };
}
// video end

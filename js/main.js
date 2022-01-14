//JQuery
$(function () {
  "use strict";
  $(window).on("scroll , load", function () {
    //NavBar Bg & Resp Nav Bg
    if ($(window).scrollTop() >= 200) {
      $(".navbarr").addClass("nav-active");
    } else {
      $(".navbarr").removeClass("nav-active");
    }
    //Animate Elements
    $(".section").each(function () {
      if ($(window).scrollTop() >= $(this).offset().top - 550) {
        $(this).find(".faded").css({
          opacity: 1,
          transform: "translate(0 , 0)",
        });
      } else {
        $(this).find(".faded").css({
          opacity: 0,
          transform: "translate(-150px , 0)",
        });
      }
      //Sync Nav Links
      if ($(window).scrollTop() >= $(this).offset().top - 100) {
        let blockId = $(this).attr("id");
        $(".navbarr .nav-links li").removeClass("active");
        $(".resp-nav .resp-links li").removeClass("active");
        $(
          '.navbarr .nav-links li[data-scroll="' + "#" + blockId + '"]'
        ).addClass("active");
        $(
          '.resp-nav .resp-links li[data-scroll="' + "#" + blockId + '"]'
        ).addClass("active");
      }
      //Scroller
      if ($(window).scrollTop() >= 150) {
        $(".scroller i").fadeIn(500);
      } else {
        $(".scroller i").fadeOut(500);
      }
    });
  });
  //Resp-Nav Click
  $(".resp-nav .nav-icons").click(function () {
    $(".resp-nav").toggleClass("open");
  });
  //Mouse Icon Click
  $(".banner i").click(function () {
    $("html , body").animate({
      scrollTop: 650,
    });
  });
  //Nav Links Click
  $(".navbarr .nav-links li , .resp-nav .resp-links li").click(function () {
    $("html , body").animate(
      {
        scrollTop:
          $(document.querySelector($(this).data("scroll"))).offset().top - 20,
      },
      300
    );
  });
  //Scroller
  $(".scroller i").click(function () {
    $(window).scrollTop(0);
  });
  $(window).keyup(function (e) {
    let uniCode = e.which;
    if (uniCode === 27) {
      $(".resp-nav").removeClass("open");
    }
  });
});

//Js
//Counting Section
let nums = document.querySelectorAll(".counting .number");
let countingSection = document.querySelector(".counting");
let started = false; // To Stop Scrolling Function

window.onscroll = function () {
  //Counting Numbers
  if (window.scrollY >= countingSection.offsetTop - 500) {
    if (started == false) {
      nums.forEach(counting);
    }
    started = true;
  }
};
//
function counting(el) {
  let goal = el.dataset.count;
  let counter = setInterval(function () {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(counter);
    }
  }, 2000 / el.dataset.count);
}
//Portfolio
let logoOne = document.querySelector(".featured-work .shuffle-imgs .two");
let logoTwo = document.querySelector(".featured-work .shuffle-imgs .three");
let websiteOne = document.querySelector(".featured-work .shuffle-imgs .one");
let websiteTwo = document.querySelector(".featured-work .shuffle-imgs .four");
let websiteThree = document.querySelector(
  ".featured-work .shuffle-imgs .seven"
);
let graphic = document.querySelector(".featured-work .shuffle-imgs .five");
let video = document.querySelector(".featured-work .shuffle-imgs .six");
let marketing = document.querySelector(".featured-work .shuffle-imgs .eight");
let allBlock = document.querySelector(".featured-work");

$(".featured-work ul li").on("click", function () {
  $(this).addClass("active").siblings().removeClass("active");
  if ($(this).data("class") === "all" && window.innerWidth < 990) {
    $(".featured-work .shuffle-imgs .col-md").css("opacity", 1);
    $(".featured-work .shuffle-imgs .col-md").css("transform", "unset");
    allBlock.style.height = "unset";
    allBlock.style.overflow = "visible";
  }
  if ($(this).data("class") !== "all" && window.innerWidth < 990) {
    $(".featured-work .shuffle-imgs .col-md").css("opacity", ".08");
    $($(this).data("class")).parent().css("opacity", 1);
    $(".featured-work .shuffle-imgs .col-md").css("transform", "unset");
    allBlock.style.height = "unset";
    allBlock.style.overflow = "visible";
  }

  if ($(this).data("class") === ".websites" && window.innerWidth > 990) {
    graphic.style.opacity = 0;
    graphic.style.transform = "translateX(0) scale(0 , 0)";
    video.style.opacity = 0;
    video.style.transform = "translateX(0) scale(0 , 0)";
    marketing.style.opacity = 0;
    marketing.style.transform = "translateX(0) scale(0 , 0)";
    logoOne.style.opacity = 0;
    logoOne.style.transform = "translateX(0) scale(0 , 0)";
    logoTwo.style.opacity = 0;
    logoTwo.style.transform = "translateX(0) scale(0 , 0)";
    websiteOne.style.opacity = 1;
    websiteOne.style.transform = "translateX(223.5%) scale(1 , 1)";
    websiteTwo.style.opacity = 1;
    websiteTwo.style.transform = "translateX(-335%) scale(1 , 1)";
    websiteThree.style.opacity = 1;
    websiteThree.style.transform = "translate(-112% , -110%) scale(1 , 1)";
    allBlock.style.height = "768px";
    allBlock.style.overflow = "hidden";
  }

  if ($(this).data("class") === ".logos" && window.innerWidth > 990) {
    graphic.style.opacity = 0;
    graphic.style.transform = "translateX(0) scale(0 , 0)";
    video.style.opacity = 0;
    video.style.transform = "translateX(0) scale(0 , 0)";
    marketing.style.opacity = 0;
    marketing.style.transform = "translateX(0) scale(0 , 0)";
    websiteOne.style.opacity = 0;
    websiteOne.style.transform = "translateX(0) scale(0 , 0)";
    websiteTwo.style.opacity = 0;
    websiteTwo.style.transform = "translateX(0) scale(0 , 0)";
    websiteThree.style.opacity = 0;
    websiteThree.style.transform = "translateX(0) scale(0 , 0)";
    logoOne.style.opacity = 1;
    logoOne.style.transform = "translateX(0) scale(1 , 1)";
    logoTwo.style.opacity = 1;
    logoTwo.style.transform = "translateX(-223%) scale(1 , 1)";
    allBlock.style.height = "768px";
    allBlock.style.overflow = "hidden";
  }

  if ($(this).data("class") === ".graphic" && window.innerWidth > 990) {
    video.style.opacity = 0;
    video.style.transform = "translateX(0) scale(0 , 0)";
    marketing.style.opacity = 0;
    marketing.style.transform = "translateX(0) scale(0 , 0)";
    logoOne.style.opacity = 0;
    logoOne.style.transform = "translateX(0) scale(0 , 0)";
    logoTwo.style.opacity = 0;
    logoTwo.style.transform = "translateX(0) scale(0 , 0)";
    websiteOne.style.opacity = 0;
    websiteOne.style.transform = "translateX(0) scale(0 , 0)";
    websiteTwo.style.opacity = 0;
    websiteTwo.style.transform = "translateX(0) scale(0 , 0)";
    websiteThree.style.opacity = 0;
    websiteThree.style.transform = "translate(0) scale(0 , 0)";
    graphic.style.opacity = 1;
    graphic.style.transform = "translate(0 , -110%) scale(1 , 1)";
    allBlock.style.height = "768px";
    allBlock.style.overflow = "hidden";
  }

  if ($(this).data("class") === ".marketing" && window.innerWidth > 990) {
    video.style.opacity = 0;
    video.style.transform = "translateX(0) scale(0 , 0)";
    logoOne.style.opacity = 0;
    logoOne.style.transform = "translateX(0) scale(0 , 0)";
    logoTwo.style.opacity = 0;
    logoTwo.style.transform = "translateX(0) scale(0 , 0)";
    websiteOne.style.opacity = 0;
    websiteOne.style.transform = "translateX(0) scale(0 , 0)";
    websiteTwo.style.opacity = 0;
    websiteTwo.style.transform = "translateX(0) scale(0 , 0)";
    websiteThree.style.opacity = 0;
    websiteThree.style.transform = "translate(0) scale(0 , 0)";
    graphic.style.opacity = 0;
    graphic.style.transform = "translate(0) scale(0 , 0)";
    marketing.style.opacity = 1;
    marketing.style.transform = "translate(-335% , -110%) scale(1 , 1)";
    allBlock.style.height = "768px";
    allBlock.style.overflow = "hidden";
  }

  if ($(this).data("class") === ".videos" && window.innerWidth > 990) {
    logoOne.style.opacity = 0;
    logoOne.style.transform = "translateX(0) scale(0,0)";
    logoTwo.style.opacity = 0;
    logoTwo.style.transform = "translateX(0) scale(0,0)";
    websiteOne.style.opacity = 0;
    websiteOne.style.transform = "translateX(0) scale(0,0)";
    websiteTwo.style.opacity = 0;
    websiteTwo.style.transform = "translateX(0) scale(0,0)";
    websiteThree.style.opacity = 0;
    websiteThree.style.transform = "translate(0) scale(0,0)";
    graphic.style.opacity = 0;
    graphic.style.transform = "translate(0) scale(0,0)";
    marketing.style.opacity = 0;
    marketing.style.transform = "translate(0) scale(0,0)";
    video.style.opacity = 1;
    video.style.transform = "translate(-111% , -110%) scale(1 , 1)";
    allBlock.style.height = "768px";
    allBlock.style.overflow = "hidden";
  }

  if ($(this).data("class") === ".all" && window.innerWidth > 990) {
    graphic.style.opacity = 1;
    graphic.style.transform = "translateX(0) scale(1 , 1)";
    video.style.opacity = 1;
    video.style.transform = "translateX(0) scale(1 , 1)";
    marketing.style.opacity = 1;
    marketing.style.transform = "translateX(0) scale(1 , 1)";
    websiteOne.style.opacity = 1;
    websiteOne.style.transform = "translateX(0) scale(1 , 1)";
    websiteTwo.style.opacity = 1;
    websiteTwo.style.transform = "translateX(0) scale(1 , 1)";
    websiteThree.style.opacity = 1;
    websiteThree.style.transform = "translateX(0) scale(1 , 1)";
    logoOne.style.opacity = 1;
    logoOne.style.transform = "translateX(0) scale(1 , 1)";
    logoTwo.style.opacity = 1;
    logoTwo.style.transform = "translateX(0) scale(1 , 1)";
    allBlock.style.height = "unset";
    allBlock.style.overflow = "unset";
  }
  if (window.innerWidth < 991) {
    return false;
  }
});

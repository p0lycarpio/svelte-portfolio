/* =============================

 * main.js
 * Copyright 2021 Arsène Reymond
 * http://arsene.reymond.free.fr

================================ */

// Box shadox for softwares

export function run() {
  var soft = document.querySelectorAll(".soft > *");
  var color = [
    "#E54C21",
    "#0070BA",
    "#F7E018",
    "#777BB3",
    "#FFF",
    "#9e9e9e",
    "#0769ad",
    "#42b883",
    "#9E00B6",
    "#70db4f",
    "#cb3837",
    "#e6592e",
    "#FF2D2D",
    "#0066B8",
    "#FFC518",
    "#F5C021",
    "#31A8FF",
    "#FF9A00",
    "#FF3366",
    "#9999FF",
    "#9999FF",
    "#D93C02",
  ];

  soft.forEach(function (element, i) {
    element.addEventListener("mouseover", function () {
      element.style.setProperty("filter", "drop-shadow(0px 4px 10px" + color[i] + ")");
    });
    element.addEventListener("mouseout", function () {
      element.style.removeProperty("filter");
    });
  });

  // Disable right click on images

  $("img").on("contextmenu", function (e) {
    return false;
  });

  // Show navbar on mobile when scrolling ==========================

  $(document).ready(function () {
    var $header = $("nav"),
      $clone = $header.before($header.clone().addClass("clone").attr("id", "navbar-float"));

    $(window).on("scroll", function () {
      var fromTop = $(window).scrollTop();
      $("body").toggleClass("down", fromTop > 500);
    });
  });

  // Left sidebar menus : enable and disable =======================

  var overlay = document.getElementById("overlay");
  var sidebar = document.getElementById("sidenav");
  var sidebarLinks = document.querySelectorAll("#sidebar-links li a");
  var terms = document.getElementById("terms");

  sidebarLinks.forEach((element) => {
    element.addEventListener("click", function closeDelay() {
      setTimeout(() => {
        closeNav("menu");
      }, 500);
    });
  });

  function openNav(x) {
    if (x == "menu") {
      sidebar.style.width = "250px";
    }
    if (x == "terms") {
      terms.style.width = "332px";
    }
    overlaySwitch(1);
  }

  function closeNav(y, z) {
    if (y == "menu") {
      sidebar.style.width = "0";
      overlaySwitch(0);
    }
    if (y || z == "terms") {
      terms.style.width = "0";
    }
  }

  function overlaySwitch(e) {
    if (e == 1) {
      overlay.setAttribute("class", "menu-overlay opened");
    } else {
      overlay.removeAttribute("class", "menu-overlay opened");
    }
  }

  // Button scroll action in footer
  $(document).ready(function () {
    $("#back-to-top").click(function () {
      $("body,html").animate(
        {
          scrollTop: 0,
        },
        100
      );
      return false;
    });
  });

  // WOW.js & Animate.css for animations on scroll

  var wow = new WOW({
    boxClass: "anmCSS", // animated element css class (default is wow)
    animateClass: "animated", // animation css class (default is animated)
    offset: 0, // distance to the element when triggering the animation (default is 0)
    mobile: true, // trigger animations on mobile devices (default is true)
    live: true, // act on asynchronously loaded content (default is true)
    scrollContainer: null, // optional scroll container selector, otherwise use window,
    resetAnimation: true, // reset animation on end (default is true)
  });
  wow.init();

  // Wavify Settings =====================================

  var myWave = wavify(document.querySelector("#wave"), {
    height: 10,
    bones: 4,
    amplitude: 20,
    color: "var(--bkg-color)",
    speed: 0.2,
  });

  // Preloader ==========================================

  $(function () {
    $('[data-toggle="tooltip"]').tooltip();
  });

  ("use strict");
  $(window).on("load", function () {
    /*------------------
		Preloder
	--------------------*/
    $(".loader").fadeOut();
    $("#preloder").delay(300).fadeOut("slow");
  });

  (function ($) {
    /*------------------
		Background set
	--------------------*/
    $(".set-bg").each(function () {
      var bg = $(this).data("setbg");
      $(this).css("background-image", "url(" + bg + ")");
    });

    $(".progress-bar-style").each(function () {
      var progress = $(this).data("progress");
      var prog_width = progress + "%";
      if (progress <= 100) {
        $(this).append(
          '<div class="bar-inner" style="width:' +
            prog_width +
            '"><span>' +
            prog_width +
            "</span></div>"
        );
      } else {
        $(this).append(
          '<div class="bar-inner" style="width:100%"><span>' + prog_width + "</span></div>"
        );
      }
    });

    $(".lan-prog").each(function () {
      var progress = $(this).data("lanprogesss");
      var ele = "<span></span>";
      var ele_fade = '<span class="fade-ele"></span>';

      for (var i = 1; i <= 5; i++) {
        if (i <= progress) {
          $(this).append(ele);
        } else {
          $(this).append(ele_fade);
        }
      }
    });

    if ($().circleProgress) {
      //Set progress circle 1
      $("#progress1").circleProgress({
        value: 0.75,
        size: 175,
        thickness: 2,
        fill: "#40424a",
        emptyFill: "rgba(0, 0, 0, 0)",
      });
      //Set progress circle 2
      $("#progress2").circleProgress({
        value: 0.83,
        size: 175,
        thickness: 2,
        fill: "#40424a",
        emptyFill: "rgba(0, 0, 0, 0)",
      });

      //Set progress circle white
      $("#progress3").circleProgress({
        value: 0.75,
        size: 175,
        thickness: 2,
        fill: "#ffffff",
        emptyFill: "rgba(0, 0, 0, 0)",
      });

      //Set progress circle white
      $("#progress4").circleProgress({
        value: 0.83,
        size: 175,
        thickness: 2,
        fill: "#ffffff",
        emptyFill: "rgba(0, 0, 0, 0)",
      });

      //Set progress circle skyblue
      $("#progress5").circleProgress({
        value: 0.75,
        size: 175,
        thickness: 2,
        fill: "#009fff",
        emptyFill: "rgba(0, 0, 0, 0)",
      });

      //Set progress circle skyblue
      $("#progress6").circleProgress({
        value: 0.83,
        size: 175,
        thickness: 2,
        fill: "#009fff",
        emptyFill: "rgba(0, 0, 0, 0)",
      });
    }
  })(jQuery);
  // ====================================================

  // Yall - lazy laoding
  document.addEventListener("DOMContentLoaded", yall);
}

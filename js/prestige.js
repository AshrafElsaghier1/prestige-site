//showing drop down of nav bar

$(".currency").on("click", function () {
  $(this).toggleClass("show");
});
var $window = $(window);

$(".home .chevron-down").on("click", function () {
  $("body , html").animate(
    {
      scrollTop: $($(this).data("offset")).offset().top,
    },
    1400
  );
});

//setting top of navbar
const height = $(".shipping").innerHeight();
$("nav").css("top", height);

$window.scroll(function () {
  if ($(this).scrollTop() > 0) {
    $("nav").addClass("bg");
  } else {
    $("nav").removeClass("bg");
  }
});

$(function () {
  if ($(this).scrollTop() > 0) {
    $("nav").addClass("bg");
  } else {
    $("nav").removeClass("bg");
  }
});

// close menu

$(".small-media-nav .close").on("click", function () {
  $(this).parent(".small-media-nav").removeClass("open");
});
// open menu

$(".menu-bar").on("click", function () {
  $(".small-media-nav ").addClass("open");
});
//Accordion of side bar

$(".media-shop .span").on("click", function () {
  $(this).next("ul").slideToggle();

  $(this).find("i").toggleClass(" fa-minus fa-plus");
});

$(".accordion-list").click(function () {
  if ($(".accordion-list").next("ul").is(":visible")) {
    $(".accordion-list").next("ul").slideUp(300);
    $(".plus-minus").text("+");
  }
  if ($(this).next("ul").is(":visible")) {
    $(this).next("ul").slideUp(300);
    $(this).find(".plus-minus").text("+");
  } else {
    $(this).next("ul").slideDown(300);
    $(this).find(".plus-minus").text("-");
  }
});

$window.ready(function () {
  if ($(this).scrollTop() > 0) {
    $("nav").addClass("bg");
  } else {
    $("nav").removeClass("bg");
  }
});
let navTop = $("nav").css("top");

// add & remove class Active to/from gender-tabs

$(".gender-tabs .btn-tabs").on("click", function () {
  $(".gender-tabs .btn-tabs").removeClass("active");
  $(this).addClass("active");
  $($(this).data("custom")).addClass("active").siblings().removeClass("active");
});

//hovering on pictures of bags
$(".products img").hover(
  function () {
    const dataSrc = $(this).data("src");

    $(this).attr("src", dataSrc);
  },
  function () {
    const imgSrc = $(this).data("main-src");
    $(this).attr("src", imgSrc);
  }
);

// add class active to year-tabs links

$(".year-tabs li a").on("click", function (e) {
  e.preventDefault();
  $(".year-tabs li a").removeClass("active");
  $(this).addClass("active");

  $($(this).data("custom")).addClass("active").siblings().removeClass("active");
});

/**************** add class active to span of shop section ****************/

$(".shop-section .img-container span").on("click", function () {
  $(".img-container span").removeClass("active");
  $(this).addClass("active");
  $($(this).data("custom")).addClass("active").siblings().removeClass("active");

  if ($(this).hasClass("circle-right")) {
    $(this).parentsUntil(".owl-content").find(".women").addClass("active");
  } else {
    $(this).parentsUntil(".owl-content").find(".women").removeClass("active");
  }

  if ($(this).hasClass("circle-left")) {
    $(this).parentsUntil(".owl-content").find(".men").addClass("active");
  } else {
    $(this).parentsUntil(".owl-content").find(".men").removeClass("active");
  }
});

$(".hovering-bag-dots span").on("click", function () {
  $(".hovering-bag-dots span").removeClass("active");
  $(this).addClass("active");
  $($(this).data("custom")).addClass("active").siblings().removeClass("active");
  if ($(this).hasClass("women")) {
    $(this)
      .parentsUntil(".owl-content")
      .find(".circle-right")
      .addClass("active");
  } else {
    $(this)
      .parentsUntil(".owl-content")
      .find(".circle-right")
      .removeClass("active");
  }

  if ($(this).hasClass("men")) {
    $(this)
      .parentsUntil(".owl-content")
      .find(".circle-left")
      .addClass("active");
  } else {
    $(this)
      .parentsUntil(".owl-content")
      .find(".circle-left")
      .removeClass("active");
  }
});

$(".ul-tabs li a").on("click", function (e) {
  e.preventDefault();
  $($(this).data("link")).addClass("active").siblings().removeClass("active");
});

// Select bag's color  product of monthd

$(".product-month-content .color .colors-choose a").on("click", function (e) {
  e.preventDefault();

  $(".product-month-content .color .colors-choose a").removeClass("active");
  $(this).addClass("active");

  $($(this).data("color")).addClass("active").siblings().removeClass("active");

  let text = $(this).data("color").slice(1);

  $(".selected-color").text(text);
});

$(".label select").on("click", function () {
  let Text = $(this).val();
  $(".label-size").text(Text);
});
$(".search , .nav-icons .search-icon").on("click", function () {
  $(".search-input").slideToggle();
});

$(".search-input span").on("click", function () {
  $(this).parent().slideUp();
});

$(".owl-one").owlCarousel({
  autoplay: true,
  autoplayTimeout: 5000,
  rewind: true,
  loop: true,
  dots: true,
  dotsEach: true,

  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});
// products carousel
$(".owl-two").owlCarousel({
  autoplayTimeout: 3000,
  rewind: true,
  items: 4,
  responsiveClass: true,
  responsive: {
    0: { items: 1 },
    576: { items: 2 },
    768: { items: 3 },
    1024: { items: 4 },
  },
});

$(".owl-three").owlCarousel({
  autoplayTimeout: 3000,
  rewind: false,
  mouseDrag: false,
  items: 1,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});
$(".owl-five").owlCarousel({
  autoplayTimeout: 3000,
  rewind: true,
  loop: true,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});
AOS.init({
  once: true,
  delay: 1200,
});
/******************************* bags' details ******************/

$(".img-info .links .btn-links").on("click", function (e) {
  e.preventDefault();

  $("body, html").animate(
    {
      scrollTop: $($(this).data("scroll")).offset().top,
    },
    2000
  );
  $(this).parent().fadeOut(0).siblings().fadeIn(0);
});
$("#img-links li").on("click", function () {
  $(".img-links li").removeClass("active");
  $(this).addClass("active");
  $("body , html").animate(
    {
      scrollTop: $("#" + $(this).data("custom")).offset().top - 110,
    },
    1500
  );
});

var imgInfo = $(".info");

$window.scroll(function () {
  $(".bag-shape img").each(function () {
    if ($window.scrollTop() > $(this).offset().top - 180) {
      var bagShapId = $(this).attr("id");
      $("#img-links li").removeClass("active");

      $('#img-links li[data-custom="' + bagShapId + '"]').addClass("active");
    }
  });
});

$(".accordion-content h4").on("click", function () {
  $(".accordion-inner").slideUp();
});
$(".accordion-content h4").click(function () {
  if ($(".accordion-content h4").next(".accordion-inner").is(":visible")) {
    $(".accordion-content h4").next(".accordion-inner").slideUp(300);
    $(".plus-minus").text("+");
  }
  if ($(this).next(".accordion-inner").is(":visible")) {
    $(this).next(".accordion-inner").slideUp(300);
    $(this).find(".plus-minus").text("+");
  } else {
    $(this).next(".accordion-inner").slideDown(300);
    $(this).find(".plus-minus").text("-");
  }
});

$(".bags-shape .img").on("click", function () {
  $(".images-modal").fadeIn();

  $($(this).data("id")).addClass("active").siblings().removeClass("active");

  $(".images-modal .chevron-icons .times").on("click", function () {
    $(this).parentsUntil(".imgs-wrapper").find(".images-modal").fadeOut();
  });

  $(".images-modal .next").on("click", function () {
    if (!$(".images-modal img.active").is(":last-child")) {
      $(".images-modal img.active")
        .removeClass("active")
        .next()
        .addClass("active");
    } else {
      $(".images-modal img:first-child")
        .addClass("active")
        .siblings()
        .removeClass("active");
    }
  });

  $(".images-modal .prev").on("click", function () {
    if (!$(".images-modal img.active").is(":first-child")) {
      $(".images-modal img.active")
        .removeClass("active")
        .prev()
        .addClass("active");
    } else {
      $(".images-modal img:last-child")
        .addClass("active")
        .siblings()
        .removeClass("active");
    }
  });
});

$(".images-modal img").on("dblclick", function (e) {
  $(this).toggleClass("zoom");
  if ($(this).hasClass("zoom")) {
    $(this).css("cursor", "grab");
  } else {
    $(this).css("cursor", "zoom-in");
  }

  if ($(this).css("cursor") == "grab") {
    $(".popup").draggable({
      classes: {
        "ui-draggable": "move",
      },
    });
  } else {
    $(".popup").css({
      top: "50%",
      left: "50%",
    });
  }
});

$(".owl-carousel").owlCarousel({
  nav: false,
  items: 1,
  rewind: true,
  mouseDrag: false,
});

$(".share-times").on("click", function () {
  $(this).children("i").toggleClass(" fa-times fa-share-alt");

  if ($(this).children("i").hasClass("fa-times")) {
    $(this).css({
      background: "#000",
    });
  } else {
    $(this).css({
      background: "#fff",
    });
  }
  $(this).next(".links-menu").slideToggle(650);
});

// Initialize Banner
new SmartBanner({
  daysHidden: 15, // days to hide banner after close button is clicked (defaults to 15)
  daysReminder: 90, // days to hide banner after "VIEW" button is clicked (defaults to 90)
  appStoreLanguage: "us", // language code for the App Store (defaults to user's browser language)
  title: "Our Code Editor",
  author: "Our Code World",
  button: "Download",
  store: {
    ios: "On the App Store",
    android: "In Google Play",
    windows: "In Windows store",
  },
  price: {
    ios: "FREE",
    android: "FREE",
    windows: "FREE",
  },
  force: "ios",
  // Add an icon (in this example the icon of Our Code Editor)
  icon: "https://lh3.googleusercontent.com/yyEmckv5badLAHiu8y5rH1ieZNqxeuZOaWPZoj7o3yHujtNWffzZFLeXdOHJ3q2HrIA=w300-rw",

  //theme: '', // put platform type ('ios', 'android', etc.) here to force single theme on all device
  //icon: '', // full path to icon image if not using website icon image
  //force: 'windows' // Uncomment for platform emulation
});

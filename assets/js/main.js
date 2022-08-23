$(function () {
  /* show page */
  $("#page").css("opacity", 1);

  let navbar = document.querySelector("#navbar"),
    header = document.querySelector("#mainHeader"),
    toTopBtn = document.querySelector("#toTopBtn");

  $(header).css("cssText", `padding-top: ${$(navbar).outerHeight()}px`);

  /* get scroll val */
  function scrollFun() {
    if ($(window).scrollTop() > $(navbar).outerHeight()) {
      $(navbar).addClass("fixed-nav");
    } else {
      $(navbar).removeClass("fixed-nav");
    }
  }
  scrollFun();

  /* top-btn-show */
  function showBtn() {
    if ($(window).scrollTop() >= $(header).outerHeight()) {
      $(toTopBtn).addClass("show");
    } else {
      $(toTopBtn).removeClass("show");
    }
  }
  showBtn();

  /* top-btn-click-event */
  $(toTopBtn).click(function () {
    $(window).scrollTop(0);
  });

  $(window).scroll(function () {
    scrollFun();
    showBtn();
  });

  /* WOW.js */
  new WOW().init();

  if ($(window).outerWidth() > 600) {
    $("#slogl").css("cssText", `height: ${$("#slogR").outerHeight()}px`);
  }
});

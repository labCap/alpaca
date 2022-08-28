$(document).ready(function () {
  $.each($(".form__checkbox"), function (index, val) {
    if ($(this).find("input").prop("checked") == true) {
      $(this).addClass("active");
    }
  });

  $(document).on("click", ".form__checkbox", function (event) {
    if ($(this).hasClass("active")) {
      $(this).find("input").prop("checked", false);
    } else {
      $(this).find("input").prop("checked", true);
    }
    $(this).toggleClass("active");
    return false;
  });

  $.each($(".radio-buttons__item"), function (index, val) {
    if ($(this).find("input").prop("checked") == true) {
      $(this).addClass("active");
    }
  });

  $(document).on("click", ".radio-buttons__item", function (event) {
    $(this)
      .parents(".radio-buttons")
      .find(".radio-buttons__item")
      .removeClass("active");
    $(this)
      .parents(".radio-buttons")
      .find(".radio-buttons__item input")
      .prop("checked", false);
    $(this).toggleClass("active");
    $(this).find("input").prop("checked", true);
    return false;
  });

  $(".search-btn").click(function (event) {
    $(".header__ico-link").not($(this)).removeClass("active");

    $(this).addClass("active");

    $(".header__search-form").toggleClass("active");
  });

  $(".profile-btn").click(function (event) {
    $(".header__ico-link").not($(this)).removeClass("active");
    $(".profile-btn").not($(this)).removeClass("active");

    $(this).addClass("active");

    $(".login").toggleClass("active");
    $(".registration").removeClass("active");
  });

  $(".registration-btn").click(function (event) {
    $(".login").removeClass("active");

    $(this).addClass("active");

    $(".registration").toggleClass("active");
  });

  $(".burger").click(function (event) {
    $(this).toggleClass("active");
    $(".nav").toggleClass("active");
  });

  $(".btn-close").click(function (event) {
    $(".nav").removeClass("active");
    $(".burger").removeClass("active");
    $(".registration").removeClass("active");
    $(".login").removeClass("active");
  });
});

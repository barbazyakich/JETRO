$(function () {
  $(".slider__box").slick({
    asNavFor: ".thumbs__box",
    arrows: true,
  });
  $(".thumbs__box").slick({
    slidesToShow: 6,
    slidesToScroll: 6,
    asNavFor: ".slider__box",
    focusOnSelect: true,
  });
  $('.header__menu-btn').on('click', function() {
    $('.header__list').slideToggle();
  })
  $('.header__list-link').on('click', function() {
    alert('NYUHAI BEBRU =)');
  })
});

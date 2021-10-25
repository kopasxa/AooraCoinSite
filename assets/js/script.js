function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
$(window).on("load", function () {
  setTimeout(async function () {
    var preloader = $(".loader");
    if ($(preloader).hasClass("done")) {
      $(preloader).addClass(" animate__fadeOut");
      await sleep(2000);
      $(preloader).addClass("d-none");
      $(preloader).removeClass("done loader");
    } 
  }, 400);

  var stickyOffset = $('.sticky').offset().top;

  $(window).scroll(function(){
    var sticky = $('.sticky'),
        scroll = $(window).scrollTop();

    if (scroll >= stickyOffset) {
      sticky.addClass('fixed');
    }
    if (scroll <= stickyOffset) {
      sticky.removeClass('fixed');
    }
  });

});
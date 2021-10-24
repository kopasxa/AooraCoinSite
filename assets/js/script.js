function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
$(window).on("load", function () {
  setTimeout(async function () {
    console.log("worked")
    var preloader = $(".loader");
    if ($(preloader).hasClass("done")) {
      $(preloader).addClass(" animate__fadeOut");
      await sleep(2000);
      $(preloader).addClass("d-none");
      $(preloader).removeClass("done loader");
    } 
  }, 400);
});

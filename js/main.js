$(document).ready(function () {

  $('.hamburgerToggle').on("click touchend",(e)=>{
    e.preventDefault();
    //Show nav
    $(e.currentTarget).toggleClass('active');
    $('.pages').toggleClass('visible');
  });

  $('a').on("click touchend",(e)=>{
    e.preventDefault();

    if($(e.currentTarget).parent(".pages.visible")){
      //Hide nav
      $('.hamburgerToggle').removeClass('active');
      $('.pages').removeClass('visible');
      //Goto anchor
      var anchor = $(e.currentTarget).attr("href");
      window.location.href = anchor;
    }
  });


});

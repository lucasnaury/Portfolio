$(document).ready(function () {

  $('.hamburgerToggle').on("vclick",(e)=>{
    $(e.currentTarget).toggleClass('active');
    $('.pages').toggleClass('visible');
  });

  $('a').on("vclick",(e)=>{
    if($(e.currentTarget).parent(".pages.visible")){
      $('.hamburgerToggle').removeClass('active');
      $('.pages').removeClass('visible'); //TO FINISH, NOT WORKING
    }
  });


});

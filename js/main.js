$(document).ready(function () {

  $('.hamburgerToggle').click(function(){
    $(this).toggleClass('active');
    $('.pages').toggleClass('visible');
  });

  $('a').click(function(){
    if($(this).parent(".pages.visible")){
      $('.hamburgerToggle').removeClass('active');
      $('.pages').removeClass('visible'); //TO FINISH, NOT WORKING
    }
  });


});

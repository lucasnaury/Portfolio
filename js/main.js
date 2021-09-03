$(document).ready(function () {

  $('.hamburgerToggle').on("click touchend",(e)=>{
    e.preventDefault();
    //Show nav
    $(e.currentTarget).toggleClass('active');
    $('.pages').toggleClass('visible');
  });

  $('nav .pages.visible a').on("click touchend",(e)=>{
    e.preventDefault();
    //Hide nav
    $('.hamburgerToggle').removeClass('active');
    $('.pages').removeClass('visible');
  });







});

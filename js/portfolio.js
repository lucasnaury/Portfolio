$(document).ready(function () {

  var imgContainers = $('.img');

  var overlay = $('.overlay');
  var closeOverlayBtn = $('.close');
  var navigateBefore = $('.NavigateBefore');
  var navigateNext = $('.NavigateNext');

  var selectedImg = null;
  var selectedProject = null;



    imgContainers.click(function(){

      if (overlay.css('visibility') == 'hidden'){

        selectedProject = $(this).parent().parent();

        overlay.css('visibility','visible');
        overlay.css('opacity','1');
        imgContainers.removeClass('hover');
        imgContainers.css("pointer-events","none");
        imgContainers.children('.desc').css('cursor','default');

        selectedImg = $(this);

        overlay.children(".content").children('.overlayImg').attr('src', $(this).children('img').attr('src'));
        overlay.children(".content").children('h1').html($(this).children('.desc').children('h1').html());
        overlay.children(".content").children('h2').html($(this).children('.desc').children('h2').html());
      }
    });

  function closeOverlay(){
    if (overlay.css('visibility') == 'visible'){
      selectedProject = null;
      selectedImg = null;

      overlay.css('visibility','hidden');
      overlay.css('opacity','0');
      imgContainers.addClass('hover');
      imgContainers.css("pointer-events","all");
      imgContainers.children('.desc').css('cursor','pointer');
    }
  }

  closeOverlayBtn.click(function(){
    closeOverlay();
  });

  $(document).keydown(function(e){
    if (e.keyCode == 27) {
      closeOverlay();
    }
  });

  navigateBefore.click(function(){
    Navigate(-1);
  });
  navigateNext.click(function(){
    Navigate(1);
  });

  function Navigate (way){
    if (overlay.css('visibility') == 'visible'){

      var selectedImgContainers = selectedProject.children('.grid').children('.img');


      var index = selectedImgContainers.index(selectedImg) + way;

      if (index >= 0 && index < selectedImgContainers.length){
        overlay.children(".content").children('.overlayImg').attr('src', selectedImgContainers.eq(index).children('img').attr('src'));
        overlay.children(".content").children('h1').html(selectedImgContainers.eq(index).children('.desc').children('h1').html());
        overlay.children(".content").children('h2').html(selectedImgContainers.eq(index).children('.desc').children('h2').html());
        selectedImg = selectedImgContainers.eq(index);
      } else{
        index = 0
        overlay.children(".content").children('.overlayImg').attr('src', selectedProject.children('.grid').children('.img').eq(index).children('img').attr('src'));
        overlay.children(".content").children('h1').html(selectedImgContainers.eq(index).children('.desc').children('h1').html());
        overlay.children(".content").children('h2').html(selectedImgContainers.eq(index).children('.desc').children('h2').html());
        selectedImg = selectedImgContainers.eq(index);
      }
    }
  }
});

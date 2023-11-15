$(document).ready(function () {

  var imgContainers = $('.imgContainer');

  var overlay = $('.overlay');
  var closeOverlayBtn = $('.close');
  var navigateBefore = $('.NavigateBefore');
  var navigateNext = $('.NavigateNext');

  var selectedImg = null;
  var selectedProject = null;



    imgContainers.on("click",(e)=>{
      e.preventDefault();

      if (overlay.css('visibility') == 'hidden'//If not already showing
      && $("nav .pages").hasClass("visible") == false){//If nav menu not down

        selectedProject = $(e.currentTarget).parents(".imgProject");

        overlay.css('visibility','visible');
        overlay.css('opacity','1');
        imgContainers.removeClass('hover');
        imgContainers.css("pointer-events","none");
        imgContainers.children('.desc').css('cursor','default');

        selectedImg = $(e.currentTarget);

        //Set the overlay media to the selectedItem
        SetOverlayMedia($(e.currentTarget));
      }
    });

  function closeOverlay(){
    if (overlay.css('visibility') == 'visible'){
      //Reset overlay objects
      selectedProject = null;
      selectedImg = null;

      //Hide overlay and allow to click buttons again
      overlay.css('visibility','hidden');
      overlay.css('opacity','0');
      imgContainers.addClass('hover');
      imgContainers.css("pointer-events","all");
      imgContainers.children('.desc').css('cursor','pointer');
    }
  }

  closeOverlayBtn.on("click touchend",(e)=>{
    e.preventDefault();
    closeOverlay();
  });

  $(document).keydown(e=>{
    if (e.keyCode == 27) {//Escape key pressed
      closeOverlay();
    }
  });
  $(document).keydown(e=>{
    if (e.keyCode == 37) {//Left arrow key pressed
      //Get previous element
      Navigate(-1);
    }
  });
  $(document).keydown(e=>{
    if (e.keyCode == 39) {//Right arrow key pressed
      //Get previous element
      Navigate(1);
    }
  });

  navigateBefore.on("click touchend",(e)=>{
    e.preventDefault();
    //Get previous element
    Navigate(-1);
  });
  navigateNext.on("click touchend",(e)=>{
    e.preventDefault();
    //Get next element
    Navigate(1);
  });

  function Navigate (way){
    if (overlay.css('visibility') == 'visible'){//If already visible

      var selectedImgContainers = selectedProject.find('.imgContainer');

      var index = selectedImgContainers.index(selectedImg) + way; //Move in the direction you want
      //If in the list
      if (index >= 0 && index < selectedImgContainers.length){
        //Set the overlay media to the next media in list
        SetOverlayMedia(selectedImgContainers.eq(index));
        selectedImg = selectedImgContainers.eq(index);

      } else if(index >= selectedImgContainers.length){//If you reach the endof the list
        //Set the overlay media to the first media
        SetOverlayMedia(selectedImgContainers.eq(0));
        selectedImg = selectedImgContainers.eq(0);
      } else {//If you reach the beggining of the list
        //Set the overlay media to the last media
        SetOverlayMedia(selectedImgContainers.eq(selectedImgContainers.length - 1));
        selectedImg = selectedImgContainers.eq(selectedImgContainers.length - 1);
      }
    }
  }

  function SetOverlayMedia(selectedImgContainer){
    //If contains an img
    if(selectedImgContainer.children(".media").prop('nodeName') == "IMG"){
      //Show img and hide video
      overlay.children(".content").children(".horizontal").children(".mediaContainer").children('.overlayImg').attr('src', selectedImgContainer.children('img').attr('src'));
      overlay.children(".content").children(".horizontal").children(".mediaContainer").children('.overlayVid').attr('src', "");

    }else{
      //Show video and hide img
      overlay.children(".content").children(".horizontal").children(".mediaContainer").children('.overlayImg').attr('src', "");
      overlay.children(".content").children(".horizontal").children(".mediaContainer").children('.overlayVid').attr('src', selectedImgContainer.children('video').attr('src'));
    }
    //Set description and title
    overlay.children(".content").children('h1').html(selectedImgContainer.children('.desc').children('h3').html());
    overlay.children(".content").children('p').html(selectedImgContainer.children('.desc').children('p').html());
  }
});

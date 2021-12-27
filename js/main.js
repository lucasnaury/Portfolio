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
      var link = $(e.currentTarget).attr("href");
      var target = $(e.currentTarget).attr("target");

      if(target == "blank" || target == "_blank"){
        var win = window.open(link, '_blank');//Try to open in new tab
        if (win) {//Browser has allowed it to be opened
          win.focus();
        } else {//Browser has blocked it          
          alert('Please allow popups for this website');
        }
      }else{
        window.location.href = link;//Open in this tab
      }
    }
  });

  $(window).scroll(playPauseVideo());

    function playPauseVideo() {
      let videos = document.querySelectorAll("video");
      videos.forEach((video) => {
          // We can only control playback without insteraction if video is mute
          video.muted = true;
          // Play is a promise so we need to check we have it
          let playPromise = video.play();
          if (playPromise !== undefined) {
              playPromise.then((_) => {
                  let observer = new IntersectionObserver(
                      (entries) => {
                          entries.forEach((entry) => {
                              if (
                                  entry.intersectionRatio !== 1 &&
                                  !video.paused
                              ) {
                                  video.pause();
                              } else if (video.paused) {
                                  video.play();
                              }
                          });
                      },
                      { threshold: 0.6 }//Only play video if 60% visible
                  );
                  observer.observe(video);
              });
          }
      });
    }

});

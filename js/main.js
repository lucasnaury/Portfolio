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

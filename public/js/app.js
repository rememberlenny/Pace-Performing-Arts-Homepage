

(function($){
  $(document).foundation();

/*!
 * loading 0.1
 * http://www.rememberlenny.com
 * MIT licensed
 *
 * Copyright (C) 2013 A Triangle Corporation, http://atriangle.com
 */
  $(document).ready(function(){
    // H2
    setTimeout(function(){
      $($('.main-container h2')[0]).removeClass('hidden');
      setTimeout(function(){
        $($('.main-container h2')[1]).removeClass('hidden');
        setTimeout(function(){
          $($('.main-container h2')[2]).removeClass('hidden');

            setTimeout(function(){
              $('.main-container h3').removeClass('hidden');
                // H1
                setTimeout(function(){
                  $('.main-container h1').removeClass('hidden');

                  // Button
                  setTimeout(function(){
                    $('.main-container .button').removeClass('hidden');
                    setTimeout(function(){
                      $('.footer, .top-bar-container, .tab-bar').css('opacity', '100');
                    }, 500);
                  }, 500);
                }, 500);
            }, 600);

        }, 300);
      }, 300);
    }, 300);

    var append = '<iframe id="ytplayer" type="text/html" width="640" height="360" src="https://www.youtube.com/embed/lBBibhvmoCw?autoplay=1&controls=0&enablejsapi=1&modestbranding=1&rel=0&showinfo=0" frameborder="0" allowfullscreen></iframe>';
    var playing = false;
    $(document).on('click', '#play-video', function(){
      if( playing === false ){
        playing = true;
        setTimeout(function(){
          $('.video-player-contain').append(append);
        }, 250);
      }
    });
    $(document).on('close', '[data-reveal]', function () {
      playing = false;
      setTimeout(function(){
        $('.video-player-contain').html(' ');
      }, 250);
    });

  });

  (function checkPosition(){
    window.setTimeout(function(){
      var windowHeight = $(window).height();
      var windowWidth = $(window).width();
      var footerHeight = $('.footer').height();
      var topbarHeight = $('.top-bar-container').height();
      var maincontainHeight = $('.main-container').height();
      var combinedContainers = topbarHeight+maincontainHeight;
      var contentArea = windowHeight-combinedContainers;
      if( windowWidth > windowHeight){
        var contentTopMargin = contentArea*.6;
      } else {
        var contentTopMargin = contentArea *.3;
      }
      $('.content-main').css('margin-top', contentTopMargin);
      checkPosition();

      var actModalHeight = $('#myModal').height();
      var modalSpacing = (windowHeight - actModalHeight)/2;
      var modalHeight = windowHeight - 200;
      var modalWidth = $('#myModal').width();
      var modalDisplace = -((modalWidth/2));
      $('object embed').css('height', modalHeight);
      $('.reveal-modal').css('margin-left', modalDisplace);
      $('#myModal.open').css('top', modalSpacing);
      $('.inner-wrap').height(windowHeight);
    }, 250);

    $('a.fadeout').on('click',function(){
      $('body').fadeOut();
      setTimeout(300);
    });
  })();
})(jQuery);




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

                // H1
                setTimeout(function(){
                  $('.main-container h1').removeClass('hidden');

                  // Button
                  setTimeout(function(){
                    $('.main-container .button').removeClass('hidden');
                    setTimeout(function(){
                      $('.footer, .top-bar-container').css('opacity', '100');
                    }, 500);
                  }, 500);
                }, 1000);

        }, 300);
      }, 400);
    }, 500);
  });
  (function checkPosition(){
    window.setTimeout(function(){
      var windowHeight = $(window).height();
      var footerHeight = $('.footer').height();
      var topbarHeight = $('.top-bar-container').height();
      var maincontainHeight = $('.main-container').height();
      var combinedContainers = footerHeight+topbarHeight+maincontainHeight;
      var contentArea = windowHeight-combinedContainers;
      var contentTopMargin = contentArea/2.5;
      $('.content-main').css('margin-top', contentTopMargin);
      checkPosition();

      var actModalHeight = $('#myModal').height();
      var modalSpacing = (windowHeight - actModalHeight)/3;
      var modalHeight = windowHeight - 200;
      var modalWidth = $('#myModal').width();
      var modalDisplace = -((modalWidth/2) + 30);
      $('object embed').css('height', modalHeight);
      $('.reveal-modal').css('margin-left', modalDisplace);
      $('#myModal.open').css('top', modalSpacing);

    }, 250);

    $('a').on('click',function(){
      $('body').fadeOut();
      setTimeout(300);
    });
  })();
})(jQuery);


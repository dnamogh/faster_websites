(function( $ ) {

  $(document).keypress(function(e) {
    if(e.altKey && e.which == 960){
      //detect Alt + P keypress
      $('.slide').css({
        display: 'block',
        opacity: 1,
        position: 'relative'
      });
      $('body').css('overflow', 'auto');
      $('#preso').css('overflow', 'visible');
      $('.slide').after('<div class="page-break"></div>');

      centerSlides($('.slide.vertically-centered'));

      alert("Now you can print using safari's normal print option\nDon't forget to check the print backgrounds option, and preferrably use landscape mode.");
    }
  });


})( jQuery );


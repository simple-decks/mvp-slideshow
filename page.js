$(document).ready(function(){

  //place all section blocks into an array
  var sections = document.getElementsByTagName( "section" );
  //console.log(slides);
  var slides = jQuery.makeArray( sections );
  console.log(slides);

  var current_slide = slides[0];
  //console.log(slides[0]);


  // hide all sections except for the first
  $.each( slides, function( index, value ) {
  console.log(index);
    if(index){
       $(slides[index]).hide();
    }      
  });

  var counter = 0;

  var next_slide = slides[slides.indexOf(current_slide) + 1];
  console.log(current_slide.index);

  $('body').keyup(function(e){
  //   e.preventDefault();

    console.log("firing");

    // when user hits space bar (32 is code for space bar)
      if(e.which == 32){

       // hide current_slide
       $(current_slide).hide();

       // show next_slide
       $(next_slide).show();

       // set set current_slide = next_slide
       current_slide = next_slide;

       // set next_slide = slides[current_slide.index + 1]
       next_slide = slides[slides.indexOf(current_slide) + 1];

        counter += 1;
        console.log("space");
        console.log(counter);
      
      }
  });

});


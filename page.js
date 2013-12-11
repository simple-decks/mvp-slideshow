$(document).ready(function(){
  
    var counter = 0;
  $('body').keyup(function(e){
  //   e.preventDefault();

    console.log("firing");
      if(e.which == 32){
        counter += 1;
        console.log("space");
        console.log(counter);
         switch (counter)
         {
           case 1:
             $('section').hide();
             $('.bullet-slide').show();
             break;
           case 2:
             $('section').hide();
             $('.image-slide').show();
             break;
           case 3:
             $('section').hide();
             $('.thankyou-slide').show();
             break;
           default:
             if($('.end').empty()){
               $('section').append("<h4 class='end'>That's all!</h4>");
             }else{
             }
         }
      }
  });

});


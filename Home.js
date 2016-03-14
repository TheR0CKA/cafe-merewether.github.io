var main = function() {
    
 $('#opentab').click(function() {
     $('.menu').animate({
         left: '20vw'
     }, 200);
 });

 $('#container').click(function() {
     $('.menu').animate({
         left: '-20vw'
     }, 200);
 });
};


$(document).ready(main);
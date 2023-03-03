$(document).ready(function() {
    var a = $(".navbar").offset().top;
  
    $(document).scroll(function(){
      if($(this).scrollTop() > a) {
        
        $('.navbar').css({"background-color":"#ffffff"});
        $('.main-menu li a').css({"color":"#4A4A4A"});
        
      } else {
        $('.navbar').css({"background-color":"transparent"});
        $('.main-menu li a').css({"color":"#ffffff"});
    }
    });
  });
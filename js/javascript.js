$(function()
  {
    //scroll to element
    $(".nav>li>a").click(function(event){
      $(this).css("background-color","transparent");
      event.preventDefault();
      $('html,body').animate({
        scrollTop:$("#"+$(this).data("scroll")).offset().top
      },1000);

    });
    //window scroll
   $( window ).scroll(function(){
     //sticky navbar 
    var sc=$(this).scrollTop(); 
     if(sc>50){
      $("#nav1").addClass("edit");
      $(".navbar-header>h2,.navbar-nav>li>a") .css("color","black");
      $(".navbar-nav>li>a").hover(function()
      {
        $(this).css("color","#7cb62f");
      },function(){
        $(this).css("color","black");
        $(this).css("background-color","transparent");
        });
   }
   else{
    $("#nav1").removeClass("edit");
    $(".navbar-header>h2,.navbar-nav>li>a ").css("color","white");
    $(".navbar-nav>li>a").hover(function()
    {
      $(this).css("color","#7cb62f");
      $(this).css("background-color","transparent");
    }
      ,
      function(){$(this).css("color","white");
      });
 }
          //countTo blugin
 if(sc> 1800){
$(".timer").countTo();
}
if(sc>3000){
   $('.circle').circleProgress({
    startAngle:80,
    value: 0.90,
    size: 150,
    fill: {color:"#049dff"},
     emptyFill:"transparent"
  });
  $('.circle2').circleProgress({
    startAngle:80,
    value: 0.75,
    size: 150,
    fill: {
     color:"#fdba04"},
     emptyFill:"transparent"
  });
}
});
      //owl-carousel
  $(".owl-carousel").owlCarousel({
    loop:true,
    margin:10,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
});
      //fade in content in choose Navbar
$(".choose-navbar>ul>li").click(function(){
$(".inside-content").hide().fadeIn("slow");

});
            //popup video 
  $('.pop').magnificPopup({
    type: 'iframe'
  });

          //hide placeholder
  var i="";     
  $('[placeholder]').focus(function(){
    i=$(this).attr("placeholder")
    $(this).removeAttr("placeholder");
  }).blur(function(){
    $(this).attr("placeholder",i);
});
  });





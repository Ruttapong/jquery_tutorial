$(document).ready(function(){
  // $("#hide").click(function(){
  //   $("p").hide();
  // });
  // $("#show").click(function(){
  //   $("p").show();
  // });

  // //with delay (milisec)
  // $("#hide").click(function(){
  //   $("p").hide(500);
  // });
  // $("#show").click(function(){
  //   $("p").show(500);
  // });

  // //try toggle
  // $("#toggle").click(function(){
  //   $("p").toggle(500);
  // });

  $("#start").click(function(){
    var div = $("div");
    div.animate({height: '300px', opacity: '0.4'}, "slow");
    div.animate({width: '300px', opacity: '0.8'}, "slow");
    div.animate({height: '100px', opacity: '0.4'}, "slow");
    div.animate({width: '100px', opacity: '0.8'}, "slow");
  });
});

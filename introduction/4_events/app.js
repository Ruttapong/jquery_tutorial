$(document).ready(function(){
  // $("p").click(function(){
  //   $(this).hide();
  // });

  // $("p").dblclick(function(){
  //   $(this).hide();
  // });

  // $("span").mouseenter(function(){
  //   alert("You entered p1!");
  // });

  $("p").on({
    mouseenter: function(){
      $(this).css("background-color", "lightgray");
    },
    mouseleave: function(){
      $(this).css("background-color", "lightblue");
    },
    click: function(){
      $(this).css("background-color", "yellow");
    }
  });
});

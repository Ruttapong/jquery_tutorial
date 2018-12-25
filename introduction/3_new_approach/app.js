//document.getElementsByClassName('test')[0].innerHTML = 'Hello jQuery';
$(document).ready(function(){

  $('.test')[0].innerHTML = 'Hello jQuery';

  $("button").click(function(){
    $("p").hide();
  });

});

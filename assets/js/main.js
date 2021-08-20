$(document).ready(function(){
  $(".close-form").click(function(){
    $(".modal-popup").css("visibility", "hidden");
  })
  $(".pre-order-button").click(function () {
    $(".modal-popup").css("visibility", "visible");
  })
})

$(document).ready(function(){
  $("#act1").show();
  console.log("Good to go!");
  $("#backButton").hide();
  $("#nextButton").hide();
});



$("#startHere").click(function(){
  $("#startHere").fadeOut();
  $("#introP").delay(600).fadeIn();
});

$("#introP").click(function(){
  $("#pic1").fadeIn();
  $("#pic2").delay(1000).fadeIn();
  $("#nextButton").delay(2000).fadeIn();
});









$("#nextButton").click(function(){
  $("#act1").hide();
  $("#act2").show();
  $("#act2P").delay(1000).fadeIn();
});


$("#backButton").click(function(){
  $("#act2").hide();
  $("#act1").show();
});

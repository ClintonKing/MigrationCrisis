$(document).ready(function(){
  $("#act1").show();
  console.log("Good to go!");
});

var currentIndex = 0,
  items = $('.row .act'),
  itemAmt = items.length;

function cycleItems() {
  var item = $('.row .act').eq(currentIndex);
  items.hide();
  item.show();
}

$('#nextButton').click(function() {
  // clearInterval(autoSlide);
  $('#backButton').show();
  currentIndex += 1;
  if (currentIndex > itemAmt - 1) {
    currentIndex = 0;
  }
  cycleItems();
});

$('#backButton').click(function() {
  // clearInterval(autoSlide);
  currentIndex -= 1;
  if (currentIndex < 0) {
    currentIndex = itemAmt - 1;
  }
  cycleItems();
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
  $("#act2P").delay(600).fadeIn();
});

$("#act2P").click(function(){
  $("#vid1").delay(600).fadeIn();
  $("#act2P").delay(500).hide();
});

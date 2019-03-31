var wins = 0;
var loses = 0;
var total = 0;

var number = Math.floor(Math.random() * 50) + 35;
console.log(number);
$("#number-to-guess").text(number);

/// crystal values

var points = [1, 2, 3, 4];

function makeRandom() {
  return Math.ceil(Math.random() * 20);
}

var crystalNum = points.map(makeRandom);
console.log(crystalNum);

for (var i = 0; i < crystalNum.length; i++) {
  var imgCrystal = $("<img>");
  imgCrystal.addClass("crystal-image");
  imgCrystal.attr(
    "src",
    "https://gallery.yopriceville.com/var/resizes/Free-Clipart-Pictures/Jewelry-and-Diamonds-PNG/Red_Crystal_Transparent_PNG_Clip_Art_Image.png?m=1507172105"
  );
  imgCrystal.attr("data-crystalvalue", crystalNum[i]);
  $("#crystal").append(imgCrystal);
}

$(".crystal-image").click(function() {
  var crystalValue = $(this).attr("data-crystalvalue");
  crystalValue = parseInt(crystalValue);
  total += crystalValue;

  if (total === number) {
    alert("You win");
    wins++;
  }
  if (number < total);
  {
    alert("You lose");
    loses++;
  }

  $("#user-score").text(total);
  $("#wins").text(wins);
  $("#losses").text(loses);
});

// var makeDivs = function(points) {
//   return '<div class= "crystal">' + points + imgCrystal + '</div>'
// }

// var arrayOfRandom = points.map(makeRandom).map(makeDivs);

// $("placeToStoreCrystals").html(arrayOfRandom);

// // get random number

// $(".crystal").click(function() {
//   var points = parseInt($(this).attr("data-points"), 10);
//   total.splice(crystal);
// });
// console.log(total)

//get users input
// document.click = event => {
//   var usersGuess = event.click;

//   // add users input to total
//   var usersGuess;

// };
// console.log(total);

//check to see if users input === number
//if users input !== || is > numbe

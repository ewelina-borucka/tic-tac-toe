
$(document).ready(function() {

// $("#1").text("o");
// $("#5").text("x");
// $("#9").text("yo");

$(".square").css("fontSize", "84px");
$(".square").css("color", "#00bfff");
$(".square").css("fontFamily", "monospace");



var tictactoe = ["", "", "", "", "", "", "", "", ""];


var counter = 0;

$(".square").click(function(){      // do something if click on class.squre..
  var myPos = $(this).attr("id");  // it checks where the user clicked on (what id)

  if (counter % 2 === 0) {        // it checks which user (1 or 2) --> even or odd number
    $(this).text("x");            // if even number --> x
    tictactoe[myPos] = "x";       // it tells the computer the position of click

  } else {
    $(this).text("o");
    tictactoe[myPos] = "o";
  }

  counter += 1;                   // keep the record of clicks
  if ( counter === 8 ) {
    console.log("KONIEC GRY!!!");
  }
  console.log(tictactoe);   // to check the list after click!!

});




});      // must be at the end !! it closes the ready function




///////////////////////////////////////////////////////////////////////////////
// $("p").click(function(){    // just awesome!
//         $(this).hide();
//     });

////////////////// function writes "o" ////////////////////////////////////////

// $(".square").click(function(){
//         $(this).text("o");
//     });

////////////////// function writes "x" ////////////////////////////////////////

// $(".square").click(function(){
//         $(this).text("x");
//     });

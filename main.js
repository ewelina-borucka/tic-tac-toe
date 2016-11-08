
var tictactoe = ["", "", "", "", "", "", "", "", ""];     // the position of click
var counter = 0;
var gameOver = false;


function resetGame() {
  tictactoe = ["", "", "", "", "", "", "", "", ""];
  counter = 0;
  gameOver = false;
  $(".square").text("");
}


$(document).ready(function() {

// ------------------------------ style ------------------------------------//

  $(".square").css({
    "color": "#00bfff",
    "fontSize": "84px",
    "fontFamily": "monospace",
    "text-align": "center"
   });


// ----------------- clicks ---- player x and o ---------------------------//


  $(".square").click(function(){      // do something if click on class.squre..
    if ( gameOver === false ) {       // check if game is not over .. if so don't execute anything
      var myPos = $(this).attr("id");  // it checks where the user clicked on (what id)
      if (tictactoe[myPos] === "") {   // checks if string on the list is empty

        if (counter % 2 === 0) {        // it checks which user (1 or 2) --> even or odd number
          $(this).text("x");            // if even number --> x
          tictactoe[myPos] = "x";       // it tells the computer the position of click
          isWinner("x");

        } else {
          $(this).text("o");
          tictactoe[myPos] = "o";
            isWinner("o");
        }

        counter += 1;                               // keeps the record of clicks
        if ( counter === 9 && gameOver === false) {
          alert("it's a draw! again button ??");
        }
      }
    }
  });





function isGameOver(player) {
  var $img = $("<img>");
  $img.css({
    position: "absolute",
    top: "50%",
    left: "0",
    width: "150px"
  })

  if (player === "x") {
    $img.attr("src", "banana_cat.gif");
    $("body").append($img);
    $img.animate({
      left: window.innerWidth - 150
    }, 1000);

  } else {
    $img.attr("src", "muffin.gif");
    $("body").append($img);
    $img.animate({
      top: window.innerHeight - 300
    }, 600);
  }

}

  // ------------------------------ if .. else .. you win!! -------------------------//

  function isWinner(player) {
    if (tictactoe[0] === player && tictactoe[1] === player && tictactoe[2] === player ) {
      isGameOver(player);
      gameOver = true;
    } else if (tictactoe[3] === player && tictactoe[4] === player && tictactoe[5] === player ) {
      isGameOver(player);
      gameOver = true;
    } else if (tictactoe[6] === player && tictactoe[7] === player && tictactoe[8] === player ) {
      isGameOver(player);
      gameOver = true;
    } else if (tictactoe[0] === player && tictactoe[3] === player && tictactoe[6] === player ) {
      isGameOver(player);
      gameOver = true;
    } else if (tictactoe[1] === player && tictactoe[4] === player && tictactoe[7] === player ) {
      isGameOver(player);
      gameOver = true;
    } else if (tictactoe[2] === player && tictactoe[5] === player && tictactoe[8] === player ) {
      isGameOver(player);
      gameOver = true;
    } else if (tictactoe[0] === player && tictactoe[4] === player && tictactoe[8] === player ) {
      isGameOver(player);
      gameOver = true;
    } else if (tictactoe[2] === player && tictactoe[4] === player && tictactoe[6] === player ) {
      isGameOver(player);
      gameOver = true;
    }
  }



  $(".reset").on("click", resetGame);


});      // must be at the end !! it closes the ready function



/////////////////////////////////////////////////////////////////////////
//  $("html").click(function(){
//    $(this).append("<img src='banana_cat.gif' width='100px' height='100px'>");
 //
//   });





// var gameOver = function(player) {
//   var $img = $("<img>");
//   $img.css({
//     position: "absolute",
//     top: "50%",
//     left: "0",
//     width: "100px"
//   })
//   if (player === "x") {
//     $img.attr("src", "banana_cat.gif");
//
//   } else {
//     $img.attr("src", "muffin.gif");
//   }
//   $("body").append($img);
//   $img.animate({
//     left: window.innerWidth - 100
//   }, 1000);
// }

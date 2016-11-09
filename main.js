

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

  $(".reset").on("click", resetGame);

// ------------------------------ squere style ------------------------------------//

  $(".square").css({
    "color": "#282828",
    "fontSize": "84px",
    "fontFamily": "monospace",
    "text-align": "center"
   });

// ----------------- clicks ---- player x and o ---------------------------//


  $(".square").click(function(){        // do something if click on class.squre..

    if ( gameOver === false ) {         // check if game is not over .. if so don't execute anything
      var myPos = $(this).attr("id");   // it checks where the user clicked on (what id)
      if (tictactoe[myPos] === "") {    // checks if string on the list is empty

        if (counter % 2 === 0) {        // it checks which user (1 or 2) --> even or odd number
          $(this).text("x");            // if even number --> x
          tictactoe[myPos] = "x";       // it tells the computer the position of click
          isWinner("x");

        } else {
          $(this).text("o");
          tictactoe[myPos] = "o";
            isWinner("o");
        }

        counter += 1;                                   // keeps the record of clicks
        if ( counter === 9 && gameOver === false) {
          alert("it's a draw! Press 'play again' button to start over");
        }
      }
    }
  });


function isGameWin(player) {

  if (player === "x") {

    var $img = $("<img>");
    $img.css({
      top: "30%",
      left: "0",
      width: "300px"
    })

    $img.attr("src", "banana_cat.gif");
    $(".keepBanana").append($img);
    $img.animate({
      left: window.innerWidth - 200
    }, 1000);
    $img.animate({
      width: 100
    });

  } else {
    var $img = $("<img>");
    $img.css({
      top: "30%",
      right: "0",
      width: "300px"
    })
    $img.attr("src", "muffin.gif");
    $(".keepMuffin").append($img);
    $img.animate({
      right: window.innerWidth - 200
    }, 1000);
    $img.animate({
      width: 100
    });
  }

}

  // ------------------------------ if .. else .. you win!! -------------------------//

  function isWinner(player) {
    if (tictactoe[0] === player && tictactoe[1] === player && tictactoe[2] === player ) {
      isGameWin(player);
      gameOver = true;
    } else if (tictactoe[3] === player && tictactoe[4] === player && tictactoe[5] === player ) {
      isGameWin(player);
      gameOver = true;
    } else if (tictactoe[6] === player && tictactoe[7] === player && tictactoe[8] === player ) {
      isGameWin(player);
      gameOver = true;
    } else if (tictactoe[0] === player && tictactoe[3] === player && tictactoe[6] === player ) {
      isGameWin(player);
      gameOver = true;
    } else if (tictactoe[1] === player && tictactoe[4] === player && tictactoe[7] === player ) {
      isGameWin(player);
      gameOver = true;
    } else if (tictactoe[2] === player && tictactoe[5] === player && tictactoe[8] === player ) {
      isGameWin(player);
      gameOver = true;
    } else if (tictactoe[0] === player && tictactoe[4] === player && tictactoe[8] === player ) {
      isGameWin(player);
      gameOver = true;
    } else if (tictactoe[2] === player && tictactoe[4] === player && tictactoe[6] === player ) {
      isGameWin(player);
      gameOver = true;
    }
  }







});      // must be at the end !! it closes the ready function

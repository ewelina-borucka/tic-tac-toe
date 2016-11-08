var tictactoe = ["", "", "", "", "", "", "", "", ""];     // the position of click
var counter = 0;
var gameOver = false;    //  set

$(document).ready(function() {


// ------------------------------ style ------------------------------------//

  $(".square").css({
    "color": "#00bfff",
    "fontSize": "84px",
    "fontFamily": "monospace",
    "text-align": "center"
   });


// ----------------- clikcs ---- player x and o ---------------------------//


  $(".square").click(function(){      // do something if click on class.squre..
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

      counter += 1;                   // keeps the record of clicks
      if ( counter === 9 && gameOver === false) {
        alert("it's a draw! again button ??");
      }
    }
      console.log(tictactoe);   // to check the list after click!!

  });


  // ------------------------------ if .. else .. you win!! -------------------------//

  function isWinner(player) {
    if (tictactoe[0] === player && tictactoe[1] === player && tictactoe[2] === player ) {
      alert("yo!" + player + " has won!");
      gameOver = true;
    } else if (tictactoe[3] === player && tictactoe[4] === player && tictactoe[5] === player ) {
      alert("yo!" + player + " has won!");
      gameOver = true;
    } else if (tictactoe[6] === player && tictactoe[7] === player && tictactoe[8] === player ) {
      alert("yo!" + player + " has won!");
      gameOver = true;
    } else if (tictactoe[0] === player && tictactoe[3] === player && tictactoe[6] === player ) {
      alert("yo!" + player + " has won!");
      gameOver = true;
    } else if (tictactoe[1] === player && tictactoe[4] === player && tictactoe[7] === player ) {
      alert("yo!" + player + " has won!");
      gameOver = true;
    } else if (tictactoe[2] === player && tictactoe[5] === player && tictactoe[8] === player ) {
      alert("yo!" + player + " has won!");
      gameOver = true;
    } else if (tictactoe[0] === player && tictactoe[4] === player && tictactoe[8] === player ) {
      alert("yo!" + player + " has won!");
      gameOver = true;
    } else if (tictactoe[2] === player && tictactoe[4] === player && tictactoe[6] === player ) {
      alert("yo!" + player + " has won!");
      gameOver = true;
    }
  }






});      // must be at the end !! it closes the ready function

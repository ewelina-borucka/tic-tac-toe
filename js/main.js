

var board = ["", "", "", "", "", "", "", "", ""];
var counter = 0;
var gameOver = false;


function resetGame() {
  board = ["", "", "", "", "", "", "", "", ""];
  counter = 0;
  gameOver = false;
  $(".square").text("");
}
////////////////////////////////////////////////////////////////////////////////
/////////////////////////////// DOCUMENT READY /////////////////////////////////

$(document).ready(function() {

  $(".reset").on("click", resetGame);



  // 
  // $(".reset").mouseover(function() {
  //   $(".reset").css({
  //     backgroundColor: "pink",
  //     padding: "20px",
  //     fontSize: "14px"
  //   });
  // });
  //
  // $(".reset").mouseleave(function(){
  //   $(".reset").css("background-color", "none");
  //
  // });



  // ------------------------------ static elements -------------------------//

  $("#board").hide();
  $("#board").show(800);
  $("#hello").typeIt({
       strings: "Welcome the game of tic tac toe!",
       speed: 100,
       autoStart: false
  });

// ------------------- main function on click -------------------------------//


  $(".square").click(function(){        // do something if click on class.squre..

    if ( gameOver === false ) {         // checks if game is not over .. if so don't execute anything
      var myPos = $(this).attr("id");   // it checks where the user clicked on (what id)
      if (board[myPos] === "") {        // checks if string on the list is empty

        if (counter % 2 === 0) {        // it checks which user (1 or 2) --> even or odd number
          $(this).text("x");            // if even number --> x
          board[myPos] = "x";           // it tells the computer the position of click
          isWinner("x");                // call the function --> how won the game

        } else {
          $(this).text("o");
          board[myPos] = "o";
            isWinner("o");
        }

        counter += 1;                                   // keeps the record of clicks
        if ( counter === 9 && gameOver === false) {
        swal("It's a draw! Press 'PLAY AGAIN' to start over")        }
      }
    }
  });


function isGameWin(player) {

  if (player === "x") {
    var $img = $("<img>");
    $img.css({width: "200px"});
    $img.attr("src", "banana_cat.gif");
    $(".keepBanana").append($img);
    $img.animate({left: window.innerWidth}, 500);
    $img.animate({width: 120}, 300);

  } else {
    var $img = $("<img>");
    $img.css({width: "200px"});
    $img.attr("src", "muffin.gif");
    $(".keepMuffin").append($img);
    $img.animate({right: window.innerWidth}, 500);
    $img.animate({width: 120}, 300);
  }
}

  // ------------------------- if .. else .. you win-------------------------//

  function isWinner(player) {
    if (board[0] === player && board[1] === player && board[2] === player ) {
      isGameWin(player);
      gameOver = true;
    } else if (board[3] === player && board[4] === player && board[5] === player ) {
      isGameWin(player);
      gameOver = true;
    } else if (board[6] === player && board[7] === player && board[8] === player ) {
      isGameWin(player);
      gameOver = true;
    } else if (board[0] === player && board[3] === player && board[6] === player ) {
      isGameWin(player);
      gameOver = true;
    } else if (board[1] === player && board[4] === player && board[7] === player ) {
      isGameWin(player);
      gameOver = true;
    } else if (board[2] === player && board[5] === player && board[8] === player ) {
      isGameWin(player);
      gameOver = true;
    } else if (board[0] === player && board[4] === player && board[8] === player ) {
      isGameWin(player);
      gameOver = true;
    } else if (board[2] === player && board[4] === player && board[6] === player ) {
      isGameWin(player);
      gameOver = true;
    }
  }


});                           // must be at the end !! it closes the ready function

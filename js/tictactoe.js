//This variable keeps track of whose turn it is.
let activePlayer = "X";
/**this  array stores an array of moves.
 We use this to determine win conditions.*/
 let selectSquares = [];

 /**
  * this function is for placing an X or O n a square
  */
 function placeXOrO(squareNumber)
 {
     /**
      * This condition ensures a square hasn't been selected already.
      * The .som() method is used to check each element of selectedSquare array
      * to see if it contains the square number clicked on.
      */
     if (!selectedSquares.some(element => element.includes(squareNumber)))
     {
        //this variuable retrieves the html element id that was clicked.
        let select = document.getElementById(squareNumber);
        //this condition checks who's turn it is.
        if (activePlayer === "X") 
        {
            //If activePlayer is equal to "X", the X.png is placed in HTML.
            select.style.backgroundImage = 'url("images/X_Symbol.png")';
            //Active player ma only be "X" or "O" so, if not "X" it must be "O".
        }else {
            //if activePlayer is equal to "O", the O.png is placed in HTML.
            select.style.backgroundImage = 'url("images/O_Symbol.png")';
        }
        //squareNumber and activePlayer are concatenated together and added to array
        selectedSquares.push(squareNumber + activePlayer);
        //this calls a function to check for any win conditions.
        chackWinConditions();
        //this condition is for changing the active player.
        if (activePlayer === "X")
        {
            //if active player is "X" change it to "O".
            activePlayer = "O";
            //If active player is anything other than "X"
        }else {
            //change the activePlayer to "X"
            activePlayer = "X";
        }

        //This function plays a placement sound.
        audio("./media/Place_Icon_Sound.mp3");
        //this condition checks to see if it is computer's turn.
        if(activePlayer === "O") 
        {
            //This function disables clicking for computer choice.
            disableClick();
            //This funtion waits 1 second before computer places image and enables click.
            setTimeout(function (){ computersTurn();}, 1000)
        }
        //Returning true is needed for our computersTurn() function to work.
        return true;
     }
     //This function results in a random square being selected.
     function computersTurn()
     {
         //This boolean is needed for our while loop.
         let success = false;
         //This variable stores a random number 0-8.
         let pickASquare;
         //This condition allows our while loop to keep trying
         //if a square is selected already.
         while(!success)
         {
            //A random umber between 0 and 8 is selected.
            pickASquare = String(Math.floor(Math.random() * 9));
            //If the random number evaluated returns true, 
            //the square hasn't been selected yet
            if(placeXOrO(pickASquare))
            {
                //This line calls the function.
                placeXOrO(pickASquare);
                //This changes our boolean and ends the loop.
                success = true;
            };
         }
     }
 }
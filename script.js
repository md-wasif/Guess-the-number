
let randomNumber = generateRandomNumber();
let guesses = [];


window.onload = function()
{
    document.getElementById("number-submit").addEventListener("click", playGame);
    document.getElementById("restart-game").addEventListener("click", initGame);
    generateRandom()
}

function playGame()
{
    var inputNumber = document.getElementById("number-guess").value;
    displayNumber(inputNumber);
    saveGuessHistory(inputNumber);
    displayHistory();
}

function initGame()
{
    //Reset the RandomNumber
    //Reset the result
    //Reset the guess Array
    //Reset the guess history
    randomNumber = generateRandomNumber();
    document.getElementById("result").innerHTML = "";
    guesses = [];
    document.getElementById("history").innerHTML = "";
}

//Generate a random number....
function generateRandomNumber()
{
    var randomNumber = Math.random();
    var wholeNumber = Math.floor(randomNumber * 100) + 1;
     return wholeNumber;
}

function displayNumber(guessNumber)
{
     if(guessNumber > randomNumber)
         showHigh();
     else if(guessNumber < randomNumber)
         showLess();
     else
         showCorrect();
}

function getDialog(dialogType, text){
    let dialog;
    switch(dialogType){
      case "warning":
        dialog = "<div class='alert alert-warning' role='alert'>"
        break;
      case "won":
        dialog = "<div class='alert alert-success' role='alert'>"
        break;
    }
    dialog += text;
    dialog += "</div>"
    return dialog;
  }



function showCorrect()
{
    let text = "You'r guess Number is correct.";

    let dialog = getDialog("won", text);
    document.getElementById("result").innerHTML = dialog;
}


function showLess()
{
    let text = "You'r guess Number is to low.";

    let dialog = getDialog("warning", text);
    document.getElementById("result").innerHTML = dialog;
}

function showHigh()
{
    let text = "You'r guess Number is to high.";

    let dialog = getDialog("warning", text);
    document.getElementById("result").innerHTML = dialog;
}

/* <ul class='list-group'>
  <li class='list-group-item'>You guessed {number}</li
 </ul>
*/

function displayHistory() {
    let index = guesses.length - 1; 
    let list = "<ul class='list-group'>";
     while(index >= 0)
     {
         list += "<li class='list-group-item'>" + "you guessed " + guesses[index] + "</li>";
         index -= 1;
     }
    list += '</ul>'
    document.getElementById("history").innerHTML = list;
  }


function saveGuessHistory(guess)
{
    guesses.push(guess);
    console.log(guesses);
}
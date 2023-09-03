
/* random 1-3 -> return rock/paper/scissors.. (Or don't actually.)
Instead let's take each value into a #instead.. 0 -> rock, 1 -> paper, 2 -> scissors..
 */

//Event listener for Button..
const buttons = document.querySelectorAll('.input');
const buttons2 =  document.querySelector('.buttons');
console.log(buttons);
let results = document.querySelector('.results');
let cScore = document.querySelector('.c-score');
let pScore = document.querySelector('.p-score');
let winner = document.querySelector('.winner');
buttons.forEach(button => button.addEventListener('click', function (){
    console.log(button.innerHTML.split(' ')[2]);
    results.innerHTML = singleRound(calculatePlayer(button.innerHTML.split(' ')[2]), getComputerChoice());
    if(parseInt(pScore.innerHTML) > parseInt(cScore.innerHTML) && parseInt(pScore.innerHTML) >= 5){
        winner.innerHTML = 'Player Wins! You got to 5 first!';
    }
    if(parseInt(cScore.innerHTML) > parseInt(pScore.innerHTML) && parseInt(cScore.innerHTML) >= 5){
        winner.innerHTML = 'Computer Wins! The Computer got to 5 first!';
    }
}));

function getComputerChoice(){
    return Math.floor(Math.random()*3)
}

function calculatePlayer(input){
    if('ROCK' == input.toUpperCase()){
        return 0;
    } else if('PAPER' == input.toUpperCase()){
        return 1;
    } else if('SCISSORS' == input.toUpperCase()){
        return 2;
    }
}

function translate(input){
    let output = ""
    switch(input){
        case 0:
            output = "Rock";
            break;
        case 1:
            output = "Paper";
            break;
        case 2:
            output = "Scissors";
    }
    return output
}

function singleRound(playerSelection, computerSelection){
    /* player Selection and Computer Selection should be numbers..*/
    let output = "";
    /* If hmmmmm actually how the hell do you this transistion... well switch makes the most sense.. */
    /* But using player Selection - computer Slection will allow a smoother transistion.. Let's try using a switch statement since I've never used it*/
    switch(playerSelection-computerSelection){
        case -1:
        case 2:
            output += "You Lose! " + translate(computerSelection) + " beats " + translate(playerSelection);
            cScore.innerHTML = parseInt(cScore.innerHTML)+1;
            break;
        case -2:    
        case 1:
            output += "You Win! " + translate(playerSelection) + " beats " + translate(computerSelection);
            pScore.innerHTML = parseInt(pScore.innerHTML)+1;
            break;
        case 0:
            output += "Draw! They're the same!"
    }
    return output;
}




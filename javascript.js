
let rock,paper,scissors;
rock="rock"
paper="paper"
scissors="scissors";

function getComputerChoice(){
    
    let num=Math.random();
    
    if(num<=.333){
        return rock;
    }
    else if(num>=.334&& num<=.667){
        return paper;
    }
    else{
        return scissors;
    }
}

function getHumanChoice(){
    let input=prompt("Pick rock paper or scissors, write in lower case");
    return input.toLowerCase();


}

const humanSelection=getHumanChoice();
const computerSelection=getComputerChoice();

function playRound(humanSelection,computerSelection){
    if(humanSelection==rock && computerSelection==paper){
        return "Computer wins, you lose";
    }
    else if(humanSelection==rock && computerSelection==scissors){
        return "you win, Computer loses"
    }
    else if(humanSelection==paper && computerSelection==rock){
        return " you win, computer loses"
    }
    else if(humanSelection==paper && computerSelection==scissors){
        return " you lose, computer wins"
    }
    else if(humanSelection==scissors && computerSelection==rock){
        return " you lose, computer wins"
    }
    else if(humanSelection==scissors && computerSelection==paper){
        return " you win, computer loses"
    }
    else{
        return "its a draw";
    }

    
}

console.log(playRound(humanSelection,computerSelection));
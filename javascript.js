
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
        return  `You chose ${humanSelection} computer chose ${computerSelection}, computer wins you lose`;
    }
    else if(humanSelection==rock && computerSelection==scissors){
        return `You chose ${humanSelection} computer chose ${computerSelection}, you win`
    }
    else if(humanSelection==paper && computerSelection==rock){
        return `You chose ${humanSelection} computer chose ${computerSelection}, you win`
    }
    else if(humanSelection==paper && computerSelection==scissors){
        return `You chose ${humanSelection} computer chose ${computerSelection}, computer wins you lose`;
    }
    else if(humanSelection==scissors && computerSelection==rock){
        return `You chose ${humanSelection} computer chose ${computerSelection}, computer wins you lose`;
    }
    else if(humanSelection==scissors && computerSelection==paper){
        return `You chose ${humanSelection} computer chose ${computerSelection}, you win`
    }
    else{
        return "its a draw";
    }

    
}

console.log(playRound(humanSelection,computerSelection));
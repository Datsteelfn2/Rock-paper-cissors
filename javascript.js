
let rock,paper,scissors,humanScore,computerScore;
rock="rock"
paper="paper"
scissors="scissors";
humanScore=0;
computerScore=0;

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
    let humanSelection=getHumanChoice();
    let computerSelection=getComputerChoice();
    


function playRound(humanSelection,computerSelection){
    
    if(humanSelection==rock && computerSelection==paper){
        computerScore++;
        return  `You chose ${humanSelection} computer chose ${computerSelection}, computer wins you lose, score|Human:${humanScore} Computer:${computerScore}`;
    }
    else if(humanSelection==rock && computerSelection==scissors){
        humanScore++;
        return `You chose ${humanSelection} computer chose ${computerSelection}, you win, score|Human:${humanScore} Computer:${computerScore}`
    }
    else if(humanSelection==paper && computerSelection==rock){
        return `You chose ${humanSelection} computer chose ${computerSelection}, you win,score|Human:${humanScore} Computer:${computerScore}`
    }
    else if(humanSelection==paper && computerSelection==scissors){
        return `You chose ${humanSelection} computer chose ${computerSelection}, computer wins you lose,score|Human:${humanScore} Computer:${computerScore}`;
    }
    else if(humanSelection==scissors && computerSelection==rock){
        return `You chose ${humanSelection} computer chose ${computerSelection}, computer wins you lose,score|Human:${humanScore} Computer:${computerScore}`;
    }
    else if(humanSelection==scissors && computerSelection==paper){
        return `You chose ${humanSelection} computer chose ${computerSelection}, you win,score|Human:${humanScore} Computer:${computerScore}`
    }
    else{
        return `You chose ${humanSelection} computer chose ${computerSelection}, its a draw,score|Human:${humanScore} Computer:${computerScore}`;
    }

    
}
function playGame(){
    return playRound(humanSelection,computerSelection);

}
console.log(playGame());
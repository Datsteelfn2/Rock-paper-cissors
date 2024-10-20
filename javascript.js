console.log("hellow world");

function getComputerChoice(){
    let rock,paper,scissors;
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
    let input=prompt("Pick rock paper or scissors")
}

function PlayRound(humanChoice,computerChoice){

}

const humanSelection=getHumanChoice();

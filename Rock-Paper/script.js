const choices = document.querySelectorAll(".choice");

const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

let userScore = 0;
let compScore = 0;

const genCompChoice = ()=>{
    const option = ["rock", "paper", "scissors"]

    const rndmTdx = Math.floor(Math.random() * 3);

    return option[rndmTdx]
}

const draw = ()=>{
    msg.innerText = "Match was draw";
    msg.style.backgroundColor = "#0d223b"
}

const showWinner = (userWin, userChoice, compChoice)=>{
    if(userWin){
        msg.innerText = `You Win. Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";

        userScore++;
        userScorePara.innerText  = userScore;

    }else{
        msg.innerText = `You Lose. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";

        compScore++;
        compScorePara.innerText = compScore;
    }
}

const playGame = (userChoice, compChoice)=>{
    if(userChoice === compChoice){
        draw();
    } else{
        let userWin = true;
        if(userChoice === "rock"){
            // paper, scissors
        userWin = compChoice === "paper" ? false : true; 
        }
        else if(userChoice === "paper"){
            // rock, scissors
            userWin = compChoice === "rock" ? true : false;
        }else{
            // rock,paper
            userWin = compChoice === "rock" ? false : true; 
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice)=>{
    choice.addEventListener('click', ()=>{
        const userChoice = choice.getAttribute("id");
        
        //Generate computer choice
        const compChoice = genCompChoice();

        playGame(userChoice, compChoice)
        
    })
})
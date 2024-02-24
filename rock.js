let userScore=0;
let compScore=0;

const choices = document.querySelectorAll(".choice");

const msg  = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const comScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options =["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];

}

const drawGame = () => {
    console.log("Game was draw");// this code is not in use,but it is used during developing game .this output will display in backend(console).
    msg.innerText = "Game Was Draw. Play again.";
    msg.style.backgroundColor = "#081b31";
}

const shoWinner = (userWin,userChoice,compChoice) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        console.log("You Win!");// this code is not in use,but it is used during developing game .this output will display in backend(console).
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        comScorePara.innerText = compScore;
        console.log("You lose!");// this code is not in use,but it is used during developing game .this output will display in backend(console).
        msg.innerText = `You Lose! ${compChoice} beats You ${userChoice}`;
        msg.style.backgroundColor = "red";
    }

}


const playGame = (userChoice) =>{
     console.log("user choice = ",userChoice);
    //Generate computer choice
    const compChoice = genCompChoice();
    console.log("comp choice = ", compChoice);// this code is not in use,but it is used during developing game .this output will display in backend(console).
     
    if(userChoice === compChoice){
        // Draw Game
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            // scissors,paper
          userWin =  compChoice === "paper" ? false : true;
        } else if(userChoice ==="paper"){
            // rock,scissors
            userWin = compChoice === "scissors" ? false : true;
        } else{
            //rock,paper
            userWin  = compChoice === "rock" ? false : true;
        }
        shoWinner(userWin,userChoice,compChoice);
    }
};


choices.forEach((choice) =>{
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id")
    playGame(userChoice);
    })
})
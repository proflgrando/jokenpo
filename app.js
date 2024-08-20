let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreboard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");

function getComputerChoice(){
    const choices = ["r","p","s"];
    const randomNumber = Math.floor(Math.random()*3);
    return choices[randomNumber]; 
}

function convertToWord(letter) {
    if (letter === "r") return "Pedra";
    if (letter === "p") return "Papel";
    return "Tesoura";
}

getComputerChoice();

function win(userChoice, computerChoice){
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(5).sub();
    const IAUserWord = "IA".fontsize(5).sub();
    result_div.innerHTML = `${convertToWord(userChoice)}${smallUserWord} vence ${convertToWord(computerChoice)}${IAUserWord}`; 
}

function lose(userChoice, computerChoice){
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(3).sub();
    const IAUserWord = "IA".fontsize(3).sub();
    result_div.innerHTML = `${convertToWord(userChoice)}${smallUserWord} perde para  ${convertToWord(computerChoice)}${IAUserWord}`; 
}

function draw(userChoice, computerChoice){
    userScore++;
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(3).sub();
    const IAUserWord = "IA".fontsize(3).sub();
    result_div.innerHTML = `${convertToWord(userChoice)}${smallUserWord} empata com  ${convertToWord(computerChoice)}${IAUserWord}`; 
}

function game(userChoice){
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice){
        case "rs": 
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break
        
        case "rp": 
        case "sr":
        case "ps":
            lose(userChoice, computerChoice);
            break
        
        case "rr": 
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break
    }
}

function main(){
rock_div.addEventListener("click", function(){
    game("r")
})

paper_div.addEventListener("click", function(){
    game("p")
})

scissor_div.addEventListener("click", function(){
    game("s")
})

}
main()

// botones de elecion del jugador 

const container = document.querySelector('#container');

const rockBtn = document.createElement("button");
rockBtn.classList.add('content');
rockBtn.textContent = 'Rock';

const paperBtn = document.createElement("button");
paperBtn.classList.add('content');
paperBtn.textContent = 'Paper';

const scissorsBtn = document.createElement("button");
scissorsBtn.classList.add('content');
scissorsBtn.textContent = 'Scissors';

container.appendChild(rockBtn);
container.appendChild(paperBtn);
container.appendChild(scissorsBtn);


// eventos

rockBtn.addEventListener('click', () => {
    let playerSelection = "Rock"
    console.log(playRound(playerSelection, computerSelection));
  });
  
  paperBtn.addEventListener("click", () => {
    playerSelection = "PAPER"
    console.log(playRound(playerSelection, computerSelection));
  });
  
  scissorsBtn.addEventListener("click", () => {
    playerSelection = "SCISSORS"
    console.log(playRound(playerSelection, computerSelection));
  });  


function playerChoice() {
}



// Funcion que hace la jugada de la computadora 

const myArray = ["Rock", "Paper", "Scissors"];

function computerPlay() {
  return myArray[~~(Math.random() * myArray.length)];
}   
  
console.log(computerPlay())
    
          // Round Algorithm 
  
let playerScore = 0;
let computerScore = 0;

  function playRound(playerSelection, computerSelection) {
  
      if(playerSelection.toUpperCase() === computerSelection.toUpperCase()) {    // Chequamos si son lo mismo, en caso de que si lo damos como empate
        playerScore += 0
        computerScore += 0
        
        return "Its a Draw"
  
      } else if (playerSelection.toUpperCase() === "ROCK" && computerSelection.toUpperCase() === "SCISSORS") {  // Win round
        playerScore += 1
        return "It's a Win!!! Your Rock wins over the computer Scissors." 
  
      } else if (playerSelection.toUpperCase() === "ROCK" && computerSelection.toUpperCase() === "PAPER") {    // Loost round
        computerScore += 1
        return "It's a lost round :( Your Rock looses over the computer Paper."
   
      }else if (playerSelection.toUpperCase() === "PAPER" && computerSelection.toUpperCase() === "ROCK") {      // Win round
        playerScore += 1
        return "It's a Win!!! Your Paper wins over the computer rock."
  
      }else if (playerSelection.toUpperCase() === "PAPER" && computerSelection.toUpperCase() === "SCISSORS") {    // Loost round
        computerScore += 1 
        return "It's a lost round :( Your Paper looses over the computer Scissors."
   
      }else if (playerSelection.toUpperCase() === "SCISSORS" && computerSelection.toUpperCase() === "ROCK") {   // Loost round
        computerScore += 1
        return "It's a lost round :( Your Scissors looses over the computer Rock."
  
      }else if (playerSelection.toUpperCase() === "SCISSORS" && computerSelection.toUpperCase() === "PAPER") {   // Win round
        playerScore += 1
        return "It's a Win!!! Your scissors wins over the computer paper."
   
      } else {
          alert("Paso Algo")
      }
  }


  const computerSelection = computerPlay();

  
  // console.log(playRound(playerSelection, computerSelection));
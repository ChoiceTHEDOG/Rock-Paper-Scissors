
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
   let computerSelection = computerPlay();
    let playerSelection = "Rock"
    document.getElementById("results").innerHTML = playRound(playerSelection, computerSelection);
  });
  
  paperBtn.addEventListener("click", () => {
    computerSelection = computerPlay();
    playerSelection = "PAPER"
    document.getElementById("results").innerHTML = playRound(playerSelection, computerSelection);
  });
  
  scissorsBtn.addEventListener("click", () => {
    computerSelection = computerPlay();
    playerSelection = "SCISSORS"
    document.getElementById("results").innerHTML = playRound(playerSelection, computerSelection);
  });  

  // div de los resultados 

 const winerDiv = document.createElement("div");
 winerDiv.textContent = "The game result is:";

 const tempDiv = document.createElement("div");
 tempDiv.setAttribute("id", "results")

 const resultDiv = document.createElement("div");
  resultDiv.textContent = "The points are:";
 
 container.appendChild(winerDiv);
 container.appendChild(tempDiv);
 container.appendChild(resultDiv);

// Funcion que hace la jugada de la computadora 

const myArray = ["Rock", "Paper", "Scissors"];

function computerPlay() {
  return myArray[~~(Math.random() * myArray.length)];
}   
    
          // Round Algorithm 
  
 const updateScore = (score, playerName) => {
  document.querySelector(`.${playerName}-score .score`).textContent = score;
};
 let playerPoints = parseInt(0);
 let cpuPoints = parseInt(0);

 updateScore(0, 'player');
 updateScore(0, 'cpu');


  function playRound(playerSelection, computerSelection) {

    if(playerPoints < 5 && cpuPoints < 5) {

      if(playerSelection.toUpperCase() === computerSelection.toUpperCase()) {    // Chequamos si son lo mismo, en caso de que si lo damos como empate
        
        return "Its a Draw"
  
      } else if (playerSelection.toUpperCase() === "ROCK" && computerSelection.toUpperCase() === "SCISSORS") {  // Win round
        playerPoints += 1;
        updateScore(playerPoints, 'player'); 
        return "It's a Win!!! Your Rock wins over the computer Scissors." 
  
      } else if (playerSelection.toUpperCase() === "ROCK" && computerSelection.toUpperCase() === "PAPER") {    // Loost round
        cpuPoints += 1;
        updateScore(cpuPoints, 'cpu');
        return "It's a lost round :( Your Rock looses over the computer Paper."
   
      }else if (playerSelection.toUpperCase() === "PAPER" && computerSelection.toUpperCase() === "ROCK") {      // Win round
        playerPoints += 1;
        updateScore(playerPoints, 'player');
        return "It's a Win!!! Your Paper wins over the computer rock."
  
      }else if (playerSelection.toUpperCase() === "PAPER" && computerSelection.toUpperCase() === "SCISSORS") {    // Loost round
        cpuPoints += 1;
        updateScore(cpuPoints, 'cpu');
        return "It's a lost round :( Your Paper looses over the computer Scissors."
   
      }else if (playerSelection.toUpperCase() === "SCISSORS" && computerSelection.toUpperCase() === "ROCK") {   // Loost round
        cpuPoints += 1;
        updateScore(cpuPoints, 'cpu');
        return "It's a lost round :( Your Scissors looses over the computer Rock."
  
      }else if (playerSelection.toUpperCase() === "SCISSORS" && computerSelection.toUpperCase() === "PAPER") {   // Win round
        playerPoints += 1;
        updateScore(playerPoints, 'player');
        return "It's a Win!!! Your scissors wins over the computer paper."
      }
    }
    if(playerPoints == 5) {
      alert("You win!!!")
    } else if(cpuPoints == 5) {
      alert("The Cpu Wins!!!")
    }
  } 


/* Computer Choice */
function getComputerChoice() {
  let result = Math.floor(Math.random() * 3);
  if (result === 0) return "tijera";
  else if (result === 1) return "papel";
  else return "piedra";
}

/* Human Choice */
function getHumanChoice() {
  let humanChoice = window.prompt("Elige: Piedra, Papel o Tijera").toLocaleLowerCase().trim();
    if (humanChoice === "tijera") return "tijera";
    else if (humanChoice === "piedra") return "piedra";
    else return "papel";
}





/* Play 5 Game and score*/
function playGame(){
let humanScore = 0;
let computerScore = 0;
 

function playRound() {
  const computer = getComputerChoice();
  const human = getHumanChoice();

  console.log(`Computer eligió: ${computer}`);
  console.log(`El humano eligió: ${human}`);

  let resultado;

  if (computer === human) {
    resultado = "Empate";
  } else if (
    (human === "piedra" && computer === "tijera") ||
    (human === "papel" && computer === "piedra") ||
    (human === "tijera" && computer === "papel")
  ) {
    resultado =  `Gana Humano (${human} vence a ${computer})` ;
    humanScore++
  } else {
    resultado =   `Gana Computer (${computer} vence a ${human})`;
    computerScore++
  }
    console.log(resultado)
    return console.log("Human Score", humanScore ,"|","Computer Score",computerScore);
}



    for(let i = 0; i < 5; i++){
    playRound()}
    console.log('Juego Terminado')
    console.log(`Marcador final Humano: ${humanScore} "|" Computer: ${computerScore}`)

    if (humanScore > computerScore){
        return "Felicidades Has Ganado"
    }
    else if (computerScore > humanScore){
        return "Loiento ha Ganado Cumputer"
    }
    else{
        return "HOOOO es un Empate"
    }
}

playGame()

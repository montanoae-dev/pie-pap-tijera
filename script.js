let humanScore = 0;
let computerScore = 0;


function getComputerChoice() {
  let result = Math.floor(Math.random() * 3);
  if (result === 0) return "tijera";
  else if (result === 1) return "papel";
  else return "piedra";
}

function getHumanChoice() {
  let humanChoice = window.prompt("Elige: Piedra, Papel o Tijera").toLocaleLowerCase().trim();
    if (humanChoice === "tijera") return "tijera";
    else if (humanChoice === "piedra") return "piedra";
    else return "papel";
}




function playRound() {
  const computer = getComputerChoice();
  const human = getHumanChoice();

  console.log(`La IA eligió: ${computer}`);
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
    resultado =   `Gana IA (${computer} vence a ${human})`;
    computerScore++
  }
    console.log(resultado)
    return console.log("Human Score", humanScore ,"|","ComputerSocre",computerScore);
}
function Game(){
    for(let i = 0; i < 5; i++){
    playRound()}
    console.log('Juego Terminado')
    console.log(`Marcador final → Humano: ${humanScore} | IA: ${computerScore}`)

    if (humanScore > computerScore){
        return "Felicidades Has Ganado"
    }
    else if (computerScore > humanScore){
        return "Lociento ha Ganado Cumputer"
    }
    else{
        return "HOOOO es un Empate"
    }
}


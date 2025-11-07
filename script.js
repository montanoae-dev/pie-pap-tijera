function getComputerChoice() {
  let result = Math.floor(Math.random() * 3);
  if (result === 0) return "tijera";
  else if (result === 1) return "papel";
  else return "piedra";
}
const tijera = document.querySelector(".tijera");
const piedra = document.querySelector(".piedra");
const papel = document.querySelector(".papel");
const actualizar = document.querySelector(".h3b")
tijera.addEventListener("click", () => playRound("tijera"));
piedra.addEventListener("click", () => playRound("piedra"));
papel.addEventListener("click", () => playRound("papel"));
actualizar.addEventListener("click", () => newPlay());

 const computer = getComputerChoice();
  let humanScore = 0;
  let computerScore = 0;
  const contenedor = document.querySelector(".container");
  const paraElecion = document.createElement("p");
  const paraResult = document.createElement("p");
  const score = document.createElement("h1");
function playRound(human) {
 
  paraElecion.textContent = `Computer eligió: ${computer} -- El humano eligió: ${human}`;

  contenedor.appendChild(score);
 
  let resultado;
   if (computer === human) {
    resultado = "Empate";
  } else if (
    (human === "piedra" && computer === "tijera") ||
    (human === "papel" && computer === "piedra") ||
    (human === "tijera" && computer === "papel")
  ) {
    resultado = `Gana Humano (${human} vence a ${computer})`;
    humanScore++;
  } else {
    resultado = `Gana Computer (${computer} vence a ${human})`;
    computerScore++;
  }
  contenedor.appendChild(paraElecion);
  paraResult.textContent = `Resultado: ${resultado}`;
  contenedor.appendChild(paraResult);
  score.textContent = `Human Score: ${humanScore} | Computer Score: ${computerScore}`;
  winner()
}

function winner(){
  if (humanScore === 5){
    alert("Felicidades has Ganado")
    stop();
  }
  else if (computerScore === 5){
  alert("Lo siento ha Ganado la Computadora")
stop();}
}
function stop(){
  tijera.disabled = true;
  piedra.disabled = true;
  papel.disabled = true;
}

function newPlay(){
  humanScore = 0;
  computerScore = 0;
  tijera.disabled = false;
  piedra.disabled = false;
  papel.disabled = false;

}
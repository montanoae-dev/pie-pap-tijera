function getComputerChoice() {
  let result = Math.floor(Math.random() * 3);
  if (result === 0) return "tijera";
  else if (result === 1) return "papel";
  else return "piedra";
}

function getHumanChoice() {
  let humanChoice = window.prompt();
    if (humanChoice === "tijera") return "tijera";
    else if (humanChoice === "piedra") return "piedra";
    else return "papel";
}

function jugar() {
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
    resultado = `Gana Humano (${human} vence a ${computer})`;
  } else {
    resultado = `Gana IA (${computer} vence a ${human})`;
  }

  console.log(resultado);
return resultado;
}




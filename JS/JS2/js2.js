pontos = 0
while(true){
  x = parseInt(window.prompt("Insira sua jogada:\n1 - Papel\n2 - Pedra\n3 - Tesoura")) - 1;
  if(x != 0 && x != 1 && x != 2){
    break;
  }
  y = Math.floor(Math.random() * 3);
  console.log(y)
  switch(y){
    case 0:
      console.log("O computador jogou Papel");
      break;
    case 1:console.log("O computador jogou Pedra");
      break;
    case 2:console.log("O computador jogou Tesoura");
      break;
  }
  res = x - y
  if(res == -1 || res == 2){
    console.log("O jogador ganhou!")
    pontos ++
  } else if(res == 0){console.log("A rodada empatou!")}
  else{break;}
}

console.log("Você perdeu! Sua pontuação foi de " + pontos)
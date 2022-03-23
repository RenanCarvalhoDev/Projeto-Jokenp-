//Projeto 2 (Jokenpô) - Renan Augusto de Carvalho

console.log("Olá, você está no jogo de \033[1;33mJOKENPÔ\033[0;0m , abaixo, escolha quantas vezes deseja jogar : \n");//Mostrando a primeira informação do jogo e mudando a colocação da letra JOKENPO.

//declarando as variveis comuns e as array.
let winnerPlayer = 0;
let winnerComputer = 0;
let tie  = 0;
let option = [];
let randon = [];
let answer;
let a,b,c;
let computer;
let vish, retornoVish;

//Criando uma função para gravar numa variavel qual o valor de Math.randon será relacionado a uma string do jogo.
function nameComputer (vish){
  switch (vish){
        case 1:
          computer = "PEDRA"
          return computer
        break;

        case 2:
          computer = "PAPEL"
          return computer
        break;
        
        case 3:
          computer = "TESOURA"
          return computer
         break; 
  }
}


//Aqui é onde a Magica acontece: Aqui esta todo o programa num loop finito, onde exite ele para conseguir realizar o jogo quantas vezes o usuario quiser.
do {      
          
          // Realizando uma impressão de uma pergunta para o usuario e recebendo essa informação para dentro de uma variavel e após isso declarando mais algumas variaveis.
          let round = +prompt("Quantas rodadas será o jogo ?? ");
          a = 0;
          b = 0;
          c = 0;
          console.clear();

          //realizando um loop finito para fazer toda a dinamica do jogo de pergunta de quais opções o usuario irá querer, quanto gerar valores aleatorios pelo Math.randon.
          for( c = 0; c < round ; c++){
                
            console.log("\nEscolha uma opção:\n");
            console.log("   \033[0;33mPEDRA\033[0;0m   ---    PAPEL  ---  \033[1;90mTESOURA\033[0;0m\n");
            option [a] = prompt(": ").toUpperCase();

            if (option[a] == "PEDRA" || option[a] == "PAPEL" || option[a] == "TESOURA"){//verificando o que o usuario digitou se é pedra, papel ou tesoura.
                    
              randon[b] = Number(parseInt(Math.random() * 3 +1 ));//Gerando valores aleatorios entre 1 e 3, transformando em numero e adicionando a um array.
                    
                  if ((randon[b] == 3 && option[a] == 'PEDRA')||(randon[b] == 1 && option[a] == "PAPEL")||(randon[b] == 2 && option[a] == "TESOURA")){//comparando a opção que o usuario escolheu e o numero aleatorio que foi gerado pelo Math.randon.
                    
                    retornoVish = nameComputer(randon[b]);//Chamando a função para trocar o valor do Math.randon de numero par uma palavra.                    
                    console.log("\nJooookeeeennnpoooô!");
                    console.log("\nComputador: \033[1;31m"+ retornoVish + "\033[0;0m <---> Jogador : \033[1;32m"+ option[a] + "\033[0;0m" );
                    console.log("O JOGADOR ganhou essa !!!\n");                       
                    winnerPlayer ++; 
                    
                    }

                  if ((randon[b] == 1 && option[a] == "TESOURA")||(randon[b] == 2 && option[a] == "PEDRA")||(randon[b] == 3 && option[a] == "PAPEL")){//comparando a opção que o usuario escolheu e o numero aleatorio que foi gerado pelo Math.randon.
                    
                    retornoVish = nameComputer(randon[b]);//Chamando a função para trocar o valor do Math.randon de numero par uma palavra.
                    console.log("\nJooookeeeennnpoooô!");
                    console.log("\nComputador: \033[1;32m"+ retornoVish +"\033[0;0m <---> Jogador : \033[1;31m"+ option[a] +"\033[0;0m" );
                    console.log("O COMPUTADOR ganhou essa !!!\n");
                    winnerComputer ++;
                    
                    }

                  if ((randon[b] == 1 && option[a] == "PEDRA")||(randon[b] == 2 && option[a] == "PAPEL")||(randon[b] == 3 && option[a] == "TESOURA")){//comparando a opção que o usuario escolheu e o numero aleatorio que foi gerado pelo Math.randon.
                    
                    retornoVish = nameComputer(randon[b]);//Chamando a função para trocar o valor do Math.randon de numero par uma palavra.
                    console.log("\nJooookeeeennnpoooô!");
                    console.log("\nComputador: \033[1;34m"+ retornoVish +"\033[0;0m <---> Jogador : \033[1;34m"+ option[a] +"\033[0;0m" );
                    console.log("Aconteceu o inexplicavel, houve um EMPATE !!!\n");   
                    tie ++;   
                    
                    }

                    b++;
                    a++;
                    
              }
          }

          answer = prompt("Deseja jogar outra vez ?").toLowerCase();// realizando a pergunta para saber se o usuario deseja jogar novamente, recebendo o valor em letra minuscula e adicionando na variavel.

    }while(answer == 'sim'|| answer == 's')

//mostrando o resultado de todas as jogadas, quantidade de vitorias entre usuario e computador, ou empates.
prompt("Aperte ENTER para ver o resultado");
console.clear();
console.log(`O JOGADOR teve ${winnerPlayer} vitoria(s)\n`);
console.log(`O COMPUTADOR teve ${winnerComputer} vitoria(s)\n`);
console.log(`Teve ${tie} empate(s)\n`);

//Verificando quem foi o jogador de todas as rodas.
if (winnerPlayer > winnerComputer){

    console.log("O \033[1;93mJogador\033[0;0m é o \033[1;93mGRANDE VENCEDOR !!!!\033[0;0m ");
  
}else if (winnerComputer > winnerPlayer){

    console.log("O \033[1;93mComputador\033[0;0m é o \033[1;93mGRANDE VENCEDOR !!!!\033[0;0m ");
}

else{

  console.log("Acontenceu o inesplicavel é \033[1;34mEMPATE\033[0;0m !!!! ");
}


//FIM DO CÓDIGO.
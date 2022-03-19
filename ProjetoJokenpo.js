//Projeto 2 (Jokenpô) - Renan Augusto de Carvalho

console.log("Olá, você está no jogo de \033[1;33mJOKENPÔ\033[0;0m , abaixo, escolha quantas vezes deseja jogar : \n");

let winnerPlayer = 0;
let winnerComputer = 0;
let tie  = 0;
let option = [];
let randon = [];
let answer;
let a,b,c;
let computer;

function nameComputer (){
  switch (randon [b]){
        case 1:
          computer = "PEDRA"
        break;

        case 2:
          computer = "PAPEL"
        break;
        
        case 3:
          computer = "TESOURA"
         break; 
  }
}

do {      
          let round = +prompt("Quantas rodadas será o jogo ?? ");
          a = 0;
          b = 0;
          c = 0;
          console.clear();

          for( c = 0; c < round ; c++){
                
            console.log("\nEscolha uma opção:\n");
            console.log("   \033[0;33mPEDRA\033[0;0m   ---    PAPEL  ---  \033[1;90mTESOURA\033[0;0m\n");
            option [a] = prompt(": ").toUpperCase();

            if (option[a] == "PEDRA" || option[a] == "PAPEL" || option[a] == "TESOURA"){
                    
              randon[b] = Number(parseInt(Math.random() * 3 +1 ));
                    
                  if ((randon[b] == 3 && option[a] == 'PEDRA')||(randon[b] == 1 && option[a] == "PAPEL")||(randon[b] == 2 && option[a] == "TESOURA")){
                    
                    nameComputer();                    
                    console.log("\nJooookeeeennnpoooô!");
                    console.log("\nComputador: \033[1;31m"+ computer + "\033[0;0m <---> Jogador : \033[1;32m"+ option[a] + "\033[0;0m" );
                    console.log("O JOGADOR ganhou essa !!!\n");                       
                    winnerPlayer ++; 
                    
                    }

                  if ((randon[b] == 1 && option[a] == "TESOURA")||(randon[b] == 2 && option[a] == "PEDRA")||(randon[b] == 3 && option[a] == "PAPEL")){
                    
                    nameComputer();
                    console.log("\nJooookeeeennnpoooô!");
                    console.log("\nComputador: \033[1;32m"+ computer +"\033[0;0m <---> Jogador : \033[1;31m"+ option[a] +"\033[0;0m" );
                    console.log("O COMPUTADOR ganhou essa !!!\n");
                    winnerComputer ++;
                    
                    }

                  if ((randon[b] == 1 && option[a] == "PEDRA")||(randon[b] == 2 && option[a] == "PAPEL")||(randon[b] == 3 && option[a] == "TESOURA")){
                    
                    nameComputer();
                    console.log("\nJooookeeeennnpoooô!");
                    console.log("\nComputador: \033[1;34m"+ computer +"\033[0;0m <---> Jogador : \033[1;34m"+ option[a] +"\033[0;0m" );
                    console.log("Aconteceu o inexplicavel, houve um EMPATE !!!\n");   
                    tie ++;   
                    
                    }

                    b++;
                    a++;
                    
              }
          }

          answer = prompt("Deseja jogar outra vez ?").toLowerCase();

    }while(answer == 'sim'|| answer == 's')

prompt("Aperte ENTER para ver o resultado");
console.clear();
console.log(`O JOGADOR teve ${winnerPlayer} vitoria(s)\n`);
console.log(`O COMPUTADOR teve ${winnerComputer} vitoria(s)\n`);
console.log(`Teve ${tie} empate(s)\n`);

if (winnerPlayer > winnerComputer){

    console.log("O \033[1;93mJogador\033[0;0m é o \033[1;93mGRANDE VENCEDOR !!!!\033[0;0m ");
  
}else if (winnerComputer > winnerPlayer){

    console.log("O \033[1;93mComputador\033[0;0m é o \033[1;93mGRANDE VENCEDOR !!!!\033[0;0m ");
}

else{

  console.log("Acontenceu o inesplicavel é \033[1;34mEMPATE\033[0;0m !!!! ");
}


            
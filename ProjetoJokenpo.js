//Projeto 2 (Jokenpô) - Renan Augusto de Carvalho

console.log("Olá, você está no jogo de jokenpô, abaixo, escolha quantas vezes deseja jogar e qual será sua 1ecolha: \n(1- PEDRA, 2- PAPEL ou 3- TESOURA)\n");

let winnerPlayer = 0;
let winnerComputer = 0;
let tie  = 0;
let option = [];
let randon = [];
let answer;
let a,b,c;
let computer, options ;

function nameComputer (){
  switch (randon [b]){
        case 1:
          computer = "\033[1;31mPEDRA\033[0;0m"
        break;

        case 2:
          computer = "\033[1;31mPAPEL\033[0;0m"
        break;
        
        case 3:
          computer = "\033[1;31mTESOURA\033[0;0m"
         break; 
  }
}

function colorOption (){
  switch (option [a]){
        case 'PEDRA':
          options = "\033[1;31mPEDRA\033[0;0m"
        break;

        case 'PAPEL':
          options = "\033[1;31mPAPEL\033[0;0m"
        break;
        
        case 'TESOURA':
          options = "\033[1;31mTESOURA\033[0;0m"
         break; 
  }
}

do {      
          let round = +prompt("\nQuantas rodadas será o jogo ?? ");
          a = 0;
          b = 0;
          c = 0;
          console.clear();

          for( c = 0; c < round ; c++){
                
            console.log("\nEscolha uma opção:\n");
            console.log("   PEDRA   ---    PAPEL  ---  TESOURA\n");
            option [a] = prompt(": ").toUpperCase();

            if (option[a] == "PEDRA" || option[a] == "PAPEL" || option[a] == "TESOURA"){
                    
              randon[b] = Number(parseInt(Math.random() * 3 +1 ));
                    
                  if ((randon[b] == 3 && option[a] == 'PEDRA')||(randon[b] == 1 && option[a] == "PAPEL")||(randon[b] == 2 && option[a] == "TESOURA")){
                    
                    nameComputer();
                    colorOption ();
                    console.log("\nJooookeeeennnpoooô!");
                    console.log(`\nComputador :  ${computer}  <---> Jogador : ${options}`);
                    console.log("O JOGADOR ganhou essa !!!");
                        
                    winnerPlayer ++;   
                    }

                  if ((randon[b] == 1 && option[a] == "TESOURA")||(randon[b] == 2 && option[a] == "PEDRA")||(randon[b] == 3 && option[a] == "PAPEL")){
                    
                    nameComputer();
                    colorOption ();
                    console.log("\nJooookeeeennnpoooô!");
                    console.log(`\nComputador : ${computer} <---> Jogador : ${options}`);
                    console.log("O COMPUTADOR ganhou essa !!!");
                    
                    winnerComputer ++;   
                    }

                  if ((randon[b] == 1 && option[a] == "PEDRA")||(randon[b] == 2 && option[a] == "PAPEL")||(randon[b] == 3 && option[a] == "TESOURA")){
                    
                    nameComputer();
                    colorOption ();
                    console.log("\nJooookeeeennnpoooô!");
                    console.log(`\nComputador : ${computer} <---> Jogador : ${options}`);
                    console.log("Aconteceu o inexplicavel, houve um EMPATE !!!");
                        
                    tie ++;   
                    }

                    b++;
                    a++;
                    
              }
          }

          answer = prompt("\nDeseja jogar outra vez ?").toLowerCase();

    }while(answer == 'sim'|| answer == 's')

prompt("\nAperte ENTER para ver o resultado");
console.clear();
console.log(`O JOGADOR teve ${winnerPlayer} vitoria(s)\n`);
console.log(`O COMPUTADOR teve ${winnerComputer} vitoria(s)\n`);
console.log(`Teve ${tie} empate(s)\n`);

if (winnerPlayer > winnerComputer && winnerPlayer > tie){

    console.log("O Jogador é o GRANDE VENCEDOR !!!! ");
  
}else if (winnerComputer > winnerPlayer && winnerComputer > tie){

    console.log("O Computador é o GRANDE VENCEDOR !!!! ");
}

else{

  console.log("Acontenceu o inesplicavel é EMPATE !!!! ");
}


            
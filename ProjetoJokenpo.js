//Projeto 2 (Jokenpô) - Renan Augusto de Carvalho

console.log("Olá, você está no jogo de jokenpô, abaixo, escolha quantas vezes deseja jogar e qual será sua 1ecolha: \n(1- PEDRA, 2- PAPEL ou 3- TESOURA)\n");

let round = +prompt("Quantas rodadas será o jogo ?? ");

let a = 0;
let b = 0;
let c = 0;
let winnerPlayer = 0;
let winnerComputer = 0;
let tie  = 0;
let option = [];
let randon = [];

while( c  < round ){
    
    console.log("\nEscolha uma opção:\n");
    console.log("    1 : PEDRA ---  2 : PAPEL  ---  3 : TESOURA\n");
    option [a] = option.push = +prompt(": ");

    if (option[a]>= 1 && option[a] <=3){
        
        randon[b] = parseInt(Math.random() * 3 +1 );
        
        if ((randon[b] == 3 && option[a] == 1)||(randon[b] == 1 && option[a] == 2)||(randon[b] == 2 && option[a] == 3)){
        
            console.log("\nJooookeeeennnpoooô!");
            console.log(`\nComputador : ${randon[b]} --- Jogador : ${option[a]}`);
            console.log("O JOGADOR ganhou essa !!!");
            
            winnerPlayer ++;   
        }

        if ((randon[b] == 1 && option[a] == 3)||(randon[b] == 2 && option[a] == 1)||(randon[b] == 3 && option[a] == 2)){
        
            console.log("\nJooookeeeennnpoooô!");
            console.log(`\nComputador : ${randon[b]} --- Jogador : ${option[a]}`);
            console.log("O COMPUTADOR ganhou essa !!!");
           
            winnerComputer ++;   
        }

        if ((randon[b] == 1 && option[a] == 1)||(randon[b] == 2 && option[a] == 2)||(randon[b] == 3 && option[a] == 3)){
        
            console.log("\nJooookeeeennnpoooô!");
            console.log(`\nComputador : ${randon[b]} --- Jogador : ${option[a]}`);
            console.log("Aconteceu o inexplicavel, houve um EMPATE !!!");
            
            tie ++;   
        }

        b++;
        a++;
        c++;
    }
}


prompt("\nAperte ENTER para ver o resultado");
console.clear();
console.log(`O JOGADOR teve ${winnerPlayer} vitoria(s)\n`);
console.log(`O COMPUTADOR teve ${winnerComputer} vitoria(s)\n`);
console.log(`Teve ${tie} empate(s)\n`);
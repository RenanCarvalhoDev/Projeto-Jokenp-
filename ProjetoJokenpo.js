//Projeto 2 (Jokenpô) - Renan Augusto de Carvalho


console.log("Olá, aqui é o jogo de jokenpô, abaixo, escolha quantas vezes deseja jogar e qual o sua ecolha (PEDRA, PAPEL ou TESOURA)");
let round = +prompt("Quantas rodadas será o jogo ??");
let a = 0;
let b = 0;
let c = 0;
let winnerPlayer = 0;
let winnerComputer = 0;
let tie  = 0;
let option = [];
let randon = [];

while( c  < round ){
    
    console.log("Escolha uma opção:\n");
    console.log("Opção 1 : PEDRA --- Opção 2 : PAPEL  --- Opção 3 : TESOURA\n");
    option [a] = option.push = +prompt(": ");

    if (option[a]>= 1 && option[a] <=3){
        
        randon[b] = parseInt(Math.floor(Math.random() * 3 +1 ));
        
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


console.clear();
console.log(`O JOGADOR teve ${winnerPlayer} vitoria(s)\n`);
console.log(`O COMPUTADOR teve ${winnerComputer} vitoria(s)\n`);
console.log(`Teve ${tie} empate(s)\n`);


    
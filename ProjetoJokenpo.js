//Projeto 2 (Jokenpô) - Renan Augusto de Carvalho


console.log("")

let resposta = [];
let a =0 ;
let b =0 ;
let contador = 0;
let perguntas =["Você pegou o escudo de osso do Orc da montanha?(s/n)","Você tirou a runa do olho do Drgão Colonus?(s/n)","Você pegou o chifre do Touro Assasino?(s/n)","Você pegou a pele do Golem Arterfil?(s/n)", "Você pegou o colar do Dragão negro da Floresta?(s/n)"]//array com todas as perguntas.

    do { // laço de repetição para realizar as perguntas existentes no array 'perguntas'.
  
        console.log("\nDigite S ou N para continuar !!!!!\n")
        resposta [a] = resposta.push = prompt(perguntas[b])// adiciona ao array 'name' a resposta de cada pergunta do array 'perguntas'.
        
             if (resposta[a] == 's'){
                 b ++    
                 a ++
                console.clear()
             }else if (resposta[a]=='n'){
                 b ++    
                 a ++
                console.clear()
            }
    
    }while(a<=4)

    for (let i = 0; i <= 5; i++) // laço para verificar quantas strings "s" existe na array 'resposta'.
        
    {
        if (resposta[i] == 's')
       {
           contador ++
       }
    }

// nesse ponto, ja se sabe quantos "s" existe no array 'resposta' e verifica qual caminho a história do Heroi encerrara.

if (contador == 0)
    {
      console.log("\nEle falhará miseravelmente!\n")
    }
     
else if (contador >=1 && contador <=2)
    {
      console.log("\nEle falhará, mas ainda consegue fugir da situação!\n")
    }    
             
else if (contador == 3)
    {
      console.log("\nEle chegará perto de conseguir alcançar seu objetivo, mas acaba falhando por pouco!\n")                   
    }
         
else if (contador == 4)
    {
      console.log("\nDepois de muito esforço ele conquista seu objetivo, embora não de maneira perfeita!\n")                   
    } 

else if (contador == 5)
    {
      console.log("\nEle triunfará de maneira inquestionável e seus feitos serão lembrados por muitas gerações!\n")                   
    } 

  // FIM DO CÓDIGO.
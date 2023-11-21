// 02-funcoes.js

// No terminal escreve node 02-funcoes.js(nome da pasta) e entre

/* Formas tradicionais  */

/* Sintaxe anônima associada à variavel/constate 
OBS: cuidado com a ordem, já que nesta sintaxe a função PRIMEIRO precisa ser declarada para somente DEPOIS ser chamada/executada */
const exemplo1 = function(){
    console.log("Função anônima!");
};

//fez a função e depois chama ela
exemplo1();


/* Sintaxe declarada/nomeada
OBS: nesta sintaxe, você pode chamar a função antes ou depois de declará-la. Portanto, a ordem não importa */
function exemplo2(){
    console.log("função nomeada!");
};
//Não precisa fazer depois de chamar a função pode chamar antes
exemplo2();


/* Exercícios
01) Crie uma função (qualquer sintaxe) que receba dois valores numérico, calcule a diferença entre eles e retorne o resultado. 

02) Chame está função duas vezes passando valores diferentes e guardando os resultados em variáveis de escopo global.

03) Mostre os valores processados pela funçao no terminal. */
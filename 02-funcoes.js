// 02-funcoes.js

// No terminal escreve node 02-funcoes.js(nome da pasta) e entre
//Limpando terminal cls e entre 

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

function exercicio(valor1, valor2){
    return valor1 - valor2;
};

let resultado1 = exercicio(15, 5);
let resultado2 = exercicio(20, 10);
let resultado3 = exercicio(10, 30);


console.log(resultado1);
console.log(resultado2);
//Garantindo que o resultado sejá absoluto (positivo)
console.log(Math.abs (resultado3)); // Fazendo o resultado ficar com o valor absoluto (vai tirar o sinal de negativo)



/* Sintaxe arrow function  */
const exemplo3 = () => {
    console.log("Arrow Function!")
};

//fez a função e depois chama ela
exemplo3();

// const saudacao = (cliente) => {
//     console.log("Olá " + cliente);
// };  Feito uma nova versão em baixo

// Omitir os parênteses do parâmetro (SOMENTE QUANDO FOR 1)
const saudacao = cliente => {
    console.log("Olá " + cliente);
}
saudacao("Aline");
saudacao("Fulano");

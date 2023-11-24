
import cursos from "./modulos/cursos.js";

/* Reduce (reduzir, redução) 
Passa por elementos de um array (usando uma função callback com parâmetro com valor inicial) e retorna um unico valor/resultado. Pode ser útil para operações matemática que geram um único resultado.*/

//Exemplo 1 com reduce
const valores = [10, 5, 50, 200, 1000];
const total = valores.reduce( (acumulador, valor) => {
    return acumulador + valor
}, 0 );
console.log(valores);
console.log(total);

// Sem reduce 
let acumuladora1 = 0;
for( let i = 0; i < valores.length; i++ ){
    //acumuladora1 = acumuladora1 + valores[i]; igual o de baixo 
    acumuladora1 += valores[i];

    //+= operador soma e atribui
};

console.log(acumuladora1);

// Sem reduce e com for/of
let acumuladora2 = 0;
for( let valor of valores ){
    //acumuladora2 = acumuladora2 + valor; igual o de baixo 
    acumuladora2 +=  valor;
};

console.log(acumuladora2);

console.log("------------------");



// const valores = [10, 5, 50, 200, 1000];
// const total = valores.reduce( (acumulador, valor) => {
//     return acumulador + valor
// }, 0 );
// console.log(valores);
// console.log(total);

/* Exercicio: faça a soma dos preços de todos os cursos  */

const preco = cursos.reduce( (acumulador, curso) => {
    return acumulador + curso.preco
}, 0 );

console.log(preco);


/* Desafio: faça a soma dos preços  dos cursos de front e back end */


const cursosDesafio1 = cursos
                               .filter(curso => curso.categoria == "Front-End" || curso.categoria == "Back-End" )
                               .reduce( (acumulador, curso) => {return acumulador + curso.preco }, 0 );  

console.log(cursosDesafio1);                         
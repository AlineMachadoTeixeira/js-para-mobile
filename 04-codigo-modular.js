// 04-codigo-modular

/* Podemos usar "alias/apelidos" com o comando "as" para evitar conflitos entre módulos de mesmo nome */
                     //alunos as reprovados --> dando Um apelido, pois tem modulos com dois nomes iguais alunos
import { pessoa, livro, alunos as reprovados} from "./modulos/dados.js";

import  alunos  from "./modulos/alunos.js";

console.log(reprovados); // usando o módulo alunos através de apelido

console.log(alunos); // usando o nome original do módulo

// import { 
//     converteMaiusculas, 
//     converteMinusculas,
//     formataMoeda
// } from "./modulos/funcoes.js";  ---> pode fazer igual o de baixo com o nome  minhasFuncoes

/* Importação das funções através de um apelido/alias */
import * as minhasFuncoes from "./modulos/funcoes.js";


//import pessoa from "./modulos/dados.js"; --> assim quando só tem um const no arquivo dados.js

console.log(pessoa);

console.log(livro);

console.log(pessoa.nome);

for (const prop in pessoa){
    console.log(pessoa[prop]);
}


//console.log(converteMaiusculas(reprovados[0])); substitui substitui para o minhasFuncoes
console.log(minhasFuncoes.converteMaiusculas(reprovados[0]));

//console.log(converteMinusculas(alunos[0])); substitui para o minhasFuncoes
console.log(minhasFuncoes.converteMinusculas(alunos[0]));

let preco1 = 1200.88;
let preco2 = 1000000.75;
let preco3 = 500.8452;

// console.log(formataMoeda(preco1));
// console.log(formataMoeda(preco2));
// console.log(formataMoeda(preco3)); substitui para o minhasFuncoes

console.log(minhasFuncoes.formataMoeda(preco1));
console.log(minhasFuncoes.formataMoeda(preco2));
console.log(minhasFuncoes.formataMoeda(preco3));

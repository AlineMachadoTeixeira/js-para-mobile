// 04-codigo-modular

/* Podemos usar "alias/apelidos" com o comando "as" para evitar conflitos entre módulos de mesmo nome */
                     //alunos as reprovados --> dando Um apelido, pois tem modulos com dois nomes iguais alunos
import { pessoa, livro, alunos as reprovados} from "./modulos/dados.js";

import  alunos  from "./modulos/alunos.js";

console.log(reprovados); // usando o módulo alunos através de apelido

console.log(alunos); // usando o nome original do módulo



//import pessoa from "./modulos/dados.js"; --> assim quando só tem um const no arquivo dados.js

console.log(pessoa);

console.log(livro);

console.log(pessoa.nome);

for (const prop in pessoa){
    console.log(pessoa[prop]);
}


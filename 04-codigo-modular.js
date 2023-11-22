// 04-codigo-modular

import { pessoa } from "./modulos/dados.js";

//import pessoa from "./modulos/dados.js"; --> assim quando só tem um const no arquivo dados.js

console.log(pessoa);

console.log(pessoa.nome);

for (const prop in pessoa){
    console.log(pessoa[prop]);
}
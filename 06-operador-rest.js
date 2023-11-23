/* ...rest operator 
Conceito
Usando o ... como "rest operator" podemos mesclar uma lista de parâmetros/argumentos para uma função. */

const cientistas = ["tesla","Einstein", "Newton", "Darwin"];
const artistas = ["Jon","Ozzy", "David", "Roger", "Floor", "Neil"];

// Arrow Function sem tirar os (), por causa do ...
const classificar = (...parametro) => {
     //sort deixa em ordem alfabetica
    return parametro.sort();
};
//Chamada da função com console.log
console.log( classificar(...cientistas) ); // spread(espalhar)//colocando o ... ele só apresenta o elemento
console.log( classificar(...artistas) ); // spread
/* Destructuring ou Desestruturação
Extrai os dados de arrays e objetos para variáveis/constantes individuais */

// Destructuring em arrays 
const alunas = ["Tanaka", "Zimbo", "Melissa"];
const [tanaka, zimbo, melissa] = alunas;

console.log(tanaka);
console.log(zimbo);
console.log(melissa);

console.log("----------------");

const unidades = ["Penha", "Tatuapé", "Itaquera", "São Miguel"];
                      //Pulando Itaquera 
const [penha, tatuape,  , smp] =unidades; // pulamos o Itaquera / smp São Miguel



console.log(penha);
console.log(tatuape);
console.log(smp);

console.log("----------------");


const [tesla, einstein, newton] = ["Tesla", "Einstein", "Newton"];

console.log(tesla);
console.log(einstein);
console.log(newton);


console.log("----------------");

//função dentro de um array 
// const recursos = [
//     ["Notebook", "TV Led", "Computador Desktop"],   
//     function(texto){
//         return texto.toUpperCase();
//     }
// ];


// o de cima com Arrow Function
const recursos = [
    ["Notebook", "TV Led", "Computador Desktop"],   
    texto =>  texto.toUpperCase()
    
];

console.log("----------------");

console.log(recursos); //Array completo

// Destructuring o de cima produtos é os note, tv e etc  converter é a função
const [produtos, converter] = recursos;

//Acessando através da constante que foi gerada pelo Destructuring
console.log(produtos[1]) // TV Lead


for(const produto of produtos){
    console.log("Produto: "+produto);
};

console.log( converter("tiago"));
console.log( converter("GelaDeira"));
console.log( converter(produtos[1]));
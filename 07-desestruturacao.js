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


console.log("----------------");

// Destructuring em objetos
const pessoa = {
    nome: "Andre",
    idade: 19,
    bairro: "Penha",
    situacao: "crítica"
};

const{ nome, idade, bairro, situacao} = pessoa; 

console.log(`O aluno ${nome} está em situação ${situacao} no curso.`);
console.log(`Mora na ${bairro} e mesmo assim sempre atrasa... :(`);

//Criando um apelido para a propriedade codigo --> codigo:pedido
const {codigo:pedido, cursos, preco} = {codigo:"123abc", cursos: ["figma", "Node.js"], preco:1000}

console.log(pedido); // pedido é um  apelido
console.log(cursos);
console.log(preco);



//Destructuring para o parâmetros de função

function exibirDados(objeto){
    console.log(`Filme: ${objeto.titulo} - Ano de lançamento: ${objeto.ano}`)
};

const filme1 = {
    titulo: "Vigadores",
    ano:2012
};

const filme2 = {
    titulo: "Barbie",
    ano:2023
};

exibirDados(filme1);
exibirDados(filme2);
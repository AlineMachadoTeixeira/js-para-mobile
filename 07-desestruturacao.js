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



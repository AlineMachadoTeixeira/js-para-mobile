/* ...spread -> espalhar 
Copiar elementos/dados de um array/objeto para dentro de outro array/objeto  usamos o ...maisNomeDaConstQueVoceDeu*/

// Spread com array
const bandas = ["Pink Floyd", "Rush", "Yes"];
const maisBandas = [...bandas, "Slayer", "Nightwish"];

console.log(bandas);
console.log(maisBandas);


// Spread com objetos
const cliente = {
    nome: "SEu Madruga",
    cidade: "São Paulo",
    idade: 55
};

const novosDados ={
    ...cliente, // copiando as propriedades do cliente para cá
    estado:"SP",
    pedido:"123xyz",
    total: 5000.88,
    idade:60 // Quando você colocar elementro com mesmo nome sobreescrever o valores da propriedade. idade de 55 passou para 60
};

console.log(novosDados);
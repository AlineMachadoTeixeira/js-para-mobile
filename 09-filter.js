/*  Filter (filtrar)
Passando elementos de um array(usando uma função callback) e retornar valores de acordo com uma ou mais condicões gerando um novo array.  */

//Exemplo 1
const vendas = [1500, 3000, 1000, 500, 750, 5000, 2000];
const meta = 1000;
//Gerando um array com valores que bateram a meta
const vendasAcimaDaMeta = vendas.filter( (venda) => {
    return venda >= meta
} );
console.log(vendas);
console.log(vendasAcimaDaMeta);
console.log("-----------------------------");

//Exemplo 2
const alunos = ["Nicolas", "Eleiel", "André", "Kaue", "Barbosa", "Aline", "Melissa", "Marina", "mônica", "Marcelo" ];
const resultados = alunos.filter( aluno => {
    //return aluno.startsWith("M") || aluno.startsWith("m")  // Começa letra "M" ou "m"
    return aluno.startsWith("M") && aluno.endsWith("o") // começa letra M e Termina letra o
});
console.log(alunos);
console.log(resultados);
console.log("-----------------------------");


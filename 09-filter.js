import cursos from "./modulos/cursos.js";

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
//simplificando com arrow function
const resultadosSimplificando = alunos.filter( aluno => aluno.startsWith("M") && aluno.endsWith("o") );

console.log(alunos);
console.log(resultados);
console.log(resultadosSimplificando);
console.log("-----------------------------");


/* FIltrando cursos  */

//Filtrando por cursos da categoria Design
const cursosDesign = cursos.filter(curso => curso.categoria == "Design");
console.log(cursos);
console.log(cursosDesign);


//Filtrando por cursos que NÃO SÃO da categoria Design
const cursosMenosDesign = cursos.filter(curso => curso.categoria != "Design");
console.log(cursosMenosDesign);
console.log("-----------------------------");


/* Exercicio gere um novo array com os cursos que atendam os seguintes critérios 
- Categorias Front-End e Mobile
- Preço acima de 600
Resultados esperados : JS e React, React Native  e Flutter */ 

//Versão 1
const cursosResultadosEsperados = cursos.filter(curso =>  curso.preco > 600 && curso.categoria == "Front-End" || curso.categoria == "Mobile"  );
console.log(cursosResultadosEsperados);

//Versão 2,
const cursosResultadosEsperados2 = cursos.filter(curso => (curso.categoria == "Front-End" || curso.categoria == "Mobile") && curso.preco > 600 );
console.log(cursosResultadosEsperados2);

/*  Desafio  com ENCADEAMENTO gere um novo array do somente com os titulos dos cursos Mobile. Só puxando cursos com titulos React Native e Flutter  */
const cursosDesafio1 = cursos
                               .filter(curso => curso.categoria == "Mobile")
                               .map( curso =>  curso.titulo);   

console.log(cursosDesafio1);

//Desafio  sem ENCADEAMENTO  gere um novo array do somente com os titulos dos cursos Mobile
const cursosDesafio2 = cursos.filter(curso => curso.categoria == "Mobile");
console.log(cursosDesafio2);

const desafio2Titulos =  cursosDesafio2.map(curso => curso.titulo);
console.log(desafio2Titulos);


// Desafio pegar titulo e preço só da categoria mobile 
const cursosDesafio3 = cursos
                            .map( 
                                curso => {
                                        return { 
                                            ...curso, 
                                            preco: curso.preco - curso.preco * 0.10 
                                        }
                                })
                            .filter(curso => curso.categoria == "Mobile")
                            .map(curso => ({
                                titulo: curso.titulo, 
                                preco: curso.preco
                            }));

console.log(cursosDesafio3);
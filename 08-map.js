import cursos from "./modulos/cursos.js";

/* map ( mapear, mapeia - transformar em outra coisa) 
Passa por elementos de um array e realiza operações em cada um deles através de uma função(callback), gerando um novo array. */

// Exemplo 1 
const numeros = [10, 20, 5, 12, 66, 50];
console.log(numeros); 
                                    //arrow function 
const numerosDobrados = numeros.map(numero => numero * 2); 
console.log(numerosDobrados); 

console.log("----------------------");

console.log(cursos);

// Exemplo 2: gerar um novo array apenas com os nomes dos cursos
const titulos = cursos.map( curso =>  curso.titulo );

console.log(titulos);


console.log("----------------------");
/* Exercicio 
Use o map para gerar um novo array Apenas com os preços calculados com um desconto de 10% 

como calcular 
opção 1: valor - valor * 0.10 
opção 2: valor *0.9 */

const precos = cursos.map( curso => curso.preco - curso.preco * 0.10); 
console.log(precos);   

//outra forma de fazer mais detalhada 
const black = cursos.map(
    curso => {
        let desconto = curso.preco * 0.10;
        let precoFinal = Math.abs(desconto - curso.preco);
        return ["Preço: R$"+curso.preco+",00", "Desconto: R$"+desconto+",00", "Preço com deconto: R$"+precoFinal+",00"]
    }
);

console.log(black);

console.log("----------------------");



/* DESAFIO do exercicio!
Gere um novo array de cursos contendo todos os dados anteriores e os preços novos com desconto. */
const cursosLista = cursos.map( curso =>  {    

    let desconto = curso.preco * 0.10;
    let precoFinal = Math.abs(desconto - curso.preco);

    return ["id: " + curso.id + ", titulo: " + curso.titulo + ", categoria: " +curso.categoria + "preço: " +precoFinal ];   
  
}
);
console.log(cursosLista);

console.log("----------------------");


//  DESAFIO outras versões 1º
const cursosBlackFriday = cursos.map( curso => {
    return {...curso, preco: curso.preco - curso.preco * 0.10}
});
console.log(cursosBlackFriday);


// 2º
const cursosBlackFriday1 = cursos.map(
    ({id, titulo, categoria, preco}) => {
        let desconto = preco * 0.10;
        let precoFinal = Math.abs(desconto - preco);
        return {id,titulo,categoria,preco: precoFinal}
    }
);
console.log(cursosBlackFriday1);

// 2º Simplificado com arrow function
/* Nesse envolver o código de return implícito com parê ntes */
const cursosBlackFriday1Simplificado = cursos.map( curso => 
    ({...curso, preco: curso.preco - curso.preco * 0.10}) 
);
console.log(cursosBlackFriday1Simplificado);

// 3º
const cursosBlackFriday2 = cursos.map(
    curso => {
        return{
            ...curso,
            preco: curso.preco * 0.9
        }
        
    }
);
console.log(cursosBlackFriday2);

// 4º
const cursosBlackFriday3 = cursos.map(curso => {
    let id = curso.id
    let titulo = curso.titulo
    let categoria = curso.categoria;
    let preco = curso.preco - curso.preco * 0.10
    return {
        id: id, titulo: titulo, categoria: categoria, preco: preco
    }
}
); 
console.log(cursosBlackFriday3);   


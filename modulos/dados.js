const pessoa = {
    nome: 'Jon Oliva',
    idade: 66,
    cidade:'São Paulo'
};


const livro ={
    titulo: "O Senhor dos Anéis ",
    volume: "As Duas Torres",
    ano: 1954
};

//Array
const alunos = ["Tanaka", "Victor", "Eliel", "Aline"]

/* Se for exportação  de somente UM recurso usamos  export default nomeDoRecurso*/
//export default pessoa; quando só tem uma const


/* Se for exportação de VÁRIOS recursos use somente export {entre chaves os recursos} tire o  default */
export  { pessoa, livro, alunos };


 //foi para o arquivo 04-modular
// 01-var-let-const.js

//ctrl ` abre o terminal   mude para cmd
//no terminal digite ->  node  01-var-let-const.js(nome da pasta) e entre. 
 

//var--> variavel   global (não tem limite. Pode ser acessado e excluido)
//var idade = 18;  //ESCOPO global
//if(idade => 18){
    //var mensagem = "É adulto"; //ESCOPO global
//}else {
    //var mensagem = "É manor"; //ESCOPO global
//}

//console.log(idade);
//console.log(mensagem);


//LET--> 
var idade = 18;  //ESCOPO global
if(idade => 18){
    //let mensagem = "É adulto"; //ESCOPO BLOCO
}else {
    //let mensagem = "É manor"; //ESCOPO BLOCO
}

console.log(idade);

/* Dará erro pois mensagem só existe dentro do bloco if/else */
//console.log(mensagem);

//const algo fixo não muda
const meuNome = "Aline";
console.log(meuNome);
 
//Reatribuição NÃO É possivel em constantes
//meuNome = "Aline Teixeira";
//console.log(meuNome);

// const escola = ""; precisa ser atribuida/declarada dar um nome/valor. Já o let não precisa. exemplo: let escola;
//E o nome/valor da const NÃO PODE SER modificado 
const escola = "Senac";





// 03-template-literal.js --> forma mais modernar de concatenação 

const nome = "Chapolin";
const sobrenome = "Colorado";
let idade = 25;
let cidade = "São Paulo";
let estado = "SP";

/* Concatenação tradicional usando operador + 
Meu nome é Chapolin Colorado, tenho 25 anos e moro atualmmente na cidade de São Paulo - SP */

                               //class='destaque' para usar class no js precisa ser aspas simples ou assim class=\"destaque\"
let mensagem1 = "Meu nome é <b class='destaque'>"+nome+"</b> "+sobrenome+", tenho "+idade+" anos e moro atualmente na cidade "+cidade+" - "+estado; 

console.log(mensagem1);

/* Templete Literal/String  usando crases */ 

//toUpperCase deixar letras maiuscula   
//${ idade >= 18 ? 'maior' : 'menor'} de idade`; o sinal é ?(se) :(ou) tipo o if(){}else(){}
let mensagem2 = `Meu nome é ${nome.toUpperCase()} ${sobrenome}, tenho ${idade} anos e moro atualmente na cidade ${cidade} - ${estado}. Sou ${ idade >= 18 ? 'maior' : 'menor'} de idade`;

console.log(mensagem2);


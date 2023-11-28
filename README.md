# JavaScrip para Mobile
 Revisão de recursos novos JS para Mobile

 ## Dica para o CMD 
- cls --> limpar pasta
- dir --> para achar pasta 
- cd --> acha arquivo um por um 
- node  espaço +nome da pasta --> ver o resultado que está na pasta com console.log
- cd.. volta algumas pastas ou uma pasta
- ctrl +C --> para o CMD qualquer comando que você fez 

 ## Principais tópicos de atenção e estudos 

 ### Variáveis e Constantes

 `let` e `const` possuem escopo de **BLOCO** quando declarado dentro de bloco (consicionais, loops), e escopo **GLOBAL** quando declarado fora de blocos.

 `var` possui escopo **Global** mesmo quando declarado dentro de blocos. Portanto, é acessivel em praticamente qualquer lugar dentro da aplicação.

 `const` obrigatoriamente precisa ser inicializada com algum valor/expressão, e este valor/expressão **não pode ser modificado**.

 ### Funções 

 Blocos de código reaproveitáveis que podem ser criados de pelo menos 3 formas:

 - Função nomeada/declarada
 - Função anônima 
 - Arrow Function

 Nas bibliotecas e fremeworks as sintaxes mais comuns são Arrow Function e Nomeada.

 **Obs.:** caso utilize as sintaxes anônima ou arrow, certifique-se **primeiro** declarar a função para só depois chama-la.


### Templete Literal/String

Forma mais moderna de manipular dados estáticos e dinâmicos, além de permitir de uma forma mais facil executar operações dentro de string/códigos. Lembre-se de usi das **crases** e bloco `${}` para execuções de código dinâmico (Variáveis, constantes, funções etc).


##### Criando package.json
Para fazer o que está na pasta modulos arquivo dados.js aparecer em outro arquivo no caso 04-codigo-modular.js
-crie a pasta e coloque o nome package.json
-na pasta escreve o que está no arquivo package.json "type": "module"


### Módulos 

São uma maneira de separar lógica/funcionalidade/dados em arquivos dedicados. Ao criar módulos é necessario utilizar os comandos `export` (no módulo a ser exportado) e `import` (no arquivo em que você quer usar o módulo).

Ao exportar apenas **um recurso**, utiliza-se `export default nomeDoRecurso`. Ao exportar **um ou mais** recursos, utiliza-se 
`export {recuso1, recuso2, recusoN}`. 

Ao importar apenas **um recurso**, utiliza-se `import nomeDoRecurso from "./local/nomeDoModulo"`. Ao importar **um ou mais** recursos, utiliza-se `import {recuso1, recuso2, recusoN} from "./local/nomeDoModulo"`.


### Operadores spread e rest ...

- ...spread (espalhar): usado para dividir elementos de um array ou propriedade de um objeto para outro array/objeto. Útil para gerar novas estruturas de dados a partir de estruturas existente.
- ...rest (coletar/extrair valores): usado para gerar uma lista de parâmetros para uma função a partir dos valores de um array. Útil para evitar a necessidade de criar parâmetros manualmente em uma função, ou para quando não sambemos quantos parâmetros serão necessários. 

### Destructuring (Desestruturação)

Técnica para extrair valores de arrays e objetos para novas variáveis/constantes. Usada para simplificar o acesso a estes dados, podendo ser aplicada também em parâmetros de funções. 

### Métodos para iteração em arrays: map, filter e reduce

São métodos que permitem realizar operações diversas em elementos de arrays. Funcionam como `loops` especiais, executando uma função conhecida como `callback` para cada elemento dentro do array.

#### map 

Percorre os elementos do array e executa algum tipo de transformação, gerando um novo array de dados.

#### filter 

Percorre os elementos do array realizando operações (soma, multiplicação, concatenação etc), gerando um único resultado. 



#### Passo a passo para o  arquivo 11
Entre no site ``{JSON} Placeholder``  https://jsonplaceholder.typicode.com/ pega  /todos	200  ou   /users	10 users  (usamos o users)  e copie o endereço do link usando o botão direito do mouse e colar no arquivo 11  const api_url = `https://jsonplaceholder.typicode.com/users`; 
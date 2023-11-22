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

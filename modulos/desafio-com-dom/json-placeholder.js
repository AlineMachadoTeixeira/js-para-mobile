const apiUrl = `https://jsonplaceholder.typicode.com/users`;

async function acessaAPI(){
    try {        
           const resposta = await fetch(apiUrl); //await significa aguardar e só usa com a função async
           
           if(!resposta.ok){
               throw new Error(`Erro na requisição: ${resposta.status} - ${resposta.statusText}`);
           }

           const dados = await resposta.json();
           console.log(dados);

    } catch (error) {
       console.error("Erro: " +error.message);        
    }

}
acessaAPI();
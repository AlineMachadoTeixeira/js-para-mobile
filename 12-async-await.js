/* Comunicação assíncrona (AJAX) para carregamento de dados usando fetch e a sintaxe async/await através de função(obrigatorio) */

const apiUrl = `https://jsonplaceholder.typicode.com/photos`;

//async/await é obrigatorio começa com função

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




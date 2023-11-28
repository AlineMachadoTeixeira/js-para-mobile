/* Comunicação assincrona (AJAX) para carregamento de dados usando fetch/then/catch */


// const apiUrl = `https://jsonplaceholder.typicode.com/users`; // pega tudo
const apiUrl = `https://jsonplaceholder.typicode.com/users/3`; //para pegar o usuario 3

function acessaAPI(){

    // Conecte/Acesse...
    fetch(apiUrl)

    //... e então capture a resposta do api no formato JSON 
    .then(resposta  => {

        /* Se a resposta da requisição não for bem-sucedida(por exemplo, se não houver registros, ou se der erro na próprio server [500]) */
        if(!resposta.ok){
            throw new Error(
                `Erro na requisição: ${resposta.status} - ${resposta.statusText}`
            )
        }

        return resposta.json();
    
    })

    //... e então capture os dados contidos na resposta 
    .then( dados => console.log(dados)) // vai puxar os dados do api que pegamos na linha 4

    // Em caso de erro (de rede, acesso, no json), capture o erro
    .catch(error => {
        console.error("Erro na operação: "+error.message)
    });

}

//chamando a função

acessaAPI();
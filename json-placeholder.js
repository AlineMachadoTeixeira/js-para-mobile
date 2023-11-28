
const apiUrl = `https://jsonplaceholder.typicode.com/users`;


async function acessaAPI() {
    try {
        const resposta = await fetch(apiUrl);

        if (!resposta.ok) {
            throw new Error(`Erro na requisição: ${resposta.status} - ${resposta.statusText}`);
        }

        // const dados = await resposta.json();
        // console.log(dados);

        let usuarios = await resposta.json();

        let tabela = document.querySelector("#usuario")
        tabela.innerHTML = `${usuarios.map(usuario => `<tr>
            <td > ${usuario.name} </td>
            <td >${usuario.email}</td>
            <td >${usuario.website}</td>
            </tr>`
        )}`
        // for(const usuario of usuarios){
        //     console.log(usuario.name);
        //     tabela.innerHTML = usuario.name
        // };

        // for(const usuario of usuarios){
        //     //console.log(usuario.email);
        // };

        // for(const usuario of usuarios){
        //    // console.log(usuario.website);
        // };        



    } catch (error) {
        console.error("Erro: " + error.message);
    }

}
acessaAPI();




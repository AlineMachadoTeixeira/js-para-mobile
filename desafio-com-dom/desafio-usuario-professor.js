const botao = document.querySelector("#carregar");
const divUsuarios = document.getElementById("lista-de-usuarios");

botao.addEventListener("click", async function(){
    try {
        const resposta = await fetch('https://jsonplaceholder.typicode.com/users');
        if(!resposta.ok){
            throw new Error(resposta.status);
        }
        const dados = await resposta.json();
        
        if(divUsuarios.innerHTML == ""){
            for(const usuario of dados){
                let secao = document.createElement("section");
                secao.innerHTML = `
                    <h2>${usuario.name}</h2>
                    <p>${usuario.email}</p>
                    <p>${usuario.website}</p>
                    <hr>
                `;
                divUsuarios.appendChild(secao);
            }
        }

    } catch (error) {
        console.error(error.message);
    }


    // COM MAP 
    // if(divUsuarios.innerHTML == ""){
    //     dados.map( usuario => {
    //         let secao = document.createElement("section");
    //         secao.innerHTML = `
    //             <h2>${usuario.name}</h2>
    //             <p>${usuario.email}</p>
    //             <p>${usuario.website}</p>
    //             <hr>
    //         `;
    //         divUsuarios.appendChild(secao);
    //     } );            
    // }


    // COM desestruturacao   e  filter 

    // if(divUsuarios.innerHTML == ""){
    //     dados
    //         .filter( usuario => usuario.name.startsWith("C") )
    //         .map( ({name, email, website}) => {
    //             let secao = document.createElement("section");
    //             secao.innerHTML = `
    //                 <h2>${name}</h2>
    //                 <p>${email}</p>
    //                 <p>${website}</p>
    //                 <hr>
    //             `;
    //             divUsuarios.appendChild(secao);
    //     } );            
    // }







});
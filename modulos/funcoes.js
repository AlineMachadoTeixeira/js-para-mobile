// modulos//funcões
                //recebe texto
function converteMaiusculas(texto){
    return texto.toUpperCase();
}

function converteMinusculas(texto){
    return texto.toLowerCase();
}
 
//Formata valor 1.200,00
function formataMoeda(valor){
    return valor.toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL"
    });
};

export { 
    converteMaiusculas, 
    converteMinusculas, 
    formataMoeda
 }

 //foi para o arquivo 04-modular
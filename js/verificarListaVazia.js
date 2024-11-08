// Seleciona o elemento HTML que mostra a mensagem "Lista Vazia"
const mensagemListaVazia = document.getElementById("mensagem-lista-vazia");

// Exporta a função para verificar se a lista de compras está vazia
export function verificarListaVazia(lista) {
    // Exibe no console o conteúdo da lista para fins de depuração
    console.log(lista);

    // Verifica se não há elementos <li> (itens) na lista
    if (lista.querySelectorAll("li").length === 0) {
        // Se a lista estiver vazia, exibe a mensagem "Lista Vazia"
        mensagemListaVazia.style.display = "block";
    } else {
        // Se a lista tiver itens, oculta a mensagem
        mensagemListaVazia.style.display = "none";
    }
}

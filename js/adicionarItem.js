// Importa as funções de outros módulos para adicionar e verificar itens na lista
import { criarItemDaLista } from "./criarItemDaLista.js";  // Função que cria o elemento visual de um item na lista
import { verificarListaVazia } from "./verificarListaVazia.js";  // Função que verifica se a lista de compras está vazia

// Seleciona o campo de input onde o usuário insere o nome do item
const item = document.getElementById("input-item");

// Seleciona o elemento HTML da lista de compras onde os itens serão adicionados
const listaDeCompras = document.getElementById("lista-de-compras");

// Função para adicionar um item à lista de compras
export function adicionarItem(evento) {
    evento.preventDefault();  // Evita o comportamento padrão do formulário (recarregar a página)

    // Verifica se o campo de input está vazio
    if (item.value === "") {
        alert("Por favor, insira um item!");  // Exibe um alerta se o campo estiver vazio
        return;  // Sai da função para não adicionar um item vazio
    }

    // Cria o elemento de item da lista usando a função importar e o valor do input
    const itemDaLista = criarItemDaLista(item.value);
    
    // Adiciona o novo item como um filho da lista de compras no HTML
    listaDeCompras.appendChild(itemDaLista);
    
    // Verifica se a lista de compras está vazia e atualiza seu estado
    verificarListaVazia(listaDeCompras);

    // Limpa o campo de input para que o usuário possa inserir um novo item
    item.value = "";
}

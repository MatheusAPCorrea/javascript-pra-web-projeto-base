// Importa a função `adicionarItem` do módulo que lida com a adição de itens à lista
import { adicionarItem } from "./js/adicionarItem.js";

// Importa a função `verificarListaComprados`, que verifica e atualiza a lista de itens comprados
import { verificarListaComprados } from "./js/verificarListaComprados.js";

// Seleciona o botão de adicionar item no HTML
const botaoSalvarItem = document.getElementById("adicionar-item");

// Adiciona um evento de clique ao botão de salvar item, para que execute a função `adicionarItem` ao ser clicado
botaoSalvarItem.addEventListener("click", adicionarItem);

// Seleciona o elemento da lista de itens comprados no HTML
const listaComprados = document.getElementById("lista-comprados");

// Executa a função `verificarListaComprados`, passando a lista de itens comprados
verificarListaComprados(listaComprados);

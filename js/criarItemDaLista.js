// Importa funções de outros módulos para funcionalidades específicas
import { editarItem } from "./editarItem.js";  // Função para editar o item na lista
import { excluirItem } from "./excluirItem.js";  // Função para excluir o item da lista
import { gerarDiaDaSemana } from "./gerarDiaDaSemana.js";  // Função para gerar a data em formato de dia da semana
import { verificarListaComprados } from "./verificarListaComprados.js";  // Função para verificar a lista de itens comprados

// Seleciona os elementos HTML das listas de compras e comprados
const listaDeCompras = document.getElementById("lista-de-compras");
const listaComprados = document.getElementById("lista-comprados");

// Inicializa o contador para gerar IDs únicos para os checkboxes
let contador = 0;

// Função para criar um item da lista, exportada para ser usada em outros módulos
export function criarItemDaLista(item) {
    // Cria elementos para estruturar o item
    const itemDaLista = document.createElement("li");  // Elemento da lista principal
    const containerItemLista = document.createElement("div");  // Container para o conteúdo do item
    containerItemLista.classList.add("lista-item-container");  // Adiciona uma classe para estilização

    // Container para o nome do item e o checkbox
    const containerNomeDoItem = document.createElement("div");

    // Cria o container e o input do checkbox para marcar o item como comprado
    const containerCheckbox = document.createElement("div");
    containerCheckbox.classList.add("container-checkbox");  // Classe de estilização para o checkbox

    const checkboxInput = document.createElement("input");
    checkboxInput.type = "checkbox";  // Define o tipo do input como checkbox
    checkboxInput.classList.add("input-checkbox");
    checkboxInput.id = "checkbox-" + contador++;  // ID único para cada checkbox

    // Cria o rótulo (label) para o checkbox e define sua associação com o ID
    const checkboxLabel = document.createElement("label");
    checkboxLabel.setAttribute("for", checkboxInput.id);  // Associa o label ao checkbox pelo ID

    // Evento de clique no rótulo do checkbox para alterar a posição do item na lista
    checkboxLabel.addEventListener("click", function (evento) {
        const checkboxInput = evento.currentTarget.querySelector(".input-checkbox");
        const checkboxCustomizado = evento.currentTarget.querySelector(".checkbox-customizado");
        const itemTitulo = evento.currentTarget.closest("li").querySelector("#item-titulo");
        
        // Verifica se o checkbox está marcado e altera a aparência e a lista do item
        if (checkboxInput.checked) {
            checkboxCustomizado.classList.add("checked");  // Adiciona estilo "checked"
            itemTitulo.style.textDecoration = "line-through";  // Riscado para indicar comprado
            listaComprados.appendChild(itemDaLista);  // Move para lista de comprados
        } else {
            checkboxCustomizado.classList.remove("checked");  // Remove estilo "checked"
            itemTitulo.style.textDecoration = "none";  // Remove o riscado
            listaDeCompras.appendChild(itemDaLista);  // Move para lista de compras
        }

        // Chama a função para verificar a lista de comprados e executar alguma lógica específica
        verificarListaComprados(listaComprados);
    });

    // Cria o checkbox customizado e o anexa ao rótulo do checkbox
    const checkboxCustomizado = document.createElement("div");
    checkboxCustomizado.classList.add("checkbox-customizado");

    checkboxLabel.appendChild(checkboxInput);
    checkboxLabel.appendChild(checkboxCustomizado);

    // Adiciona o rótulo do checkbox ao container e o container ao nome do item
    containerCheckbox.appendChild(checkboxLabel);
    containerNomeDoItem.appendChild(containerCheckbox);

    // Cria um elemento para o nome do item e define o texto a partir do parâmetro "item"
    const nomeDoItem = document.createElement("p");
    nomeDoItem.id = "item-titulo";
    nomeDoItem.innerText = item;
    containerNomeDoItem.appendChild(nomeDoItem);

    // Cria um container para os botões de remover e editar o item
    const containerBotoes = document.createElement("div");

    // Cria o botão de remover com uma imagem e associa a função "excluirItem"
    const botaoRemover = document.createElement("button");
    botaoRemover.classList.add("item-lista-button");

    const imagemRemover = document.createElement("img");
    imagemRemover.src = "img/delete.svg";  // Define a imagem para o botão
    imagemRemover.alt = "Remover";  // Texto alternativo para acessibilidade

    // Evento de clique para excluir o item usando a função "excluirItem"
    botaoRemover.addEventListener("click", function () {
        excluirItem(itemDaLista);  // Exclui o item da lista
    });

    botaoRemover.appendChild(imagemRemover);
    containerBotoes.appendChild(botaoRemover);

    // Cria o botão de editar com uma imagem e associa a função "editarItem"
    const botaoEditar = document.createElement("button");
    botaoEditar.classList.add("item-lista-button");

    const imagemEditar = document.createElement("img");
    imagemEditar.src = "img/edit.svg";  // Define a imagem para o botão
    imagemEditar.alt = "Editar";  // Texto alternativo para acessibilidade

    // Evento de clique para editar o item usando a função "editarItem"
    botaoEditar.addEventListener("click", function () {
        editarItem(itemDaLista);  // Edita o item da lista
    });

    botaoEditar.appendChild(imagemEditar);
    containerBotoes.appendChild(botaoEditar);

    // Adiciona o nome do item e os botões ao container principal do item
    containerItemLista.appendChild(containerNomeDoItem);
    containerItemLista.appendChild(containerBotoes);

    // Cria um elemento para exibir a data e adiciona a data formatada
    const itemData = document.createElement("p");
    itemData.innerText = gerarDiaDaSemana();  // Gera a data usando a função importar
    itemData.classList.add("texto-data");

    // Adiciona o container do item e a data ao elemento da lista
    itemDaLista.appendChild(containerItemLista);
    itemDaLista.appendChild(itemData);

    // Retorna o elemento completo do item da lista
    return itemDaLista;
}

// _______________________LISTA DE PRODUTOS_______________________


const produtos = [
  {
    id: "fc-1888",
    nome: "Capacitor de fluxo",
    classificacaomedia: 4.5
  },
  {
    id: "fc-2050",
    nome: "Fios elétricos",
    classificacaomedia: 4.7
  },
  {
    id: "fs-1987",
    nome: "Circuitos de tempo",
    classificacaomedia: 3.5
  },
  {
    id: "ac-2000",
    nome: "Reator de baixa tensão",
    classificacaomedia: 3.9
  },
  {
    id: "jj-1969",
    nome: "Equalizador de distorção",
    classificacaomedia: 5.0
  }
];

// _______________________HEADER_______________________

const cabecalho = document.querySelector("#cabecalho");
const titulo = document.createElement("h1");
titulo.textContent = "Avaliação do Produto";
cabecalho.appendChild(titulo);

// _______________________MAIN_______________________


//  _________FUNÇÃO DE SELEÇÃO DE PRODUTOS___________

function mostrarProdutos(produtos) {

    const fieldset = document.querySelector(".produtos");

    const select = document.createElement("select");
    select.name = "produto";
    select.id = "produto";
    select.required = true;

    const opcaoVazia = document.createElement("option");
    opcaoVazia.value = "";
    opcaoVazia.textContent = "Escolha um produto...";
    opcaoVazia.selected = true;
    opcaoVazia.disabled = true;

    select.appendChild(opcaoVazia);

    produtos.forEach(produto => {

        const opcao = document.createElement("option");

        opcao.value = produto.id;
        opcao.textContent =
            `${produto.nome} ⭐ Classificação: ${produto.classificacaomedia}`;

        select.appendChild(opcao);

    });

    fieldset.appendChild(select);

}

mostrarProdutos(produtos);

// _______________________FOOTER_______________________

const ano = document.querySelector("#anoatual");
const ultima_modificacao = document.querySelector("#ultimaModificacao")

const hoje = new Date();

ano.textContent = hoje.getFullYear();
ultima_modificacao.textContent = `Última modificação ${document.lastModified}`

// _______________________CONTADOR PÁGINA AVALIACAO.HTML_______________________


const contagem = document.querySelector("#contador");
const texto = document.createElement("p");

let contador = Number(localStorage.getItem("avaliacoes")) || 0;

contador++;

localStorage.setItem("avaliacoes", contador);

texto.textContent = `Você fez ${contador} avaliações!`;

contagem.appendChild(texto);


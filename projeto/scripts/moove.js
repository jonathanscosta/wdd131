
const galeria = [{ nome: "Cozinha 01", url: "imagens/cozinha01.webp" },
{ nome: "Suite01", url: "imagens/suite01.webp" }, { nome: "Sala 01", url: "imagens/sala01.webp" }
];


const menuBotao = document.querySelector("#menuBotao");
const menu = document.querySelector("#menu")

menuBotao.addEventListener('click', () => {
    menu.classList.toggle("abrir");
    menuBotao.classList.toggle("aberto")
});

function criarCard() {
    const card = document.querySelector(".card");
    galeria.forEach(cards => {


        const titulo = document.createElement("h2");
        const img = document.createElement("img");
        const a = document.createElement("a")
        titulo.textContent = cards.nome;
        a.href = "ambientesPlanejados.html"
        img.src = cards.url;
        img.alt = cards.nome;
        img.loading = "lazy"

        a.appendChild(titulo);
        a.appendChild(img);
        card.appendChild(a);


    });
}

criarCard(galeria);
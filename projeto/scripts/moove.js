
const galeria = [{
    nome: "Ambientes Planejados" ,
    url: ["imagens/cozinha01.webp", "imagens/cozinha02.webp", "imagens/cozinha03.webp","imagens/suite01.webp", "imagens/suite02.webp", "imagens/suite03.webp","imagens/sala01.webp", "imagens/sala02.webp", "imagens/sala-hero2.webp"]
}
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
        img.src = cards.url[0];
        img.alt = cards.nome;
        img.loading = "lazy"

        a.appendChild(titulo);
        a.appendChild(img);
        card.appendChild(a);

        animacao(img, cards.url)

    });
}

function animacao(imagem, listaImagem) {

    let indice = 0;

    setInterval(() => {
        indice++;

        if (indice >= listaImagem.length) {
            indice = 0;
        }
        
        imagem.style.opacity = 0;

        setTimeout(() => {
    
            imagem.src = listaImagem[indice];
        
            imagem.style.opacity = 1;
        }, 3000)
    }, 5000)

}


criarCard(galeria);
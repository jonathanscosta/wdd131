

const galeria = [{ nome: "Cozinha 01", url: "imagens/cozinha01.webp", preco: "R$ 20.000,00" }, { nome: "Cozinha 02", url: "imagens/cozinha02.webp", preco: "R$ 25.000,00" }, { nome: "Cozinhas 03", url: "imagens/cozinha03.webp", preco: "R$ 31.000,00" },


{ nome: "Sala 01", url: "imagens/sala-hero2.webp", preco: "R$ 40.000,00" }, { nome: "Sala 02", url: "imagens/sala01.webp", preco: "R$ 18.000,00" }, { nome: "Sala 03", url: "imagens/sala02.webp", preco: "R$ 15.000,00" },

{ nome: "Suite 01", url: "imagens/suite01.webp", preco: "R$ 20.000,00" }, { nome: "Suite 02", url: "imagens/suite02.webp", preco: "R$ 32.000,00" }, { nome: "Suite 03", url: "imagens/suite03.webp", preco: "R$ 12.000,00" }]

const botaoMenu = document.querySelector("#botaoMenu");
const menu = document.querySelector("#menu");

botaoMenu.addEventListener('click', () => {
    menu.classList.toggle("active");

    if (menu.classList.contains("active")) {
        botaoMenu.textContent = "✕"
        botaoMenu.setAttribute("aria-label", "fechar menu");
    }
    else {
        botaoMenu.textContent = "≡";
        botaoMenu.setAttribute("aria-label", "abrir menu")
    }
})




function criarCard(array) {
    const container = document.querySelector(".container");
    container.innerHTML = ""
    const titulo = document.createElement("h1");
    titulo.textContent = "Ambientes Planejados";
    container.appendChild(titulo);

    galeria.forEach(ambientes=>{

    const card = document.createElement("section");
    const titulo2 = document.createElement("h2");
    const img = document.createElement("img");
    const preco = document.createElement("p")
    const botao = document.createElement("button")

    titulo2.textContent = ambientes.nome
    img.src = ambientes.url;
    img.alt = ambientes.nome;
    img.loading = "lazy"
    preco.innerHTML = `<strong>${ambientes.preco}</strong>`;
    botao.textContent = "Adicionar aos Favoritos"
    
    
    card.appendChild(titulo2);
    card.appendChild(img);
    card.appendChild(preco);
    card.appendChild(botao)
    
    container.append(card);
    })
    
}

criarCard(galeria);

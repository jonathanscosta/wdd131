

const galeria = [{ nome: "Cozinhas Planejadas", url: ["imagens/cozinha01.webp", "imagens/cozinha02.webp", "imagens/cozinha03.webp"] },

{nome: "Salas Planejadas", url: ["imagens/sala-hero2.webp", "imagens/sala01.webp", "imagens/sala02.webp"]},

{nome: "Suites Planejadas", url: ["imagens/suite01.webp", "imagens/suite02.webp", "imagens/suite03.webp"]}]


const depoimentos= [
    {   url: "imagens/perfil01.webp",
        nome: "Mariana Silva",
        avaliacao: 5,
        comentario: "Excelente atendimento e os móveis ficaram exatamente como imaginávamos!"
    },
    {   
        url: "imagens/perfil02.webp",
        nome: "Carlos Oliveira",
        avaliacao: 3,
        comentario: "A qualidade dos móveis superou nossas expectativas. Recomendo muito!"
    },
    {   
        url: "imagens/perfil05.webp",
        nome: "Fernanda Costa",
        avaliacao: 4,
        comentario: "Ficamos muito satisfeitos com o resultado e com o atendimento da equipe."
    },
    {   
        url: "imagens/perfil03.webp",
        nome: "Rafael Santos",
        avaliacao: 5,
        comentario: "Projeto muito bem feito e a montagem foi rápida e cuidadosa."
    },
    {   
        url: "imagens/perfil04.webp",
        nome: "Gustavo Moura",
        avaliacao: 5,
        comentario: "incrivel amei."
    }
];


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

function criarCard() {
    const card = document.querySelector(".card");


    galeria.forEach((ambiente) => {
        const section = document.createElement('section');
        const titulo = document.createElement('h2')
        const img = document.createElement('img')
        const a = document.createElement("a")



        titulo.textContent = ambiente.nome;
        a.href = "ambientesPlanejados.html"
        img.src = ambiente.url[0];
        img.alt = ambiente.nome;
        img.loading = "lazy"


        a.appendChild(img);
        section.appendChild(titulo);
        section.appendChild(a);
        card.appendChild(section);

        animacao(img, ambiente.url)
    })
}


function animacao(imagem, imagens) {

    let indice = 0;

    setInterval(() => {
        imagem.style.opacity = "0";

        setTimeout(()=>{
        indice++

        if (indice >= imagens.length) {
            indice = 0;
        }
        
        imagem.src = imagens[indice];
        imagem.style.opacity = "1";
        },1000);

    }, 3000);
}

criarCard()

function criarDepoimentos() {

    const carrossel = document.querySelector(".carrosselDepoimentos");

    depoimentos.forEach((cliente) => {

        const article = document.createElement("article");
        const nome = document.createElement("h3");
        const img = document.createElement("img")
        const estrelas = document.createElement("div");
        const comentario = document.createElement("p");

        article.classList.add("depoimento");

        nome.textContent = cliente.nome;

        img.src = cliente.url
        img.alt = cliente.nome

        estrelas.textContent = "⭐".repeat(cliente.avaliacao);

        comentario.textContent = `"${cliente.comentario}"`;

        article.appendChild(img)
        article.appendChild(nome);
        article.appendChild(estrelas);
        article.appendChild(comentario);

        carrossel.appendChild(article);
    });
}

criarDepoimentos();


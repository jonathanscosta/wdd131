


const galeria = [

    {
        nome: "Cozinha 01",
        url: "imagens/cozinha01.webp",
        preco: "R$ 20.000,00",
        favorito: false
    },

    {
        nome: "Cozinha 02",
        url: "imagens/cozinha02.webp",
        preco: "R$ 25.000,00",
        favorito: false
    },

    {
        nome: "Cozinha 03",
        url: "imagens/cozinha03.webp",
        preco: "R$ 31.000,00",
        favorito: false
    },

    {
        nome: "Sala 01",
        url: "imagens/sala-hero2.webp",
        preco: "R$ 40.000,00",
        favorito: false
    },

    {
        nome: "Sala 02",
        url: "imagens/sala01.webp",
        preco: "R$ 18.000,00",
        favorito: false
    },

    {
        nome: "Sala 03",
        url: "imagens/sala02.webp",
        preco: "R$ 15.000,00",
        favorito: false
    },

    {
        nome: "Suite 01",
        url: "imagens/suite01.webp",
        preco: "R$ 20.000,00",
        favorito: false
    },

    {
        nome: "Suite 02",
        url: "imagens/suite02.webp",
        preco: "R$ 32.000,00",
        favorito: false
    },

    {
        nome: "Suite 03",
        url: "imagens/suite03.webp",
        preco: "R$ 12.000,00",
        favorito: false
    }

];




const favoritosSalvos =
    JSON.parse(localStorage.getItem("favoritosMoove")) || [];




galeria.forEach(ambiente => {

    if (favoritosSalvos.includes(ambiente.nome)) {

        ambiente.favorito = true;

    }

});




const botaoMenu = document.querySelector("#botaoMenu");

const menu = document.querySelector("#menu");

const linkFavoritos = document.querySelector("#linkFavoritos");

const linkVoltar = document.querySelector("#linkVoltar");


botaoMenu.addEventListener("click", () => {

    menu.classList.toggle("active");


    if (menu.classList.contains("active")) {

        botaoMenu.textContent = "✕";

        botaoMenu.setAttribute(
            "aria-label",
            "fechar menu"
        );

    }

    else {

        botaoMenu.textContent = "≡";

        botaoMenu.setAttribute(
            "aria-label",
            "abrir menu"
        );

    }

});




function criarCard(array) {

    const container =
        document.querySelector(".container");


    container.innerHTML = "";


    const titulo =
        document.createElement("h1");

    titulo.textContent =
        "Ambientes Planejados";


    container.appendChild(titulo);


    array.forEach(ambiente => {

        const card =
            document.createElement("section");

        const titulo2 =
            document.createElement("h2");

        const img =
            document.createElement("img");

        const preco =
            document.createElement("p");

        const botao =
            document.createElement("button");


        titulo2.textContent =
            ambiente.nome;


        img.src =
            ambiente.url;

        img.alt =
            ambiente.nome;

        img.loading =
            "lazy";


        preco.innerHTML =
            `<strong>${ambiente.preco}</strong>`;


        

        if (ambiente.favorito) {

            botao.textContent =
                "Remover dos Favoritos";

        }

        else {

            botao.textContent =
                "Adicionar aos Favoritos";

        }


       

        botao.addEventListener("click", () => {



            ambiente.favorito =
                !ambiente.favorito;


          

            const favoritos =
                galeria

                    .filter(
                        ambiente =>
                            ambiente.favorito
                    )

                    .map(
                        ambiente =>
                            ambiente.nome
                    );


            localStorage.setItem(
                "favoritosMoove",
                JSON.stringify(favoritos)
            );


         

            criarCard(

                array === galeria

                    ? galeria

                    : galeria.filter(
                        ambiente =>
                            ambiente.favorito
                    )

            );

        });


        card.appendChild(titulo2);

        card.appendChild(img);

        card.appendChild(preco);

        card.appendChild(botao);


        container.appendChild(card);

    });

}




linkFavoritos.addEventListener(
    "click",
    event => {

        event.preventDefault();


        const favoritos =
            galeria.filter(
                ambiente =>
                    ambiente.favorito
            );


        criarCard(favoritos);


        menu.classList.remove("active");


        botaoMenu.textContent =
            "≡";


        botaoMenu.setAttribute(
            "aria-label",
            "abrir menu"
        );

    }
);



linkVoltar.addEventListener(
    "click",
    event => {

        event.preventDefault();


        criarCard(galeria);


        menu.classList.remove("active");


        botaoMenu.textContent =
            "≡";


        botaoMenu.setAttribute(
            "aria-label",
            "abrir menu"
        );

    }
);




criarCard(galeria);
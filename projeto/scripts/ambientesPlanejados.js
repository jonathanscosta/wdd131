

const galeria = [{ nome: "Cozinhas Planejadas", url: ["imagens/cozinha01.webp", "imagens/cozinha02.webp", "imagens/cozinha03.webp"] },

{nome: "Salas Planejadas", url: ["imagens/sala-hero2.webp", "imagens/sala01.webp", "imagens/sala02.webp"]},

{nome: "Suites Planejadas", url: ["imagens/suite01.webp", "imagens/suite02.webp", "imagens/suite03.webp"]}]

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

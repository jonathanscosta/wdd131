
// header

const menuBtn = document.querySelector("#menu-btn");
const header = document.querySelector("header");


menuBtn.addEventListener('click', () => {

    header.classList.toggle("open");
});




// footer

const ano = document.querySelector("#anoatual");
const ultima_modificacao = document.querySelector("#ultimaModificacao")

const hoje = new Date();

ano.textContent = hoje.getFullYear();
ultima_modificacao.textContent = `Última modificação ${document.lastModified}`

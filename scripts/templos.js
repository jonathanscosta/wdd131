
const menuBotao = document.querySelector("#botao-menu");
const menuNavegacao = document.querySelector(".menu");


menuBotao.addEventListener("click", ()=>{
    menuBotao.classList.toggle("open");
    menuNavegacao.classList.toggle("open");
})






// footer

const ano = document.querySelector("#anoatual");
const ultima_modificacao = document.querySelector("#ultimaModificacao")

const hoje = new Date();

ano.textContent = hoje.getFullYear();
ultima_modificacao.textContent = `Última modificação ${document.lastModified}`

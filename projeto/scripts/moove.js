const menuBotao = document.querySelector("#menuBotao");
const menu = document.querySelector("#menu")

menuBotao.addEventListener('click',() => {
    menu.classList.toggle("abrir");
    menuBotao.classList.toggle("aberto")
});
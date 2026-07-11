const ano = document.querySelector("#anoatual");
const ultima_modificacao = document.querySelector("#ultimaModificacao")

const hoje = new Date();

ano.textContent = hoje.getFullYear();
ultima_modificacao.textContent = `Última modificação ${document.lastModified}`
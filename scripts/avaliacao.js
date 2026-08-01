const contagem = document.querySelector("#contador");

const texto = document.createElement("p");

let contador = Number(localStorage.getItem("avaliacoes")) || 0;

contador++;

localStorage.setItem("avaliacoes", contador);

texto.textContent = `Você fez ${contador} avaliações!`;

contagem.appendChild(texto);
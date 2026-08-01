const contagem = document.querySelector("#contador");

const texto = document.createElement("p");
texto.innerHTML=""

let contador = Number(localStorage.getItem("avaliacoes")) || 0;

if(contador === 0){
contador+=1
}
else if(contador > 0){
    contador++
}
localStorage.setItem("avaliacoes", contador);

texto.textContent = `Você fez ${contador} avaliações!`;

contagem.appendChild(texto);
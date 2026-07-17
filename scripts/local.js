

// DOM: section dados
const dados = document.querySelector(".dados");
const titulo = document.createElement("h2");
const infoDados = [["Área", "46.074 Km²"],["População", "4.1 milhões"],["Capital", "Vitória"],["Idioma", "português"]]

titulo.textContent = "Dados";
dados.appendChild(titulo);

infoDados.forEach(item=>{

    const p = document.createElement("p")
    p.innerHTML = `<strong>${item[0]}:</strong> ${item[1]}`

    dados.appendChild(p);
});


// Dom: section clima
const clima = document.querySelector(".clima")
const temperatura = 26;
const vento = 18;

function calcularSensacaoTermica(temperatura,vento){
    const sensacao = temperatura + (vento*0.2)
    return sensacao
}
const sensacaoTermica = calcularSensacaoTermica(temperatura,vento);

const infoClima = [["Temperatura", `${temperatura} °C`],["Condições", "Parcialmente Nublado"], ["Vento", `${vento} Km/h`], ["Sensação Térmica",`${sensacaoTermica}`]]


infoClima.forEach(item=>{

    const p = document.createElement("p")
    p.innerHTML = `<strong>${item[0]}:</strong> ${item[1]}`

    clima.appendChild(p);
});




// footer
const ano = document.querySelector("#anoatual");
const ultima_modificacao = document.querySelector("#ultimaModificacao")

const hoje = new Date();

ano.textContent = hoje.getFullYear();
ultima_modificacao.textContent = `Última modificação ${document.lastModified}`
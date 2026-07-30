
// ______________header______________

const menuBtn = document.querySelector("#menu-btn");
const header = document.querySelector("header");


menuBtn.addEventListener('click', () => {

    header.classList.toggle("open");
});

// ______________main______________
const dataDeCorte = new Date('1900-12-31');
const dataDeCorte2 = new Date('2000-01-01');
const areapequeno = 10000;
const areagrande = 90000;

const templos = [
    {
        nomeDoTemplo: "Aba Nigeria",
        localizacao: "Aba, Nigéria",
        consagracao: "2005-08-07",
        area: 11500,
        urlDaImagem:
            "imagens/aba-templo.jpg"
    },
    {
        nomeDoTemplo: "Manti Utah",
        localizacao: "Manti, Utah, Estados Unidos",
        consagracao: "1888-05-21",
        area: 74792,
        urlDaImagem:
            "imagens/manti-templo.jpg"
    },
    {
        nomeDoTemplo: "Payson Utah",
        localizacao: "Payson, Utah, Estados Unidos",
        consagracao: "2015-06-07",
        area: 96630,
        urlDaImagem:
            "imagens/payson-templo.jpg"
    },
    {
        nomeDoTemplo: "Yigo Guam",
        localizacao: "Yigo, Guam",
        consagracao: "2020-05-02",
        area: 6861,
        urlDaImagem:
            "imagens/ygo-templo.jpg"
    },
    {
        nomeDoTemplo: "Washington D.C.",
        localizacao: "Kensington, Maryland, Estados Unidos",
        consagracao: "1974-11-19",
        area: 156558,
        urlDaImagem:
           "imagens/washington-templo.jpeg"
    },
    {
        nomeDoTemplo: "Lima Peru",
        localizacao: "Lima, Peru",
        consagracao: "1986-01-10",
        area: 9600,
        urlDaImagem:
            "imagens/peru-templo.jpg"
    },
    {
        nomeDoTemplo: "Cidade do México, México",
        localizacao: "Cidade do México, México",
        consagracao: "1983-12-02",
        area: 116642,
        urlDaImagem:
            "imagens/mexico-templo.jpg"
    },
    {
        nomeDoTemplo: "Fortaleza, Brazil",
        localizacao: "Fortaleza - CE, Brazil",
        consagracao: "2019-06-02",
        area: 36000,
        urlDaImagem:
            "imagens/fortaleza-templo.jpg"
    },
    {
        nomeDoTemplo: "Recife, Brazil",
        localizacao: "Recife - PE, Brazil",
        consagracao: "2000-12-15",
        area: 37200,
        urlDaImagem:
            "imagens/recife-templo.jpg"
    },
    {
        nomeDoTemplo: "São Paulo, Brazil",
        localizacao: "São Paulo, Brazil",
        consagracao: "1978-11-02",
        area: 59246,
        urlDaImagem: "imagens/saopaulo-templo.jpg"
    },


];

function filtrar (seletor,funcaoDeFiltro){
    const elemento = document.querySelector(seletor);
    elemento.addEventListener('click',()=>{
    criarCard(templos.filter(funcaoDeFiltro));
    });

}
filtrar('#inicial',()=> templos);
    filtrar('#antigo',templo => new Date(templo.consagracao)<=dataDeCorte);
    filtrar('#novo',templo => new Date(templo.consagracao)>=dataDeCorte2);
    filtrar('#grande',templo => templo.area >= areagrande);
    filtrar('#pequeno',templo => templo.area <= areapequeno);





criarCard(templos);

function criarCard(templos) {
    const album = document.querySelector(".album");
    album.innerHTML = '';

    templos.forEach(templo => {
        const card = document.createElement('section');
        card.classList.add("card")

        const info = document.createElement('div')
        info.classList.add('info')

        const nomeDoTemplo = document.createElement('h2');
        const localizacao = document.createElement('p')
        const consagracao = document.createElement('p')
        const area = document.createElement('p')
        const img = document.createElement('img')

        nomeDoTemplo.textContent = templo.nomeDoTemplo;
        localizacao.innerHTML = `<strong>Localização</strong>: ${templo.localizacao}`;
        consagracao.innerHTML = `<strong>Consagração</strong>: ${templo.consagracao}`;
        area.innerHTML = `<strong>Área</strong>: ${templo.area} pés²`;
        img.src = templo.urlDaImagem;
        img.alt = templo.nomeDoTemplo;
        img.loading = "lazy"


        info.appendChild(localizacao);
        info.appendChild(consagracao);
        info.appendChild(area);

        card.appendChild(nomeDoTemplo);
        card.appendChild(info);
        card.appendChild(img);


        album.appendChild(card);

    });
}



// ______________footer______________

const ano = document.querySelector("#anoatual");
const ultima_modificacao = document.querySelector("#ultimaModificacao")

const hoje = new Date();

ano.textContent = hoje.getFullYear();
ultima_modificacao.textContent = `Última modificação ${document.lastModified}`

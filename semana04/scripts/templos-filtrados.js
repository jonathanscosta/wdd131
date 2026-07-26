
// ______________header______________

const menuBtn = document.querySelector("#menu-btn");
const header = document.querySelector("header");


menuBtn.addEventListener('click', () => {

    header.classList.toggle("open");
});

// ______________main______________
const dataDeCorte = new Date('1999-12-31');
const areaTotal = 10000;

const templos = [
    {
        nomeDoTemplo: "Aba Nigeria",
        localizacao: "Aba, Nigéria",
        consagracao: "2005-08-07",
        area: 11500,
        urlDaImagem:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        nomeDoTemplo: "Manti Utah",
        localizacao: "Manti, Utah, Estados Unidos",
        consagracao: "1888-05-21",
        area: 74792,
        urlDaImagem:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        nomeDoTemplo: "Payson Utah",
        localizacao: "Payson, Utah, Estados Unidos",
        consagracao: "2015-06-07",
        area: 96630,
        urlDaImagem:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        nomeDoTemplo: "Yigo Guam",
        localizacao: "Yigo, Guam",
        consagracao: "2020-05-02",
        area: 6861,
        urlDaImagem:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        nomeDoTemplo: "Washington D.C.",
        localizacao: "Kensington, Maryland, Estados Unidos",
        consagracao: "1974-11-19",
        area: 156558,
        urlDaImagem:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        nomeDoTemplo: "Lima Peru",
        localizacao: "Lima, Peru",
        consagracao: "1986-01-10",
        area: 9600,
        urlDaImagem:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        nomeDoTemplo: "Cidade do México, México",
        localizacao: "Cidade do México, México",
        consagracao: "1983-12-02",
        area: 116642,
        urlDaImagem:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        nomeDoTemplo: "Fortaleza, Brazil",
        localizacao: "Fortaleza - CE, Brazil",
        consagracao: "2019-06-02",
        area: 36000,
        urlDaImagem:
            "https://churchofjesuschristtemples.org/assets/img/temples/fortaleza-brazil-temple/fortaleza-brazil-temple-5569-main.jpg"
    },
    {
        nomeDoTemplo: "Recife, Brazil",
        localizacao: "Recife - PE, Brazil",
        consagracao: "2000-12-15",
        area: 37200,
        urlDaImagem:
            "https://churchofjesuschristtemples.org/assets/img/temples/recife-brazil-temple/recife-brazil-temple-36778-main.jpg"
    },
    {
        nomeDoTemplo: "São Paulo, Brazil",
        localizacao: "São Paulo, Brazil",
        consagracao: "1978-11-02",
        area: 59246,
        urlDaImagem:
            "https://churchofjesuschristtemples.org/assets/img/temples/_temp/017-S%C3%A3o-Paulo-Brazil-Temple.jpg"
    },


];

function filtrar(seletor, funcaoDeFiltro) {
    const elemento = document.querySelector(seletor);
    elemento.addEventListener('click', () => {
        criarCard(templos.filter(funcaoDeFiltro));
    });

}
filtrar('#inicial', () => templos);
filtrar('#antigo', templo => new Date(templo.consagracao) <= dataDeCorte);
filtrar('#novo', templo => new Date(templo.consagracao) > dataDeCorte);
filtrar('#grande', templo => templo.area >= areaTotal);
filtrar('#pequeno', templo => templo.area < areaTotal);





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

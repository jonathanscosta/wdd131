

const botaoMenu =
    document.querySelector("#botaoMenu");

const menu =
    document.querySelector(".menu");


botaoMenu.addEventListener("click", () => {

    menu.classList.toggle("active");


    if (menu.classList.contains("active")) {

        botaoMenu.textContent = "✕";

        botaoMenu.setAttribute(
            "aria-label",
            "fechar menu"
        );

    }

    else {

        botaoMenu.textContent = "≡";

        botaoMenu.setAttribute(
            "aria-label",
            "abrir menu"
        );

    }

});




const formProjeto =
    document.querySelector("#formProjeto");


formProjeto.addEventListener(
    "submit",
    event => {

        event.preventDefault();


        alert(
            "Seu pedido foi enviado com sucesso!"
        );


        formProjeto.reset();

    }
);
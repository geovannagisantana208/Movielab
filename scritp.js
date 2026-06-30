
const pesquisa = document.getElementById("pesquisa");

if (pesquisa) {

    pesquisa.addEventListener("keyup", () => {

        const filtro = pesquisa.value.toLowerCase();

        const cards = document.querySelectorAll(".card");

        cards.forEach(card => {

            const titulo = card.querySelector("h3")
            .textContent
            .toLowerCase();

            card.style.display =
            titulo.includes(filtro)
            ? "block"
            : "none";

        });

    });

}
const formulario = document.querySelector("form");

if (formulario) {

    formulario.addEventListener("submit", (event) => {

        event.preventDefault();

        alert("Mensagem enviada com sucesso!");

        formulario.reset();

    });

}
const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.background = "#0B1120";

    } else {

        header.style.background = "#111827";

    }

})
const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.boxShadow =
        "0 10px 25px rgba(239,68,68,0.5)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.boxShadow =
        "0 5px 15px rgba(0,0,0,0.3)";

    });

});
window.addEventListener("load", () => {

    cards.forEach((card, index) => {

        card.style.opacity = "0";
        card.style.transform = "translateY(30px)";

        setTimeout(() => {

            card.style.transition = "0.5s";

            card.style.opacity = "1";
            card.style.transform = "translateY(0)";

        }, index * 150);

    });

});
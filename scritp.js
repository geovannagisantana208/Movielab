
const pesquisa = document.getElementById("pesquisa");

if (pesquisa) {

    pesquisa.addEventListener("keydown", function(event) {

        if (event.key === "Enter") {

            const valor = pesquisa.value.toLowerCase().trim();

             //FILMES
            if (
                valor.includes("benjamin") ||
                valor.includes("interestelar") ||
                valor.includes("forrest") ||
                valor.includes("titanic") ||
                valor.includes("milagre") ||
                valor.includes("liberdade")
            ) {

                window.location.href = "filmes.html";

            }

            //SÉRIES
            else if (
                valor.includes("vampiro") ||
                valor.includes("walking dead") ||
                valor.includes("mentalista") ||
                valor.includes("breaking bad") ||
                valor.includes("friends") ||
                valor.includes("game of thrones")
            ) {

                window.location.href = "series.html";

            }

            else {

                alert("Título não encontrado!");

            }

        }

    });

}
const formulario = document.getElementById("formulario");

if (formulario) {

    formulario.addEventListener("submit", function(event) {

        event.preventDefault();

        const mensagem =
        document.getElementById("mensagem-sucesso");

        if (mensagem) {

            mensagem.innerHTML =
            "✅ Mensagem enviada com sucesso!";

            mensagem.style.color = "#22c55e";
            mensagem.style.fontWeight = "bold";
            mensagem.style.marginTop = "15px";

        }

        formulario.reset();

    });

}
const header = document.querySelector("header");

if (header) {

    window.addEventListener("scroll", function() {

        if (window.scrollY > 50) {

            header.style.background = "#0B1120";

        } else {

            header.style.background = "#111827";

        }

    });

}
const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mouseenter", function() {

        card.style.boxShadow =
        "0 10px 25px rgba(239,68,68,0.5)";

    });

    card.addEventListener("mouseleave", function() {

        card.style.boxShadow =
        "0 5px 15px rgba(0,0,0,0.3)";

    });

});
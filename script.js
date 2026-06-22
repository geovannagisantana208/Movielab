function mensagem() {
    alert("Bem-vindo ao MovieLab!");
}

function toggle(botao) {

    let sinopse = botao.nextElementSibling;

    if (sinopse.style.display === "block") {
        sinopse.style.display = "none";
    } else {
        sinopse.style.display = "block";
    }

}
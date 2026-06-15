function enviar() {
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let mensagem = document.getElementById("mensagem").value;

    if (nome === "" || email === "" || mensagem === "") {
        document.getElementById("msg").innerText =
            "Por favor, preencha todos os campos.";
        return;
    }

    document.getElementById("msg").innerText =
        "Mensagem enviada com sucesso, " + nome + "! Obrigado por entrar em contato.";

    document.getElementById("nome").value = "";
    document.getElementById("email").value = "";
    document.getElementById("mensagem").value = "";
}
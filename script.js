let cadastro = false;

document.getElementById("toggle").onclick = () => {
    cadastro = !cadastro;

    document.getElementById("titulo").innerText =
        cadastro ? "Cadastro" : "Login";

    document.querySelector("button").innerText =
        cadastro ? "Cadastrar" : "Entrar";

    document.getElementById("toggle").innerText =
        cadastro
            ? "Já tem conta? Faça Login!"
            : "Não tem conta? Cadastre-se!";

    document.getElementById("mensagem").innerHTML = "";
};
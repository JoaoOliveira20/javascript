const para = document.querySelector("p");

para.addEventListener("click", atualizarNome);

function atualizarNome() {
    let nome = prompt("Insira um novo nome");
    para.textContent = "Jogador 1: " + nome;
}
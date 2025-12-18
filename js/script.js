/* Data do evento: segunda-feira, 19 de janeiro de 2026 às 10 h */
const dataEvento = new Date("2026-01-19T10:00:00");

function atualizaContador() {
const agora = new Date();
const diferenca = dataEvento - agora;

if (diferenca <= 0) {
    // Se quiser que o contador suma ou mostre mensagem, altere aqui
    const container = document.querySelector(".contador");
    if (container) {
        container.innerHTML = "<div class='bloco' style='font-size:20px'>Evento começou!</div>";
    }
    return;
}

  const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diferenca / (1000 * 60)) % 60);
  const segundos = Math.floor((diferenca / 1000) % 60);

  // Verifica se os elementos existem antes de tentar alterar (evita erros no console)
if (document.getElementById("dias")) {
    document.getElementById("dias").textContent = String(dias).padStart(2, '0');
    document.getElementById("horas").textContent = String(horas).padStart(2, '0');
    document.getElementById("minutos").textContent = String(minutos).padStart(2, '0');
    document.getElementById("segundos").textContent = String(segundos).padStart(2, '0');
}
}

atualizaContador(); // primeira execução imediata
setInterval(atualizaContador, 1000); // atualização a cada segundo
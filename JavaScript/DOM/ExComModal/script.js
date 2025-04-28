document.addEventListener("DOMContentLoaded", () => { // Aguarda o carregamento completo do DOM antes de executar o código
    const modal = document.getElementById("modal"); // Seleciona o elemento modal pelo id "modal"
    const abrir = document.getElementById("abrirModal"); // Seleciona o botão para abrir o modal pelo id "abrirModal"
    const fechar = document.getElementById("fecharModal"); // Seleciona o botão para fechar o modal pelo id "fecharModal"
  
    abrir.onclick = () => modal.style.display = "block"; // Define o estilo de exibição do modal como "block" ao clicar no botão de abrir
    fechar.onclick = () => modal.style.display = "none"; // Define o estilo de exibição do modal como "none" ao clicar no botão de fechar
  
    window.onclick = (e) => { // Adiciona um evento de clique na janela
      if (e.target === modal) { // Verifica se o alvo do clique é o modal
        modal.style.display = "none"; // Se for, define o estilo de exibição do modal como "none"
      }
    };
  });
  
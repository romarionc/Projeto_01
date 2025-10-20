document.addEventListener("DOMContentLoaded", function () {
  // Seleciona os elementos do DOM
  const btnHamburguer = document.getElementById("btn-hamburguer");
  const menuPrincipal = document.getElementById("menu-principal");

  // Verifica se os elementos existem antes de adicionar o evento
  if (btnHamburguer && menuPrincipal) {
    btnHamburguer.addEventListener("click", function () {
      // Alterna a classe 'nav-open' no menu principal
      menuPrincipal.classList.toggle("nav-open");

      // Atualiza os atributos de acessibilidade (ARIA)
      const isExpanded = menuPrincipal.classList.contains("nav-open");
      btnHamburguer.setAttribute("aria-expanded", isExpanded);
    });
  }
});

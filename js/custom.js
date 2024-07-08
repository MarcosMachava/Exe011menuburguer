// Seleciona o elemento com o ID 'menu-btn' e adiciona um ouvinte de evento de clique
document.querySelector('#menu-btn').addEventListener('click', function() {
    // Esta função é executada quando o elemento '#menu-btn' é clicado

    // Seleciona o elemento com o ID 'menu-site' e adiciona ou remove a classe 'active' para mostrar ou esconder o menu
    document.querySelector('#menu-site').classList.toggle("active");

    // Seleciona o elemento com o ID 'menu-icon' e adiciona ou remove a classe 'active' para modificar o ícone do menu
    document.querySelector('#menu-icon').classList.toggle("active");
});

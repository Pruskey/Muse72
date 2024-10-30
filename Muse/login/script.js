document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const usuario = document.getElementById('usuario').value;
    const nome = document.getElementById('nome').value;

    localStorage.setItem('usuario', usuario);
    localStorage.setItem('nome', nome);

    alert('Cadastro realizado com sucesso!');
    window.location.href = '../Perfil/';
});

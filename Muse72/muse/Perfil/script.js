const usuario = localStorage.getItem('usuario');
const foto = localStorage.getItem('foto');

if (usuario) {
    document.getElementById('usuarioDisplay').textContent = usuario;
} else {
    console.error('Usuário não encontrado no localStorage.');
}

if (foto) {
    document.getElementById('fotoDisplay').src = foto;
} else {
    console.error('Foto não encontrada no localStorage.');
}

// Função para o botão de logout
document.getElementById('logoutButton').addEventListener('click', function() {
    localStorage.clear();
    window.location.href = '../login/';
});

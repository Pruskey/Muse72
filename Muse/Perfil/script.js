const usuario = localStorage.getItem('usuario');
const foto = localStorage.getItem('foto');
const nome = localStorage.getItem('nome');

if (usuario) {
    document.getElementById('usuarioDisplay').textContent = usuario;
} else {
    console.error('Usuário não encontrado no localStorage.');
}

if (nome) {
    document.getElementById('nome').textContent = nome;
} else {
    console.error('Nome não encontrado no localStorage.');
}

if (foto) {
    document.getElementById('fotoDisplay').src = foto;
} else {
    console.error('Foto não encontrada no localStorage.');
}

document.getElementById('logoutButton').addEventListener('click', function() {
    localStorage.clear();
    window.location.href = '../login/';
});

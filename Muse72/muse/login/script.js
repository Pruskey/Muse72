document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const usuario = document.getElementById('usuario').value;
    const foto = document.getElementById('foto').files[0];

    const fotoURL = URL.createObjectURL(foto);

    localStorage.setItem('usuario', usuario);
    localStorage.setItem('foto', fotoURL);

    alert('Cadastro realizado com sucesso!');
    window.location.href = '../Perfil/';
});

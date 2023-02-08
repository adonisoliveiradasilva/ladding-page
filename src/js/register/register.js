/* Login */

document.getElementById('olho').addEventListener("mousedown", function() {
    document.getElementById('senha').type = 'text';
});

document.getElementById('olho').addEventListener('mouseup', function() {
    document.getElementById('senha').type = 'password';
});

// Para que o password não fique exposto apos mover a imagem.
document.getElementById('olho').addEventListener('mousemove', function() {
    document.getElementById('senha').type = 'password';
});

/* Cadastro */

document.getElementById('olho_c').addEventListener("mousedown", function() {
    document.getElementById('senha_c').type = 'text';
});

document.getElementById('olho_c').addEventListener('mouseup', function() {
    document.getElementById('senha_c').type = 'password';
});

// Para que o password não fique exposto apos mover a imagem.
document.getElementById('olho_c').addEventListener('mousemove', function() {
    document.getElementById('senha_c').type = 'password';
});

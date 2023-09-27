document.getElementById('enviarBoton').addEventListener('click', function (event) {
    // Limpia los valores de los campos del formulario
    document.getElementById('nombre').value = '';
    document.getElementById('email').value = '';
    document.getElementById('mensaje').value = '';
});
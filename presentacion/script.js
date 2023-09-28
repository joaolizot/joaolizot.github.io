addEventListener('submit', function () {
    // Previene el envío normal del formulario

    // Limpia los valores de los campos del formulario
    setTimeout(function () {
        document.getElementById('nombre').value = '';
        document.getElementById('email').value = '';
        document.getElementById('mensaje').value = '';
    }, 1);

});


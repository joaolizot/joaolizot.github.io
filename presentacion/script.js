addEventListener('submit', function () {
    // Previene el envío normal del formulario

    // Limpia los valores de los campos del formulario
    setTimeout(function () {
        document.getElementById('nombre').value = '';
        document.getElementById('email').value = '';
        document.getElementById('mensaje').value = '';
    }, 1);

});

function dirigirSoundCloud(){
    window.location.href = "https://soundcloud.com/premmm"
}

function dirigirInstagram(){
    window.location.href = "https://www.instagram.com/premdjk/"
}
function dirigirWhatsapp(){
    window.location.href = "https://wa.me/59892093991"
}
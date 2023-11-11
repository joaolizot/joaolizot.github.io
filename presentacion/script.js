document.addEventListener("DOMContentLoaded", function() {
    // Obtener el formulario
    var formulario = document.getElementById("miFormulario");

    // Agregar un evento de envío al formulario
    formulario.addEventListener("submit", function(event) {
        // Evitar que el formulario se envíe de forma predeterminada
        event.preventDefault();

        // Obtener los datos del formulario
        var formData = new FormData(formulario);

        // Validar el correo electrónico usando una expresión regular
        var email = formData.get('email');
        if (!validateEmail(email)) {
            Swal.fire({
                title: 'Por favor, ingresa un correo electrónico válido.',
                icon: 'error',
                confirmButtonColor: '#d33',
                confirmButtonText: 'OK'
            });
            return; // Detener la ejecución si el correo electrónico no es válido
        }

        // Enviar la solicitud a Formspree
        fetch(formulario.action, {
            method: formulario.method,
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            // Lógica para manejar la respuesta de Formspree
            console.log(data); // Puedes imprimir la respuesta en la consola para depuración

            // Verificar si hay un error en la respuesta (esto es un ejemplo, ajusta según la estructura de la respuesta)
            if (data && data.error && data.error.includes("email")) {
                Swal.fire({
                    title: 'Hubo un problema al enviar el correo. Verifica que has ingresado un email válido.',
                    icon: 'error',
                    confirmButtonColor: '#d33', // Color del botón de confirmación para errores
                    confirmButtonText: 'OK'
                });
            } else {
                // Limpiar los campos del formulario después de enviar
                Swal.fire({
                    title: 'El correo se envió correctamente',
                    icon: 'success',
                    confirmButtonColor: '#3085d6', // Color del botón de confirmación
                    textColor: 'black', // Color del texto
                    confirmButtonText: '¡Entendido!'
                });
                formulario.reset();
            }
        })
        .catch(error => {
            console.error('Error al enviar el formulario:', error);

            // Manejar el error mostrando un mensaje con SweetAlert2
            Swal.fire({
                title: 'Hubo un problema al enviar el correo. Verifica que has ingresado un email válido.',
                icon: 'error',
                confirmButtonColor: '#d33', // Color del botón de confirmación para errores
                confirmButtonText: 'OK'
            });
        });
    });

    // Función para validar el formato del correo electrónico con una expresión regular
    function validateEmail(email) {
        var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
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
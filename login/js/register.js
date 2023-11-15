document.getElementById('register-form').addEventListener('submit', async function (event) {
    event.preventDefault();

    const username = document.getElementById('register-username').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
    const confirmPassword = document.getElementById('register-confirm-password').value;

    if (password !== confirmPassword) {
      // Muestra un mensaje de error si las contraseñas no coinciden
    Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Las contraseñas no coinciden',
    });
    return;
    }

    try {
    const response = await fetch('https://5b1e-2800-ac-8010-d5ef-686e-ade9-b28-8300.ngrok-free.app/register', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
    });

    if (!response.ok) {
        const errorMessage = await response.json();
        throw new Error(errorMessage.message);
    }

      // Redirige a la página de inicio de sesión después del registro exitoso
    Swal.fire({
        icon: 'success',
        title: 'Registro exitoso',
        text: 'Bienvenido, ahora puedes iniciar sesión.',
    }).then(() => {
        window.location.href = '/login/html/login.html'; // Cambia la ruta según tu estructura de archivos
    });

    } catch (error) {
      // Muestra un mensaje de error con SweetAlert2
    Swal.fire({
        icon: 'error',
        title: 'Error',
        text: error.message,
    });
    }
});

const token = sessionStorage.getItem('token');
if (token) {
    window.location.href = '/login/html/index.html';
}

document.getElementById('login-form').addEventListener('submit', async function (event) {
    event.preventDefault();
  
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
  
    try {
      const response = await fetch('https://00a1-2800-ac-8010-d5ef-686e-ade9-b28-8300.ngrok-free.app/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
  
      if (!response.ok) {
        const errorMessage = await response.json();
        throw new Error(errorMessage.message);
      }
  
      const data = await response.json();
  
      // Almacena el token en sessionStorage (se borrará al cerrar la pestaña)
      sessionStorage.setItem('token', data.token);
  
      // Redirige a la página deseada después del inicio de sesión
      Swal.fire({
        icon: 'success',
        title: 'Inicio de sesión exitoso',
        text: '¡Bienvenido de nuevo!',
      }).then(() => {
        window.location.href = '/login/html/index.html'; // Cambia la ruta según tu estructura de archivos
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
  
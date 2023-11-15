// index.js

document.addEventListener('DOMContentLoaded', function () {

    const token = sessionStorage.getItem('token');
    if (!token) {
    window.location.href = '/login/html/login.html'; 
    }

    const btnCerrarSesion = document.getElementById('btnCerrarSesion');
    btnCerrarSesion.addEventListener('click', function () {

    sessionStorage.removeItem('token');
    window.location.href = '/login/html/login.html'; 

    });
    
    document.body.appendChild(logoutButton);
});

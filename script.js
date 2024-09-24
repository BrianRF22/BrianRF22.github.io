// Espera 3 segundos para simular la carga
setTimeout(() => {
    document.getElementById('splash-screen').style.display = 'none';
    document.getElementById('login-screen').style.display = 'block';
}, 3000);

// Opcional: manejar la lógica del formulario
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Aquí puedes manejar el envío del formulario con AJAX o redirigir a otra página
    alert('Iniciar sesión');
});

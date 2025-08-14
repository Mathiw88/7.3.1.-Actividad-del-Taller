document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registerForm');
    const password1 = document.getElementById('password1');
    const password2 = document.getElementById('password2');
    
    // Función para mostrar alerta de éxito
    function showAlertSuccess() {
        const alertSuccess = document.getElementById('alert-success');
        alertSuccess.classList.add('show');
        setTimeout(() => alertSuccess.classList.remove('show'), 3000);
    }
    
    // Función para mostrar alerta de error
    function showAlertError() {
        const alertError = document.getElementById('alert-danger');
        alertError.classList.add('show');
        setTimeout(() => alertError.classList.remove('show'), 3000);
    }
    
    // Validar coincidencia de contraseñas
   //Compara si las dos contraseñas son iguales Si no coinciden: Establece un mensaje de error personalizado Añade clase 'is-invalid' para resaltar el campo en rojo Si coinciden: Limpia el mensaje de error Quita el resaltado de error
    function validatePassword() {
        if (password1.value !== password2.value) {
            password2.setCustomValidity('Las contraseñas no coinciden');
            password2.classList.add('is-invalid');
        } else {
            password2.setCustomValidity('');
            password2.classList.remove('is-invalid');
        }
    }
     //Ejecuta validatePassword() cada vez que el usuario escribe en cualquiera de los campos de contraseña Proporciona retroalimentación inmediata al usuario
    password1.addEventListener('input', validatePassword);
    password2.addEventListener('input', validatePassword);
    
    // Manejar el envío del formulario
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        event.stopPropagation();
        
        // Validar el formulario
        //event.preventDefault(): Evita que el formulario se envíe normalmente event.stopPropagation(): Detiene la propagación del evento a otros elementos form.checkValidity(): Verifica todas las validaciones HTML5 (campos required, tipo email, etc.) Si todo es válido y las contraseñas coinciden → muestra éxito Si hay errores → muestra mensaje de error
        if (form.checkValidity() && password1.value === password2.value) {
            showAlertSuccess();
            // Aquí podrías agregar el envío real del formulario
            // form.submit();
        } else {
            showAlertError();
        }
        
        form.classList.add('was-validated');
    }, false);
});

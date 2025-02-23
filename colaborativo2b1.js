document.getElementById("miFormulario").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita el envío inmediato

    let valido = true;

    // Validación del Nombre
    let nombre = document.getElementById("nombre").value;
    if (nombre.trim() === "") {
        document.getElementById("errorNombre").textContent = "El nombre es obligatorio.";
        valido = false;
    } else {
        document.getElementById("errorNombre").textContent = "";
    }

    // Validación del Email
    let email = document.getElementById("email").value;
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById("errorEmail").textContent = "Correo no válido.";
        valido = false;
    } else {
        document.getElementById("errorEmail").textContent = "";
    }

    // Validación de la Contraseña
    let password = document.getElementById("password").value;
    if (password.length < 6) {
        document.getElementById("errorPassword").textContent = "La contraseña debe tener al menos 6 caracteres.";
        valido = false;
    } else {
        document.getElementById("errorPassword").textContent = "";
    }

    // Validación de la Tribu
    let tribu = document.getElementById("tribu").value;
    if (tribu === "") {
        document.getElementById("errorTribu").textContent = "Debes seleccionar una tribu.";
        valido = false;
    } else {
        document.getElementById("errorTribu").textContent = "";
    }

    // Validación de la Sabiduría
    let sabiduria = document.getElementById("sabiduria").value;
    if (sabiduria === "" || sabiduria < 0 || sabiduria > 100) {
        document.getElementById("errorSabiduria").textContent = "Debe ser un número entre 0 y 100.";
        valido = false;
    } else {
        document.getElementById("errorSabiduria").textContent = "";
    }

    // Si todo es válido, enviamos el formulario
    if (valido) {
        alert("¡Formulario enviado con éxito! 🚀");
        document.getElementById("miFormulario").reset();
    }
});

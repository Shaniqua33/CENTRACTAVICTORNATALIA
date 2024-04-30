function calcularLetraDNI(numeroDNI) {
    var letras = 'TRWAGMYFPDXBNJZSQVHLCKE';
    var indice = numeroDNI % 23;
    return letras.charAt(indice);
}
function validarDNI(dni) {
    var dniNumero = dni.substring(0, 8); // Obtener solo los números del DNI
    var letraIntroducida = dni.charAt(8); // Obtener la letra introducida por el usuario
    var letraCalculada = calcularLetraDNI(dniNumero); // Calcular la letra correspondiente al número
 
    return letraIntroducida.toUpperCase() === letraCalculada; // Comparar letras (ignorar mayúsculas y minúsculas)
}
 var dniUsuario = document.getElementById('DNIUSUARIO').value; // DNI introducido por el usuario
if (validarDNI(dniUsuario)) {
    alert("El DNI es válido.");
} else {
    alert("El DNI no es válido.");
}
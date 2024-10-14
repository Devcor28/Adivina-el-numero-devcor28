var numeroAzar = Math.floor(Math.random() * 100) + 1;
const numeroEntrada = document.getElementById('numeroEntrada'); 
const mensaje = document.getElementById('mensaje');
const contador = document.getElementById('contador');
var intentos = 0;
const btnRestablecer = document.getElementById('btnRestablecer');


function chequearResultado(){
    let numeroIngresado = parseInt(numeroEntrada.value);
    if (numeroIngresado < 1 || numeroIngresado > 100 || isNaN(numeroIngresado)) {
        mensaje.textContent = "Numero ingresado invalido, por favor ingrese un numero del 1 al 100"

    }
    else if (numeroIngresado === numeroAzar) {
        mensaje.textContent = "Haz acertado el numero !!!"
        numeroEntrada.value = "";
    }
    else if (numeroIngresado < numeroAzar) {
        intentos++;
        contador.textContent = intentos;
        mensaje.textContent = "El numero por adivinar es mayor!"
    }
    else {
        intentos++;
        contador.textContent = intentos;
        mensaje.textContent = "El numero por adivinar es menor!"
    }   
}
function restablecerIntentos() {
    intentos = 0;
    contador.textContent = intentos;
    numeroEntrada.value = "";
    mensaje.textContent = "";
    numeroAzar = Math.floor(Math.random() * 100) + 1;
}

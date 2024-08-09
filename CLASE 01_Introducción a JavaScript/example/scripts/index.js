/* seleccionar una etiqueta del HTML */
const selector = document.getElementById("mensaje");

/* escribir dentro de esa etiqueta con JS */
selector.innerHTML = "CONEXIÓN EXITOSA ENTRE HTML Y JS";

const nombre = prompt("¿Dime cuál es tu nombre?");
console.log("Tu nombre es: " + nombre);
const mensaje = "Bienvenid@ " + nombre
console.log(mensaje);
alert(mensaje);

// let edad = 10;
// const entrada = prompt("¿Qué producto desea comprar?");
// console.log(entrada);
// alert(entrada);
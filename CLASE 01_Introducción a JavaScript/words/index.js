/* seleccionar una etiqueta del HTML */
const selector = document.getElementById("mensaje");

/* escribir dentro de esa etiqueta con JS */
selector.innerHTML = "CONEXIÓN EXITOSA ENTRE HTML Y JS";

const frase = prompt("Ingrese una palabra o frase");

const cantidad = frase.length;
const mensajeCantidad = "La cantidad de caracteres en la frase ingresada es: " + cantidad;
const fraseMinusculas = frase.toLowerCase();
const fraseMayusculas = frase.toUpperCase();
const frasesUnidas = fraseMinusculas + fraseMayusculas
alert("Las frases unidas son " + frasesUnidas);
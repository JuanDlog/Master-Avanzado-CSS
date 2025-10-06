// Alertas
// alert("Hola soy Victor Robles WEB");


// Variables
let nombre = "Víctor Robles WEB";
nombre = "victor"

// Constantes
const apellido = "robles";

// otra variable
let altura = 187;

// Monstar por consola
console.log(nombre);
console.log(altura);


// Concatenacion
let concatenacion = nombre + " " + apellido;

// Seleccionar elementos de la página
let datos = document.querySelector("#datos");
datos.innerHTML = `
    <hr/>
    <h1>Soy la caja de datos</h1>
    <h2>Mi nombre es: ${concatenacion}</h2>
    <h3>Mido: ${altura} cm</h3>
`;

// Condiciones
altura = 180;
if(altura >= 185){
    datos.innerHTML += "<h1>Eres una persona alta</h1>";
} else{
    datos.innerHTML += "<h1>Eres una persona bajita</h1>";
}

// Bucles
for(let year = 2000; year <= 2025; year++){
    datos.innerHTML += `<h2>Estamos en el año: ${year}</h2>`
}

// Arrays
let nombres = ["Víctor", "Francisco", "Pepe"];

let divNombres = document.querySelector("#nombres");

// divNombres.innerHTML = nombres[2];

divNombres.innerHTML = "<h1>Listado de nombres</h1><ul>";

/* nombres.forEach(nombre => {
    divNombres.innerHTML += "<li>"+nombre+"</li>"
})*/ 

for (let nombre of nombres){
    divNombres.innerHTML += "<li>"+nombre+"</li>"
}


divNombres.innerHTML += "</ul>";


// Funciones

const miInformacion = (nombre, altura) => {
    let misDatos = `
    <h1>Soy la caja de datos</h1>
    <h2>Mi nombre es: ${nombre}</h2>
    <h3>Mido: ${altura} cm</h3>
`;

return misDatos;
}



const imprimir = () => {
    let datos = document.querySelector("#datos");
    datos.innerHTML += miInformacion("paco", "187");
}

imprimir();
imprimir();
imprimir();
imprimir();
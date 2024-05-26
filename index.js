//definicion de las tasas de aplicacion de cada fetilizante (en kgxhectarea)//
const ta=100; // tasa de apliacion para FA
const tb=120; // tasa de apliacion para FB
const tc=90; // tasa de apliacion para FC

let usuario= prompt("ingrese usuario");
alert("Bienvenido a la empresa  "+ usuario);

let carga;
do {
    let tipoFertilizante = prompt("Ingrese tipo de fertilizante:\n1. FA\n2. FB\n3. FC\n4. SALIR");
    if (tipoFertilizante === "4") {
        break; // Salir del bucle si el usuario elige salir
    }
    let cantidadHectareas = parseInt(prompt("Ingrese cantidad de hectáreas a trabajar:"));
    carga = tipoFertilizante; // Asignamos el valor del tipo de fertilizante a la variable carga
    calcularCantidadFertilizante(cantidadHectareas, tipoFertilizante);
} while (carga !== "4");


/*let tipoFertilizante= prompt("Ingrese tipo de fertilizante:\n1. FA\n2. FB\n3. FC");
let cantidadHectareas=parseInt(prompt("ingrese cantidad de hectareas a trabajar"));

calcularCantidadFertilizante(cantidadHectareas,tipoFertilizante);*/
// Función para calcular la cantidad total de fertilizante
function calcularCantidadFertilizante (cantidadHectareas,tipoFertilizante){
    let cantidadTotalFertilizante;

    switch(tipoFertilizante){
        case "1":
        case "FA":
            cantidadTotalFertilizante= ta*cantidadHectareas;
        break
        case "2":
        case "FB":
            cantidadTotalFertilizante= tb*cantidadHectareas;
        break
        case "3":
        case "FC":
            cantidadTotalFertilizante= tc*cantidadHectareas;
        break
        default:
            alert ("El tipo de fertilizante no es correcto");
        break
    }
    alert("La cantidad total de fertilizante a utilizar es: "+cantidadTotalFertilizante+" kg/hectárea");
}

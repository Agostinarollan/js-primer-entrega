//definicion de las tasas de aplicacion de cada fetilizante (en kgxhectarea)//
const ta=100; // tasa de apliacion para FA
const tb=120; // tasa de apliacion para FB
const tc=90; // tasa de apliacion para FC

let usuario= prompt("ingrese usuario");
console.log("Bienvenido a la empresa", usuario);


let tipoFertilizante= prompt("Ingrese tipo de fertilizante:\n1. FA\n2. FB\n3. FC");
let cantidadHectareas=parseInt(prompt("ingrese cantidad de hectareas a trabajar"));
/*if (isNaN (cantidadHectareas)){
    console.log("La cantidad de hectáreas ingresada no es válida.");
    cantidadHectareas=parseInt(prompt("ingrese cantidad de hectareas a trabajar"));
    calcularCantidadFertilizante(cantidadHectareas,tipoFertilizante);

} else{
    calcularCantidadFertilizante(cantidadHectareas,tipoFertilizante);

}*/
calcularCantidadFertilizante(cantidadHectareas,tipoFertilizante);


// Función para calcular la cantidad total de fertilizante
function calcularCantidadFertilizante (cantidadHectareas,tipoFertilizante){
    let cantidadTotalFertilizante;

    switch(tipoFertilizante){
        case "FA":
            cantidadTotalFertilizante= ta*cantidadHectareas;
        break
        case "FB":
            cantidadTotalFertilizante= tb*cantidadHectareas;
        break
        case "FC":
            cantidadTotalFertilizante= tc*cantidadHectareas;
        break
        default:
            console.log ("El tipo de fertilizante no es correcto");
        break
    }
    console.log("La cantidad total de fertilizante a utilizar es:", cantidadTotalFertilizante, " kg/hectárea");
}

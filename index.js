// Definición de las tasas de aplicación de cada fertilizante (en kg/hectárea)
const ta = 100; // tasa de aplicación para FA
const tb = 120; // tasa de aplicación para FB
const tc = 90;  // tasa de aplicación para FC

// Array para almacenar la información de los usuarios
let usuarios = [];

function solicitarUsuario() {
    // Solicitar el nombre del usuario
    let usuario = prompt("Ingrese su nombre de usuario");
    alert("Bienvenido a la empresa " + usuario);

    // Crear un objeto para el usuario actual
    let usuarioData = {
        nombre: usuario,
        aplicaciones: []
    };

    // Bucle para ingresar las aplicaciones de fertilizantes
    let carga;
    do {
        let tipoFertilizante = prompt("Ingrese tipo de fertilizante:\n1. FA\n2. FB\n3. FC\n4. SALIR");
        if (tipoFertilizante === "4") {
            break; // Salir del bucle si el usuario elige salir
        }
        let cantidadHectareas = parseInt(prompt("Ingrese cantidad de hectáreas a trabajar:"));
        if (isNaN(cantidadHectareas) || cantidadHectareas <= 0) {
            alert("Por favor, ingrese una cantidad válida de hectáreas.");
            continue;
        }
        calcularCantidadFertilizante(cantidadHectareas, tipoFertilizante, usuarioData);
    } while (true);

    // Agregar el objeto del usuario al array de usuarios
    usuarios.push(usuarioData);
}

// Función para calcular la cantidad total de fertilizante
function calcularCantidadFertilizante(cantidadHectareas, tipoFertilizante, usuarioData) {
    let cantidadTotalFertilizante;

    switch (tipoFertilizante) {
        case "1":
        case "FA":
            cantidadTotalFertilizante = ta * cantidadHectareas;
            tipoFertilizante = "FA"; // Convertir tipoFertilizante a texto
            break;
        case "2":
        case "FB":
            cantidadTotalFertilizante = tb * cantidadHectareas;
            tipoFertilizante = "FB"; // Convertir tipoFertilizante a texto
            break;
        case "3":
        case "FC":
            cantidadTotalFertilizante = tc * cantidadHectareas;
            tipoFertilizante = "FC"; // Convertir tipoFertilizante a texto
            break;
        default:
            alert("El tipo de fertilizante no es correcto");
            return;
    }

    // Agregar la aplicación al array de aplicaciones del usuario
    usuarioData.aplicaciones.push({
        tipoFertilizante: tipoFertilizante,
        cantidadHectareas: cantidadHectareas,
        cantidadTotalFertilizante: cantidadTotalFertilizante
    });

    alert("La cantidad total de fertilizante a utilizar es: " + cantidadTotalFertilizante + " kg");
}

// Función para mostrar todas las aplicaciones de todos los usuarios en la consola
function mostrarTodasLasAplicaciones() {
    console.log("Aplicaciones de fertilizante de todos los usuarios:");
    usuarios.forEach(usuarioData => {
        console.log("Nombre del usuario: " + usuarioData.nombre);
        usuarioData.aplicaciones.forEach(aplicacion => {
            console.log("Tipo de fertilizante: " + aplicacion.tipoFertilizante);
            console.log("Cantidad de hectáreas: " + aplicacion.cantidadHectareas);
            console.log("Cantidad total de fertilizante: " + aplicacion.cantidadTotalFertilizante + " kg");
            console.log("-----------------------------------");
        });
    });
}

// Función para buscar un usuario por nombre y mostrar sus aplicaciones
function buscarUsuarioPorNombre(nombre) {
    const usuarioEncontrado = usuarios.find(usuarioData => usuarioData.nombre.toLowerCase() === nombre.toLowerCase());
    if (usuarioEncontrado) {
        console.log("Aplicaciones de fertilizante para el usuario " + usuarioEncontrado.nombre + ":");
        usuarioEncontrado.aplicaciones.forEach(aplicacion => {
            console.log("Tipo de fertilizante: " + aplicacion.tipoFertilizante);
            console.log("Cantidad de hectáreas: " + aplicacion.cantidadHectareas);
            console.log("Cantidad total de fertilizante: " + aplicacion.cantidadTotalFertilizante + " kg");
            console.log("-----------------------------------");
        });
    } else {
        console.log("Usuario no encontrado.");
    }
}

// Solicitar datos para múltiples usuarios
let continuar;
do {
    solicitarUsuario();
    continuar = prompt("¿Desea ingresar otro usuario? (si/no)").toLowerCase(); // Convertir a minúsculas para comparación
} while (continuar === "si");

// Mostrar todas las aplicaciones en la consola
mostrarTodasLasAplicaciones();

// Permitir al usuario buscar un nombre específico
let nombreABuscar = prompt("Ingrese el nombre del usuario a buscar:");
buscarUsuarioPorNombre(nombreABuscar);

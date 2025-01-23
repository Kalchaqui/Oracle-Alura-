/*QuerySelector permite acceder a cada uno de los elementos, abre parametros para que le insertemos datos ();
Con QuerySelector el le estoy diciendo a los elementos los traigo, le paso un nombre y se lo atribuyo
El objeto tiene metodos que definen su comportamiento*/

let numeroSecreto = 0;
//Al ser una variable no uso comillas para (elemento, texto)
let intentos = 0;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

//Acá aplicamos funciones, la llamamos de html con Onclick="texto()";
function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
    
    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento("p", `Acertaste el número en ${intentos} ${(intentos === 1) ? "vez" : "veces"}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else { 
        if(numeroDeUsuario > numeroSecreto) {       
        asignarTextoElemento("p", "El número secreto es menor");
        
    } else {
        asignarTextoElemento("p", "El número secreto es mayor");

    }
    intentos++;
    limpiarCaja();
}
return;
}

//Al poner numeral# QuerySelector sabe que lo queres por ID
function limpiarCaja(){
    document.querySelector("#valorUsuario").value = "";
    
}

function generarNumeroSecreto() {
    return Math.floor(Math.random()*10)+1;
    //retornar quiere decir que nos retorne un valor
}
function condicionesIniciales(){
    asignarTextoElemento("h1", "Juego del número secreto!");
    asignarTextoElemento("p", "Indica un número del 1 al 10");
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}
function reiniciarJuego() {

    //limpiar la caja
    limpiarCaja();

    //generar numero aleatorio
    //indicar mensaje de inicio
    //inicializar el número de intentos
    condicionesIniciales();

    //desahibilitar el botón de nuevo juego
    document.querySelector("#reiniciar").setAttribute("disabled", "true");
}

condicionesIniciales();

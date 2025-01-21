//LOOPS Y TENTATIVAS

let numeroSecreto = 2;
let numeroUsuario = 0;
let intentos = 1;
let palabraVeces = "vez";
//Creamos el bucle While, en este caso quda todo el proceso adentro-Mientras el número sea diferente se repite el bucle si gano no.
//Gerarquia, el bloque que esta dentro del while es un hijo.
while(numeroUsuario != numeroSecreto){ 


let numeroUsuario = prompt("Me indicas un número entre 1 y 10 por favor:");

console.log(numeroUsuario);
/*
Este código realiza
la comparación
*/
if (numeroUsuario == numeroSecreto) {
    //Acertamos, fue verdadera la condición
    alert(`Acertaste, el número es: ${numeroUsuario} Lo hiciste en: ${intentos} ${palabraVeces}`);
} else { //Condicionales anidados
    if(numeroUsuario > numeroSecreto){
        alert(`El numero secreto es menor que:  ${numeroUsuario}`)
    }else{
        alert(`El numero secreto es mayor que:  ${numeroUsuario}`)
    }
    //La condición no se cumplió
    //alert('Lo siento, no acertaste el número');
}
intentos = intentos + 1; //tentativa o intento, incremento cuando no acierta
palabraVeces = "veces";
}

//LOOPS Y TENTATIVAS

let numeroSecreto = 2;
let numeroUsuario = prompt("Me indicas un número entre 1 y 10 por favor:");

console.log(numeroUsuario);
/*
Este código realiza
la comparación
*/
if (numeroUsuario == numeroSecreto) {
    //Acertamos, fue verdadera la condición
    alert(`Acertaste, el número es: ${numeroUsuario}`);
} else { //Condicionales anidados
    if(numeroUsuario > numeroSecreto){
        alert(`El numero secreto es menor que:  ${numeroUsuario}`)
    }else{
        alert(`El numero secreto es mayor que:  ${numeroUsuario}`)
    }
    //La condición no se cumplió
    //alert('Lo siento, no acertaste el número');
}


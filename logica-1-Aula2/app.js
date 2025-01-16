//Variables
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
} else {
    //La condición no se cumplió
    alert('Lo siento, no acertaste el número');
}

/*
TAREA
//1.-Pregunta al usuario qué día de la semana es. Si la respuesta es "Sábado" o "Domingo", muestra "¡Buen fin de semana!". De lo contrario, muestra "¡Buena semana!".
let diaSemana = prompt('¿Qué día de la semana es hoy?');

if (diaSemana == 'Sábado' || diaSemana == 'Domingo'){
    alert('¡Buen fin de semana!');
} else {
    alert('¡Buena semana!');
}
//2.-Verifica si un número ingresado por el usuario es positivo o negativo. Muestra una alerta informativa.
let numero = prompt('Ingrese un número');
if (numero > 0){
    alert('El numero es positivo')
}else if (numero < 0){
    alert('El numero es negativo');
}
else{
    alert('El numero es 0');
}
//3.Crea un sistema de puntuación para un juego. Si la puntuación es mayor o igual a 100, muestra "¡Felicidades, has ganado!". En caso contrario, muestra "Intentalo nuevamente para ganar.".
let puntuacion = prompt('Ingrese su puntuación');
if (puntuacion>=100){
    alert('¡Felicidades, has ganado!');
}else{
    alert('Intentalo nuevamente para ganar.');
}
//4.-Crea un mensaje que informe al usuario sobre el saldo de su cuenta, utilizando un template string para incluir el valor del saldo.
let  saldo = prompt('Ingrese su saldo');
alert(`Tu saldo es ${saldo}`);
//5.-Pide al usuario que ingrese su nombre mediante un prompt. Luego, muestra una alerta de bienvenida usando ese nombre.
let nombre = prompt('Ingrese su nombre');
alert(`¡Bienvenido ${nombre}!`);

*/
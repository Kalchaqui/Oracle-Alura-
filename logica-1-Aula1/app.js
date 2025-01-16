//Variables
let numeroSecreto = 6;
let numeroUsuario = prompt("Me indicas el número del 1 al 10 por favor"); //Variable
/*
Comentado de 
Código
*/
alert ("Hello World");
console.log(numeroUsuario);

if (numeroUsuario == numeroSecreto){ //Un ()=) es asignacion (==) es comparación
 alert(`Acertaste, el numero es: ${numeroSecreto}`);// aca le estoy avisando a JS que me tire una variable `xx ${} ` 
}else {
    alert("Lo siento no acertaste el número");
}
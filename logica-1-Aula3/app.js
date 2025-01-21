//LOOPS Y TENTATIVAS

//let numeroSecreto = 2;
let numeroMaximoPosible = 100
let numeroSecreto = Math.floor(Math.random()*numeroMaximoPosible)+1;
let numeroUsuario = 0;
let intentos = 1;
//let palabraVeces = "vez";
let maximosIntentos = 10;

//Creamos el bucle While, en este caso quda todo el proceso adentro-Mientras el número sea diferente se repite el bucle si gano no.
//Gerarquia, el bloque que esta dentro del while es un hijo.
while(numeroUsuario != numeroSecreto){ 


let numeroUsuario = parseInt(prompt("Tendrás 10 intentos para ganar un Premio, elige entre 1 y 100"));

console.log(numeroUsuario);
/*
Este código realiza
la comparación
*/
if (numeroUsuario == numeroSecreto) {
    //Acertamos, fue verdadera la condición
    //alert(`Acertaste, el número es: ${numeroUsuario} Lo hiciste en: ${intentos} ${palabraVeces}`);
    alert(`Acertaste, el número es: ${numeroUsuario} Lo hiciste en: ${intentos} ${intentos == 1 ? "vez" : "veces"}`);

} else { //Condicionales anidados
    if(numeroUsuario > numeroSecreto){
        //alert(`El numero secreto es menor que:  ${numeroUsuario}`)
                alert(`El numero secreto es menor`)

    }else{
        //alert(`El numero secreto es mayor que:  ${numeroUsuario}`)
        alert(`El numero secreto es mayor`)

    }
    //La condición no se cumplió
    //alert('Lo siento, no acertaste el número');
intentos++;
//intentos = intentos + 1; //tentativa o intento, incremento cuando no acierta
//palabraVeces = "veces";
if (intentos > maximosIntentos){
    alert(`Llegaste al número ${maximosIntentos} intentos`)
    break;
}

}

}

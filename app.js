//Document puente entre HTML y JS    //Parametro
/*let titulo = document.querySelector('h1'); //Objeto que tienen métodos
titulo.innerHTML = 'Juego del número secreto';

let parrafo = document.querySelector('p');
parrafo.innerHTML = 'Indica un número del 1 al 10';
*/
// Ctrl + F buscador 

let numeroSecreto = 0;
//console.log(numeroSecreto);
let intentos = 0; //Al menos una vez lo intentara
let listaNumerosSorteados= [];
let numeroMaximo = 10;

//Declaramos la función
//Encapsulamiento {} de una acción que queremos que haga
function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    /*console.log(typeof(numeroDeUsuario));
    console.log(numeroSecreto);
    console.log(typeof(numeroSecreto));
    console.log(numeroDeUsuario);
    console.log(numeroDeUsuario === numeroSecreto);
    === igual en valor e igual en tipo de dato*/

    
    //console.log(intentos);
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        //Operador ternario
        document.getElementById('reiniciar').removeAttribute('disabled');

    } else {
        //El usuario no acerto
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento ('p', 'El número secreto es menor');
        } else {
            asignarTextoElemento ('p', 'El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }

    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value= '';
    //let valorCaja= document.querySelector('#valorUsuario');
    //valorCaja.value= '';
    //# id 
    //querySelector--> Selector generico
}

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento); //Variable
    elementoHTML.innerHTML = texto; //Variable
    return;
}

function generarNumeroSecreto(){
    let numeroGenerado= Math.floor(Math.random()*numeroMaximo)+1;
    
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    //Si ya sorteamos todos los números 
    if (listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p', 'Se sortearon todos los números posibles');
    }else{
        //Si el número generado está incluido en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)){
            //Recursividad= llamarse a si misma 
            return generarNumeroSecreto();
        }else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales(){
    asignarTextoElemento('h1' , 'Juego del número secreto');
    asignarTextoElemento('p' , `Indica un número del 1 al ${numeroMaximo}:`);
    numeroSecreto = generarNumeroSecreto();
    intentos= 1;
}

function reiniciarJuego(){
    //Limpiar la caja
    limpiarCaja();
    //Indicar mensaje de intervalo de números
    //Generar el número aleatorio
    //Inicializar el número de intentos
    condicionesIniciales();
    //Deshabilitar el botón de nuejo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();

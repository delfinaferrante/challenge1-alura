// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let nombres = []

function agregarAmigo(){
    let unNombre = document.getElementById('amigo').value;
    verificarNombre(unNombre);
    mostrarLista();
    limpiarInput();
}

function verificarNombre(unNombre){
    if (unNombre === '') {
        alert('Por favor, inserte un nombre.')
    } else
        agregarALista(unNombre);
}

function limpiarInput(){
    document.getElementById('amigo').value = '';
}

function agregarALista(unNombre){
    nombres.push(unNombre);
    console.log('Se agregó a: ', unNombre);
}

function mostrarLista(){
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = ""; 

    for (let i = 0; i < nombres.length; i++) {
        lista.innerHTML += "<li>" + nombres[i] + "</li>";
    }
}

function sortearAmigo(){
    let indiceAleatorio = Math.floor(Math.random() * nombres.length);
    let nombreElegido = nombres[indiceAleatorio];
    mostrarGanador(nombreElegido);
}

function mostrarGanador(nombreElegido){
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = 'El amigo secreto sorteado es: ' + nombreElegido; 
}
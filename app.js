// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let nombres = []

function agregarAmigo(){
    let unNombre = document.getElementById('amigo').value;
    alert(unNombre);
    limpiarInput()
}

function limpiarInput(){
    let valor = document.querySelector('#amigo');
    valor.value = '';
}
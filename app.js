// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Programado por DIEGOFM

// Array para almacenar los nombres de amigos
let amigos = [];

//Función para agregar un amigo
function agregarAmigo(){
    let inputAmigos = document.getElementById('amigo');
    let nombreAmigos = inputAmigos.value;
    
    if (!nombreAmigos) {
        alert('Por favor, ingrese un nombre válido');
        inputAmigos.focus();
    }
    else if (amigos.includes(nombreAmigos)){
        alert(`El nombre ${nombreAmigos} ya esta en la lista`);        
    }
    else {
        amigos.push(nombreAmigos);        
        console.log(amigos);
        //Mostrar la lista de amigos actualizada             
        let ulListaAmigos = document.getElementById('listaAmigos');
        ulListaAmigos.innerHTML += `<li> ${nombreAmigos} </li>`;
        limpiarCaja();  
        inputAmigos.focus();
    }
}

//Función para sortear un amigo
function sortearAmigo() {
    if(amigos.length === 0){
        alert("No hay amigos para sortear");
        return;
    }
    let indiceAmigos = Math.floor(Math.random()*amigos.length);
    let amigoSorteado = amigos[indiceAmigos];
    console.log(indiceAmigos);

    let ulResultado = document.getElementById('resultado');
    ulResultado.innerHTML = `El amigo secreto sorteado es: <strong> ${amigoSorteado} </strong>`;
    let limpiarLista = document.getElementById('listaAmigos');
    limpiarLista.innerHTML = '';
    limpiarCaja(); 
}

//Función para limpiar la caja de texto
function limpiarCaja() {
    document.querySelector('#amigo').value = '';    
}

let participantes = [];
let botonGanador = document.getElementById('ganador');

botonGanador.disabled = true;

function agregarParticipante() {
    let nombreParticipante = document.getElementById('participantes');
    
    if(nombreParticipante.value != "") {
        if(!participantes.includes(nombreParticipante.value)) {
            participantes.push(nombreParticipante.value);
            mostrarParticipantes();
            nombreParticipante.value = "";
            if(participantes.length > 1) {
                botonGanador.disabled = false;
            }
        } else {
            nombreParticipante.value = "";
            alert("Ese nombre ya está registrado");
        }
    } else {
        alert("Ingrese un nombre válido");
    }
}

function eliminarParticipante() {
    let nombreParticipante = document.getElementById('participantes');
    let indice = participantes.indexOf(nombreParticipante.value);

    if(nombreParticipante.value != "") {
        if(participantes.includes(nombreParticipante.value)){
            participantes.splice(indice, 1);
            alert("Participante eliminado");
            mostrarParticipantes();
            nombreParticipante.value = "";
            if(participantes.length <= 1) {
                botonGanador.disabled = true;
            }
        } else {
            alert("Ese nombre no existe en la lista");  
        }
    } else {
        alert("Ingrese un nombre válido");
    }
}

function mostrarParticipantes() {
    let listaParticipantes = document.getElementById('listaParticipantes');
    listaParticipantes.innerHTML = "";

    for(let elemento of participantes) {
        let itemLista = document.createElement('li');
        itemLista.innerText = elemento;
        itemLista.onclick = copiarTexto;
        listaParticipantes.appendChild(itemLista);
    }
}

function copiarTexto() {
    let nombreParticipante = document.getElementById('participantes');
    let texto = this.innerText;
    nombreParticipante.value = texto;
}

function ganadorAleatorio() {
    if(participantes.length != 0) {
        botonGanador.disabled = true;
        let listaParticipantes = document.getElementById('listaParticipantes');
        listaParticipantes.innerHTML = "";

        let maximo = participantes.length;

        let resultado = Math.floor(Math.random() * maximo);

        let itemLista = document.createElement('li');
        itemLista.innerText = participantes[resultado];
        itemLista.style.color = "white";
        itemLista.style.background = "green";
        listaParticipantes.appendChild(itemLista);
        alert(`Felicidades ${participantes[resultado]} eres el ganador`);
        participantes = [];
    }
}
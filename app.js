let amigos = [];
let listaSorteados = [];

document.getElementById('amigoForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    agregarAmigo();
});

function agregarAmigo() {
    const inputAmigo = document.getElementById("amigo");
    const nombreAmigo = inputAmigo.value.trim();

    if (nombreAmigo === "") {
        return alert("Por favor, inserte un nombre.");
    }

    if (amigos.includes(nombreAmigo)) {
        alert("Este nombre ya ha sido agregado.");
        return;
    }

    amigos.push(nombreAmigo);
    inputAmigo.value = "";
    actualizarLista();
}

function actualizarLista() {
    const ulamigos = document.getElementById("listaAmigos");
    ulamigos.innerHTML = "";

    amigos.forEach((amigo, index) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        li.setAttribute("role", "listitem");
        li.onclick = () => borrarAmigo(index); 
        ulamigos.appendChild(li);
    });
}

function borrarAmigo(index) {
    amigos.splice(index, 1);
    actualizarLista();
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    listaSorteados.push(amigoSorteado);
    amigos.splice(indiceAleatorio, 1);
    actualizarLista();
    mostrarResultado(amigoSorteado);
}

function mostrarResultado(amigo) {
    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.textContent = `El amigo secreto es: ${amigo}`;
}
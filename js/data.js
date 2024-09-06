// Obtener el dato almacenado en localStorage con la clave 'dato'
const storedData = localStorage.getItem("information");

// Mostrar el dato en el span con id 'data'
if (storedData) {
    document.getElementById("data").innerHTML = storedData;
} else {
    document.getElementById("data").innerHTML = "No hay datos almacenados.";
}

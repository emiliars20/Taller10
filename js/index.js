document.getElementById("buttonText").addEventListener("click", function() {
    const inputText = document.getElementById("inputText").value;
    
    // Guardar el valor en localStorage con la clave 'dato'
    localStorage.setItem("information", inputText);

    // Limpiar el campo de entrada
    document.getElementById("inputText").value = '';
});

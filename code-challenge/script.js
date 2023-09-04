document.getElementById('registroForm').addEventListener("submit", function(event){
    event.preventDefault(); // Evitar que el formulario se envíe de forma predeterminada
    
    // Obtener los valores del formulario
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const fechaNacimiento = document.getElementById('fechaNacimiento').value;
    const resultados = document.getElementById('resultados');

     // Crear un objeto con los datos del formulario
    const objetoData = {
        nombre: nombre,
        apellido: apellido,
        fechaNacimiento: fechaNacimiento

    };

    // Realizar la solicitud HTTP POST
    fetch("https://jsonplaceholder.typicode.com/users", {

    method: "POST",
    Headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(objetoData)
})
   .then(respones => respones.json())

   .then(data =>{
        resultados.style.display = "block";
        console.log("Datos enviados al servidor:", objetoData);
        resultados.innerHTML = `
        <h3>Resultados de la petición</h3>
        <p1><strong>Nombre:</strong> ${objetoData.nombre}</p1>
        <p1><strong>Apellido:</strong> ${objetoData.apellido}</p1><br>
        <p1><strong>Fecha de nacimiento:</strong> ${objetoData.fechaNacimiento}</p1><br>
        <button type="clean" display="inline-block" onclick="limpiarResultado()">Limpiar</button>`;
        
    })

    .catch(error =>{
    console.log("Error", error)
    });

    limpiarForm()
});

function limpiarForm() {
    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("fechaNacimiento").value = "";
}

function limpiarResultado() {
    resultados.style.display = "none";
}
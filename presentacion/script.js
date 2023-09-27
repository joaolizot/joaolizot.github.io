document.addEventListener("DOMContentLoaded", function () {
    var generatePhotosButton = document.getElementById("generatePhotos");
    var apiDiv = document.getElementById("API");
    var contenedorBotones = document.getElementById('contenedorBotones');

    generatePhotosButton.addEventListener("click", function () {
        apiDiv.innerHTML = ''; // Limpiamos el contenido actual del div

        // Generar 10 imágenes al azar desde la API de Lorem Picsum
        for (var i = 0; i < 12; i++) {
            var image = document.createElement("img");
            image.src = "https://picsum.photos/200/200/?random=" + Math.random();
            apiDiv.appendChild(image);
        }

        // Agregamos los botones de recargar y limpiar
        var reloadButton = document.createElement("button");
        reloadButton.textContent = "Recargar Fotos";
        reloadButton.classList.add("btn");
        reloadButton.classList.add("btn-light");
        reloadButton.classList.add("btn-primary");
        var clearButton = document.createElement("button");
        clearButton.textContent = "Limpiar";
        clearButton.classList.add("btn");
        clearButton.classList.add("btn-light");
        clearButton.classList.add("btn-secondary");


        contenedorBotones.appendChild(reloadButton);
        contenedorBotones.appendChild(clearButton);

        // Manejar la recarga de fotos
        reloadButton.addEventListener("click", function () {
            contenedorBotones.innerHTML = '';
            generatePhotosButton.click();
        });

        // Manejar la limpieza de la API
        clearButton.addEventListener("click", function () {
            apiDiv.innerHTML = '';
            apiDiv.appendChild(generatePhotosButton);
            contenedorBotones.innerHTML = '';

        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    var generatePhotosButton = document.getElementById("generatePhotos");
    var apiDiv = document.getElementById("API");
    var contenedorBotones = document.getElementById('contenedorBotones');
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

    var usedImageUrls = [];
    var maxImages = 15;
    
    generatePhotosButton.addEventListener("click", function () {
        apiDiv.innerHTML = ''; // Limpiamos el contenido actual del div
        generatePhotosButton.style.display = "none"; // Ocultar el botón "Generar Fotos"

        var generatedUrls = [];
        
        for (var i = 0; i < maxImages; i++) {
            var imageUrl;
            do {
                // Genera una URL única para cada imagen
                imageUrl = "https://picsum.photos/200/200/?random=" + Math.random();
            } while (usedImageUrls.includes(imageUrl) || generatedUrls.includes(imageUrl)); // Verifica si la URL ya se ha utilizado o generado
            
            generatedUrls.push(imageUrl); // Agrega la URL a la lista de imágenes generadas

            var card = document.createElement("div");
            card.classList.add("card");
            var image = document.createElement("img");
            image.src = imageUrl;

            card.appendChild(image);

            apiDiv.appendChild(card);
        }

        usedImageUrls = usedImageUrls.concat(generatedUrls);


        // Mostrar los botones de recargar y limpiar
        contenedorBotones.appendChild(reloadButton);
        contenedorBotones.appendChild(clearButton);
    });

    // Manejar la recarga de fotos
    reloadButton.addEventListener("click", function () {
        apiDiv.innerHTML = '';
        generatePhotosButton.style.display = "none"; // Ocultar el botón "Generar Fotos"
        reloadButton.style.display = "block"; // Ocultar el botón "Recargar Fotos"
        clearButton.style.display = "block"; // Ocultar el botón "Limpiar"
        generatePhotosButton.click();
    });

    // Manejar la limpieza de la API
    clearButton.addEventListener("click", function () {
        apiDiv.innerHTML = '';
        contenedorBotones.innerHTML = '';
        generatePhotosButton.style.display = "block"; // Mostrar el botón "Generar Fotos" nuevamente
    });
});

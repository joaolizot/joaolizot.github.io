const textElements = document.querySelectorAll('.carousel-text');
const randomTexts = ["...sunt in culpa qui officia deserunt mollit", " Duis aute irure dolor in reprehenderit", " Ut enim ad minim veniam..."];

function changeText() {
    const randomIndex = Math.floor(Math.random() * randomTexts.length);
    const randomLine = randomTexts[randomIndex];

    // Envuelve el texto aleatorio en la etiqueta <strong>
    const formattedText = `<strong><h4>${randomLine}</h4></strong>`;
    
    textElements[0].innerHTML = formattedText;
}

setInterval(changeText, 2000);

function mostrarOpciones() {
    // Obtén el contenedor de opciones por su id
    var opcionesContainer = document.getElementById("opcionesContainer");

    // Cambia el estilo de display del contenedor de opciones a "block"
    opcionesContainer.style.display = "block";
}
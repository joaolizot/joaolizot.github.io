const searchInput = document.getElementById('searchInput');
const resultsContainer = document.getElementById('results');
const buscar = document.getElementById('buscar');
const limpiar = document.getElementById('limpiar');
const contenedorAPI = document.getElementById("input-container");
const mostrarAPIbttn = document.getElementById('mostrarAPI');
const ocultarAPIbttn = document.getElementById('ocultarAPI');
let timeout;
searchInput.focus();

limpiar.style.display = 'none';
resultsContainer.style.display = 'none';

const clientId = '84dc6ab9a90e4e669efa5b8e94642f22';
const clientSecret = 'baabd3f4c07645b1938bc7850f04a418';


function mostrarAPI(){
window.location.href = 'API.html'
}


function searchMusic() {
    const searchText = searchInput.value.toLowerCase();
    
    buscar.style.display = 'none';
    searchInput.style.display = 'none';
    limpiar.style.display = 'none';
    searchInput.value = '';
    
    
    // Dividir la consulta en palabras
    const searchWords = searchText.split(' ');

    // Realiza una solicitud para obtener un token de acceso de Spotify
    fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
            'Authorization': 'Basic ' + btoa(clientId + ':' + clientSecret),
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: 'grant_type=client_credentials'
    })
    .then(response => response.json())
    .then(data => {
        const accessToken = data.access_token;

        // Utiliza el token de acceso para buscar canciones en Spotify
        fetch(`https://api.spotify.com/v1/search?q=${encodeURIComponent(searchText)}&type=track`, {
            headers: {
                'Authorization': 'Bearer ' + accessToken
            }
        })
        .then(response => response.json())
        .then(data => {
            // Verifica si se encontraron resultados de canciones
            if (data.tracks && data.tracks.items.length > 0) {
                const filteredTracks = data.tracks.items.filter(track => {
                    // Comprueba si todas las palabras de búsqueda están en el nombre de la canción, el nombre del artista o el nombre del álbum
                    return searchWords.every(word =>
                        track.name.toLowerCase().includes(word.toLowerCase()) ||
                        track.artists[0].name.toLowerCase().includes(word.toLowerCase()) ||
                        track.album.name.toLowerCase().includes(word.toLowerCase())
                    );
                });

                resultsContainer.innerHTML = ''; // Limpia resultados anteriores
                filteredTracks.forEach(track => {
                    resultsContainer.innerHTML += `
                        <div class="song-container">
                            <a id="spotifyLink" href="${track.external_urls.spotify}" target="_blank">
                            <img src="${track.album.images[0].url}" alt="Portada del Álbum">
                            </a>
                            <p><u>Nombre</u>: ${track.name}</p>
                            <p><u>Artista</u>: ${track.artists[0].name}</p>
                            <p><u>Álbum</u>: ${track.album.name}</p>
                            <audio controls>
                                <source src="${track.preview_url}" type="audio/mpeg">
                                Tu navegador no soporta la reproducción de audio.
                            </audio>
                        </div>
                    `;
                });
            } else {
                resultsContainer.innerHTML = '<p>No se encontraron resultados para esta canción/artista.</p>';
            }
            limpiar.style.display = 'block';
            resultsContainer.style.display = 'block';
            resultsContainer.style.display = 'flex';
            buscar.style.display = 'block';
            searchInput.style.display = 'block';
            resultsContainer.focus();
            
        })
        .catch(error => {
            console.error('Error al buscar la canción en Spotify:', error);
        });
    })
    .catch(error => {
        console.error('Error al obtener el token de acceso de Spotify:', error);
    });
}

function clearResults() {
    resultsContainer.style.display = 'none';
    resultsContainer.innerHTML = '';
    searchInput.value = '';
    limpiar.style.display = 'none'
}

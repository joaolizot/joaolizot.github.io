document.addEventListener('DOMContentLoaded', () => {
    const buscador = document.getElementById('buscador');
    const nombrePokemonInput = document.getElementById('nombre-pokemon');
    const detallesPokemonContainer = document.getElementById('detalles-pokemon');
    const limpiarBusquedaButton = document.getElementById('limpiar-busqueda');
    
    nombrePokemonInput.focus();

    buscador.addEventListener('submit', async (e) => {
        e.preventDefault();

        const nombrePokemon = nombrePokemonInput.value.toLowerCase();
        const apiUrl = `https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`;

        try {
            const response = await fetch(apiUrl);
            const data = await response.json();

            const types = data.types.map(type => type.type.name).join(`, `);
            const abilities = data.abilities.map(ability => ability.ability.name).join(', ');

            const pokemonDetails = `
                <h2>${data.name.toUpperCase()}</h2>
                <img src="${data.sprites.front_default}" alt="${data.name}">
                <p>Type: ${types}</p>
                <p>Abilities: ${abilities}</p>
            `;

            detallesPokemonContainer.innerHTML = pokemonDetails;
            limpiarBusquedaButton.style.display = 'block';
            buscador.style.display = 'none';
        } catch (error) {
            detallesPokemonContainer.innerHTML = `<p1>Pokémon not found.</p1>`;
        }
    });

    limpiarBusquedaButton.addEventListener('click', () => {
        detallesPokemonContainer.innerHTML = '';
        nombrePokemonInput.value = '';
        limpiarBusquedaButton.style.display = 'none';
        buscador.style.display = 'block';
    });
});
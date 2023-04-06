fetch('https://rickandmortyapi.com/api/character')
  .then(response => response.json())
  .then(data => {
    // Aquí se puede manipular la respuesta de la API antes de mostrarla en HTML
    console.log(data);

    // Seleccionar el contenedor HTML donde se mostrarán los personajes
    const charactersContainer = document.getElementById('characters-container');

    // Crear un elemento HTML para cada personaje y agregarlo al contenedor
    data.results.forEach(character => {
      const characterDiv = document.createElement('div');
      characterDiv.classList.add('character');

      const characterImg = document.createElement('img');
      characterImg.src = character.image;

      const characterName = document.createElement('h2');
      characterName.textContent = character.name;

      const characterStatus = document.createElement('p');
      characterStatus.textContent = `Estado: ${character.status}`;

      const characterSpecies = document.createElement('p');
      characterSpecies.textContent = `Especie: ${character.species}`;

      // Agregar los elementos creados a la tarjeta del personaje
      characterDiv.appendChild(characterImg);
      characterDiv.appendChild(characterName);
      characterDiv.appendChild(characterStatus);
      characterDiv.appendChild(characterSpecies);

      // Agregar la tarjeta del personaje al contenedor
      charactersContainer.appendChild(characterDiv);
    });
  })
  .catch(error => {
    console.error(error);
  });

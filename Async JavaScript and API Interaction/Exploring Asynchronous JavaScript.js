//Fetching Characters Using Fetch API//

const publicKey = 'eafa506bb50426c65ee68222dafd4ab9';
const baseUrl = 'https://gateway.marvel.com/v1/public/characters';

async function fetchCharacters() {
  try {
    const response = await fetch(`${baseUrl}?apikey=${publicKey}`);
    if (!response.ok) {
      throw new Error('Failed to fetch characters');
    }
    const data = await response.json();
    console.log(data.data.results); // Logs characters
    return data.data.results;
  } catch (error) {
    console.error('Error:', error);
  }
}

//Updating the User Interface Dynamically//
async function updateUI() {
  const characters = await fetchCharacters();
  const characterContainer = document.getElementById('character-container');

  characters.forEach((character) => {
    const characterDiv = document.createElement('div');
    characterDiv.innerHTML = `
      <h3>${character.name}</h3>
      <img src="${character.thumbnail.path}.${character.thumbnail.extension}" alt="${character.name}" />
      <p>${character.description || 'No description available.'}</p>
    `;
    characterContainer.appendChild(characterDiv);
  });
}

// Trigger the UI update on page load
window.addEventListener('load', updateUI);





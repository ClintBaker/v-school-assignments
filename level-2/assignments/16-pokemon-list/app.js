// URL: https://api.vschool.io/pokemon
// Create the new request
const xhr = new XMLHttpRequest();
// Open a GET request to the Pokemon V School API, with async set to true
xhr.open("GET", "https://api.vschool.io/pokemon", true);
// Send the request
xhr.send();

// When the XHR state changes, run this function (if SUCCESS, use the data)
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    const JSONdata = xhr.responseText;
    const data = JSON.parse(JSONdata);
    addToDOM(data.objects[0].pokemon);
  }
};

const pokemonListArea = document.getElementById("pokemon");
// add Pokemon to DOM
function addToDOM(pokemon) {
  // Loop over the pokemon and append each to the DOM
  pokemon.forEach((poke) => {
    // Create a new div
    const pokeDiv = document.createElement("div");
    // Assign an ID for the pokemon div so we can add more to it later
    pokeDiv.id = poke.name;
    // Create an h3 tag
    const pokeTitle = document.createElement("h3");
    // Adjust the text content to match
    pokeTitle.textContent = poke.name;
    // Append title to the container div
    pokeDiv.append(pokeTitle);
    // Append to DOM
    pokemonListArea.append(pokeDiv);
  });
}

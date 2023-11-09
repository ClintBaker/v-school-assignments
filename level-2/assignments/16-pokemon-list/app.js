// URL: https://api.vschool.io/pokemon
// Create the new request
const xhr = new XMLHttpRequest();
// Open a GET request to the Pokemon V School API, with async set to true
xhr.open("GET", "https://api.vschool.io/pokemon", true);
// Send the request
xhr.send();

// When the XHR state changes, run this function (if SUCCESS, use the data)
xhr.onreadystatechange = function () {
  // If state is 4 (returned from server) and status is 200:
  if (xhr.readyState === 4 && xhr.status === 200) {
    // Grab the XHR response text and store as var
    const JSONdata = xhr.responseText;
    // Parse the return using JSON.parse()
    const data = JSON.parse(JSONdata);
    // call the addToDOM function with the .objects[0].pokemon property of the return data
    addToDOM(data.objects[0].pokemon);
  }
};

// Define pokemonListArea (main div)
const pokemonListArea = document.getElementById("pokemon");
// add Pokemon to DOM
function addToDOM(pokemon) {
  // Loop over the pokemon and append each to the DOM
  pokemon.forEach((poke) => {
    // Create a new div
    const pokeDiv = document.createElement("div");
    // Assign an ID for the pokemon div
    pokeDiv.id = poke.name;
    // Create an h3 tag
    const pokeTitle = document.createElement("h3");
    // Adjust the text content to the Pokemon name
    pokeTitle.textContent = poke.name;
    // Append title H3 to the container div
    pokeDiv.append(pokeTitle);
    // Append to container div to main container
    pokemonListArea.append(pokeDiv);
  });
}

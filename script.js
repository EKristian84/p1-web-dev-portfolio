// Pang click sa search button
document.getElementById('batBtn').addEventListener('click', searchCharacter);

async function searchCharacter() {
    const input = document.getElementById('batSearch').value.toLowerCase();
    const totalCharacters = 83; // para sa 83 entries

    // Clear previous data
    clearPreviousData();

    // load message before fetch
    document.getElementById('loadingMessage').style.display = 'block';

    
    for (let id = 1; id <= totalCharacters; id++) {
        try {
            const response = await fetch(`https://api.batmanapi.com/v1/characters/${id}`);
            const data = await response.json();

            // Extract the name and alias, and make them lowercase for case-insensitive comparison
            const name = data.data.attributes.name.toLowerCase();
            const alias = data.data.attributes.alias.toLowerCase();

            // Check if the input matches the name or alias
            if (name.includes(input) || alias.includes(input)) {
                // Hide the loading message once data is found
                document.getElementById('loadingMessage').style.display = 'none';

                displayCharacter(data, id);  // character ID for the image
                return; // Stop loop if match is found
            }
        } catch (error) {
            console.error('Error fetching character:', error);

             // Hide loading message
             document.getElementById('loadingMessage').style.display = 'none';

             // Display a user-friendly error message
             document.getElementById('errorMessage').style.display = 'block';
             document.getElementById('errorMessage').textContent = "There was an issue fetching data, please try again later.";

            // Stop the loop on the first error
            return;
        }
    }

    // If no character matches the input, display this message
    document.getElementById('loadingMessage').style.display = 'none';
    document.getElementById('batName').textContent = "No Gotham records found with that name or alias.";
    document.getElementById('batAlias').textContent = "";
    document.getElementById('batAlive').textContent = "";
    document.getElementById('batRole').textContent = "";
    document.getElementById('batDescription').textContent = "";
    document.getElementById('batGender').textContent = "";
    document.getElementById('batAbilities').textContent = "";
}

// Function to display character information
function displayCharacter(data, id) {
    const div = document.getElementById('batName');
    div.textContent = 'Name: ' + data.data.attributes.name;

    const div2 = document.getElementById('batAlias');
    div2.textContent = 'Alias: ' + data.data.attributes.alias;

    const div3 = document.getElementById('batAlive');
    div3.textContent = 'Alive: ' + data.data.attributes.alive;

    const div4 = document.getElementById('batRole');
    div4.textContent = 'Role: ' + data.data.attributes.role;

    const div5 = document.getElementById('batDescription');
    div5.textContent = 'Description: ' + data.data.attributes.description;

    const div6 = document.getElementById('batGender');
    div6.textContent = 'Gender: ' + data.data.attributes.gender;

    const div7 = document.getElementById('batAbilities');
    div7.textContent = 'Abilities: ' + data.data.attributes.abilities;

    // character image
    const imgDiv = document.getElementById('batImage');
    const img = document.createElement('img');
    img.src = `batpics/${id}.jpg`;  // Image path based on character ID
    img.alt = data.data.attributes.name;
    img.style.width = '200px'; //  image size 
    img.style.marginTop = '10px'; //  margin 
    imgDiv.innerHTML = ''; // Clear any previous image
    imgDiv.appendChild(img);
}

// Function to clear previous data
function clearPreviousData() {
    document.getElementById('batName').textContent = "";
    document.getElementById('batAlias').textContent = "";
    document.getElementById('batAlive').textContent = "";
    document.getElementById('batRole').textContent = "";
    document.getElementById('batDescription').textContent = "";
    document.getElementById('batGender').textContent = "";
    document.getElementById('batAbilities').textContent = "";

    // Clear previous image
    document.getElementById('batImage').innerHTML = '';

    // Show the loading message
    document.getElementById('loadingMessage').style.display = 'block';
}

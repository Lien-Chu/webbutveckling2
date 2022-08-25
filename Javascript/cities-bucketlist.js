/* Set a Array variable to citiesArray. */
let i = 0;
let citiesArray = [];
let cityName = ['cityName1', 'cityName2', 'cityName3', 'cityName4', 'cityName5']

/* Set an Enter key press event to add the city button. */
window.onkeypress = function (event) {
    if (event.which == 13) {
        addCities();
    }
}

function addCities() {
        // execute addArray function. 
        addArray();
        // Set input become empty after reading the input.
        document.getElementById('getCityName').value = "";   
}

// Create a function to set the input to Array's index and set it to an element with a unique id.
function addArray() {
    // Select the input element corresponding to the HTML and assign to array's index.
    citiesArray[i] = document.getElementById('getCityName').value;
    citiesArray.push(citiesArray[i]);

    //Assign array's index to display output array.
    document.getElementById(cityName[i]).innerHTML = capitalize(citiesArray[i]);
   
    // Keep the input within definition.
    i++;
    if (i == citiesArray.length)
        i = 0;
}

// Create a function to sort the Array. 
function sortCities() {
    for (let i = 0; i < cityName.length; i++) {
        citiesArray.sort();
        document.getElementById(cityName[i]).innerHTML = (i + 1) + ": " +  capitalize(citiesArray[i]);
    }
}

// Create a function to upper case the list of array. 
function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}




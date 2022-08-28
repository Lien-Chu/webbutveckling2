/* Set a Array variable to citiesArray. */
let i = 0;
let citiesArray = [];
let cityName = ['cityName1', 'cityName2', 'cityName3', 'cityName4', 'cityName5']

/* Set an onclick event to add the city button. */
document.getElementById('cityNamebtn').onclick = function () {
    // execute addArray function. 
    addArray();
    // Set input become empty after reading the input.
    document.getElementById('getCityName').value = "";
}

// Create a function to set the input to Array's index and set it to an element with a unique id.
function addArray() {
    // Select the input element corresponding to the HTML and assign to array's index.
    citiesArray.push(document.getElementById('getCityName').value);
    //Assign array's index to display output element.
    document.getElementById(cityName[i]).innerHTML = capitalize(citiesArray[i]);
    // Keep the input within definition.
    i++;
    if (i == citiesArray.length + 1)
        i = 0;
}

// Create a function to sort the Array. 
document.getElementById('sortCitiesbtn').onclick = function () {
    // Set the method let elements to sorts in < numerical < alphabetical.
    citiesArray.sort();
  
    
    for (let i = 0; i < citiesArray.length; i++) {
        if (cityName[i] != undefined){
             // Listup array and set the sorted array to display output element.
        document.getElementById(cityName[i]).innerHTML = (i + 1) + ": " + capitalize(citiesArray[i]);
        }
        
    }
    
     
}

// Create a function to upper case the list of array. 
function capitalize(string) {
    if (string == undefined){
        return ""
    }
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}




// /* Set a Array variable to citiesArray. */
// let i = 0;
// let citiesArray = ['', '', '', '', ''];
// let cityName = ['cityName1', 'cityName2', 'cityName3', 'cityName4', 'cityName5']

// window.onkeypress = function (event) {
//     if (event.which == 13) {
//         addCities();
//     }
// }

// document.querySelector('#cityNameSubmit').onclick = function () {
//     addCities();
// }

// document.querySelector('#sortCities').onclick = function sort() {
//     citiesArray.forEach(element => {
//         citiesArray.sort();
//    });

// }


// function addCities() {  
//         input = document.getElementById('getCityName').value;
//         upperinput = capitalizeFirstLetter(input);
//         citiesArray[i] = upperinput;
//         document.getElementById(cityName[i]).innerHTML = citiesArray[i];
//         getCityName.value = " ";
//         i++;
//         if (i == citiesArray.length)
//         {i = 0;}     
// }

// function addCities() {
//     citiesArray[i] = document.getElementById('getCityName').value;
//     document.getElementById(cityName[i]).innerHTML = capitalizeFirstLetter(citiesArray[i]);
//     document.getElementById('getCityName').value = " ";
//     i++;
//     if (i == citiesArray.length)
//         i = 0;
// }


let citiesArray = [];
let cityName = [];
let i = 0;


/* Set an onclick event to add the city button. */
document.querySelector('#cityNameSubmit').onclick = function () {
    addCities();
}

/* Create a function to execute all functions at same time. */
function addCities() {
    /* Set an alert to remind user input is empty. */
    if (document.querySelector('#getCityName').value.length == 0) {
        alert("Pelase Enter a city's Name")
    }
    else {
        /* execute addArray function. */
        addArray();
        /* Set input value to empty after it is submitted. */
        getCityName.value = "";
    }
}

window.onkeypress = function (event) {
    if (event.which == 13) {
        addCities();
    }
}

function addArray() {
    items = document.querySelector('#getCityName').value;
    citiesArray.push(items);
    document.querySelector('#cityName1').innerHTML = citiesArray[0];
    document.querySelector('#cityName2').innerHTML = citiesArray[1];
    document.querySelector('#cityName3').innerHTML = citiesArray[2];
    document.querySelector('#cityName4').innerHTML = citiesArray[3];
    document.querySelector('#cityName5').innerHTML = citiesArray[4];
    console.log(citiesArray);
    cityName = citiesArray.map(capitalizeFirstLetter);
    console.log(citiesArray);
}

    function capitalizeFirstLetter(string) {
    return string[0].toUpperCase(0) + string.slice(1);
}

 function sortCities() 
 {
    for (let i = 0; i < cityName.length; i++) {
        cityName[i].innerHTML = citiesArray[i]
    }
    cityName.sort();
    console.log(cityName);
}



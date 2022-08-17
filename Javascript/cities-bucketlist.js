// let cityNameButton = document.getElementById('cityNameSubmit');
// let citiesList = document.getElementById('cltiesListItems');
// let cityNameInput = document.getElementById('cityName');


// cityNameButton.addEventListener('click', function (){
//     var listItem = document.createElement('p');
//     listItem.classList.add('listItem-styling');
//     listItem.innerText = cityNameInput.value;
//     citiesList.appendChild(listItem);
//     cityNameInput.value = " ";
//     listItem.addEventListener('click', function (){
//         listItem.style.textDecoration = "line-through";
//     })
//     listItem.addEventListener('dblclick', function (){
//         citiesList.removeChild(listItem);
//     })
// })

let cityNameButton = document.getElementById('cityNameSubmit');
let citiesList = document.getElementById('cltiesListItems');
let cityNameInput = document.getElementById('cityName');

cityNameButton.addEventListener('click', function () {
    var listItemCheck = document.createElement('input');
    listItemCheck.type = "button";
    listItemCheck.value = 'Check';
    citiesList.appendChild(listItemCheck);
    listItemCheck.classList.add('checkInput-styling');
    listItemCheck.addEventListener('click', function () {
        listItem.style.textDecoration = "line-through"
    })
    listItemCheck.addEventListener('dblclick', function () {
        listItem.style.textDecoration = "none";
    })

    var listItem = document.createElement('p');
    listItem.classList.add('listItem-styling');
    listItem.innerText = cityNameInput.value;
    citiesList.appendChild(listItem);
    cityNameInput.value = " ";

    var deleteButton = document.createElement('input');
    deleteButton.type = "button";
    deleteButton.value = 'X';
    citiesList.appendChild(deleteButton);
    deleteButton.classList.add('deleteButton-styling');
    deleteButton.addEventListener('click', function () {  
        citiesList.removeChild(listItem);
        citiesList.removeChild(listItemCheck);
        citiesList.removeChild(deleteButton);    
    })
})



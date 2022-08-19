
document.querySelector('#cityNameSubmit').onclick = function () {
        addCities();
}


window.onkeypress = function (event) {
        if (event.which == 13) {
                addCities();
        }
}


function addArray() {
        const citiseArray = [];
        items = document.querySelector('#getCityName').value;
        citiseArray.push(items); 
}

function addCities() {
        if (document.querySelector('#getCityName').value.length == 0) {
                alert("Pelase Enter a city's Name")
        }
        else {
                document.querySelector('#cltiesListItems').innerHTML += `
        <div class="task">
            <span id="cityName">
                ${document.querySelector('#getCityName').value}
            </span>
            <button class="delete">Delete</i></button>
        </div>`;
                addArray();
                document.querySelector('#getCityName').value = " ";
                deletArray = document.querySelectorAll(".delete");
                for (let i = 0; i < deletArray.length; i++) {
                        deletArray[i].onclick = function () {
                                this.parentNode.remove();
                        }
                }
        }
}
   


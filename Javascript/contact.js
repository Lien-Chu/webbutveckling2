$(document).ready(function () {
    // Show the image with fadeTo effect.
    $(".image").fadeTo("slow", 0.4);
    $(".image").fadeTo("slow", 1);
    // Hide the thankyou.png image.
    $("#hide").hide();
    // Hide the please.png image.
    $("#show").hide();
    // Show the plesse.png with fadeIn effect.
    $("#show").fadeTo("slow", 0.4);
    $("#show").fadeTo("slow", 1);

    // Set a function for save file 
    function saveFile() {
        // Hämta data från varje element i formuläret.
        const name = document.getElementById('txtName');
        const email = document.getElementById('txtEmail');
        const city = document.getElementById('selCity');
        const msg = document.getElementById('msg');
        // Denna variabel lagrar all data.
        let data = '\r Name: ' + name.value + ' \r\n ' +
            'Email: ' + email.value + ' \r\n ' +
            'City: ' + city.value + ' \r\n ' +
            'Message: ' + msg.value;

        // Konvertera texten till BLOB.
        const textToBLOB = new Blob([data], { type: 'text/plain' });
        // Fil för att spara data.
        const sFileName = 'formData.txt';
        // Skapa en länk som kommer att ha en nedladdningsbar URL skapad från blob-objektet
        let newLink = document.createElement("a");
        newLink.download = sFileName;
        if (window.webkitURL != null) {
            newLink.href = window.webkitURL.createObjectURL(textToBLOB);
        }
        else {
            newLink.href = window.URL.createObjectURL(textToBLOB);
            newLink.style.display = "none";
            document.body.appendChild(newLink);
        }
        newLink.click();
    }

    // Set a blur function to hide the plesse.png with fadeOut effect when user start to fill form.
    $('form :input').blur(function (e) {
        e.preventDefault();
        // Hide the plesse.png with fadeOut effect.
        $("#show").fadeOut(1000);
    })

    // Set function for to check the input values when button is onclick.
    $("#bt").on("click", function () {
        const theName = $('#txtName').val();
        const theMsg = $('#msg').val();
        const theEmail = $('#txtEmail').val();
        $(".error").remove();
        // Verify User Name Format.
        if (theName.length < 1) {
            // Set a bounce effect to notify the user the input is invalid.
            $('#txtName').effect("bounce", 800);
            // Add a CSS style to notify the user the input is invalid.
            $('#txtName').addClass('invalid');
            // Add a error message to notify the user the input is invalid.
            $('#txtName').after('<span class="error">Please enter a username. </span>');
        } else {
             // Remove the CSS style to notify the user the input is valid.
            $('#txtName').removeClass('invalid');
        }
        // Verify User Email Format.
        if ((theEmail.length == 0) || (theEmail !== "" && !/.+@.+\.[a-zA-Z]{2,4}$/.test(theEmail))) {
            $('#txtEmail').effect("bounce", 800);
            $('#txtEmail').addClass('invalid');
            $('#txtEmail').after('<span class="error">Please enter the correct E-mail address.</span>');
        } else {
            $('#txtEmail').removeClass('invalid');
            validEmail = true;
        }
        //Verify select Format.
        if ($('#selCity option:selected').val() !== "") {
            $('#selCity').removeClass('invalid');
        } else {
            $('#selCity').effect("bounce", 800);
            $('#selCity').addClass('invalid');
            $('#selCity').after('<span class="error"> Please choose a city.</span>');
        }
        //Verify Message Format
        if (theMsg.length < 1) {
            $('#msg').effect("bounce", 800);
            $('#msg').addClass('invalid');
            $('#msg').after('<span class="error">Please leave a message.</span>');
        } else {
            $('#msg').removeClass('invalid');
        }
        //Verify all format to save file
        if ((!theName.length < 1) && (!theMsg.length < 1) && (!theEmail.length < 1) && validEmail && ($('#selCity option:selected').val() !== "")) {
            saveFile()
            // Show the thankyou.png with fadeIn effect and animation callback function.
            $("#hide").slideDown(1500)
;               
            
        }
    });
});

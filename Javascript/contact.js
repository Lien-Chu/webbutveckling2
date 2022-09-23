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
    // Lock the button.
    document.getElementById("bt").disabled = true;
    // Example code to prevent sending file before the form is ready
    function preventSave() {
        document.getElementById("bt").disabled = true;
    }

    // Set function for save the file and shows the please.png with animation.
    $("#bt").click(function () {
        saveFile()
        // Show the thankyou.png with fadeIn effect and animation callback function.
        $("#hide").fadeIn(1500, function () {
            $("#hide").animate({
                transition: 2,
                top: 100,
                width: '100%'
            })
        });
        // Hide the button after save file.
        $("#bt").hide();
    });

    // Save file code in a function
    function saveFile() {
        // Get the data from each element on the form.
        const name = document.getElementById('txtName');
        const email = document.getElementById('txtEmail');
        const city = document.getElementById('selCity');
        const msg = document.getElementById('msg');

        // This variable stores all the data.
        let data = '\r Name: ' + name.value + ' \r\n ' +
            'Email: ' + email.value + ' \r\n ' +
            'City: ' + city.value + ' \r\n ' +
            'Message: ' + msg.value;

        // Convert the text to BLOB.
        const textToBLOB = new Blob([data], { type: 'text/plain' });
        // Set the file to save the data.
        const sFileName = 'formData.txt';

        // Create a link which will have downloadable URL created from the blob object. 
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


    // Set a function to check the input values when focus is removed from the input.
    $('form :input').blur(function (e) {
        e.preventDefault();
         // Hide the plesse.png with fadeOut effect.
        $("#show").fadeOut(1000);
        var $parent = $(this).parent();
        $parent.find(".formtips").remove();

        // Verify User Name Format.
        if ($(this).is('#txtName')) {
            // Set the invalid conditions.
            if (this.value == "" || this.value.length < 3) {
                // Add a CSS style to notify the user the input is invalid.
                $(this).effect("bounce", 800);
                $(this).css("border", "2px solid #ff6666");
                // Add a error message to notify the user the input is invalid.
                var errorMessage = 'Please enter a username of at least 3 characters.';
                // Create a span to show the error message.
                $parent.append('<span class="formtips onError"><br><br>' + errorMessage + '</span>');
            }
            else {
                // Unlock the next input.
                $('#txtEmail').attr('disabled', false);
            }
        }

        // Verify Email Format.
        if ($('#txtEmail').prop('disabled') == false) {
            if ($(this).is('#txtEmail')) {
                // Set the invalid conditions.
                if (this.value == "" || (this.value !== "" && !/.+@.+\.[a-zA-Z]{2,4}$/.test(this.value))) {
                    // Set a bounce effect to notify the user the input is invalid.
                    $(this).effect("bounce", 800);
                     // Set a CSS style to notify the user the input is invalid.
                    $(this).css("border", "2px solid #ff6666");
                    // Add a error message to notify the user the input is invalid.
                    var errorEmailMessage = 'Please enter the correct E-mail address.';
                    // Create a span to show the error message.
                    $parent.append('<span class="formtips onError"><br><br>' + errorEmailMessage + '</span>');
                }
                else {
                    // Unlock the next input.
                    $('#selCity').attr('disabled', false);
                }
            }
        }

        //Verify select Format
        if ($('#selCity').prop('disabled') == false) {
            // Set the valid conditions.
            if ($('#selCity option:selected').val() !== "") {
                // Unlock the next input.
                $('#msg').attr('disabled', false);
            }
            else {
               
                // Set a bounce effect to notify the user the input is invalid.
                $(this).effect("bounce", 800);
                 // Set a CSS style to notify the user the input is invalid.
                $(this).css("border", "2px solid #ff6666");
                // Add a error message to notify the user the input is invalid.
                var errorSelectMessage = 'Please choose a city.';
                // Create a span to show the error message.
                $parent.append('<span class="formtips onError"><br><br>' + errorSelectMessage + '</span>');
            }
        }

        //Verify Message Format
        if ($('#msg').prop('disabled') == false) {
            if ($(this).is('#msg')) {
                // Set the invalid conditions.
                if (this.value == "") {
                    // Set a bounce effect to notify the user the input is invalid.
                    $(this).effect("bounce", 1000);
                     // Set a CSS style to notify the user the input is invalid.
                    $(this).css("border", "2px solid #ff6666");
                    // Add a error message to notify the user the input is invalid.
                    var errorMsgMessage = 'Please leave a message.';
                    // Create a span to show the error message.
                    $parent.append('<span class="formtips onError"><br><br>' + errorMsgMessage + '</span>');
                }
                else {
                    // Unlock the button.
                    document.getElementById("bt").disabled = false;
                    // Set CSS style to show the button is available.
                    $('#bt').css("border", "2px solid #228B22");
                }
            }
        }
    })
});

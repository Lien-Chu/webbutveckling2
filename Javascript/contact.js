$(document).ready(function () {
    // Hides thankyou.png
    $("#hide").hide();
    // Hides please.png
    $("#show").hide();
    // Show the plesse.png with animation.
    $("#show").fadeIn(1500);
    document.getElementById("bt").disabled = true;

    // Example code to prevent sending file before the form is ready
    function preventSave() {
        document.getElementById("bt").disabled = true;
    }

    // At click send file then shows the plesse.png with animation.
    $("#bt").click(function () {
        saveFile()
        $("#show").fadeOut(1000, function () {
            $("#hide").fadeIn(1500, function () {
                $("#hide").animate({
                    transition: 2,
                    top: 100,
                    width: '90%'
                })
            });
        });
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
        const sFileName = 'formData.txt'; // The file to save the data.

        // Create a link which will have downloadable URL created from the blob object 
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

    $('form :input').blur(function () {
        $("#show").hide();
        var $parent = $(this).parent();
        $parent.find(".formtips").remove();
        
        //Verify User Name Format
        if ($(this).is('#txtName')) {
            if (this.value == "" || this.value.length < 3) {
                $(this).addClass("invalid");
                var errorMessage = 'Please enter a username of at least 3 characters.';
                $parent.append('<span class="formtips onError"><br><br>' + errorMessage + '</span>');
            }
            else {
                $(this).addClass("valid");
                $('#txtEmail').attr('disabled', false);
            }
        }

        //Verify Email Format
        if ($('#txtEmail').prop('disabled') == false) {
            if ($(this).is('#txtEmail')) {
                if (this.value == "" || (this.value == "" && !/.+@.+\.[a-zA-Z]{2,4}$/.test(this.value))) {
                    $(this).addClass("invalid");
                    var errorEmailMessage = 'Please enter the correct E-mail address.';
                    $parent.append('<span class="formtips onError"><br><br>' + errorEmailMessage + '</span>');
                }
                else {
                    $(this).addClass("valid");
                    $('#selCity').attr('disabled', false);
                }
            }
        }

        //Verify select Format
        if ($('#selCity').prop('disabled') == false) {
            if ($('#selCity option:selected').val() !== "") {
                $('#msg').attr('disabled', false);
                $('#selCity').addClass("valid");
            }
            else {
                $(this).addClass("invalid");
                var errorSelectMessage = 'Please choose a city.';
                $parent.append('<span class="formtips onError"><br><br>' + errorSelectMessage + '</span>');
            }
        }

        //Verify Message Format
        if ($('#msg').prop('disabled') == false) {
            if ($(this).is('#msg')) {
                if (this.value == "") {
                    $(this).addClass("invalid");
                    var errorMsgMessage = 'Please leave a message.';
                    $parent.append('<span class="formtips onError"><br><br>' + errorMsgMessage + '</span>');
                }
                else {
                    $(this).addClass("valid");
                    document.getElementById("bt").disabled = false;
                    $('#bt').addClass("bt");
                }
            }
        }
    })
});

$(document).ready( function(){
    // Hides thankyou.png
    $("#hide").hide();
    // Hides please.png
    $("#show").hide();
    // Show the plesse.png with animation.
    $("#show").fadeIn(1500);
    document.getElementById("bt").disabled = false;

    // At click send file then shows the plesse.png with animation.
    $("#bt").click(function(){
            saveFile()          
            $("#show").fadeOut(1000,function(){
                $("#hide").fadeIn(1500,function(){
                    $("#hide").animate({
                        transition:2,
                        top:100,
                        width:'300px'
                    })
                });
            });         
             alert('Form has been sent');
    });

    // Example code to prevent sending file before the form is ready
    function preventSave() {
        document.getElementById("bt").disabled = true;
    }
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
});

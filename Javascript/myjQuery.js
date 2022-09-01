$(document).ready(function () {
    const topnav = $('.topnav'),
        animateTime = 1000,
        navLink = $('topnav .icon');
    $('.icon').click(function () {
        if (topnav.height() === 0) {
            autoHeightAnimete(topnav, animateTime)
        } else {
            topnav.stop().animate({ height: '0' }, animateTime);
        }
    });

    function autoHeightAnimete(element, time) {
        let curHeight = element.height(),
            autoHeight = element.css('height', 'auto').height();
        element.height(curHeight);
        element.stop().animate({ height: autoHeight }, parseInt(time));
    }
})

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
  
$(document).ready(function() {

    $('#slides').superslides({

            animation: "fade",
            play: 5000

    });

    var typed = new Typed(".typed", {

        strings: ['software developer', 'World Traveler', 'Codeup Student'],
        typeSpeed: 70,
        loop: true,
        startDelay: 1000,
        showCursor: false
    });


});
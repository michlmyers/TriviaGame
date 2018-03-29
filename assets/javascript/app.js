var startTimeout;
var countDown = 40;
var intervalId;

$(document).ready(function () {

    $("#start").on("click", run);
// setting the run function 
    function run() {
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
    }

// setting the countdown function 
    function decrement() {
        countDown--;
        $("#counter").html("<h2>" + countDown + "</h2>");
        if (countDown === 0) {
            stop();
            console.log("My Stop has worked");
            alert("You fuggin lost!");
        }
    }

// setting the stop function
    function stop() {
        clearInterval(intervalId);
    }

/*  will likely pull this out. Just testing a countdown
    $("#start").on("click", function () {
        console.log("click worked");
        startTimeout = setTimeout(function () {
            alert("Out of time!");
        }, 1000 * 10);
    }); */

    // run();    

});
var startTimeout;
var countDown = 10;
var intervalId;
var myAnswers = ['Tesla', 'Gremlins', 'Ghostbusters', 'Stanley Kubrick', 'Tony Montana'];

$(document).ready(function () {

    $("#start").on("click", run);

    // setting the run function 
    function run() {
        // unhide the game questions
        $('#fullGame').removeClass('hidden');
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);

        // set correct answers

        // capture user selection and place to variable
        $('#questionOne input').on('click', function() {
            console.log($('input[name=backFuture]:checked', '#questionOne').val()); 
        });
        $('#questionTwo input').on('click', function() {
            console.log($('input[name=gizMo]:checked', '#questionTwo').val()); 
        });
        $('#questionThree input').on('click', function() {
            console.log($('input[name=gBuster]:checked', '#questionThree').val()); 
        });
        $('#questionFour input').on('click', function() {
            console.log($('input[name=shine]:checked', '#questionFour').val()); 
        });
        $('#questionFive input').on('click', function() {
            console.log($('input[name=alPac]:checked', '#questionFive').val()); 
        });

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

});
var startTimeout;
var countDown = 11;
var intervalId;
// corrent answer array

var userAnswers = [];
var right = 0;
var wrong = 0;

$(document).ready(function () {

    $("#start").on("click", run);

    // setting the run function 
    function run() {
        // unhide the game questions
        $('#fullGame').removeClass('hidden');
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
            alert("You ran out of time!");
        }
    }

    // setting the function collect selected radio buttons at stop
    function getUserAnswers() {
        userAnswers = [$('input[name=backFuture]:checked').val(),
        $('input[name=gizMo]:checked').val(), $('input[name=gBuster]:checked').val(),
        $('input[name=shine]:checked').val(), $('input[name=alPac]:checked').val(),];
        console.log(userAnswers);
    }

    // set the fuction to score the answers and tally    
    function scoreAnswers() {
        var myAnswers = ['DeLorean', 'Gremlins', 'Ghostbusters', 'Stanley Kubrick', 'Tony Montana'];
        var matches = [];
        for (var i = 0; i < userAnswers.length; i++) {
            for (var j = 0; j < myAnswers.length; j++) {
                if (userAnswers[i] === myAnswers[j]) matches.push(userAnswers[i]);
            }
        }
        console.log(matches.length);
        $('#fullGame').addClass('hidden');
        $('#playerRight').text('YOU GOT THIS MANY RIGHT: ' + matches.length);
        $('#playerWrong').text('YOU GOT THIS MANY WRONG: ' + (5 - matches.length));
    }

    // function to run stop if user clicks finished

    // setting the stop function
    function stop() {
        clearInterval(intervalId);
        getUserAnswers();
        scoreAnswers();
    }

});
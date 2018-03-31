var startTimeout;
var countDown = 10;
var intervalId;
// corrent answer array
var myAnswers = ['Tesla', 'Gremlins', 'Ghostbusters', 'Stanley Kubrick', 'Tony Montana'];
var userAnswers = [];

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
            alert("You fuggin lost!");
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
    function scoreAnswers(){
        
    }

    // setting the stop function
    function stop() {
        clearInterval(intervalId);
        getUserAnswers();
    }

});
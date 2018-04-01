var startTimeout;
var countDown = 16;
var intervalId;
var userAnswers = [];
var right = 0;
var wrong = 0;

$(document).ready(function () {

    // adding link for audio
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', 'assets/audio/Gremlins.mp3');

    $('#start').on('click', run);

    // setting the run function 
    function run() {
        // unhide the game questions
        $('#fullGame').removeClass('hidden');
        clearInterval(intervalId);
        audioElement.load();
        audioElement.play();
        $('#start').addClass('hidden');
        $('#replay').addClass('hidden');
        intervalId = setInterval(decrement, 1000);
    }

    // setting the countdown function 
    function decrement() {
        countDown--;
        $('#counter').html('<h2>' + countDown + '</h2>');
        $('h2').css({ 'background-color': 'purple', 'width': '30px', 'padding': '5px' });
        if (countDown === 0) {
            stop();
            alert("Wait a minute. Wait a minute, Doc. Ah... Are you telling me that you built a time machine... out of a DeLorean?");
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
        $('#playerRight').text('TOTALLY RADICAL CHOICES: ' + matches.length);
        $('#playerWrong').text('WRONG-O-RAMA: ' + (5 - matches.length));
    }

    // call stop if user clicks finished
    $('#finished').on('click', stop);

    // function run if user clicks replay
    function restart() {
        // localStorage.clear();
        countDown = 16;
        $('#playerRight').text('');
        $('#playerWrong').text('');
        run();
        $('#q1Choice1').prop('checked', true);
        $('#q2Choice1').prop('checked', true);
        $('#q3Choice1').prop('checked', true);
        $('#q4Choice1').prop('checked', true);
        $('#q5Choice1').prop('checked', true);
    }

    // call restart if user clicks replay
    $('#replay').on('click', restart);

    // setting the stop function
    function stop() {
        clearInterval(intervalId);
        getUserAnswers();
        scoreAnswers();
        audioElement.pause();
        $('#replay').removeClass('hidden');
    }

});
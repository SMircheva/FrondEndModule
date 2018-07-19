function timer() {
    let running = false;

    $('#start-timer').on('click', startTimer);
    $('#stop-timer').on('click', stopTimer);

    let hours = $('#hours').text();
    let minutes = $('#minutes').text();
    let seconds = $('#seconds').text();

    function startTimer () {

        if (!running) {
            running = true;

            timer = setInterval(step, 1000);

            function step() {
                seconds++;
                $('#seconds').text(seconds < 10 ? ('0' + seconds.toString()) : seconds);


            if (seconds === 59) {
                minutes++;
                $('#minutes').text(minutes < 10 ? ('0' + minutes.toString()) : minutes);

                seconds = 0;
            }

            if (minutes === 59) {
                hours++;
                $('#hours').text(hours < 10 ? ('0' + hours.toString()) : hours);

                minutes = 0;
            }

        }
        }
    }

    function stopTimer() {
        clearInterval(timer);
    }
}
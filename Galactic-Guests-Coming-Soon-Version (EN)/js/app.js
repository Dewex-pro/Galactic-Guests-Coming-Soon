// Set the date we're counting down to

let countDownDate = new Date("sep 13, 2020 21:00:00").getTime();

// Update the count down every 1 second

let countdownfunction = setInterval(function () {

    // Get todays date and time

    let now = new Date().getTime();

    // Find the distance between now an the count down date

    let distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element  in Own Variables

    let daysInHTML = document.getElementById('daysNumber');
    let hoursInHTML = document.querySelector('#hoursNumber');
    let minutesInHTML = document.querySelector('#minutesNumber');
    let secondsNumber = document.querySelector('#secondsNumber');


    // send The Own Value into HTML

    daysInHTML.innerHTML = days;
    hoursInHTML.innerHTML = hours;
    minutesInHTML.innerHTML = minutes;
    secondsNumber.innerHTML = seconds;



    // If the count down is over, write some text 

    if (distance < 0) {
        clearInterval(countdownfunction);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);

countdownfunction()
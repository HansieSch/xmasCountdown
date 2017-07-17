var daysDisplay = document.querySelector(".days");
var hoursDisplay = document.querySelector(".hours");
var minutesDisplay = document.querySelector(".minutes");
var secondsDisplay = document.querySelector(".seconds");

var currentYear = (new Date()).getFullYear();

var intervalId = setInterval(function () {
    var timeToXmas = updateTime();

    // Set days display.
    daysDisplay.innerText = timeToXmas[0];

    // Set hours display.
    hoursDisplay.innerText = timeToXmas[1];

    // Set minutes display.
    minutesDisplay.innerText = timeToXmas[2];

    // Set seconds display.
    secondsDisplay.innerText = timeToXmas[3];
}, 500);

function updateTime() {
    var currentDate = Date.now();
    
    // Midnight of the night before christmas.
    //var xMasDate = (new Date(currentYear, 11, 25, 00, 00)).getTime(); // Midnight of the night before christmas.
    var xMasDate = new Date("Dec 24 " + (new Date()).getFullYear() + " 23:59:59 GMT+0200 (South Africa Standard Time)").getTime();

    var millisecondsTilChristmas = xMasDate - currentDate;

    var x = millisecondsTilChristmas / 1000;
    var seconds = throwAwayDecimal(x) % 60;
    //var seconds = Math.round(x) % 60;
    x /= 60;
    var minutes = throwAwayDecimal(x) % 60;
    //var minutes = (x) % 60;
    x /= 60;
    var hours = throwAwayDecimal(x) % 24;
    //var hours = Math.round(x) % 24;
    x /= 24;
    var days = throwAwayDecimal(x);
    //var days = Math.round(x);

    //console.log(days, ":", hours, ":", minutes, ":", seconds);
    return [days, hours, minutes, seconds];
}

function throwAwayDecimal(deci) {
    return (deci.toString().split(".")[0]);
}
var date = new Date('April 11, 2015').getTime();
var days, hours, minutes, seconds;
var el_days = $("#days");
var el_hours = $("#hours");
var el_minutes = $("#minutes");
var el_seconds = $("#seconds");
 
setInterval(function () {
    var today = new Date().getTime();
    var time_remaining = (date - today) / 1000;
 
    days = parseInt(time_remaining / 86400);
    time_remaining = time_remaining % 86400;
     
    hours = parseInt(time_remaining / 3600);
    time_remaining = time_remaining % 3600;
     
    minutes = parseInt(time_remaining / 60);
    seconds = parseInt(time_remaining % 60);
     
    el_days.html(days);
    el_hours.html(hours);
    el_minutes.html(minutes);
    el_seconds.html(seconds);
    
    if(days === 1) { $("#daysPlural").css("display", "none"); };
    if(hours === 1) { $("#hoursPlural").css("display", "none"); };
    if(minutes === 1) { $("#minutesPlural").css("display", "none"); };
    if(seconds === 1) { $("#secondsPlural").css("display", "none"); };
}, 1000);
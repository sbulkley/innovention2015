$(document).ready(function() {
            
    /* GEARS */

    var gearOne = $("#gearOne");
    var gearTwo = $("#gearTwo");
    var gearThree = $("#gearThree");

    function resetAndCall(gearName, gearDuration) {
        var durationMS = gearDuration * 1000;
        setTimeout(function() {
            TweenLite.set(gearName, {rotation:0});
            rotateGear(gearName, gearDuration);
        }, durationMS);
    }

    function rotateGear(gearName, gearDuration) {
        TweenLite.to(gearName, gearDuration, {
            rotation:360,
            ease:Linear.easeNone,
            onComplete: resetAndCall(gearName, gearDuration)
        })
    }

    rotateGear(gearOne, 3);
    rotateGear(gearTwo, 5);
    rotateGear(gearThree, 4)

    /* COUNTDOWN */

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

        if(days === 1) { $("#daysPlural").css("opacity", 0) } else { $("#daysPlural").css("opacity", 1) };
        if(hours === 1) { $("#hoursPlural").css("opacity", 0) } else { $("#hoursPlural").css("opacity", 1) };
        if(minutes === 1) { $("#minutesPlural").css("opacity", 0) } else { $("#minutesPlural").css("opacity", 1) };
        if(seconds === 1) { $("#secondsPlural").css("opacity", 0) } else { $("#secondsPlural").css("opacity", 1) };
    }, 1000);
});


$('#input-form').on('submit',function(){
    var inputName = $('#inputName').val();
    var inputEmail = $('#inputEmail').val();
    var inputPhone = $('#inputPhone').val();
    var inputTM1 = $('#inputTM1').val();
    var inputTM2 = $('#inputTM2').val();
    var inputTM3 = $('#inputTM3').val();
    var inputTM4 = $('#inputTM4').val();
    var baseURL = 'https://docs.google.com/forms/d/1S_NmrDyeeRf6mIJMGxOvik4Z38Y033T9GoHNJ4Z9YxY/formResponse?'
        + "entry.448718218=" + inputName + "&"
        + "entry.1117649756=" + inputEmail + "&"
        + "entry.2065473022=" + inputPhone + "&"
        + "entry.1740044628=" + inputTM1 + "&"
        + "entry.1578468951=" + inputTM2 + "&"
        + "entry.761163052=" + inputTM3 + "&"
        + "entry.1132157167=" + inputTM4;
    var submitRef = '&submit=Submit';
    var submitURL = (baseURL + submitRef);
    console.log(submitURL);
    $('#myModal').modal('toggle');
    $('#register').html('<h2 class="thanks">SUBMITTED.</h2>');
    $(this)[0].action = submitURL;
});
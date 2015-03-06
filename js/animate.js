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

$(document).ready(function() {
    rotateGear(gearOne, 3);
    rotateGear(gearTwo, 5);
    rotateGear(gearThree, 4)
})
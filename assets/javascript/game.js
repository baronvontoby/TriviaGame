$(document).ready(function() {

var timer = 0;
var intervalId;

$("#start").on("click", function() {
    $("#start").hide();
    timer = 45;
    start();
    //this event handler will start the game and the text will hide
});

function decrement() {
    timer--;
    $("#time-left").html("<h5>" + timer +"<h5");
    if (timer == 0 ) {
        stop();
        alert("Time up! You Lose!");
        $("#start").show();
    }
}

function start() {
    intervalId = setInterval(decrement, 1000)
}

function stop () {
    clearInterval(intervalId);
}

function game() {

}

});
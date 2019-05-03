$(document).ready(function() {

var timer = 0;
var intervalId;

const QUESTIONS = [
    { question: "What is Sleeping Beauty's real name?",  
      correctAnswer: "Aurora",
      answer : ["Princess", "Aurora", "Aria", "Andora"]},
    { question: "Who sang the credit's version of 'Tale As Old As Time' in the 1991 version of Beauty & The Beast?", 
    answer : ["Peabo Bryson & Celine Dion", "John Legend & Ariana Grande", "John Legend & Celine Dion", "Simon & Garfunkel"],
    correctAnswer : "Peabo Bryson & Celine Dion"},
    { question: "In what year was Lion King Released?", 
      correctAnswer : "1994",
      answer : ["1991", "1994", "1993", "2019"]}
];

// const ANSWERS = [
//     {A : "A : Princess", B : "B: Aurora", C : "C : Aria", D : "D : Andora" },
//     {A : "A : Peabo Bryson & Celine Dion", B : "B : John Legend & Ariana Grande", C : "C : John Legend & Celine Dion", D : "D : Simon & Garfunkel"},
//     {A : "A : 1991", B : "B : 1994", C : "C : 1993", D : "D : 2019"}
// ]

$("#start").on("click", function() {
    $("#start").hide();
    timer = 45;
    start();
    game();
    //this event handler will start the game and the text will hide
});

function decrement() {
    timer--;
    $("#time-left").html("<h5>" + timer +"<h5>");
    if (timer == 0 ) {
        stop();
        alert("Time up! You Lose!");
        $("#start").show();
    }
};

function start() {
    intervalId = setInterval(decrement, 1000)
};

function stop () {
    clearInterval(intervalId);
};

function game() {
    for ( let i=0; i<QUESTIONS.length; i++) {
        let qT = $("<p>");
        let now = QUESTIONS[i].question;
        qT.text(now);
        $("#questions").append(qT);

        let answer1 = $("<p>");
        let a1 = QUESTIONS[i].answer[0];
        answer1.text(a1);
        $("#q1").append(answer1);

        let answer2 = $("<p>");
        let a2 = QUESTIONS[i].answer[1];
        answer2.text(a2);
        $("#q2").append(answer2);

        let answer3 = $("<p>");
        let a3 = QUESTIONS[i].answer[2];
        answer3.text(a3);
        $("#q3").append(answer3);

        let answer4 = $("<p>");
        let a4 = QUESTIONS[i].answer[3];
        answer4.text(a4);
        $("#q4").append(answer4);

        $("#answers p").on("click", function(){
        game();
        });
        for (let j=0; j<QUESTIONS[i].answers.length; j++) {
            if (QUESTIONS[i].correctAnswer == QUESTIONS[i].answer[j]) {
                alert("good job! next question")
            }
            else {
                alert("sorry you lose!")
                stop();
                $("#start").show();
                timer = 0;
                
            }
        }
    }
}

});
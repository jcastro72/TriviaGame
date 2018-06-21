$('#start').on('click',function(){
    // game.loadQuestion();
    game.start();
})
$(document).on('click','#end',function(){
    game.done();
})
var questions = [{
    question: "What clan possess the Sharingan?",
    answers: ["Uchiha", "Uzumaki", "Senju", "Hygua"],
    correctAnswer: "Uchiha",
}, {
    question: "Who saved the Leaf Village when Pain attacked?",
    answers: ["Choji", "Sasuke", "Kakashi", "Naruto"],
    correctAnswer: "Naruto",
}, {
    question: "Who became Hokage after Tsunade?",
    answers: ["Naruto", "Might Guy", "Kakashi", "Danzo"],
    correctAnswer: "Kakashi",
}, {
    question: "Who was the first Hokage?",
    answers: ["Minato", "Hashirama", "Hiruzen", "Madara"],
    correctAnswer: "Hashirama",
}, {
    question: "Who attacked the Leaf Village during the chino exams?",
    answers: ["Orochimaru", "Sasuke", "Pain", "Nagato"],
    correctAnswer: "Orochimaru",
}, {
    question: "What group was made to accomplish the goal of the Infinite Tsukuyomi",
    answers: ["7 swordsman of the mist", "Akatsuki", "Raikage", "Senju"],
    correctAnswer: "Akatsuki",
}, {
    question: "What clan was the First Hokage apart of",
    answers: ["Uchiha", "Hygua", "Uzumakie", "Senju"],
    correctAnswer: "Senju",
}];

var game = {
    correct: 0,
    incorrect: 0,
    counter: 20,
    countdown: function(){
        game.counter--;
        $('#counter').html(game.counter);
        if(game.counter<=0){
            console.log("Time is up!");
            game.done();
        }
    },
    start: function(){
        timer = setInterval(game.countdown,1000);
        $('#subwrapper').prepend('<h2>Time Remaining: <span id="counter">120</span> Seconds</h2>');
        $('#start').remove();
        for(var i=0;i<questions.length;i++){
            $('#subwrapper').append('<h2>'+questions[i].question+'</h2>');
            for(var j=0;j<questions[i].answers.length;j++){
                $("#subwrapper").append("<input type='radio' name='question-"+i+"' value='"+questions[i].answers[j]+"'>"+questions[i].answers[j]);
            }
        }
        $('#subwrapper').append('<br><button id="end">DONE</button>')
    },
    done:function(){
        $.each($("input[name='question-0']:checked"),function(){
            if($(this).val() == questions[0].correctAnswer) {
                game.correct++;
            } else{
                game.incorrect++;
            }
        });
        $.each($("input[name='question-1']:checked"),function(){
            if($(this).val() == questions[1].correctAnswer) {
                game.correct++;
            } else{
                game.incorrect++;
            }
        });
        $.each($("input[name='question-2']:checked"),function(){
            if($(this).val() == questions[2].correctAnswer) {
                game.correct++;
            } else{
                game.incorrect++;
            }
        });
        $.each($("input[name='question-3']:checked"),function(){
            if($(this).val() == questions[3].correctAnswer) {
                game.correct++;
            } else{
                game.incorrect++;
            }
        });
        $.each($("input[name='question-4']:checked"),function(){
            if($(this).val() == questions[4].correctAnswer) {
                game.correct++;
            } else{
                game.incorrect++;
            }
        });
        $.each($("input[name='question-5']:checked"),function(){
            if($(this).val() == questions[5].correctAnswer) {
                game.correct++;
            } else{
                game.incorrect++;
            }
        });
        $.each($("input[name='question-6']:checked"),function(){
            if($(this).val() == questions[6].correctAnswer) {
                game.correct++;
            } else{
                game.incorrect++;
            }
        });
        this.result();
    },

    result: function(){
        clearInterval(timer);
        $('#subwrapper h2').remove();
 
        $('#subwrapper').html("<h2>All done!</h2>");
        $('#subwrapper').append("<h3>Correct Answer: "+this.correct+"</h3>");
        $('#subwrapper').append("<h3>Incorrect Answer: "+this.incorrect+"</h3>");
        $('#subwrapper').append("<h3>Unanswered: "+(questions.length-(this.incorrect+this.correct))+"</h3>")
    }
}


    


// var game = {
//     questions:questions,
//     currentQuestion:0,
//     counter:30,
//     correct:0,
//     incorrect:0,
//     countdown: function(){
//         game.counter--;
//         $('#counter').html(game.counter);
//         if(game.counter<=0){
//             console.log("TIMES UP!");
//             game.timeUp();
//         }
//     },
//     loadQuestion: function(){
//         timer = setInterval(game.countdown,1000);
//         $('#subwrapper').html('<h2>'+questions[game.currentQuestion].questions+'</h2>');
//         for(var i=0;i<questions[game.currentQuestion].answers.length;i++){
//             $('#subwrapper').append('<button class="answer-button" id="button-'+i+'" data-name="'+questions[game.currentQuestion].answers[i]+'">'+questions[game.currentQuestion].answers[i]+'</button');
//         }

//     },
//     nextQuestion: function(){

//     },
//     timeUp: function(){

//     },
//     results: function(){

//     },
//     clicked: function(){

//     },
//     answerCorrectly: function(){

//     },
//     reset: function(){

//     }

// }
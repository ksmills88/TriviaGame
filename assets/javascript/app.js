
$(function() { 

    var wins = 0;
    var losses = 0;
    
    

    var index = -1;
    // var setInterval;

    var questions = [
        { 
            question: "Which of these is not a type of clef?",
            choices: ["Treble", "Alto", "Canon", "Tenor"],
            answer: "Canon",
            pic: "assets/images/clefs.png"
        },

     {
            question: "Which of the following is an instrument in the Woodwind family?",
            choices: ["Saxophone", "Trumpet", "Baritone", "Xylophone"],
            answer: "Saxophone",
            pic: "assets/images/woodwind"
        },

     {
            question: "If the section of music you are playing says 'tacet' what would you do?",
            choices: ["play", "do not play", "transcribe", "clap the music"],
            answer: "do not play",
            pic: "assets/images/tacet.png"
        },

         {
            question: "If your music says to play adagio, should you ___?",
            choices: ["play agressively", "play softly", "play slowly", "play playfully"],
            answer: "play slowly",
            pic: "assets/images/slowjam.jpg"
        },
    
         {
            question: "If you are playing a C Major scale, which note ends the scale?",
            choices: ["B", "C#", "C", "D"],
            answer: "C",
            pic: "assets/images/cmajor.png"
        },

         {
            question: "How many different notes are there in a chromatic scale?",
            choices: ["8", "10", "12", "13"],
            answer: "12",
            pic: "assets/images/chromatic.png"
        },

        {
           question: "Which instrument is Kenny G most known for playing?",
           choices: ["Bari Saxophone", "Soprano Saxophone", "Bassoon", "Clarinet"],
           answer: "Soprano Saxophone",
           pic: "assets/images/kennyg.jpg"
        },

        {
           question: "Which American composer wrote the score to the Star Wars series?",
           choices: ["John Williams", "Leonard Bernstein", "Eric Whitacre", "Danny Elfman"],
           answer: "John Williams",
           pic: "assets/images/johnwilliams.jpg"
        }]


        // create onclick
        $("#startBtn").on("click", function(){
            loadQuestion();
            $("#startBtn").remove();
           
        
        // this is a function to load the question. Need to get the next question from the questions object.
        // Need to start the timer
        function loadQuestion(){
            index++;
            
            if(index < questions.length){
                clearInterval(timer);
                clearQuestion();
                $(".question").html("<p>" + questions[index].question + "</p>");
                answerOptions();
            }
            timer();
        }

        function clearQuestion() {
            $("#timer").empty();
            $(".question").empty();
            $(".choices").empty();
        }
       
        function answerOptions(){
            for(var i=0; i<4; i++){
            var button = $("<button>");
                button.addClass("choice btn btn-warning col");
                button.attr("type", "button");
                button.val(i);
                button.text(questions[index].choices[i]);
                $(".choices").append(button);

            }
        }

// onclick for the buttons created
        $(".choices").on("click", "button", function () {
            clearInterval(counter);
            $("#timer").empty();
            if ($(this).text() === "Play Again") {
                resetGame();
            } else {
                correctAnswer($(this));
                $(".clicked").empty();
            }
        });



         function correctAnswer(question){
             if(question.text() === questions[index].answer){
                 wins++;
                
                 var results = "Yes, that is correct!";
                 var resultImage = $("<img src= "+questions[index].pic +">");
                 $(".choices").append(results).append(resultImage);
                 $(".choices").html(results);

                }
                else
                {
                    losses++;
                    results = "Wrong Answer. The correct answer is " + questions[index].answer;
                    $(".choices").html(results);
                }
         }
        
        // For each, Create an interval with a timeout.
        
        var count=10;

        var counter=setInterval(timer, 1000); //1000 will  run it every 1 second

        function timer()
        {
            count=count-1;
            if (count <= 0)
            {
                clearInterval(counter);
                correctAnswer();
                // counter ended, do something here
                
        }
        $("#timer").html(count);
        //Do code for showing the number of seconds here
        }
       

        // Once interval has either timed out, or the click has happened, set a new interval to display after a few seconds without the user having to click a button.
        // Create an onClick function inside the for loop, and if/else to determine DOM manipulation.
        // Append the associated pic whether answer was correct or incorrect.
        // If correct, show screen congratulating them.
        // if time out, tell the player that time's up and display correct answer
        // If incorrect choice is chosen, tell player the correct answer
        // Log the Win/Loss in a hidden var that will display once the game has ended. 
        // Once the game is over, give player an option to restart game(without reloading page)





    })
    });
  
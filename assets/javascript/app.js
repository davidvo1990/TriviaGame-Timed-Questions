$(document).ready(function () {
    //create Game Start button
    function createStart() {
        var startPage = $("<button class='startButton btn text-center' type='button'>Game Start!</button>");
        $(".body").html(startPage);

        //END createStart()
    };


    ///////////////////////
    //run all function here
    createStart();
    game();
    ///////////////////////


    //question data and answer
    var question = [
        "So you want to surf the web and know you need to choose an internet browser to get online. Which of the following options is not an internet browser?",
        "Now you are online. You want to post a link to one of these quizzes on the social media website that is represented by the blue bird, but can't remember its name. What website is this?",
        "You are still online, but have been away from your computer for a while. You were browsing some news stories on your local paper's website and realize that in the time you were away, new articles have likely appeared. Instead of typing in the domain name again, what button can you hit to make the page reappear with the new content?",
        "While on Facebook, you see someone advertising her new vlog. You know what a blog is, but which of the following descriptions best describes a vlog?",
        "You never get the chance to view the vlog because your best friend just messaged you. He writes 'Hey, how u been? CYE, I sent you something funny.' You really want to do what he says, but can't because you have no idea what CYE means. You google it and discover it means what?",
        "You decide you have had enough shenanigans online for one sitting and log off. You want to play your favorite computer game, which is this EA series where you can create your own virtual families and run their lives more efficiently than you can your own. What series are you playing?",
        "You finish playing the game and remember you have that ten-page term paper to write before tomorrow morning. You breeze through it and now you need to spellcheck it. Which key can you press, on most PCs, for a spellcheck shortcut?",
        "You have written a paper for your professor and you decide it will be easier to email it to him. While writing the email, what symbol should you click on to add your paper as an attachment?",
        "Now that that is done, it is time for more games. This card game is designed for one person and is now a popular distraction from work. The name of the game is derived from the French word for lonely. What game is this?",
        "You are finally done fiddling around with the computer and it is time to shut it down. Which is one reason you should you go to start and hit shut down rather than just turn the computer off by flipping the switch?"
    ];
    var answers = [
        ["Microsoft Excel", "Google Chrome", "Firefox", "Internet Explorer"],
        ["Twitter", "Reddit", "Facebook", "Pinterest"],
        ["Cut", "Restore", "Refresh", "Copy"],
        ["Like a blog but it contains a video game", "Like a blog but written by an anonymous author", "Like a blog but written in a foreign language", "Like a blog but someone is speaking in a video"],
        ["Can't you earn", "Check your ebook", "Check your email", "Can you eat"],
        ["Pokemon", "The Sims", "Mystery Hunters", "Roller Coaster Tycoon"],
        ["Tab", "F12", "Enter", "F7"],
        ["The slanted I", "Envelope", "Paper Clip", "Arrow"],
        ["Pinochle", "Poker", "Solitaire", "Euchre"],
        ["There is no reason to go visit start. It is perfectly safe to just flip the switch", "Flipping the switch could cause your computer to explode", "By just turning the switch, you risk losing anything you worked on, even if you saved it to the hard drive", "Because your computer sometimes installs updates when you shut it down properly"],

    ];
    var correctAns = [
        "Microsoft Excel",
        "Twitter",
        "Refresh",
        "Like a blog but someone is speaking in a video",
        "Check your email",
        "The Sims",
        "F7",
        "Paper Clip",
        "Solitaire",
        "Because your computer sometimes installs updates when you shut it down properly"

    ];

    var imgAns = [
        "Microsoft Excel.gif",
        "Twitter.gif",
        "Refresh.gif",
        "vlog.gif",
        "email.gif",
        "The Sims.gif",
        "F7.gif",
        "Paper Clip.gif",
        "Solitaire.gif",
        "updates.gif"


    ];

    var questionCount = 0;
    var counter = 30;
    var time;
    var correct = 0;
    var wrong = 0;
    var unanswer = 0;
    var timeout;
    var box;
    // END of data portion 

    //decrease counter each time it call
    function countdown() {
        if (counter > 0) {
            counter--;
        }

        if (counter === 0) {
            clearInterval(time);
            ifOutOfTime();
            //unanswer++;
        }
        //console.log(counter);
        $(".timer").html(counter);
        //END countdown();
    };


    //call countdown() per one sec, decrease counter from 30 to 0
    function timeOut() {
        time = setInterval(countdown, 1000);

        //END timeOut()
    };


    //create the four question in div box
    function createTrivia() {
        var main = $("<div class='main'></div>");
        var timer = $("<div class='remain'>Time remaining is : <span class='timer'>30</span></div>");
        box = $("<div class='box'></div>");

        var question = $("<div class='question'>question</div>");
        var answersChoice = $("<div class='answerChoice'>Choose your answer from below:</div>");
        var firstAnswer = $("<div class='ans firstAnswer'>1stanswer</div>");
        var secondAnswer = $("<div class='ans secondAnswer'>2ndanswer</div>");
        var thirdAnswer = $("<div class='ans thirdAnswer'>3ndanswer</div>");
        var fourthAnswer = $("<div class='ans fourthAnswer'>4thanswer</div>");
        box = $("<div class='box'></div>");

        main.append(timer).append(box);
        box.html(question).append(answersChoice);
        answersChoice.append(firstAnswer).append(secondAnswer).append(thirdAnswer).append(fourthAnswer);
        $(".body").html(main);
        //END createTrivia()
    };


    //run a bunch of thing when click the button 
    function start() {
        createTrivia();
        timeOut();
        assignData();
        pickAns();
        //END start()
    };

    //create the question page when click on the start game button
    function game() {
        $(".startButton").on("click", function () {
            start();

        });

        //END game()
    };



    // assign question data from array question and answer to question slot
    function assignData() {
        $(".question").text(question[questionCount]);
        $(".firstAnswer").text(answers[questionCount][0]);
        $(".secondAnswer").text(answers[questionCount][1]);
        $(".thirdAnswer").text(answers[questionCount][2]);
        $(".fourthAnswer").text(answers[questionCount][3]);
        //END assignData()
    };


    //enable click to choose answer from the 4 answers provide
    function pickAns() {
        $(".ans").on("click", function () {
            console.log("You had pick: " + this.innerHTML)
            console.log("This question's number is: " + (questionCount + 1));

            if (this.innerHTML === correctAns[questionCount]) {
                ifCorrect();
                //correct++;
            } else {
                ifIncorrect();
                //wrong++;
            }


        })

        //END pickAns()
    };


    //check condition if correct
    function ifCorrect() {
        correct++;
        console.log("Your answer is correct");
        var correctAnswer = $("<div class='correctAnswer'>Correct! The answer is: <span>" + correctAns[questionCount] + " </span></div>");
        var imgAnswer = $("<img class='image' src='assets/images/" + imgAns[questionCount] + "' />");
        $(".box").html(correctAnswer).append(imgAnswer);
        clearInterval(time);
        next();
        end();
        //END ifCorrect()
    };


    //check condition if wrong
    function ifIncorrect() {
        wrong++;
        console.log("Your answer is wrong");
        var correctAnswer = $("<div class='correctAnswer'>Wrong! The correct answer is: <span>" + correctAns[questionCount] + " </span></div>");
        var img = $("<img class='image' src='assets/images/" + imgAns[questionCount] + "' />");
        $(".box").html(correctAnswer).append(img);
        clearInterval(time);
        next();
        end();
        //END ifIncorrect()
    };


    //check condition if out of time
    function ifOutOfTime() {
        unanswer++;
        console.log("You are out of time");
        var correctAnswer = $("<div class='correctAnswer'>Out of Time! The correct answer is: <span>" + correctAns[questionCount] + " </span></div>");
        var img = $("<img class='image' src='assets/images/" + imgAns[questionCount] + "' />");
        $(".box").html(correctAnswer).append(img);
        clearInterval(time);
        next();
        end();
        //END ifOutOfTime()
    };



    //move to the next screen if answer had been pick after 5 sec
    function next() {
        timeout = setTimeout(function () {
            questionCount++;
            counter = 30;
            timeOut();
            createTrivia();
            assignData();
            pickAns();
        }, 4000);

        //END next()
    };

    //create end result page
    function end() {

        if (questionCount === question.length - 1) {
            setTimeout(function () {
                var endline = $("<div>All done, here's how you did!</div>")
                var correctAns = $("<div>Correct Answers: <span>" + correct + "</span></div>")
                var wrongAns = $("<div>Wrong Answers: <span>" + wrong + "</span></div>")
                var unAns = $("<div>Unanswered: <span>" + unanswer + "</span></div>")
                var reset = $("<button class='resetButton btn text-center' type='button'>Restart the Game!</button>");
                $(".box").html(endline).append(correctAns).append(wrongAns).append(unAns).append(reset);
                resetpage();
            }, 4000);

            clearTimeout(timeout);
        }

        //END end()
    };


    //reset the game again when click reset button
    function resetpage() {
        $(".resetButton").on("click", function () {
            questionCount = 0;
            counter = 30;
            correct = 0;
            wrong = 0;
            unanswer = 0;
            start();

        })
        //END resetpage()
    };


    // change color as time pass for fun
    setInterval(function () {
        $(".title").attr("style", "color:red");
        $(".startButton").attr("style", "background:rgb(85, 22, 233)");
        $(".timer").attr("style", "color:green");
    }, 2000);
    setInterval(function () {
        $(".title").attr("style", "color:yellow");
        $(".startButton").attr("style", "background:rgb(18, 219, 219)");
        $(".timer").attr("style", "color:brown");
    }, 3000);
    setInterval(function () {
        $(".title").attr("style", "color:blue");
        $(".startButton").attr("style", "background:rgb(213, 18, 219)");
        $(".timer").attr("style", "color:purple");
    }, 5000);
    setInterval(function () {
        $(".title").attr("style", "color:rgb(9, 245, 40)");
        $(".startButton").attr("style", "background:black");
        $(".timer").attr("style", "color:blue");
    }, 7000);
    setInterval(function () {
        $(".title").attr("style", "color:rgb(213, 18, 219)");
        $(".startButton").attr("style", "background:blue");
        $(".timer").attr("style", "color:orange");
    }, 11000)
    setInterval(function () {
        $(".title").attr("style", "color:rgb(18, 219, 219)");
        $(".startButton").attr("style", "background:yellow");
        $(".timer").attr("style", "color:violet");
    }, 17000);
    setInterval(function () {
        $(".title").attr("style", "color:rgb(85, 22, 233)");
        $(".startButton").attr("style", "background:red");
        $(".timer").attr("style", "color:cyan");
    }, 7000);

    // sound for fun
    var audio = new Audio("assets/sound/bensound-cute.mp3");
    setInterval(function () {
        audio.play();
    }, 1000);
    //END



    //END
});
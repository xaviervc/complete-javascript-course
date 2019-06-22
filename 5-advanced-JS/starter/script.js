//coding challenge
//wrap function in an auto invoked function for privacy

/*(function() {
    function Question(question, answers, correct){
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }
    
    Question.prototype.displayQuestion = 
    function() {
        console.log(this.question);
        for (var i=0; i<this.answers.length; i++){
            console.log(i + ': '+ this.answers[i]);
        }
    }
    
    Question.prototype.checkAnswer = 
    function(ans) {
        if (ans === this.correct){
            console.log('Correct answer');
        } else {
            console.log('Wrong answer');
        }
    }
    
    var q1 = new Question('Is JS the coolest programming lang in the world?',
        ['Yes', 'No'], 0);
    
    var q2 = new Question('Whats the name of this courses teacher?',
    ['John', 'Michael', 'Jonas'], 2);
    
    var q3 = new Question('What best describes coding?',
    ['Boring', 'Hard', 'Fun', 'Tedious'], 2);
    
    var questions = [q1, q2, q3];
    
    var n = Math.floor(Math.random() * questions.length);
    
    questions[n].displayQuestion();
    
    var answer = parseInt(prompt('Please select the correct answer'));
    
    questions[n].checkAnswer(answer);
})();

*/

//expert level quiz

(function() {
  function Question(question, answers, correct) {
    this.question = question;
    this.answers = answers;
    this.correct = correct;
  }

  Question.prototype.displayQuestion = function() {
    console.log(this.question);
    for (var i = 0; i < this.answers.length; i++) {
      console.log(i + ": " + this.answers[i]);
    }
  };

  Question.prototype.checkAnswer = function(ans) {
    if (ans === this.correct) {
      console.log("Correct answer");
    } else {
      console.log("Wrong answer");
    }
  };

  var q1 = new Question(
    "Is JS the coolest programming lang in the world?",
    ["Yes", "No"],
    0
  );

  var q2 = new Question(
    "Whats the name of this courses teacher?",
    ["John", "Michael", "Jonas"],
    2
  );

  var q3 = new Question(
    "What best describes coding?",
    ["Boring", "Hard", "Fun", "Tedious"],
    2
  );

  var questions = [q1, q2, q3];

  function score(){
      var sc = 0;
  }

  function nextQuestion() {

    var n = Math.floor(Math.random() * questions.length);

    questions[n].displayQuestion();

    var answer = prompt("Please select the correct answer");


    if(answer !== 'exit'){
        questions[n].checkAnswer(parseInt(answer));
        nextQuestion();
    }

  }
  nextQuestion();
})();

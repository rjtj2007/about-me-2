'use strict';
// type some questions with answers to who am I as a little intro, questions should be fun

var score = 0;
var counter = 0;
var numberOfGuesses = 0;
var food = '';

var question = [
  'Does Ron likes tacos?',
  'Does Ron likes coffee?',
  'Does Ron likes animals?',
  'Did Ron live in Tennessee?',
  'Does Ron have any pets?',
  'Please guess a random number from 1 to 20',
  'Can you guess any other food Ron likes to eat?'
];

// first item inside answer is correct, second item is incorrect, third item is user response
var answer = [
  ['Absolutely, Ron really likes tacos', 'Actually, Ron really likes tacos', 'yes'],
  ['Yah!! Ron\'s veins are overflown with coffee', 'Ron requires coffee to survive', 'yes'],
  ['Yes! Ron loves animals, his spirit animal is a Pomeranian', 'In fact Ron loves animals, his spirit animal is a Pomeranian', 'yes'],
  ['That\'s right, He never lived there', 'He have never lived there before', 'no'],
  ['That\s correct, he doesn\'t have any pets at the moment :(', 'He does not have pets but he really wants a dog', 'no'],
  Math.ceil(Math.random() * 20), ['pizza', 'burgers', 'sushi', 'steak']
];

var funResponse = [
  'I don\' think you\'ve ever met me before ',
  'Seriously!!!',
  'Yeah! No! You\'re just guessing',
  'Ok, I think you\'ve seen me around',
  'I\'d figure you\'d know me better than that',
  'Hey!!! not bad!',
  'Did we go to High School together?',
  'Wow!!! What a stalker!!! Yo'
];

///// GAME /////
// yes and no questions?
function yesOrNoQuestions() {
  for (var i = 0; i < 5; i++) {
    var response = prompt(question[i]);
    if (response.toLowerCase() === answer[i][2]) {
      console.log('User answered ' + response);
      alert(answer[i][0]);
      score++;
    } else {
      alert(answer[i][1]);
    }
  }
}

// Guess the number
console.log(answer[5]);

function numberGame() {
  numberOfGuesses = 4;
  while (counter <= 4) {
    if (numberOfGuesses === 0) {
      alert('Well... you have no more guesses');
      console.log('I said it... you suck at guessing!');
      break;
    }
    var guess = parseInt(prompt(question[5]));
    // if too high
    if (guess > answer[5]) {
      numberOfGuesses--;
      alert(guess + ' is too high , you have ' + numberOfGuesses + ' guesses left');
      console.log('User input too high, you have ' + numberOfGuesses + ' guesses left', guess);
    }
    // if too low
    else if (guess < answer[5]) {
      numberOfGuesses--;
      alert(guess + ' is too low, you have ' + numberOfGuesses + ' guesses left');
      console.log('User input too low ' + numberOfGuesses + ' guesses left', guess);
    }
    // if correct
    else if (guess === answer[5]) {
      alert('That\'s correct!!! ' + guess + ' is the right answer!');
      score++;
      console.log('Correct response of ', guess);
      break;
    }
    counter++;
  }
}

// counter reset
function favFood() {
  counter = 0;
  numberOfGuesses = 6;
  // Guess food game
  while (counter <= 6) {
    if (numberOfGuesses === 0) {
      alert('Well... you have no more guesses');
      console.log('I said it... you suck at guessing!');
      break;
    }
    if (counter === 0) {
      food = prompt(question[6]).toLowerCase();
    } else {
      food = prompt('Please try again! ' + 'You have ' + numberOfGuesses + ' left. ' + question[6]).toLowerCase();
    }
    numberOfGuesses--;
    for (var j = 0; j < answer[6].length; j++) {
      if (answer[6][j] === food) {
        alert('That\'s right, I actually love pizza, burgers, sushi, and steak');
        score++;
        counter = 7; // super hack way but whatevs
      }
    }
    counter++;
  }
}

// Final Score
function finalResult() {
  alert('Your score is ' + score + ' out of ' + question.length + '. ' + funResponse[score]);

  console.log('Your score is ' + score + ' out of ' + question.length);
}

// function calls
yesOrNoQuestions();
numberGame();
favFood();
finalResult();

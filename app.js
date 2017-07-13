'use strict';
// type some questions with answers to who am I as a little intro, questions should be fun

var score = 0;
var counter = 0;
var food = '';

var question = [
  'Does Ron likes tacos?',
  'Does Ron likes coffee?',
  'Does Ron likes animals?',
  'Does Ron likes Seattle traffic?',
  'Does Ron likes Seattle?',
  'Please guess a random number from 1 to 20',
  'Can you guess any other food Ron likes to eat?'
];

// first item inside answer is correct, second item is incorrect, third item is user response
var answer = [
  ['Absolutely, Ron really likes tacos', 'Actually, Ron really likes tacos', 'yes'],
  ['Yah... Ron\'s veins are overflown with coffee', 'Ron requires coffee to survive', 'yes'],
  ['Yes! Ron loves animals, his spirit animal is a Pomeranian', 'In fact Ron loves animals, his spirit animal is a Pomeranian', 'yes'],
  ['That\'s correct! Ron hates Seattle traffic. Do you like seattle traffic?', 'The correct answer is No. Seattle traffic is the worst!!', 'no'],
  ['Yes, Ron loves Seattle', 'Actually, Ron thinks Seattle is great!', 'yes'],
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

// Guess the number
while (counter < 4) {
  var guess = parseInt(prompt(question[5]));
  // if too high
  if (guess > answer[5]) {
    alert(guess + ' is too high');
    console.log('User input too high ', guess);
  }
  // if too low
  else if (guess < answer[5]) {
    alert(guess + ' is too low');
    console.log('User input too low ', guess);
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
// counter reset
counter = 0;

// Guess food game
console.log(answer[6]);
while (counter < 7) {
  console.log(counter);
  if (counter === 0) {
    food = prompt(question[6]).toLowerCase();
  } else {
    food = prompt('Please try again! ' + question[6]).toLowerCase();
  }
  for (var j = 0; j < answer[6].length; j++) {
    if (answer[6][j] === food) {
      alert('That\'s right, I actually love pizza, burgers, sushi, and steak');
      score++;
      counter = 7;
    }
  }
  counter++;
}

alert('Your score is ' + score + ' out of ' + question.length + '. ' + funResponse[score]);

console.log('Your score is ' + score + ' out of ' + question.length);

'use strict';
// type some questions with answers to who am I as a little intro, questions should be fun

var score = 0;
var counter = 0;

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
  ['Absolutely, Ron really likes tacos', 'Actually, Ron really likes tacos', 'yes' || 'y'],
  ['Yah... Ron\'s veins are overflown with coffee', 'Ron requires coffee to survive', 'yes' || 'y'],
  ['Yes! Ron loves animals, his spirit animal is a Pomeranian', 'In fact Ron loves animals, his spirit animal is a Pomeranian', 'yes' || 'y'],
  ['That\'s correct! Ron hates Seattle traffic. Do you like seattle traffic?', 'The correct answer is No. Seattle traffic is the worst!!', 'no' || 'n'],
  ['Yes, Ron loves Seattle', 'Actually, Ron thinks Seattle is great!', 'yes' || 'y'],
  Math.ceil(Math.random() * 20 ), ['pizza, burgers, sushi, steak']
];

///// GAME /////
// yes and no questions?
/*
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
*/
/*
console.log(answer[5]);

// Guess the number
while (counter < 4){
  console.log (counter);
  var guess = parseInt(prompt(question[5]));
  // if too high
  if (guess > answer[5]) {
    console.log('too high ', guess);
  }
  // if too low
  if (guess < answer[5]) {
    console.log('too low ', guess);
  }
  // if correct
  if (guess === answer[5]) {
    console.log('That\'s correct!!! ', guess);
    score++;
    // counter = 7; // super hack way of doint it
    break;
  }
  counter++;
  console.log(counter);
}
counter = 0;

*/

console.log(answer[6]);

while (counter < 6){
  console.log (counter);
  var guess = parseInt(prompt(question[5]));
  // if too high
  if (guess > answer[5]) {
    console.log('too high ', guess);
  }
  // if too low
  if (guess < answer[5]) {
    console.log('too low ', guess);
  }
  // if correct
  if (guess === answer[5]) {
    console.log('That\'s correct!!! ', guess);
    score++;
    // counter = 7; // super hack way of doint it
    break;
  }
  counter++;
  console.log(counter);
}


// Pick one
console.log('Your score is ' + score + ' out of ' + question.length);


/*
var traffic = prompt('Does Ron likes Seattle traffic?');
if (traffic.toLowerCase() === 'yes') {
  alert('The correct answer is No. Seattle traffic is the worst!!');
} else {
  alert('That\'s correct! Ron hates Seattle traffic. Do you like seattle traffic?');
}

var city = prompt('Does Ron likes Seattle?');
if (city.toLowerCase() === 'yes') {
  alert('Yes, Ron loves Seattle');
} else {
  alert('Actually, Ron thinks Seattle is great!');
}
*/

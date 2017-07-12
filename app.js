'use strict';
// type some questions with answers to who am I as a little intro, questions should be fun

var score = 0;

var questions = [
  'Does Ron likes tacos?',
  'Does Ron likes coffee?',
  'Does Ron likes animals?',
  'Does Ron likes Seattle traffic?',
  'Does Ron likes Seattle?',
  'Please guess a random number from 1 to 20',
  'Can you guess any other food Ron likes to eat?'
];

var answers = [
  ['Absolutely, Ron really likes tacos', 'Actually, Ron really likes tacos'],
  ['Yah... Ron\'s veins are overflown with coffee', 'Ron requires coffee to survive'],
  [],
  [],
  [], Math.ceil(Math.random() * 20), []
];



/*


var animals = prompt('Does Ron likes animals?');
if (animals.toLowerCase() === 'yes') {
  alert('Yes! Ron loves animals, his spirit animal is a Pomeranian');
} else {
  alert('In fact Ron loves animals, his spirit animal is a Pomeranian');
}

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




['Does Ron likes tacos?', 'Does Ron likes coffee?', 'Does Ron likes animals?', 'Does Ron likes Seattle traffic?', 'Does Ron likes Seattle?'];

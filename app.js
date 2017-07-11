'use strict';
// type some questions with answers to who am I as a little intro, questions should be fun

var tacos = prompt('Does Ron likes tacos?');
console.log('The user answered ' + tacos);
if (tacos.toLowerCase() == 'yes') {
  alert('Absolutely, Ron really likes tacos');
} else {
  alert('Actually, Ron really likes tacos');
}

var coffee = prompt('Does Ron likes coffee?');
if (coffee.toLowerCase() == 'yes') {
  alert('Yah... Ron\'s veins are overflown with coffee');
} else {
  alert('Ron requires coffee to survive');
}

var animals = prompt('Does Ron likes animals?');
if (animals.toLowerCase() == 'yes') {
  alert('Yes! Ron loves animals, his spirit animal is a Pomeranian');
} else {
  alert('In fact Ron loves animals, his spirit animal is a Pomeranian');
}

var traffic = prompt('Does Ron likes Seattle traffic?');
if (traffic.toLowerCase() == 'yes') {
  alert('The correct answer is No. Seattle traffic is the worst!!');
} else {
  alert('That\'s correct! Ron hates Seattle traffic. Do you like seattle traffic?');
}

var city = prompt('Does Ron likes Seattle?');
if (city.toLowerCase() == 'yes') {
  alert('Yes, Ron loves Seattle');
} else {
  alert('Actually, Ron thinks Seattle is great!');
}

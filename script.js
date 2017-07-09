// ## variables
/*
var name = 'John';
console.log(name);

var lastName = 'Smith';
console.log(lastName);

var age = 26;
console.log(age);

var fullAge = true;
console.log(fullAge);


var name = 'John';
var age = 26;

console.log(name + age);
console.log(age + age);

var job, isMarried;

console.log(job);

job = 'teacher';
isMarried = false;

console.log(name + 'is a ' + age + ' years old ' + job + '. Is he married? '  + isMarried + '.');

age = 'thirty six';
job = 'driver';

console.log(name + 'is a ' + age + ' years old ' + job + '. Is he married? '  + isMarried + '.');


var lastName = prompt('What is the last name?');
console.log(lastName);

alert(name + 'is a ' + age + ' years old ' + job + '. Is he married?'  + isMarried + '.');
*/


// operators
/*
var now = 2016;
var birthYear = now - 26;

birthYear = now - 26 * 2;

console.log(birthYear);

var ageJohn = 30;
var ageMark = 30;

ageJohn = ageMark = (3 + 5) * 4 - 6;

ageJohn++;
ageMark *= 2;

console.log(ageJohn);
console.log(ageMark);
*/


// ## if/else statements

/*
var name = 'John';
var age = 26;
var isMarried = 'yes';

if(isMarried === 'yes'){
  console.log(name + 'is married!');
}
else{
  console.log(name + 'will hopefully marry soon :)');
}

isMarried = true;

if(isMarried){
  console.log('Yes!');
}
else{
  console.log('No!');
}

if(isMarried){
  console.log('Yes!');
}

if(23 === '23'){
  console.log('Something to print...')
}
*/


// boolean logic and switch
/*
var age = 16;

if(age < 20){
  console.log('John is a teenager.');
}else if(age >= 20 && age < 30){
  console.log('John is a young man.')
}else{
  console.log('John is a man.')
}

var job = 'teacher';
job = prompt('What does john do?')

switch (job){
  case 'teacher':
    console.log('John teaches kids.');
    break;
  case 'driver':
    console.log('John drives a cab in Lisbon.');
    break;
  case 'cop':
    console.log('John helps fight crime.');
    break;
  default:
    console.log('John does something else.');
}
/*


// CODING CHALLENGE 1

/*
var heightJohn = 164;
var ageJohn = 31;

var heightPeter = 178;
var agePeter = 24;

var heightJessica = 159;
var ageJessica = 42;

var scoreJohn = heightJohn + 5 * ageJohn;
var scorePeter = heightPeter + 5 * agePeter;
var scoreJessica = heightJessica + 5 * ageJessica;

console.log("John:" + scoreJohn + ', Peter:' + scorePeter + ", Jessica:" + scoreJessica)

if(scoreJohn > scorePeter && scoreJohn > scoreJessica){
  console.log("John won!");
}else if(scorePeter > scoreJessica && scorePeter > scoreJohn){
  console.log("Peter won!")
}else if(scoreJohn === scorePeter === scoreJessica){
  console.log("It's a draw.")
}else{
  console.log("Jessica won!")
}
*/


// functions
/*
function calculateAge(yearOfBirth){
  var age = 2016 - yearOfBirth;
  return age;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1969);
var ageMary = calculateAge(1948);


function yearsUntilRetirement(name, year) {
  var age = calculateAge(year);
  var retirement = 65 - age;
  if (retirement >= 0) {
  console.log(name + ' retires in ' + retirement + ' years.');
  }else{
    console.log(name + ' is already retired.');
  }
}


yearsUntilRetirement('John', 1990);
yearsUntilRetirement('Mike', 1969);
yearsUntilRetirement('Mary', 1948);
*/


// statements and expressions

//function statement
function someFun(par) {
  //code
}

// function expression
var someFun = function(par) {
  //code
}







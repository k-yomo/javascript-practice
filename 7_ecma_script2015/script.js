// // let and const
// // ES5
// var name5 = 'Jane Smith';
// var age5 = 28;
// name5 = 'Jane Miller';
// console.log(name5);
//
// // ES6
// const name6 = 'Jane Smith';
// let age6 = 23;
// name6 = 'Jane Miller';
// console.log(name6);

// // ES5
// function driversLicense5(passedTest) {
//   if (passedTest) {
//     console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car.');
//   }
//   var firstName = 'John';
//   var yearOfBirth = 1990;
// }
//
// // ES6
// driversLicense5(true);
//
// function driversLicense(passedTest) {
//   let firstName;
//   const yearOfBirth = 1990;
//   if (passedTest) {
//     firstName = 'John';
//   }
//   console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car.');
// }
//
// driversLicense(true);
//
// let i = 23;
//
// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }
// console.log(i);


// // Blocks and IIFEs
// {
//   const a = 1;
//   let b =2;
//   var c = 3;
// }
//
// console.log(a + b);
// console.log(c);


// // Strings
// let firstName = 'John';
// let lastName = 'Smith';
// const yearOfBirth = 1990;
//
// function calcAge(year) {
//   return 2017 - year;
// }
//
// console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today he is ${calcAge(yearOfBirth)} years old.`);
//
// const n = `${firstName} ${lastName}`;
// console.log(n.startsWith('J'));
// console.log(n.endsWith('mith'));
// console.log(n.includes(' '));
// console.log(`${firstName} `.repeat(5));


// // Arrow functions
// const years = [1990, 1965, 1962, 1982, 1937];
//
// // ES5
// var ages5 = years.map(function(el) {
//   return 2017 - el;
// });
// console.log(ages5);
//
// // ES6
// let ages6 = years.map(el => 2017 - el);
// console.log(ages6);
//
// ages6 = years.map((el, index) => `Age element ${index + 1}: ${2017 - el}`);
// console.log(ages6);
//
// ages6 = years.map((el, index) => {
//   // const now = new Date().getFullYear();
//   const age = now - el;
//   return `Age element ${index + 1}: ${age}`
// });
// console.log(ages6);
//
//
// // ES5
// var box5 = {
//   color: 'green',
//   position: 1,
//   clickMe() {
//       var self = this;
//       document.querySelector('.green').addEventListener('click', function() {
//           var str = 'This is box number '  + self.position + ' and it is ' + self.color;
//           alert(str);
//       });
//   }
// }
// box5.clickMe();
//
// // ES6
// const box6 = {
//   color: 'green',
//   position: 1,
//   clickMe() {
//       document.querySelector('.green').addEventListener('click', () => {
//           let str = `This is box number ${this.position} and it is ${this.color}`;
//           alert(str);
//       });
//   }
// }
// box6.clickMe();
//
//
// function Person(name) {
//   this.name = name;
// }
//
// // ES5
// Person.prototype.myFriends5 = function (friends) {
//   var arr = friends.map(function(el) {
//     return this.name + ' is friends with ' + el;
//   }.bind(this));
//   console.log(arr);
// };
//
// // ES6
// var friends = ['Bob', 'Jane', 'Mark'];
// new Person('John').myFriends5(friends);
//
// Person.prototype.myFriends6 = function (friends) {
//   let arr = friends.map(el =>  `${this.name} is friends with ${el}`);
//   console.log(arr);
// };
//
// var friends = ['Bob', 'Jane', 'Mark'];
// new Person('Mike').myFriends6(friends);


// // Destructuring
// // ES5
// var john = ['John', 26];
// // var name = john[0];
// // var age = john[1];
//
// // ES6
// const [name, age] = ['John', 26];
// console.log(name);
// console.log(age);
//
// const obj = {
//   firstName: 'John',
//   lastName: 'Smith'
// };
//
// const {firstName, lastName} = obj;
// console.log(firstName);
// console.log(lastName);
//
// const {firstName: a, lastName: b} = obj;
// console.log(a);
// console.log(b);
//
// function calcAgeRetirement(year) {
//   const age = new Date().getFullYear - year;
//   return [age, 65 - age];
// }
//
// const [age2, retirement] = calcAgeRetirement(1990);
// console.log(age2);
// console.log(retirement);

// // Arrays
// // ES5
// const boxes = document.querySelectorAll('.box');
// var boxesArr5 = Array.prototype.slice.call(boxes);
// boxesArr5.forEach(function(el) {
//   el.style.backgroundColor = 'dodgerblue';
// });
//
// // ES6
// const boxes = document.querySelectorAll('.box');
// const boxesArr6 = Array.from(boxes);
// Array.from(boxes).forEach(el => el.style.backgroundColor = 'dodgerblue');
//
// // ES5
// for(var i = 0; i < boxesArr5.length; i++) {
//   if (boxesArr5[i].className === 'box blue') {
//     continue;
//   }
//   boxesArr5[i].textContent = 'I canged to blue!'
// }
//
// // ES6
// for(const el of boxesArr6) {
//   if (el.className.includes('blue')) {
//     continue;
//   }
//   el.textContent = 'I Changed to blue!';
// }
//
//
// // ES5
// var ages = [12, 17, 8, 21, 14, 11];
// var full = ages.map(function(el) {
//   return el >= 18;
// });
// console.log(full);
// console.log(full.indexOf(true));
//
// // ES6
// console.log(ages.findIndex(el => el >= 18));


// // Spread Operator
// function addFourAges(a, b, c, d) {
//   return a + b + c + d;
// }
//
// var sum1 = addFourAges(18, 30, 12, 21);
// console.log(sum1);
//
// //5
// var ages = [18, 30, 12, 21];
// var sum2 = addFourAges.apply(null, ages);
// console.log(sum2);
//
// // ES6
// const max3 = addFourAges(...ages);
//
// const familySmith = ['John', 'Jane', 'Mark'];
// const familyMiller = ['Mary', 'Bob', 'Ann'];
// const bigFamily = [...familySmith,'Lily', ...familyMiller];
// console.log(bigFamily);
//
// const h = document.querySelector('h1');
// const boxes = document.querySelectorAll('.box');
// const all = [h, ...boxes];
// console.log(all);
//
// Array.from(all).forEach(el => el.style.color = 'purple');


// // Lest parameters
// // ES5
// function isFullAge5() {
//   var argsArr = Array.prototype.slice.call(arguments);
//   argsArr.forEach(function(el) {
//     console.log((2017 - el) >= 18);
//   })
// }
// isFullAge5(1990, 1999, 1965, 2016, 1987);
//
// // ES6
// function isFullAge6(...years) {
//   years.forEach(el => console.log((2017 - el) >= 18));
// }
//
// isFullAge6(1990, 1999, 1965, 2016, 1987);
//
// function isFullAge6(limit, ...years) {
//   years.forEach(el => console.log((2018 - el) >= limit));
// }
//
// isFullAge6(16,1990, 1999, 1965, 2016, 1987);


// // Default parameters
// // ES5
// function SmithPerson(firstName, yearOfBirth, lastName, nationality) {
//   lastName === undefined ? lastName = 'Smith' : lastName;
//   nationality === undefined ? nationality = 'american' : nationality;
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.yearOfBirth = yearOfBirth;
//   this.nationality = nationality;
// }
//
// // ES6
// function SmithPerson(firstName, yearOfBirth, lastName = 'Smith', nationality = 'american') {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.yearOfBirth = yearOfBirth;
//   this.nationality = nationality;
// }
//
// var  john = new SmithPerson('John', 1990);
// var emily = new SmithPerson('Emily', 1983, 'Diaz', 'spanish');


// // Maps
// const question = new Map();
// question.set('question', 'What is the official name of the latest major JavaScript version?');
// question.set(1, 'ES5');
// question.set(2, 'ES6');
// question.set(3, 'ES2015');
// question.set(4, 'ES7');
// question.set('correct', 3);
// question.set(true, 'Correct answer:D');
// question.set(false, 'Wrong, please try again!');
//
// console.log(question.get('question'));
// console.log(question.size);
//
// if (question.has(4)) {
//   question.delete(4);
//   console.log('Answer 4 is here');
// }
// console.log(question.size);
// // question.clear();
//
// question.forEach((value, key) => console.log(`This is ${key}, and it's set to ${value}`));
//
// for (let [key, value] of question.entries()) {
//   if (typeof(key) === 'number') {
//       console.log(`Answer ${key}: ${value}`);
//   }
// }
//
// const ans = parseInt(prompt('Write the corret answer'));
// console.log(question.get(ans === question.get('correct')));


// // Classes
// // ES5
// var Person5 = function(name, yearOfBirth, job) {
//   this.name = name;
//   this.yearOfBirth = yearOfBirth;
//   this.job = job;
// }
//
// Person5.prototype.calculateAge = function () {
//   var age = new Date().getFullYear - this.yearOfBirth;
//   console.log(age);
// };
//
// var john5 = new Person5('JOhn', 1990, 'teacher');
//
// // ES6
// class Person6 {
//   constructor (name, yearOfBirth, job) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
//   }
//   calculateAge() {
//     var age = new Date().getFullYear - this.yearOfBirth;
//     console.log(age);
//   }
//   static greeting() {
//     console.log('Hey there!');
//   }
// }
// const john6 = new Person6('John', 1990, 'teacher');
// Person6.greeting();


// // Classes and sub Classes
// var Person5 = function(name, yearOfBirth, job) {
//   this.name = name;
//   this.yearOfBirth = yearOfBirth;
//   this.job = job;
// }
//
// Person5.prototype.calculateAge = function () {
//   var age =  new Date().getFullYear() - this.yearOfBirth;
//   console.log(age);
// };
//
// john = new Person5('John', 1990, 'teacher');
// john.calculateAge();
//
// var Athlete5 = function(name, yearOfBirth, job, olympicGames, medals) {
//   Person5.call(this, name, yearOfBirth, job);
//   this.olympicGames = olympicGames;
//   this.medals = medals;
// };
//
// Athlete5.prototype = Object.create(Person5.prototype);
// Athlete5.prototype.wonMedal = function() {
//   this.medals++;
//   console.log(this.medals);
// }
//
// var johnAthlete5 = new Athlete5('John', 1990, 'swimmer', 3, 10);
//
// john.calculateAge();
// johnAthlete5.wonMedal();
//
// // ES6
// class Person6 {
//   constructor (name, yearOfBirth, job) {
//     this.name - name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
//   }
//   calculateAge() {
//     var age = new Date().getFullYear() - this.yearOfBirth;
//     console.log(age);
//   }
// }
//
// class Athlete6 extends Person6 {
//   constructor(name, yearOfBirth, job, olympicGames, medals) {
//     super(name, yearOfBirth, job);
//     this.olympicGames = olympicGames;
//     this.medals = medals;
//   }
//   wonMedal() {
//     this.medals++;
//     console.log(this.medals);
//   }
// }
//
// const johnAthlete6 = new Athlete6('John', 1990, 'swimmer', 3, 10);
// johnAthlete6.wonMedal();
// johnAthlete6.calculateAge();


// CHALLENGE
class Town {
  constructor(parks, streets) {
    this.parks = parks;
    this.streets = streets;
  }

  averageParksAge() {
    let total = 0;
    for (let val of this.parks) {
      total += val.calculateAge();
    }
    let average = total / this.parks.length;

    console.log(`Our ${this.parks.length} parks have an average age of ${average} years.`);
  }

  streetsLength() {
    let total = 0;
    for (let val of this.streets) {
      total += val.stlength;
    }
    let average = total / this.streets.length;
    console.log(`Our ${this.streets.length} streets have a total length of ${total}km, with an average of ${average}km.`);
  }
}

class Element {
  constructor(name, buildYear) {
    this.name = name;
    this.buildYear = buildYear;
  }
}

class Park extends Element {
  constructor(name, buildYear, area, trees) {
    super(name, buildYear)
    this.area = area;
    this.trees = trees;
  }
  treeDensity(){
    let density = this.trees / this.area;
    console.log(`${this.name} has a tree density of ${density} per square km.`);
  }
  calculateAge() {
    let age = new Date().getFullYear() - this.buildYear;
    return age;
  }
}

class Street extends Element{
  constructor(name, buildYear, stlength, size = 'normal') {
    super(name, buildYear);
    this.stlength = stlength;
    this.size = size;
  }
  getInfo() {
    console.log(`${this.name}, built in ${this.buildYear}, is a ${this.size} street.`);
  }
}

const parks = [];
parks.push(new Park('Green Park', 1985, 0.4, 600));
parks.push(new Park('National Park', 1990, 5, 1400));
parks.push(new Park('Oak Park', 1965, 2, 200));

const streets = [];
streets.push(new Street('Ocean Avenue', 1999, 2, 'big'));
streets.push(new Street('Evergreen Street', 2000, 0.5, 'small'));
streets.push(new Street('4th Street', 2015, 1));
streets.push(new Street('Sunset Boulevard', 1982, 5, 'huge'));

const town = new Town(parks, streets);

console.log('----PARKS REPORT----');
town.averageParksAge();
town.parks.map(el => el.treeDensity());
town.parks.map(el => el.trees >= 1000 ? console.log(`${el.name} has more than 1000 trees.`) : null);
console.log('----STREETS REPORT----');

town.streetsLength();
town.streets.map(el => el.getInfo());

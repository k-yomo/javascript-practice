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


// Default parameters
// ES5
function SmithPerson(firstName, yearOfBirth, lastName, nationality) {
  lastName === undefined ? lastName = 'Smith' : lastName;
  nationality === undefined ? nationality = 'american' : nationality;
  this.firstName = firstName;
  this.lastName = lastName;
  this.yearOfBirth = yearOfBirth;
  this.nationality = nationality;
}

// ES6
function SmithPerson(firstName, yearOfBirth, lastName = 'Smith', nationality = 'american') {
  this.firstName = firstName;
  this.lastName = lastName;
  this.yearOfBirth = yearOfBirth;
  this.nationality = nationality;
}

var  john = new SmithPerson('John', 1990);
var emily = new SmithPerson('Emily', 1983, 'Diaz', 'spanish');

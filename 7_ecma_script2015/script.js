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


// Blocks and IIFEs

{
  const a = 1;
  let b =2;
  var c = 3;
}

console.log(a + b);
// console.log(c);

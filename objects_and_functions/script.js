// // Fuction constructor
// var john = {
//   name: "John",
//   yearOfBirth: 1990,
//   job: "teacher"
// };
//
// var Person = function(name, yearOfBirth, job) {
//   this.name = name;
//   this.yearOfBirth = yearOfBirth;
//   this.job = job;
// }
// Person.prototype.calculateAge = function() {
//   console.log(2017 - this.yearOfBirth);
// };
//
// Person.prototype.lastName = "Smith"
// var john = new Person("John", 1990, "teacher");
// var jane = new Person("Jane", 1969, "designer");
// var mark = new Person("Mark", 1948, "retired");
//
// john.calculateAge();
// jane.calculateAge();
// mark.calculateAge();
//
// console.log(john.lastName);
// console.log(jane.lastName);
// console.log(mark.lastName);


// // Object.create
// var personProto = {
//       calculateAge: function() {
//         console.log(2017 - this.yearOfBirth);
//       }
// };
//
// var john = Object.create(personProto);
// john.name = "John";
// john.yearOfBirth = 1990;
// john.job = "teacher";
//
// var jane = Object.create(personProto,
//   {
//   name: { value: "Jane" },
//   yearOfBirth: { value: 1969 },
//   job: { value: "designer" }
// });
//
// console.log(john.calculateAge());


// // Premitives vs objects
// // Premitives
// var a = 23;
// var b = a;
// a = 46;
// console.log(a);
// console.log(b);
//
// // Pbjects
// var obj1 = {
//     name: "John",
//     age: 26
// };
// var obj2 = obj1;
// obj1.age = 30;
// console.log(obj1);
// console.log(obj2);
//
// // function
// var age = 27;
// var obj = {
//   name: "John",
//   city: "Lisbon"
// };
//
// function change(a, b) {
//   a = 30;
//   b.city  = "San Francisco";
// };
// change(age, obj);
//
// console.log(age);
// console.log(obj.city);


// // Passing functions as arguments
// var years = [1990, 1965, 1937, 2005, 1998];
//
// function arrayCalc(arr, fn) {
//   var arrRes = [];
//   for (var i = 0; i < arr.length; i++) {
//     arrRes.push(fn(arr[i]));
//   }
//   return  arrRes;
// }
//
// function calculateAge(el) {
//   return 2017 - el;
// }
//
// function isFullAge(el) {
//   return el >= 18;
// }
//
// function maxHeartRate(el) {
//   if (el >= 18 && el <= 81) {
//     return Math.round(206.9 - (0.67 * el));
//   } else {
//       return -1;
//   }
// }
//
// var ages = arrayCalc(years, calculateAge);
// var isFullAge = arrayCalc(ages, isFullAge);
// var rates = arrayCalc(ages, maxHeartRate);
//
// console.log(isFullAge);
// console.log(ages);
// console.log(rates);


// // Functions returning Functions
// function interviewQuestion(job) {
//   if (job === "designer") {
//     return function(name) {
//       console.log(name + ", can you please explain what UX design is?");
//     }
//   } else if (job === "teacher") {
//     return function(name) {
//         console.log("What subject do you teach, " + name + "?");
//     }
//   } else {
//     return function() {
//       console.log("Hello " + name + ", what do you do?");
//     }
//   }
// }
//
// var teacherQuestion = interviewQuestion("teacher");
// var designerQuestion = interviewQuestion("designer");
//
// teacherQuestion("John");
// designerQuestion("John")
// designerQuestion("Jane")
// designerQuestion("Mark")
// designerQuestion("Mike")
//
// interviewQuestion("teacher")("Mark");
//
// function isFullAge(age) {
//   if (age >= 18) {
//     return function(name) {
//       console.log("You are full age, " + name);
//     }
//   } else {
//     return function(name) {
//       console.log("You are not full age, " + name);
//     }
//   }
// }
//
// john = {
//   name: "John",
//   age: 20,
//   sex: "male"
// }
// var fullAge = isFullAge(john.age);
// fullAge(john.name);


// // IIFE
// function game() {
//   var score = Math.random() * 10;
//   console.log(score >= 5);
// }
// game();
//
// (function () {
//   var score = Math.random() * 10;
//   console.log(score >= 5);
// })();
//
// (function (goodL) {
//   var score = Math.random() * 10;
//   console.log(score >= 5 - goodLuck);
// })(5);


// // CLOSURES
// function retirement(retirementAge) {
//   var a = "years left until retirement."
//   return function(yearOfBirth) {
//     var age = 2017 - yearOfBirth;
//     console.log((retirementAge - age) + a);
//   }
// }
//
// var retirementUS = retirement(66);
// var retirementGermany = retirement(65);
// var retirementIceland = retirement(67);
//
// retirementUS(1990);
// retirementGermany(1990);
// retirementIceland(1990);
//
//
// function interviewQuestion(job) {
//   var question;
//   if (job === "designer") {
//     question = ", can you please explain what UX design is?";
//   } else if (job === "teacher") {
//     question = ", what subject do you teach?";
//   } else {
//     question = ", what do you do?";
//   }
//   return function(name) {
//     console.log(name + question);
//   }
// }
//
// var interviewDesigner = interviewQuestion("designer")("Mark");


// // Bind, call and apply
// var john = {
//     name: "John",
//     age: 36,
//     job: "teacher",
//     presentation: function(style, timeOfDay) {
//       if (style === "formal") {
//         console.log("Good " + timeOfDay + ", Ladies and gentleman!: I'm a " + this.name + ", I'm a " + this.job + " and I'm " + this.age + " years old.");
//       } else if (style === "friendly") {
//         console.log("Hey, what's up? I'm a " + this.name + ", I'm a " + this.job + " and I'm " + this.age + " years old. Have a nice " + timeOfDay + ".");
//       }
//     }
// };
//
// var emily = {
//   name: "Emily",
//   age: 35,
//   job: "designer"
// };
//
// john.presentation("formal", "morning");
// john.presentation.call(emily, "friendly", "afternoon")
// // john.presentation.apply(emily, ["friendly", "afternoon"]);
//
// var johnFriendly = john.presentation.bind(john, "friendly");
// johnFriendly("morning");
// johnFriendly("night");
//
// var emilyFormal = john.presentation.bind(emily, "formal");
// emilyFormal("afternoon");
//
//
// var years = [1990, 1965, 1937, 2005, 1998];
//
// function arrayCalc(arr, fn) {
//   var arrRes = [];
//   for (var i = 0; i < arr.length; i++) {
//     arrRes.push(fn(arr[i]));
//   }
//   return  arrRes;
// }
//
// function calculateAge(el) {
//   return 2017 - el;
// }
//
// function isFullAge(limit, el) {
//   return el >= limit;
// }
//
// var ages = arrayCalc(years, calculateAge);
// var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
// console.log(ages);
// console.log(fullJapan);


// CODING CHALLENGE
(function() {
  function Question(question, choice1, choice2, choice3, answer) {
    this.question =  question;
    this.choices =  [choice1, choice2, choice3];
    this.rightAnswer = answer;
  }

  Question.prototype.displayQuestion = function () {
    console.log(this.question);
    for (var i = 0; i < this.choices.length; i++) {
    console.log(i + " : " + this.choices[i]);
    }
  };

  Question.prototype.isAnswerCrrect = function(answer) {
    if (answer === this.rightAnswer) {
      console.log("You are crrect!");
      currentScore++;
    } else {
      console.log("You are wrong.");
    }
  };

  Question.prototype.printScore = function() {
    console.log("Current score: " + currentScore);
    console.log("--------------------------");
  };

  var questions = [];
  questions.push(new Question(
    "Which is an animal?", "Dog", "Potato", "robot", 0)
    );
  questions.push(new Question(
    "What do people usually do in the morning?", "Write their diary", "Wash their teeth", "Have a beer", 1)
    );
  questions.push(new Question(
    "Which is American brand?", "ZARA", "H&M", "GAP", 2)
    );
  var currentScore = 0;

  function giveQuize() {
    var random_num = Math.floor(Math.random() * questions.length);
    var qs = questions[random_num];
    qs.displayQuestion();
    var answer = prompt("Choose correct answer(type 'exit' to finish)");
    if (answer !== "exit") {
      qs.isAnswerCrrect(parseInt(answer));
      qs.printScore();
      giveQuize();
    }
  }

  giveQuize();
})();

// console.log('Hello World!!!')

/**********************************
 * Variables and data types
 * */
/*

var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Teacher';
console.log(job);

// Variable naming rules
// var 3years = 3; //error
var _3years = 3; // ok
var $3years = 3; // ok
// var john/mark = 'John and Mark' //error
var john_Mark = 'John and Mark' //ok

*/

/***************************************
 * Variable mutation and type coercion
 */

var firstName = 'John';
var age = 28;

// Type coercion
console.log(firstName + ' ' + age);

var job, isMarried;
job = 'teacher';
isMarried = false;

console.log(job + ' is a ' + age + ' year old '+ job + '.Is he married? ' + isMarried);

// Variable mutation
age = 'twenty eight';
job = 'driver';
alert(job + ' is a ' + age + ' year old '+ job + '.Is he married? ' + isMarried);

var lastName = prompt('What is his last name?');
console.log(firstName + ' ' + lastName);
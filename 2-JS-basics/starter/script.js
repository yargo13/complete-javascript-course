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

 /*
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
*/

/*******************************
 * Basic operators
 */

/*
var now, yearJohn, yearMark, ageJohn, ageMark;
now = 2018;
ageJohn = 28;
ageMark = 33;

// Math operators
yearJohn = now - 28;
yearMark = now - 33;

console.log(yearJohn);
console.log(now + 2);
console.log(now * 2);
console.log(now / 10);

// Logical operators
var johnOlder = ageJohn > ageMark;
console.log(johnOlder);

// typeof operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Mark in older than John');
var x;
console.log(typeof x);
*/

/***********************
 * Operator precedence
 */
/*
var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

// Multiple operators
var isFullAge = now - yearJohn >= fullAge;
console.log(isFullAge); //true

// Grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

// Multiple assignments
var x,y;
x = y = (3+5)*4 - 6; 
console.log(x,y);

// More operators
x *= 2;
console.log(x);
x += 10;
console.log(x);
x ++;
console.log(x);
*/

/**************************
* CODING CHALLENGE 1
*/

/*
var heightJohn = prompt('Insert John\'s height')
var massJohn = prompt('Insert John\'s mass')
var heightMark = prompt('Insert Mark\'s height')
var massMark = prompt('Insert Mark\'s mass')

var BMIJohn = massJohn/(heightJohn*heightJohn);
var BMIMark = massMark/(heightMark*heightMark);
console.log(BMIMark,BMIJohn);

var markHigher = BMIMark > BMIJohn;
console.log('Is Mark\'s BMI higher than John\'s? '+markHigher);
*/

/***************************
* If / else statements
*/

/*
var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married'){
    console.log(firstName + ' is married');
}
else {
    console.log(firstName + ' will hopefully marry soon :)')
}

var isMarried = true;
if (isMarried){
    console.log(firstName + ' is married');
}
else {
    console.log(firstName + ' will hopefully marry soon :)')
}
*/

/***************************
 * Boolean logic
 */

 /*
var firstName = 'John';
var age = 26;

if (age < 13){
    console.log(firstName + ' is a boy.');
}
else if(age >= 13 && age < 20) { // Between 13 and 20
    console.log(firstName + ' is a teenager.');
}
else if(age >= 20 && age < 30) {
    console.log(firstName + ' is a young man.');
}
else {
    console.log(firstName + ' is a man.');
}
*/

/***************************
 * Ternary Operator and Switch Statements
 */

/*
var firstName = 'John';
var age = 16;

// Ternary operator
age >= 18 ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinks juice.');

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);

// Switch statement
var job = 'instructor';
switch(job){
    case 'teacher':
    case 'instructor':
        console.log(firstName + ' teaches kids how to code.');
        break;
    case 'driver':
        console.log(firstName + ' drives an uber in Lisbon.');
        break;
    case 'designer':
        console.log(firstName + ' designs beautiful websites.');
        break;
    default:
        console.log(firstName + ' does something else.');
}

age = 17
switch(true){
    case age < 13:
        console.log(firstName + ' is a boy.');
        break;
    case age >= 13 && age < 20:
        console.log(firstName + ' is a teenager.');
        break;
    case age >= 20 && age < 30:
        console.log(firstName + ' is a young man.');
        break;
    default:
        console.log(firstName + ' is a man.');
}

*/

/*******************
* Truthy and Falsy values and equality operators
*/

// falsy values: undefined, null, 0, '', NaN
// truthy values: NOT falsy values

/*
var height;
if(height || height === 0){
    console.log('Variable is defined');
}
else {
    console.log('Variable has NOT been defined');
}

height = 23;
// Equality operators
if (height == '23'){
    console.log('The === operator does type coercion!');
}
*/

/********************
 * CODING CHALLENGE 2
 */

/*
var averageJohn = (89 + 120 + 103)/3;
var averageMark = (116 + 94 + 123)/3;
var averageMary = (97 + 134 + 105)/3;
averageJohn = 1;
averageMark = 2;
averageMary = 1;

switch(true){
    case averageMary > averageJohn && averageMary > averageMark:
        console.log('Mary wins');
        break;
    case averageJohn > averageMark && averageJohn > averageMary:
        console.log('John wins');
        break;
    case averageMark > averageJohn && averageMark > averageMary:
        console.log('Mark wins');
        break;
    case averageMary == averageJohn && averageMary == averageMark:
        console.log('Mary, Mark and John ties');
        break;
    case averageMary == averageJohn:
        console.log('Mary and John ties');
        break;
    case averageMary == averageMark:
        console.log('Mary and Mark ties');
        break;
    case averageJohn == averageMark:
        console.log('John and Mark ties');
        break;
    default:
        console.log('This shouldn\'t happen');
}
*/

/*******************************
 * Functions
 */
/*
function calculateAge(birthYear){
    return 2018 - birthYear;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1969);
console.log(ageJohn, ageMike, ageJane);

function yearsUntilRetirement(year, firstName){
    var age = calculateAge(year);
    var retirement = 65 - age;
    if (retirement > 0){
        console.log(firstName + ' retires in ' + retirement + ' years.');
    }
    else {
        console.log(firstName + ' is already retired.')
    }
    
}

yearsUntilRetirement(1990, 'John');
yearsUntilRetirement(1948, 'Mike');
yearsUntilRetirement(1969, 'Jane');
*/

/********************
 * Function Statements and Expressions
 */

 /*
// Function declaration
// function whatDoYouDo(job, firstName){}

// Function expression
var whatDoYouDo = function(job, firstName) {
    switch(job){
        case 'teacher':
        case 'instructor':
            return firstName + ' teaches kids how to code.';
        case 'driver':
            return firstName + ' drives an uber in Lisbon.';
        case 'designer':
            return firstName + ' designs beautiful websites.';
        default:
            return firstName + ' does something else.';
    }
}

console.log(whatDoYouDo('teacher', 'John'))
console.log(whatDoYouDo('designer', 'Jane'))
console.log(whatDoYouDo('retired', 'Mark'))
*/

/**************************************
 * Arrays
 */
/*
// Initialize new array
var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990,1969,1948);

console.log(names[0]);
console.log(names.length);

// Mutate array data
names[1] = 'Ben';
names[5] = 'Mary';
console.log(names);
names[names.length] = 'Charles';
console.log(names);

// Different data types
var john = ['John', 'Smith', 1990, 'teacher', false];
john.push('blue');
john.unshift('Mr.');
console.log(john);

john.pop();
console.log(john);
john.shift();
console.log(john);

console.log(john.indexOf(1990));
console.log(john.indexOf(23));

var isDesigner = john.indexOf('designer') === -1 ? 'John is not a designer' : 'John is a designer'
console.log(isDesigner);
*/

/********************
 * CODING CHALLENGE 3
 */
/*
var tipCalculator = function(bill){
    if(bill < 50){
        return 0.2*bill;
    }
    else if(bill < 200){
        return 0.15*bill;
    }
    else {
        return  0.1*bill;
    }
}

var bills = [124,48,268]
var tips = []
var billsAndTips = [];
tips[0] = tipCalculator(bills[0]);
billsAndTips[0] = bills[0] + tips[0];
tips[1] = tipCalculator(bills[1]);
billsAndTips[1] = bills[1] + tips[1];
tips[2] = tipCalculator(bills[2]);
billsAndTips[2] = bills[2] + tips[2];

console.log(tips);
console.log(billsAndTips);
*/

/************************
 * Objects and properties
 */

 /*
// Object Literal
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane','Mark','Bob','Emily'],
    job: 'teacher',
    isMarried: false
};
console.log(john);
console.log(john.firstName);
var x = 'birthYear'
console.log(john['lastName']);
console.log(john[x]);

john.job = 'designer';
john['isMarried'] = true;
console.log(john);

// new Object syntax
var jane = new Object();
jane.name = 'Jane';
jane.birthYear = 1969;
jane['lastName'] = 'Smith';
console.log(jane);
*/

/*******************
 * Objects and methods
 */

 /*
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1992,
    family: ['Jane','Mark','Bob','Emily'],
    job: 'teacher',
    isMarried: false,
    calcAge: function(){
        this.age = 2018 - this.birthYear;
    }
};

john.calcAge(1990);
console.log(john);
*/

/*********************
 * CODING CHALLENGE 4
 */

 /*
john = {
    fullName: "John Smith",
    mass: 78,
    height: 1.84,
    calculateBMI: function(){
        this.BMI = this.mass/(this.height*this.height);
        return this.BMI;
    }
}

mark = {
    fullName: "Mark Jones",
    mass: 78,
    height: 1.85,
    calculateBMI: function(){
        this.BMI = this.mass/(this.height*this.height);
        return this.BMI;
    }
}

BMIJohn = john.calculateBMI()
BMIMark = mark.calculateBMI()
console.log(BMIJohn,BMIMark)

if (BMIJohn > BMIMark){
    console.log(john.fullName + ' has the highest BMI.');
}
else if (BMIMark > BMIJohn) {
    console.log(mark.fullName + ' has the highest BMI.')
}
else {
    console.log(john.fullName + ' and ' + mark.fullName + ' have the same BMI.')
}
*/

/*************************
 * Loops and iteration
 */
/*
// For loop
for (var i = 0; i<10; i+=2){
    console.log(i);
}

var john = ['John','Smith',1990,'designer', false];
for (var i = 0; i< john.length; i++){
    console.log(john[i]);
}

// While loop
var i = 0;
while(i< john.length){
    console.log(john[i]);
    i++;
}

// Continue and break statements
var john = ['John','Smith',1990,'designer', false];
for (var i = 0; i< john.length; i++){
    if(typeof john[i] !== 'string') continue;
    console.log(john[i]);
}

for (var i = 0; i< john.length; i++){
    if(typeof john[i] !== 'string') break;
    console.log(john[i]);
}

for (var i = john.length-1; i>= 0;i--){
    console.log(john[i]);
}
*/

/********************************
 * CODING CHALLENGE 5
 */

johnBill = {
    bills: [124,48,268,180,42],
    calcTips: function() {
        this.tips = [];
        this. billsAndTips = [];
        var percentage;
        for (i = 0; i < this.bills.length;i++){
            if(this.bills[i] < 50){
                percentage = 0.2;
            }
            else if(this.bills[i] < 200){
                percentage = 0.15;
            }
            else {
                percentage = 0.1;
            }
            this.tips.push(percentage*this.bills[i]);
            this.billsAndTips.push(this.tips[i]+this.bills[i]);
        }
    }
}

markBill = {
    bills: [77,375,110,45],
    tips: [],
    billsAndTips: [],
    calcTips: function() {
        var percentage;
        for (i = 0; i < this.bills.length;i++){
            if(this.bills[i] < 100){
                percentage = 0.2;
            }
            else if(this.bills[i] < 300){
                percentage = 0.1;
            }
            else {
                percentage = 0.25;
            }
            this.tips.push(percentage*this.bills[i]);
            this.billsAndTips.push(this.tips[i]+this.bills[i]);
        }
    }
}

averageTips = function(tips){
    var sum = 0;
    for (i = 0;i<tips.length;i++){
        sum += tips[i];
    }
    return sum/tips.length;
}

johnBill.calcTips();
markBill.calcTips();
averageJohn = averageTips(johnBill.tips);
averageMark = averageTips(markBill.tips);

if (averageJohn > averageMark){
    console.log('John paid more tips on average');
}
else if(averageMark > averageJohn){
    console.log('Mark paid more tips on average');
}
else {
    console.log('They both paid the same');
}
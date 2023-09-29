// Use camel Case as needed

/** Question 1
 * initialise the variable x to the value of 0
 * console log the variable x with a preincrement. Write a single line comment as to what that output will be
 * console log the variable x with a postincrement. Write a single line comment as to what that output will be
 * console log the variable x. Write a single line comment as to what that output will be
 */
var x = 0;
console.log(++x);
// x = 1
console.log(x++);
// x = 1
console.log(x);
// x = 2

/** Question 2
 * initialise the variable y to the value of 10
 * console log the variable y with a postdecrement. Write a single line comment as to what that output will be
 * console log the variable y with a predecrement. Write a single line comment as to what that output will be
 */
var y = 10;
console.log(y--);
// y = 10
console.log(--y);
// y = 8

/** Question 3
 * initialise the variable z to the value of 50
 * decrement the variable z by 5
 * increment the variable z by 1
 * decrement the variable z by 14
 * console log the variable z
 */
var z = 50;
z -= 5;
z++;
z -= 14;
console.log(z);

/** Question 4
 * initialise the variable `bag one` to the value of 10
 * increment bag one by 2
 * initialise the variable `bag two` to the value of 12
 * decrement bag two by 2
 * initialise total to the average of bag one and bag two
 * console log the total. Write a single line comment as to what will be displayed
 */
var bagOne = 10;
bagOne +=2;
var bagTwo = 12;
bagTwo -=2;

var bagAverage = (bagOne + bagTwo) /2;
console.log(bagAverage);
// bagAverage = 11

/** Question 5
 * initialise the variable `container one` to the value of 50
 * increment container one by 5
 * initialise the variable `container two` to the value of 20
 * decrement container two by 10
 * initialise total to the average of container one and container two
 * console log the total. Write a single line comment as to what will be displayed
 */
var containerOne = 50;
containerOne += 5;
var containerTwo = 20;
containerTwo -= 10;

var containerAverage = (containerOne + containerTwo) / 2;
console.log(containerAverage);
// containerAverage = 32.5


/** Question 6
 * initialise the variable `litre one` to the value of 1.5
 * initialise the variable `litre two` to the value of 2
 * initialise the variable `litre three` to the value of 5.5
 * initialise total to the average of litre one, litre two and litre three
 * console log the total. Write a single line comment as to what will be displayed
 */

var litreOne = 1.5;
var litreTwo = 2;
var litreThree = 5.5;
var litreAverage = (litreOne + litreTwo + litreThree) /3;
console.log(litreAverage);
// litreAverage = 3


/** Question 7
 * initialise the variable `centimeter one` to the value of 6
 * initialise the variable `centimeter two` to the value of 3
 * initialise the variable `centimeter three` to the value of 8
 * initialise total to the average of centimeter one, centimeter two and centimeter three
 * console log the total and only show 2 decimal places using the .toFixed method. Write a single line comment as to what will be displayed
 */
var centimeterOne = 6;
var centimeterTwo = 3;
var centimeterThree = 8;

var centimeterAverage = (centimeterOne + centimeterTwo + centimeterThree) / 3;
console.log(centimeterAverage.toFixed(2));
// centimeterAverage = 5.67


/** Question 8
 * initialise the variable `fan level one` to the value of 8
 * initialise the variable `fan level two` to the value of 4
 * initialise the variable `fan level three` to the value of 14
 * initialise total to the average of fan level one, fan level two and fan level three
 * console log the total to 3 decimal place. Write a single line comment as to what will be displayed
 */
var fanLevelOne = 8;
var fanLevelTwo = 4;
var fanLevelThree = 14;
var fanAverage = (fanLevelOne + fanLevelTwo + fanLevelThree) /3;
console.log(fanAverage.toFixed(3));
// fanAverage = 8.667



/** Question 9
 * initialise the variable `case one` to the value of 10
 * initialise the variable `case two` to the value of 30
 * initialise the variable `case three` to the value of 35
 * initialise total to the average of case one, case two and case three
 * console log the total and round the total to 1 decimal places. Write a single line comment as to what will be displayed
 */
var caseOne = 10;
var caseTwo = 30;
var caseThree = 35;
var caseAverage = (caseOne + caseTwo + caseThree) /3;
console.log(caseAverage.toFixed(1));
// caseAverage = 25.0



/** Question 10
 * initialise the variable `guitar strings` to the value of 6
 * initialise the variable `violin strings` to the value of 4
 * initialise total to the average of guitar strings and violin strings
 * console log the total and round the total to 1 decimal place
 */
var guitarStrings = 6;
var violinStrings = 4;
var averageStrings = (guitarStrings+violinStrings) /2
console.log(averageStrings.toFixed(1));
// averageStrings = 5.0



/** Question 11
 * initialise the variable `box one` to the value of 3
 * initialise the variable `box two` to the value of 4
 * initialise the variable `box three` to the value of 6
 * initialise the variable `box four` to the value of 9
 * initialise total to the average of all the boxes
 * console log the total. Write a single line comment as to what will be displayed
 */
var boxOne = 3;
var boxTwo = 4;
var boxThree = 6;
var boxFour = 9;
var boxAverage = (boxOne + boxTwo + boxThree + boxFour) /4;
console.log(boxAverage);
// boxAverage = 5.5



// Question 12 - write your own arithmatic question with incrementing + answer
/**
 *initialise the variable nathen to the value of 30
 * increment the variable by 2
 * console log the variable with a postdecrement write a single line comment as to what the answer will be
 * console log the variable nathan. write the answer in a single line comment
 */
var nathan = 30;
nathan += 2;
console.log(nathan--);
// nathan = 32
console.log(nathan);
// nathan = 31

// Question 13 - write your own averaging question + answer
/**
 * initialise the variable jerome to 10
 * initialise the variable nathen to 20
 * initialise the total average of jerome and nathan
 * console log the average. write a single line comment as to what the answer will be
 */
var jerome = 10;
var nathen = 20;
var average = (jerome + nathen) /2;
console.log(average);
// average = 15


// Question 14 - write your own averaging question + answer
/**
 * initialise the variable apples to 3
 * initialise the variable oranges 7.5
 * initialise the variable bananas to 9.5
 * initialise `fruit salad` to the average of all the fruits
 * console log `fruit salad` to two decimal places. write a single line comment as to what the answer will be
 */
var apples = 3;
var oranges = 7.5;
var bananas = 9.5;
var fruitSalad = (apples + oranges + bananas) / 3;
console.log(fruitSalad.toFixed(2));
// fruitSalad = 6.67
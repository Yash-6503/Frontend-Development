/*
Write a 'JavaScript' program to print sum of first and last digit of given any 2 digit number 
and print the output on the console.
*/

let number = 23;

let firstDigit = number / 10;
let lastDigit = number % 10;

let addition = +firstDigit.toPrecision(1) + +lastDigit;

console.log(addition);

console.log("given number is = " + number + ", so the result is (" + firstDigit.toPrecision(1) + "+" + lastDigit + ") = " + addition);


/*
5
given number is = 23, so the result is (2+3) = 5
*/
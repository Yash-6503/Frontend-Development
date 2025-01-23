/*
Write a 'JavaScript' program to check and print the Maximum number 
among three numbers using ternary operator.
*/

let a = 10, b = 200, c = 134;

let A = a > b && a > c;
let B = b > a && b > c;
let C = c > a && c > b;

A ? console.log("Max = " + a) : B ? console.log("Max = " + b) : console.log("Max = " + c);

/*
Max = 200
*/
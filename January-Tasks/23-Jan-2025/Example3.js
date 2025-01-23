/*
Write a 'JavaScript' program to check and print the Maximum number among 
three numbers without using ternary operator, control statements and predefined methods.
*/

let a = 10, b = 200, c = 134;

let A = a > b && a > c;
let B = b > a && b > c;
let C = c > a && c > b;

let Equal = a == b && a == c;


A && console.log("Max = " + a);
B && console.log("Max = " + b);
C && console.log("Max = " + c);
Equal && console.log("All are Equal");

/*
Max = 200
*/
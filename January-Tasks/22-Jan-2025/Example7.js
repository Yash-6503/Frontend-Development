/*
Write a 'JavaScript' program to swap any two integer number using third variable and print
the output on the console.
*/

let num1 = 10;

let num2 = 20;

let temp;

console.log(`Before Swapping : a = ${num1} , b = ${num2}`);

temp = num1;
num1 = num2;
num2 = temp;

console.log(`After Swapping : a = ${num1} , b = ${num2}`);


/* output
Before Swapping : a = 10 , b = 20
After Swapping : a = 20 , b = 10
*/
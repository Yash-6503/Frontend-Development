/*
Write a 'JavaScript' program to print sum of first and last digit of given any 3 digit number 
and print the output on the console.
*/

let number = 123;

let firstDigit = parseInt(number / 100);

let lastDigit = number % 10;

let sum = firstDigit + lastDigit;

console.log(`Sum of first digit (${firstDigit}) and last digit (${lastDigit}) of number ${number} is ${sum}`);

/*
Sum of first digit (1) and last digit (3) of number 123 is 4
*/
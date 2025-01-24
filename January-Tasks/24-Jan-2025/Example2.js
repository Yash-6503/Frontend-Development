/*
Write a 'JavaScript' program to find maximum between two numbers using if-else.
*/


function checkMax() {
    let number1 = +num1.value;
    let number2 = +num2.value;

    if (number1 > number2) {
        ans.value = "Max = " + number1;
    } else if (number2 > number1) {
        ans.value = "Max = " + number2;
    } else if (number1 == number2) {
        ans.value = "Both are Equal";
    }
}
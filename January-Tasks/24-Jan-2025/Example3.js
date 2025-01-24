/*
Write a 'JavaScript' program to find maximum between three numbers using if-else.
*/

function checkMax() {

    let number1 = +num1.value;
    let number2 = +num2.value;
    let number3 = +num3.value;

    if (number1 > number2 && number1 > number3) {
        ans.value = "Max = " + number1;
    } else if (number2 > number1 && number2 > number3) {
        ans.value = "Max = " + number2;
    } else if (number3 > number1 && number3 > number2) {
        ans.value = "Max = " + number3;
    } else if (number1 == number2 && number1 == number3) {
        ans.value = "All are Equal";
    } else if (number1 == number2 && number1 != number3) {
        ans.value = "Number1 and Number2 is Max = " + number1;
    } else if (number1 == number3 && number1 != number2) {
        ans.value = "Number1 and Number3 is Max = " + number1;
    } else if (number2 == number3 && number2 != number1) {
        ans.value = "Number2 and Number3 is Max = " + number2;
    }
}
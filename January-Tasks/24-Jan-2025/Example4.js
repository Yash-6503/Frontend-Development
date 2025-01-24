/*
Write a 'JavaScript' program to check whether a number is negative, positive or zero.
*/

function checkNumber() {
    let number = +num.value;

    if (number > 0) {
        ans.value = "Positive Number";
    } else if (number == 0) {
        ans.value = "Zero";
    } else {
        ans.value = "Negative Number";
    }
}
/*
Write a 'JavaScript' program to check whether a year is leap year or not.
*/

function isLeapYear() {

    let inputYear = +year.value;

    if (inputYear % 4 == 0 && (inputYear % 100 != 0 || inputYear % 400 == 0)) {
        ans.value = "Leap Year";
    } else {
        ans.value = "Not a Leap Year";
    }
}

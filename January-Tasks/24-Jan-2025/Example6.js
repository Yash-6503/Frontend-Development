/*
Write a 'JavaScript' program to check whether the string is uppercase or lowercase alphabet.
*/

function checkCharCase() {
    let character = ch.value;

    if (character === character.toLowerCase() && character !== character.toUpperCase()) {
        ans.value = "Lowercase";
    } else if (character === character.toUpperCase() && character !== character.toLowerCase()) {
        ans.value = "Uppercase";
    } else {
        ans.value = "Not an alphabet";
    }
}
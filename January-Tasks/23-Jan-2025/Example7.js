/*
(Using ternary operator) write a JavaScript program for a bookstore named "Book World" that calculates the discounted amount based on the total purchase amount. 
------  

The store provides three types of discounts to its customers:
-> If the total purchase amount is less than Rs. 1000, there is no discount.
-> If the total purchase amount is between Rs. 1000 and Rs. 5000 (inclusive), customers get a 5% discount on the total purchase amount.
-> If the total purchase amount is greater than Rs. 5000, customers get a 10% discount on the total purchase amount.
*/

let bookstoreName = "Book World";

let purchaseAmount = 999;

let discount1 = (5 / 100) * purchaseAmount;
let discount2 = (10 / 100) * purchaseAmount;

purchaseAmount < 1000 ? console.log("Total amount = ", purchaseAmount) : purchaseAmount < 5000 ? console.log("Total amount including 5% discount = ", purchaseAmount - discount1) : console.log("Total amount including 10% discount = ", purchaseAmount - discount2);


/*
Total amount =  999
*/

/*
Total amount including 5% discount =  1900
*/

/*
Total amount including 10% discount =  9000
*/
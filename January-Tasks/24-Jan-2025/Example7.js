/*
Rajesh bought an old TV for 3500 RS. and Rajesh sold the TV for 7000 RS, which includes a 5% VAT and a 10% tax on the selling 	price. 
-------  Calculate the net selling price by removing VAT and tax.
         Determine whether Rajesh made a profit or incurred a loss, and calculate the respective amount.

         Program Requirements:

         The program should read the cost price and the total selling price (including VAT and tax).
         The program should calculate the net selling price by removing VAT and tax.
         The program should compare the net selling price with the cost price to determine profit or loss.
         The program should display the amount of profit or loss.
*/

let costPrice = prompt("Enter the cost price of the TV: ");
let sellingPrice = prompt("Enter the selling price of the TV (including VAT and tax): ");
let vat = 5;
let tax = 10;


let vatAndTax = ((vat / 100) * sellingPrice) + ((tax / 100) * sellingPrice);
let netSellingPrice = sellingPrice - vatAndTax - costPrice;

console.log("You made a profit of Rs.", netSellingPrice);

// 350 + 700 = 1050 -> vatAndTax
// 7000 - 1050 = 5950 - 3500 = 2450 -> netSellingPrice
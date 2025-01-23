/*
Develop a program for an online bus ticket booking platform called "Bus Ticket Booker." 
------  The platform offers tickets for a fixed price of Rs. 300 per seat. However, there are discounts available for senior citizens. 
        If a passenger's age is between 60 and 100 (inclusive), they will receive a 20% discount on the total booking cost.

        Write a JavaScript program for "Bus Ticket Booker" that takes the number of tickets and the age of the passenger as inputs and 
        calculates the total booking cost after applying any applicable discount using the ternary operator. The program should display 
        the bill with a suitable message, including the total cost and the discount amount (if applicable).

        Your task is to implement the program logic using only Ternary Operator.
*/

let numberOfTickets = 3;
let age = 20;

let ticketCost = 300;
let totalCost = ticketCost * numberOfTickets;
let discount = 20;

age >= 60 && age <= 100
        ? console.log("Total cost before discount: Rs.", totalCost, "\nDiscount amount: Rs.", (discount / 100) * totalCost, "\nTotal cost after discount: Rs.", totalCost - ((discount / 100) * totalCost))
        : console.log("Total cost before discount: Rs.", totalCost, "\nDiscount amount: Rs. 0.00 \nTotal cost after discount: Rs.", totalCost);

/* not a senior citizen
Total cost before discount: Rs. 900 
Discount amount: Rs. 0.00
Total cost after discount: Rs. 900
*/

/* senior citizen
Total cost before discount: Rs. 600 
Discount amount: Rs. 120
Total cost after discount: Rs. 480
*/


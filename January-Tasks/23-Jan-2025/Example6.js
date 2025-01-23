/*
A shopkeeper buys a TV set for Rs. 3500 and sells it at a profit of 27%. Apart from this a VAT of 12.7% 
and Service Charge is 3.87% is charged. 
-------  
Write a JavaScript program to Display total selling price, profit along with vat and service charge.
         To calculate the selling price, profit, VAT, and service charge, follow these steps:

1) Calculate the selling price:

    Selling Price = Cost Price + Profit

    Selling Price = Rs. 3500 + (27% of Rs. 3500)


2) Calculate the profit:

    Profit = Selling Price - Cost Price


3) Calculate VAT:

    VAT = 12.7% of Selling Price


4) Calculate Service Charge:

    Service Charge = 3.87% of Selling Price
*/


let costPrice = 3500;
let profit = 27;
let VAT = 12.7;
let serviceCharge = 3.87;

let profitOnSelling = ((profit / 100) * costPrice);

let sellingPrice = costPrice + profitOnSelling;
console.log("Selling Price is Rs.", sellingPrice);

console.log("Profit is Rs.", sellingPrice - costPrice);

let VatCharge = (VAT / 100) * sellingPrice;
console.log("VAT on selling price is Rs.", VatCharge);

let service = (serviceCharge / 100) * sellingPrice;
console.log("Service Charges is Rs.", service);

let totalSellingPrice = sellingPrice + VatCharge + service;
console.log("Total Selling price is Rs.", totalSellingPrice);

/*
Selling Price is Rs. 4445
Profit is Rs. 945
VAT on selling price is Rs. 564.515
Service Charges is Rs. 172.0215
Total Selling price is Rs. 5181.5365 
*/
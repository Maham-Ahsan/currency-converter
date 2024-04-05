#! /usr/bin/env node
import inquirer from "inquirer";
const Currency = {
    USD: 1,
    EUR: 0.92,
    AFN: 71.23,
    INR: 83.29,
    PKR: 277.70,
};
let userAnswer = await inquirer.prompt([{
        name: "from",
        message: "Enter from Currency",
        type: 'list',
        choices: ["USD", "EUR", "AFN", "INR", "PKR"]
    },
    {
        name: "to",
        message: "Enter to Currency",
        type: 'list',
        choices: ["USD", "EUR", "AFN", "INR", "PKR"]
    }, {
        name: 'amount',
        message: "Enter your Amount",
        type: 'number'
    }
]);
let fromAmount = Currency[userAnswer.from];
let toAmount = Currency[userAnswer.to];
let amount = userAnswer.amount;
let baseAmount = amount / fromAmount; //USD base currency
let convertedAmount = baseAmount * toAmount;
console.log(convertedAmount);
console.log(fromAmount);
console.log(toAmount);
console.log(amount);

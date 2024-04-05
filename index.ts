#! /usr/bin/env node

import inquirer from "inquirer";

const Currency : any = {
    USD: 1,  //base currency
    EUR: 0.92,
    AFN: 71.23,
    INR: 83.29,
    PKR: 277.70,
    MYR: 4.75,
    CNY: 7.23,
    JPY:151.64,
};

let userAnswer = await inquirer.prompt([{
    name:"from",
    message:"Enter from Currency",
    type:'list',
    choices:["USD","EUR","AFN","INR","PKR", "MYR", "CNY", "JPY"]
},
{
    name:"to",
    message:"Enter to Currency",
    type:'list',
    choices:["USD","EUR","AFN","INR","PKR","MYR", "CNY", "JPY"]
},{
    name:'amount',
    message:"Enter your Amount",
    type:'number'
}

]);

let userFromCurrency = userAnswer.from
let userToCurrency = userAnswer.to

let fromAmount = Currency[userAnswer.from] //exchange rate

let toAmount = Currency[userAnswer.to]   //exchange rate

let amount = userAnswer.amount;

let baseAmount = amount/ fromAmount //USD base currency

let convertedAmount = baseAmount * toAmount

console.log(convertedAmount);
console.log(fromAmount);
console.log(toAmount);
console.log(amount);

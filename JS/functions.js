"use strict";

//sayHello to do
//var name = " Jake";
function sayHello (name) {
    return ("Hello" + name +"!");
}

//second to do
console.log(sayHello("Jake"));
//console.log)sayHello(name));

//helloMessage to o
var helloMessage = (sayHello("Jake"));
console.log(helloMessage);

//myName to do
var myName = "Jake";
console.log(sayHello(myName));

//random number between 1-3
var random = Math.floor((Math.random() * 3)+1);
console.log(Math.floor(Math.random()));
//generating a random number with decimals and rounds down.

//isTwo
function isTwo(num) {
    return (num === 2);
}
console.log(isTwo(2));

//calculate Tip
function calcuateTip(tipPercent, totalBill) {
    // return tipPercentage * totalBill; or
    var tip = tipPercentage * totalBill;
    return tip;
}
console.log(calcuTip(.20, 28.60).toFixed(2));

// // var totalBill =(prompt("Hello, what's your bill total?"));
// var tipPerecent =(prompt("How much would you like to tip"));
//
// alert("Here's the amount you should tip based on your total bill $") + (calculateTip(bill, percent).toFixed(2));
//
// console.log(applyDiscount(20, 20));
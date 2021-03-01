"use strict";

// Create a function called 'sayHello' that takes a parameter 'name'.
//   When called, the function should return a message that says hello to the passed in name.
//  *
//   Example
//   sayHello("codeup") // returns "Hello, codeup!"
//  To Do 1:

function sayHello (name) {
    return ("Hello" + name +"!");
}
console.log(sayHello("Jake"));

//console.log)sayHello(name));

/**
 * TODO:
 * Store your name as a string in a variable named 'myName', and pass that
 * variable to the 'sayHello' function. You should see the same output in the
 * console.
 */
var myName = "Jake";
console.log(sayHello(myName));

//helloMessage to do
var helloMessage = (sayHello("Jake"));
console.log(helloMessage);

/**
 * TODO:
 * Store your name as a string in a variable named 'myName', and pass that
 * variable to the 'sayHello' function. You should see the same output in the
 * console.
 */
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
    return tipPercentage * totalBill;
}
// or
//var tip = tipPercentage * totalBill;
//return tip;
// }
// console.log(calcuTip(.20, 28.60).toFixed(2));

var totalBill =Number(prompt("Hello, what's your bill total?"));
var tipPercent =Number(prompt("How much would you like to tip"));

console.log(Number("3.25234").toFixed(2));

var calculatedTip = calculateTip(tipPercent,totalBill)
var tipMessage = "You would tip $" + calculatedTip;

alert(tipMessage);
//applyDiscount function

function applyDiscount(price, discountPercent){
    return price - (price * discountPercent);
}
console.log(applyDiscount(20, 20));
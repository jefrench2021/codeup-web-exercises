"use strict";
console.log("Hello from external JavaScript");

//alert
alert("Welcome to my Website!");

//Prompt
var favoriteColor = prompt("What is your favorite color?");
console.log('Great, ' + favoriteColor + ' is my favorite color too!');

//prompt Question 3. previous exercise
var LittleMermaid = parseInt(prompt("How many days have you rented Little Mermaid?"));
var BrotherBear = parseInt(prompt("How many days have you rented BrotherBear?"));
var Hercules = parseInt(prompt("How many days have you rented Hercules?"));
var totalAmount = (LittleMermaid + BrotherBear + Hercules) * 3
alert("The total due for your rentals is $" + totalAmount + "! Thank you for shopping with Jake's Movie Night!")

var googleHours = Number(prompt("Please type your contracted hours here for Google."));
var amazonHours = Number(prompt("Please type your contracted hours here for Amazon."));
var facebookHours = Number(prompt("Please type your contracted hours here for Facebook."));
var totalHoursWorked = parseInt((googleHours * 400) + (amazonHours * 380) + (facebookHours * 350));
alert("Your total hours for all contracts is $" + totalHoursWorked)






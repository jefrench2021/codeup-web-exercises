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

var classFull = confirm("Is this class displayed as full?");
var scheduleConflicts = confirm("Do you have a class at this time?");
alert("You have been enrolled in this course. " + (!classFull && !scheduleConflicts));

var offerNotExpired = confirm('Is the offer still valid?');
var twoOrMoreItems = parseInt(prompt('Is there 2 or more items in your basket?')) >= 2;
var premiumMember = confirm('Are you a Premium member?');
var canApplyOffer = (twoOrMoreItems || premiumMember) && offerNotExpired;
alert("Offer is applied, thank you for shopping with us!")

//other options:
// var hasEnoughItems = twoOrMoreItems || premiumMember;
//or
//var canApplyOffer = hasEnoughItems && offerNotExpired;



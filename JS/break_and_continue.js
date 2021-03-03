// var userNum;
// for (var x = 0; x < 50; x++) {
//     userNum = parseFloat(prompt("Enter an odd number."));
//     if (userNum % 2 !== 0) {
//         console.log("enter an odd number.");
//         break;
//     }
// }
// for (var y = 1; y < 50; y+=2) {
//     if (y === userNum) {
//         console.log("wow!");
//         continue;
//     }console.log(y);
// }
"use strict";
do {
    var userNumber = Number(prompt("Pick an odd number between 1 and 50"));
    if (userNumber % 2 === 0){
        alert(userNumber + " is not odd, please pick again")
    } else if (userNumber < 1 || userNumber > 50) {
        alert(userNumber + " is not between 1 and 50, please pick again");
    } else if (isNaN(userNumber)){
        alert(userNumber + " is not a number, please pick again");
    } else {
        alert("congrats you picked the right number");
        break;
    }
} while (true);

// problem 2
for (var i = 1; i <= 50; i += 2){
    if (i === userNumber){
        console.log("yikes! Skipping number: " + i);
        continue;
    }

    console.log("Here is an odd number: " + i);
}
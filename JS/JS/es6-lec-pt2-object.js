
/*****************************************************************
 *                       Object Destructuring
 *          Shorthand for creating variables from object properties
 *          Based on the name of the key
 *****************************************************************/

var personA = {
    name: 'codeup',
    age: 4
};

// // old way
// var name = personA.name;
// var age = personA.age;
// console.log(name);
// console.log(age);






/*==============================================*/


const pals = {
    dog: "Spike",
    cat: "Tom",
    mouse: "Jerry"
};

//old way
// let myDog = pals.dog;
// let myCat = pals.cat;
// let myMouse = pals.mouse;
//
//
// console.log(myDog); //Spike
// console.log(myCat); //Tom
// console.log(myMouse); //Jerry


//TODO TOGETHER: REFACTOR the above approach using ES6
//new way


// console.log(dog);
// console.log(cat);
// console.log(mouse);


/*==============================================*/

//TODO: Use object destructuring with the following object

const theFlash = {
    name: "Barry Allen",
    alias: "The Flash",
    occupation: "Forensic Scientist",
    powers: "Super Speed"
}



// console.log(alias);
// console.log(powers);


/*==============================================*/
//Destructuring with Arrays

let cats = ["CJ", "Claude", "Max"];

//oldway
// let cat1 = cats[0];
// let cat2 = cats[1];
// let cat3 = cats[2];


//new way


// console.log(cat1);
// console.log(cat2);
// console.log(cat3);


/*==============================================*/

const alphabet = ['A', 'B', 'C', 'D', 'E'];

//old way
// const a = alphabet[0];
// const b = alphabet[1];
// const c = alphabet[2];


//TODO TOGETHER: new way


// console.log(a);
// console.log(b);
// console.log(c);



//TODO TOGETHER: To skip an element...


// console.log(a);
// // console.log(b);
// console.log(c);
// console.log(d);


//TODO TOGETHER: To get all elements...Spread operator *BONUS


// console.log(a);
// console.log(b);
// console.log(c);
// console.log(rest);


/*==============================================*/
// Using with functions


//old way
// function tellMeAbout(person) {
// 	var name = person.name;
// 	var age = person.age;
// 	console.log(name); // 'codeup'
// 	console.log(age); // 4
// }


//new way


//
// const person = {
// 	name: 'Douglas',
// 	age: 38
// };
//
// tellMeAbout(person);


/*==============================================*/



// let shape1 = {
// 	height: 10,
// 	width: 10
// }

// let shape2 = {
// 	height: 5,
// 	width: 5
// }

// console.log(getArea(shape1)); //100
// console.log(getArea(shape2)); //25



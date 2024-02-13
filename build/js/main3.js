"use strict";
//TYPESCRIPT OBJECTS ARRAYS TUPLES  & ENUMS
//Array inference
let stringArr = ['one', 'hey', 'Kevin'];
let guitars = ['Strat', ' Les Paul', 5150];
let mixedData = ['EVH', 1984, true];
//ARRAY ASSIGNMENT
//stringArr[0] = 42 
//the red error lines indicate an error. ts says type number  is not assignable to type string.
//However this works,
stringArr[0] = 'Kahwai';
stringArr.push('heyloo');
console.log(stringArr); //console prints the array object with 4 items ["Kahwai","hey""Kevin","heyloo"]
guitars[0] = 1984;
console.log(guitars);
/* console prints out array with  objects [
    1984,
    " Les Paul",
    5150
]*/
guitars.push('futuristic');
console.log(guitars);
/* console prints out array with 4 objects [
    1984,
    " Les Paul",
    5150. 'futuristic'
]*/
guitars.push(2);
console.log(guitars);
guitars.unshift("Kagwima");
console.log(guitars);
//console adds kagwima at the beginning of the array
guitars = stringArr; //this is valid TS because they are both of the same data type
//stringArr = guitars 
//TS indicates an error as they are of different data type sets
//EXAMPLE WITH EMPTY ARRAY
let test = []; //any type of data can go inside this aaray
let bands = []; //only string data type can go inside this array
bands.push("van der Waals");
console.log(bands);
//Tuple - they are used when you want to be more strict and define something that is locked in a specific position in a specific data type.
let myTuple = ['Dave', 42, true];
myTuple[1] = 42; //TS Accepts
//myTuple[2] = 42 
//TS Rejects this as it can only accept a boolean data type in position numbre 2
//OBJECT
//Assigning an object type
let myObj;
//but remember an array is also a type of object
myObj = [];
console.log(typeof myObj); //console return object
// empty curly braces that used to indicate an object type
myObj = {};
//Object inference
const exampleObj = {
    prop1: 'Kevin',
    prop2: true,
};
exampleObj.prop2 = false; //TS accepts this as it has been assigned a boolean type
let evh = {
    name: 'Eddie',
    active: true,
    albums: [1984, 5150, 'Wow']
};
console.log(evh);
//Object Assignment
let JP = {
    name: 'Kahwai',
    active: true,
    albums: ['1984', '5150', 'Wow']
};
console.log(JP);
JP = evh; //TS shows no error message. They are both type Gutarist.
let amarula = {
    name: 'Kahwai',
    albums: ["1", 2, 3, '4']
};
//now the Guitarist type can exist without the active property
//Object type as a parameter in a function.
const greetGuitarist = (guitarist) => {
    return `Hello ${guitarist.name}!`;
};
console.log(greetGuitarist(amarula)); //console prints "Hello kahwai"
let amarulaB = {
    name: 'KahwaiKK',
    albums: ["1", 2, 3, '4']
};
const greetGuitaristB = (guitaristB) => {
    return `Hello ${guitaristB.name}!`;
};
console.log(greetGuitaristB(amarulaB)); //console prints "Hello kahwaiKK"
let amarulaC = {
    //name : 'KahwaiKK',
    active: true,
    albums: ["1", 2, 3, '4']
};
const greetGuitaristC = (guitaristC) => {
    //narrowing with optional properties
    if (guitaristC.name) {
        return `Hello ${guitaristC.name.toUpperCase()}!`;
    }
    return `Hello`; //console returns hello if a type name is not assigned any value
};
console.log(greetGuitaristC(amarulaC)); //console prints "Hello undefined" .This is because the name property was made an optional property.
//ENUMS
///* Unlike most Typescript features,Enums are not a type-level addition to javascript but something added to the language and runtime */
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 45] = "U";
    Grade[Grade["D"] = 46] = "D";
    Grade[Grade["C"] = 47] = "C";
    Grade[Grade["B"] = 48] = "B";
    Grade[Grade["A"] = 49] = "A";
})(Grade || (Grade = {}));
console.log(Grade.U);
// console returns 0, so this are enumerated and they start at position 0.
//Therefore if you want to change those values you could assign the letter U say 41 and everthing will adapt hence D will be equal to 46.

//TYPESCRIPT OBJECTS ARRAYS TUPLES  & ENUMS


//Array inference
let stringArr = [ 'one' , 'hey', 'Kevin']

let guitars = ['Strat' , ' Les Paul' , 5150]

let mixedData = ['EVH' , 1984 , true ]


//ARRAY ASSIGNMENT


//stringArr[0] = 42 
//the red error lines indicate an error. ts says type number  is not assignable to type string.

//However this works,
stringArr[0] = 'Kahwai'
stringArr.push('heyloo')
console.log(stringArr)//console prints the array object with 4 items ["Kahwai","hey""Kevin","heyloo"]

guitars[0]= 1984
console.log(guitars)


/* console prints out array with  objects [
    1984,
    " Les Paul",
    5150
]*/

guitars.push('futuristic')
console.log(guitars)
/* console prints out array with 4 objects [
    1984,
    " Les Paul",
    5150. 'futuristic'
]*/


guitars.push(2)
console.log(guitars)

guitars.unshift("Kagwima")
console.log(guitars)
//console adds kagwima at the beginning of the array

guitars = stringArr //this is valid TS because they are both of the same data type

//stringArr = guitars 
//TS indicates an error as they are of different data type sets

//EXAMPLE WITH EMPTY ARRAY

let test = [] //any type of data can go inside this aaray
let bands: string[] = [] //only string data type can go inside this array

bands.push("van der Waals")
console.log(bands)


//Tuple - they are used when you want to be more strict and define something that is locked in a specific position in a specific data type.

let myTuple : [ string, number, boolean] = ['Dave', 42 , true ]

myTuple[1] = 42 //TS Accepts
//myTuple[2] = 42 
//TS Rejects this as it can only accept a boolean data type in position numbre 2

//OBJECT

//Assigning an object type

let myObj : object

//but remember an array is also a type of object

myObj = []
console.log(typeof myObj) //console return object

// empty curly braces that used to indicate an object type

myObj = {}


//Object inference
const exampleObj = {
    prop1 : 'Kevin',
    prop2 : true,
}

exampleObj.prop2 = false//TS accepts this as it has been assigned a boolean type

//exampleObj.prop1 = true 
//TS indicates an error as it only accepts a string type


//Object Type Annotation - we use something keyWord type

type Guitarist = {
    name: string,
    active? : boolean,
    albums : (string | number)[]
}

let evh : Guitarist = {
    name: 'Eddie',
    active: true,
    albums: [ 1984, 5150 , 'Wow']
}

console.log(evh)

//Object Assignment
let JP : Guitarist = {
    name: 'Kahwai',
    active: true,
    albums: [ '1984', '5150' , 'Wow']
}

console.log(JP)

JP = evh//TS shows no error message. They are both type Gutarist.


//Making  optional object properties 
//e.g we want to make the actiove property optional so we put a question mark before the colon

type GuitaristA = {
    name: string,
    active? : boolean 
    //the active propert becomes union type i.e a boolean | undefined
    albums : (string | number)[]
}

let amarula : GuitaristA = {
    name : 'Kahwai',
    albums : [ "1", 2 , 3 , '4']
}

//now the Guitarist type can exist without the active property

//Object type as a parameter in a function.

const greetGuitarist = (guitarist : GuitaristA) => {
    return `Hello ${guitarist.name}!`
}

console.log(greetGuitarist(amarula)) //console prints "Hello kahwai"

//TYPE VS INTERFACE
//The keyword interface is similar to the type keyword

interface GuitaristB {
    name: string,
    active? : boolean 
    //the active propert becomes union type i.e a boolean | undefined
    albums : (string | number)[]
}

let amarulaB : GuitaristB = {
    name : 'KahwaiKK',
    albums : [ "1", 2 , 3 , '4']
}

const greetGuitaristB = (guitaristB : GuitaristB) => {
    return `Hello ${guitaristB.name}!`
}

console.log(greetGuitaristB(amarulaB)) //console prints "Hello kahwaiKK"

//NARROWING WITH OPTIONAL PROPERTIES

interface GuitaristC {
    name?: string,
    //the name property becomes union type i.e a string | undefined
    active : boolean 
    albums : (string | number)[]
}

let amarulaC : GuitaristC = {
    //name : 'KahwaiKK',
    active : true,
    albums : [ "1", 2 , 3 , '4']
}

const greetGuitaristC = (guitaristC : GuitaristC) => {
    //narrowing with optional properties
    if (guitaristC.name){
        return `Hello ${guitaristC.name.toUpperCase()}!`
    }
    return `Hello` //console returns hello if a type name is not assigned any value
}

console.log(greetGuitaristC(amarulaC)) //console prints "Hello undefined" .This is because the name property was made an optional property.


//ENUMS

///* Unlike most Typescript features,Enums are not a type-level addition to javascript but something added to the language and runtime */

enum Grade {
    U = 45,
    D,
    C,
    B,
    A,
}

console.log(Grade.U)
// console returns 0, so this are enumerated and they start at position 0.
//Therefore if you want to change those values you could assign the letter U say 41 and everthing will adapt hence D will be equal to 46.




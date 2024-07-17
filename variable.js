let i = 2
var j = 3

console.log(i) 
console.log(j) 

// i = 5  //It will not work as let cannot be changed
j= 6    //It will work as var can change value 
console.log(j) 


function printName() {
    var name1 = "abdur"
    let name2 = "rahim"
    name3 = "abdur rahim"
}
// console.log(name1)  // variable are out of scope
// console.log(name1) // variable are out of scope
// console.log(name3)  /*If you assign a value to a variable that has not been declared, 
                        //it will automatically become a GLOBAL variable but not before call the function */

printName()


console.log(name3)  /*If you assign a value to a variable that has not been declared,
                    //  it will automatically become a GLOBAL variable*/


/* 
JavaScript variables have 3 types of scope:

Block scope
Function scope
Global scope


If you assign a value to a variable that has not been declared, 
it will automatically become a GLOBAL variable after call the function

*/

if (j > 2) {
    var k =7    
}
console.log(k) // As var can declare it's scope is inside function 
                // so k is accessible as its scope is global as its not define inside function

function myfunc1() {
    var ij = 3
    
    if (ij > 2) {
        var jk =17 
        let ik = 18 
        ik = 19 //we can change the value of let
        const lk = 20
        //lk = 21 // it's not changeable as const can't change  
    }  
    console.log(jk) //As var can declare it's scope is inside function so jk is accessible in myfunc1
    // console.log(ik) // It's not accessible as let only available 
                        // inside it's scope means where it declare you can use it their only
}

myfunc1()


//Consrtant and let in Object
let person = {
    fname : "abdur",
    lname : "rahim"
}
person = {
    fname : "abdur1",
    lname : "rahim1" 
} //We can assign the value of object when it's declare with let

console.log(person)


//Consrtant and let in Object
const person1 = {
    fname : "abdur",
    lname : "rahim"
}
// person1 = {
//     fname : "abdur1",
//     lname : "rahim1" 
// } //We can't assign the value of object when it's declare with const

person1.fname = "abdur1"  // we can change the propert of object declared with const
person1.lname = "rahim1"
console.log(person1)

//Template String
const name2 = "Bill"
const age2 = 35
const sentence = 'My name is ' + name2 +', and I am '+ age2 + " year's old"
console.log(sentence)
//Instead of above we can construct sentence like below
const sentence1 = `My name is ${name2} and I am ${age2} year old` // For use template string you need to put backticks instead of single quote (') or double quote (")
console.log(sentence1)

//Arrow Function
const integers = [1,2,3]
const updatedIntegers = integers.map(function(number){
    return number+1
})
console.log(updatedIntegers)

//Explicit return Arrow Function
const updatedIntegersArrow = integers.map((number) => {
    return number+1
})
console.log(updatedIntegersArrow)

//Implicit return Arrow Function
const updatedIntegersArrow2 = integers.map((number) => number+1)
console.log(updatedIntegersArrow2)

//Implicit return Arrow Function with String type
const updatedIntegersArrow3 = integers.map((number) => `bob ${number}`)
console.log(updatedIntegersArrow3)

//Implicit return Arrow Function with String type with constatnt value
const updatedIntegersArrow4 = integers.map(() => `bob`)
console.log(updatedIntegersArrow4)

//ES6 syntax for filter
const ages = [21,18,12,9,36]
const adults = ages.filter(function(age) {
    return age > 20
})
console.log(adults)

//Arrow function syntax for filter
const adults1 = ages.filter((age) =>  age > 20 )
console.log(adults1)

//Constructor
function Person(name, age) {
    this.name = name
    this.age = age
}

//Prototype methods
Person.prototype.speak = function() {
    console.log(`Hi my name is ${this.name} and I am ${this.age} years old`)
}

const bill = new Person('Bill',50)
console.log(bill)
bill.speak();

class Personx {
    constructor(name,age, children) {
        this.name = name
        this.age = age
        this.children = children
    }
    speak() {
        console.log(`Hi my name is ${this.name} and I am ${this.age} years old`)
    }
    birth(child) {
        this.children.push(child)
        return this.children
    }
}
const billx = new Personx('bill', 50, ['sean','steph'])
billx.speak()
billx.birth('seanallen')
console.log(billx.children)


//Spread operator
const names =['John','Bill','Same']
const moreNames = ['William','Paul','Mike']
console.log(names) //IT print with brackets
console.log(...names) //IT ommit brackets and print
let allName = []
allName = allName.concat(names)
allName.push('Gio')
allName = allName.concat(moreNames)
console.log(allName) //IT print with brackets
console.log(...allName) //IT ommit brackets and print

//USe of spread operator
let allNames = [...names, 'Gio', ...moreNames]
console.log(allNames) //IT print with brackets
console.log(...allNames) //IT ommit brackets and print



console.log("hi");
console.log("hi");
const a = 0.1;
const b = 0.2;
const result = a + b;
console.log(a + b);
console.log(result.toFixed(2));

// ternary operator
var age = 18;
const aa = age >= 18 ? "yes" : "no";
console.log(aa);

console.log(2 < 12 < 5);
function sum(a, b) {
    return a + b;
}
console.log(sum(10, 15));
console.log(sum(10, 115));
console.log(sum(10, 151));
function name(a) {
    console.log(a);

}
name("this is nanme function");
function string(Name) {

    console.log("Hello " + Name + "Welcome");
}
string("Mohit");
string("Rohit");
string("nohit");
var fun = function Sum(a, b) {
    console.log(a + b);


}
fun(11, 34);
fun(11, 334);

// IIF
(
    function sum(a, b) {
        console.log(a + b);
    }
)(4, 5);

// without template litrle

let fname = "mohit";
let lastname = "Sharma";
let fullname = fname + lastname
console.log(fullname)

// Template litrle
let firstname = "mohit";
let Lastname = "Sharma";
let Fullname = `${firstname} ${Lastname}`
console.log(Fullname)

// fat arrow function

const add = (a, b) => {
    console.log(`The sum of ${a} and ${b} is ${a + b}`);
}
add(5, 8);

// calculator
function calculator(a, b, operand) {
    let result;
    switch (operand) {
        case "+":
            return a + b;
            break;
        case "-":
            return a - b;
            break;
        default: return " No operand found";

    }
}
console.log(calculator(5, 3, "+"));

// write a program to reverse a name

let namee = "mohit sharma";
for (let index = 0; index < namee.length; index++) {
    const element = namee[index];
    // console.log(element);
}
// now we will write for reverse 

const stringg = "Mohit Sharma";
for (let index = stringg.length - 1; index >= 0; index--) {
    const element = stringg[index]
    console.log(element);
}

// by function 
const Reverse = (str) => {
    let strr = "";
    for (let index = str.length - 1; index >= 0; index--) {
        // console.log(str[index]);
        strr = strr + str[index];
    }
    return strr;
}
console.log(Reverse("Jay shri ram "));
// BY 2ND MEthod
let stri = (ch) => {
    for (let index = ch.length - 1; index >= 0; index--) {
        console.log(ch[index]);

    }
}
stri("Hello")

// Palandrom
const Palandrom = (str) => {
    let strr = "";
    for (let index = str.length - 1; index >= 0; index--) {
        // console.log(str[index]);
        strr = strr + str[index];
    }
    // if (str === strr) {
    //     return true;
    // }
    // else {
    //     return false;
    // }
    // we can use this instead of if statemenet
    return str === strr ? true : false;
    // return strr;
}
console.log(Palandrom("level"));

// array 
const fruit = ['apple','mango','orange','red'];
console.log(fruit);
// second method
for ( fruits of fruit) {
    console.log(fruits);
    
}
// 3rd this method mostly used for index in array
for (fruti in fruit) {
console.log(fruti)
}
// By loop 4th method
for (let index = 0; index <= fruit.length-1; index++) {
    const element = fruit[index];
    console.log(element);
    
}

;
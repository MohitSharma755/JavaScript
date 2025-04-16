

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
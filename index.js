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



;
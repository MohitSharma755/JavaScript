// array 
const fruit = ['apple', 'mango', 'orange', 'red'];
console.log(fruit);
// second method
for (fruits of fruit) {
    console.log(fruits);

}
// 3rd this method mostly used for index in array
for (fruti in fruit) {
    console.log(fruti)
}
// By loop 4th method
for (let index = 0; index <= fruit.length - 1; index++) {
    const element = fruit[index];
    console.log(element);

}

// 5th method
fruit.forEach((element,index,fruit) => {
    console.log(element,index,fruit)
    
});
const myfruit = fruit.forEach((element,index,fruit) => {
    return `${element} is my favourate fruit and its price is ${index}`
}   
)
console.log(myfruit);
// map function
// Map method and foeach method are similar but map method return new array and forEach method does not return any new array.You can also check this exaample
fruit.map((element,index,fruit)=>{
    console.log(`${element} This is index number ${index}`)
})
const Myarr = fruit.map((element,index,fruit)=>{
  return(`${element} is my favourate fruit and its price is ${index}`)
})
console.log(Myarr);
// filter method    
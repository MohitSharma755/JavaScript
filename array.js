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
// Here is the example of map method
const numbers = [1,2,3,4,5,6,7,8,9,10];
const square = numbers.map((element,index,numbers)=>{
    return element*element
})
console.log(square);
// Push method
// Push method is used to add new element in array
const animals = ['dog','cat','cow','sheep'];
console.log(animals);
animals.push('lion','tiger','elephant');
console.log(animals);
// Pop method
// Pop method is used to remove last element of array
const animal = ['dog','cat','cow','sheep'];
console.log(animal);
animal.pop();
console.log(animal);
// Shift method
// Shift method is used to remove first element of array
const animal1 = ['dog','cat','cow','sheep'];
console.log(animal1);
animal1.shift();    +
console.log(animal1);
// Unshift method
// Unshift method is used to add new element in array at first position
const animal2 = ['dog','cat','cow','sheep'];
console.log(animal2);
animal2.unshift('lion','tiger','elephant');
console.log(animal2);
// filter method 
const num = [1,2,3,4,5,6,7,8,9,10];
const even = num.filter((element,index,num)=>{
    return element%2==0
})     
console.log(even);
// reduce method
// const num1 = [1,2,3,4,5,6,7,8,9,10];
// const sum = num1.reduce((accumulator,currentvalue,index,num1)=>{
//     return accumulator+currentvalue
// })
// console.log(sum);

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
// map function
fruit.map((element,index,fruit)=>{
    console.log(`${element} This is index number ${index}`)
})
console.log("Experiment 1");
// Let and Const Variables
let age = 30;
const name = "Alice";
console.log("${name} , ${age}")

console.log("----------------------------------------");


console.log("Experiment 2");
// Arrow Function
const add = (a, b) => a + b;
console.log(add(10,5))

console.log("----------------------------------------");


console.log("Experiment 3");
// Template Literals
console.log(`Hello, ${name}! Your age is ${age}.`);

console.log("----------------------------------------");


console.log("Experiment 4");
// Destructuring Objects
const person = { firstName: "Alice", lastName: "Johnson" };
const { firstName, lastName } = person;
console.log(firstName);
console.log(lastName); 

console.log("----------------------------------------");


console.log("Experiment 5");
// Destructuring Arrays
const numbers = [1, 2, 3, 4, 5];
const [first, second] = numbers;
console.log(first);
console.log(second); 

console.log("----------------------------------------");


console.log("Experiment 6");
// Spread Operator
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];
console.log(combined); 

console.log("----------------------------------------");


console.log("Experiment 7");
// Rest Parameters
const sum = (...numbers) => numbers.reduce((acc, current) => acc + current, 0);
console.log(sum(1, 2, 3, 4, 5)); 

console.log("----------------------------------------");


console.log("Experiment 8");
// Default Parameters
const greet = (name, greeting = "Hello") => `${greeting}, ${name}!`;
console.log(greet("Alice")); 
console.log(greet("Bob", "Helloe"));

console.log("----------------------------------------");


console.log("Experiment 9");
// Classes and Inheritance
class Animal {
constructor(name) {
this.name = name;
}
}
class Dog extends Animal {
bark() {
return `Woof! i am  ${this.name}`;
}
}
const dog = new Dog("jason");
console.log(dog.bark()); 


console.log("----------------------------------------");


console.log("Experiment 10");
// Promises and Async/Await
const waitAndReturn = () => new Promise(resolve => setTimeout(() => resolve("completed"),
3000));
async function run() {
const result = await waitAndReturn();
console.log(result); 
}
run();
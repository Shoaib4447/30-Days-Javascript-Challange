// Variable Declaration
var task1 = 1;
console.log('Task 1: ', task1);

let task2 = "Task2";
console.log(task2);


// Constant Declations
const task3 = true;
console.log('Task3 const', task3);

// Data Types
// Declare a variable of different data types (number, string, boolean, object, array) and log each variable's type using the `typeof` operator
const num = 1
console.log(typeof num);
const str = "Hello World"
console.log(typeof str);
const bool = true
console.log(typeof bool);
const obj = {name: "John", age: 30}
console.log(typeof obj);
const arr = [1, 2, 3]
console.log(typeof arr);


// Declare a variable using let and assign it initial value 
// Reassign the variable with a new value
let task4 = "Task4"
console.log(task4);
task4 = "Task4 Reassigned"
console.log(task4);

// Reassign a variable declared with const and oberve the error
const observe = 'const variable'
console.log(observe);
observe = 'resigned const'
// console.log(observe); // Error: Assignment to constant variable.

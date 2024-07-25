// Arithmetic Operators
// +, -, *, /, %, ++, --
// Write a program to add two numbers and console the result in js
const num1 = 12
const num2 = 5
const addResult = num1 + num2
console.log(addResult)

//add Function

function Arithmetic(num1, num2){
    const add =  num1 + num2;
    const Sub =  num1 - num2;
    const mul =  num1 * num2;
    const div =  num1 / num2;
    const rem=  num1 % num2;
    console.log( `Added : ${add}`,`Subtracted : ${Sub}` , `Multiplied : ${mul}`, `Divided : ${div}`, `Remainder : ${rem}`);
}
Arithmetic(11, 15)


// Write a program to subtract two numbers and console the result in js
const num3 = 12
const num4 = 5
const subResult = num1 - num2
console.log("Sub Result : ",subResult)

// Write a program to Multiy two numbers and console the result in js
const num5 = 12
const num6 = 5
const mulResult = num1 * num2
console.log("Mul Result : ",mulResult)


// Write a program to Divide two numbers and console the result in js
const num7 = 12
const num8= 5
const divResult = num1 / num2
console.log("Div Result : ",divResult)

// Write a program to Remainder two numbers and console the result in js
const num9 = 12
const num10= 5
const remainderResult = num1 % num2
console.log("remainderResult Result : ",remainderResult)



// --------------------------------------------------------------------------------------------------------------
// Assignment Operators
// =, +=, -=, *=, /=, %=, ++, --
let num11 = 10
console.log(num11 += 11);

let num12 = 34
console.log(num12 -= 11);

// ---------------------------------------------------------------------------------------------------------------
// Comparison Operators
// ==, ===, !=, !==, >, <, >=, <=
let num13 = 10
console.log(num13 == 10);
console.log(num1 === num3);
console.log(num4 != num5);
console.log(num3 !== num6);
console.log(num7 > num8);
console.log(num9 < num10);
console.log(num11 >= num12);
console.log(num13 <= num10);

// ---------------------------------------------------------------------------------------------------------------
// Logical Operators
// &&, ||, !
let num14 = 10
let num15 = 20
console.log(num14 > num15 && num14 < num10);
console.log(num10  === num3 || num15 >= num14);
// ! Result should be true
console.log(!num14 > num15 && num14 < num10);

// ---------------------------------------------------------------------------------------------------------------
// Ternary Operator
// ? :
const result = num14 > num15 ? 'Number 14 is Greater' : 'Number 15 is greater'
console.log(result);

let num = -5
console.log(num > 0 ? 'Number is Positive' : 'Number is Negative')
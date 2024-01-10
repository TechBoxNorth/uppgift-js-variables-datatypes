console.log("Hello World!");

// ---------------- Exercises ---------------------

// 1
let age = 51;
console.log(`This is my age: ${age}`);

// 2
let firstName = "Anders";
/* let variables are accessible within the codeblock it was created 
and all its child codeblocks. The value and datatype of a let variable can be changed.*/
console.log(`My first name is: ${firstName}`);

var warning = "Do not use this!";
/* var variables have global scope no matter where they are declared and can be re-dclared
at any time - DO NOT USE!!*/
console.log(warning);
var warning = 50;
console.log(warning);

const lastName = "Stenhammar";
/* const variables are accessible within the codeblock it was created 
and all its child codeblocks. The value and datatype of a const variable
can NOT be changed.*/
console.log(`My last name is: ${lastName}`);

// 3
const hundred = 100; // number
console.log(hundred, typeof hundred);
let amount = "Ten times ten is one hundred"; // string
console.log(amount, typeof amount);
let higher = hundred > 99; // boolean
console.log(higher, typeof higher);

// 4
const variable = `Can't be changed`;
console.log(variable);
//variable = 6502;
console.log(variable);
/*The value and datatype of a const variable
can NOT be changed. Use a let variable instead.*/
console.log("Did not work!");

// 5
/* Booleans are used to check if an expression returns true or false.*/

// 6
/* A variable that will have the same value the whole duration of the program
should be declared a const to make code more predictable, maintainable, and minimize
the risk for errors.*/

// 7
let number1 = 20;
let number2 = 15;
let result = number1 + number2;
console.log(`The result is: ${result}`);

// 8
let result1 = number1 - number2;
console.log(`The difference is: ${result1}`);

let result2 = number1 * number2;
console.log(`The product is: ${result2}`);

let result3 = number1 / number2;
console.log(`The quotient is: ${result3}`);

// 9
let b = 10;
console.log(b);
b += 5;
console.log(b);

// 10
let a = 10; // the variable a is declared and assigned the nueric value 10
a = a - 4; // the value is subtracted by 4 and becomes 6
a = 7; // the variable is reassigned with the numeric value 7
a = a + 2; // 2 is added to the variable
console.log(a); // The value of variable a is logged as 9

// Order of operators in JS is same with JAVA
console.log(4+4*(-1)-8/2); 
// assignment operators
let x = 5;
x+=5;
console.log(x);

// comparison: similar to JAVA with some difference: == and === signs

let one = 1;
let one_again = 1;
let one_string = '1';
let two_string = '2';

console.log(one == one_again); // true
console.log(one == one_string); // true: == sign is looking for value equality
console.log(one === one_string); // false : looking for both value and dataType
console.log(one_string === two_string); // false


// logical operators sama like JAVA: you have only short circuit && , || 
console.log((5<2)&&(2<5)); // false



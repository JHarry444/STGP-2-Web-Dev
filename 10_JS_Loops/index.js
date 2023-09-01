"use strict";

for (let i = 1; i <= 10; i++) 
    console.log("I:", i);

for (let i = 20; i >=0; i--) {
    console.log("I:", i);
}

for (let i = 0; i < 20; i += 2) {
    console.log("I:", i);
}

let i = 1;
while (i < 10) {
    console.log("I:", i);
    i++;
}

// undefined
let input = 12;

// runs until is not undefined, false, null, 0, NaN, ""
do {
    input = parseFloat(prompt("Gimme a number"));
    console.log("Input: ", input);
} while (!input);

// array literal
const array = [1, 2, , "the", true, "jordan", "harrison"];

console.log(array);

console.log("1st:", array[0]);
console.log("2nd:", array[1]);
console.log("Last:", array[array.length - 1]);

// blank array of length 10
const emptyArray = new Array(10);

// removes last values
array.pop();

// adds a value on the end
array.push("value");

// removes the first value
array.shift();

// adds a value at the start
array.unshift("First");

for (let i = 0; i < array.length; i++) {
    const element = array[i];
    console.log("I:", i, "Val:", element);    
}

for (let i = array.length - 1; i >= 0; i--) {
    const element = array[i];
    console.log("I:", i, "Val:", element);    
}

// for - each (shortcut for the loop on line 25)
for (const element of array) {
    console.log("Element:", element);
}

// finds if element exists in array
console.log(array.includes("jordan"));

// finds the index of that element
console.log(array.indexOf("jordan"));

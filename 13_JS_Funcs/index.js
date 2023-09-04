"use strict";

// no input (parameters) and no output (return value)
function hello() {
    console.log("Hello, World!");
}

// input (two parameters) and an output (the return value (the sum))
function add(num1, num2) {
    const sum = num1 + num2;
    // sum is 'scoped' to this function and cannot be accessed outside of it
    return sum;
}

const me = {
    age: 29,
    name: "Jordan",
    job: "Trainer"
}

function intro(person) {
    console.log("Hello, my name is", person.name, "and I am a", person.age, "year old", person.job);
}

function intro(person) {
    const name = person.name;
    const age = person.age;
    const job = person.job;
    console.log("Hello, my name is", name, "and I am a", age, "year old", job);
}

function intro(person) {
    let { name, age, job } = person; // destructures the object to pull out the variables I want
    console.log("Hello, my name is", name, "and I am a", age, "year old", job);
}

// destructures the object to pull out the variables I want
function intro({name, age, job}) {
    console.log("Hello, my name is", name, "and I am a", age, "year old", job);
}

// lambda expression / arrow functions
const introLambda = person => 
        console.log("Hello, my name is", person.name, "and I am a", person.age, "year old", person.job);


const addLambda = (a, b) => a + b;

const subtract = (a, b) => {
    return a - b;
}

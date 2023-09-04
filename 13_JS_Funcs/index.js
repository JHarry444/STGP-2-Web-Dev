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
function intro({ name, age, job }) {
    console.log("Hello, my name is", name, "and I am a", age, "year old", job);
}

// lambda expression / arrow functions
const introLambda = person =>
    console.log("Hello, my name is", person.name, "and I am a", person.age, "year old", person.job);


const addLambda = (a, b) => a + b;

const subtract = (a, b) => {
    return a - b;
}


const movies = [
    { "title": "Jaws", "director": "Steven Spielberg", "year": "1975" },
    { "title": "Star Wars", "director": "George Lucas", "year": "1977" },
    { "title": "Avengers: Infinity War", "director": "Anthony and Joe Russo", "year": "2018" },
    { "title": "Top Gun", "director": "Tony Scott", "year": "1986" },
    { "title": "Justice League", "director": "Zack Snyder", "year": "2017" }
];

// Part 1 - Create a function to find a movie and output it's detail
// Instruction 4 - Create findMovie
function findMovie(movieTitle) {
    // Instruction 5 - for...of
    for (let movie of movies) {
        // Instruction 5-a-i - check title
        if (movie.title === movieTitle) {
            console.log(`${movie.title} is a film directed by ${movie.director} released in ${movie.year}`);
        }
        // Instruction 5-a-ii - log movie
        //console.log(movie);
    }
    // Instruction 5-b - log movie
    //console.log(movie); // Comment me out at Instruction 9 and Uncomment at Instruction 11
}

// Instruction 6 - call findMovie
findMovie("Star Wars");
// Instruction 7 - log movie
//console.log(movie);  // Comment me out at Instruction 9 and Uncomment at Instruction 11

// Instruction 10 - declare movie
// Instruction 13 - change let to var below
let movie = "Thor: Ragnorok";

// Instruction 11 plus uncommenting above
console.log(movie);

// Instruction 15 - call function with data
findMovie(movie);

// Part 2 = Create a function to return a movie object
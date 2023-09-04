const newArray = new Array(12);
const arrayLiteral = [1, 2, 3, 4, 5];

const obj = new Object(); // creates a blank object
const objLiteral = {
    key: "value"
}

const me = {
    name: 'Jordan',
    age: 29,
    job: 'Trainer',
    hobbies: [
        'books',
        'games',
        'tormenting trainees'
    ]
}

// same notation as arrays
// adds a property if it doesn't exist
me['hairColour'] = 'black';

// dot notation - actually more common than []
me.eyeColour = 'blue';

// easy to add properties by accident
me.hairColou = "blonde";

// can remove them using the delete keyword
delete me.hairColou

// loops through all of the keys in 'm'
for (const key in me) {
    console.log("Key:", key, "Val:", me[key]);

}
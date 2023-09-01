let startOfDay = false;

// do NOT use == true
if (startOfDay) console.log("Hello!");
else console.log("Goodbye");

let num = 8;

if (num % 2 === 0) {
    console.log("EVEN");
    console.log("YAY");
} else if (num > 5) {
    console.log("> 5");
} else {
    console.log("Odd number <= 5");
}

if (num % 2 === 0 && num > 5) console.log("Even and > 5");

if (num % 2 == 0 || num > 5) console.log("Even OR > 5");

let hasValue = "Hello";

if (hasValue !== null
    && hasValue !== undefined
    && hasValue !== ""
    && hasValue !== 0
    && hasValue !== false
    && hasValue !== NaN)
    console.log("Has value!");
else
    console.log("Has no value!");

if (hasValue) console.log("Has value!");
else console.log("Has no value!");

let dayOfWeek = "bloop";

// if (dow === mon || dow === tues |dow === wed | thurs | fri)
// else if (dow == sat | sun)
// else
switch (dayOfWeek) {
    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
    case "Friday":
        console.log("Go to work");
        break;
    case "Saturday":
    case "Sunday":
        console.log("Sleep");
        break;
    default:
        console.log("INVALID DAY:", dayOfWeek);
}
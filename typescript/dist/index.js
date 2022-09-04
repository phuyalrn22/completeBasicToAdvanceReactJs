"use strict";
const person = {
    name: "Aryan Phuyal",
    age: 24,
    color: 1235,
};
const person2 = {
    name: "Aryan Phuyal",
    age: 12,
    color: "black",
    profession: "It",
    salary: 123,
};
const test = (b) => {
    if (typeof b === "string") {
        return b.length;
    }
    else {
        return b.toString().length;
    }
};
console.log(test(12));
console.log(test("123"));

"use strict";
const test = (a) => {
    if (typeof a === "string") {
        return a.length;
    }
    else {
        return a.toString.length;
    }
};
console.log(test("rajkumar"));

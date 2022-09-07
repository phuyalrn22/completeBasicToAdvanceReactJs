"use strict";
const calculate = (a, b, cb) => {
    let sum = a + b;
    cb(sum.toString());
};
console.log(calculate(12, 12, (a) => {
    return 12;
}));

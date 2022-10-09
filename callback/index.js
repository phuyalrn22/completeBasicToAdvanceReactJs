function calculate(a, b, cb) {
  var result = a * b + 12 + a;
  return cb(result, b);
}
function sum(a, b) {
  return a + b;
}
function sub(a, b) {
  return a - b;
}
console.log(calculate(12, 18, sum));
console.log(calculate(12, 18, sub));

const getSum = () => {};

// console.log("Hello world");

// let a: number;
// let b = "123";
// let c: boolean;

// a = 12;

// const person: {
//   name: string;
//   age: number;
//   color: string;
// } = {
//   name: "Aryan Phuyal",
//   age: 24,
//   color: "",
// };

// person.color = "asdasdas";
// console.log(person.color);

// enum ShirtSize {
//   Paid = 1,
//   UnPaid,
//   Free,
// }

// console.log(ShirtSize.Paid);

// type Person = {
//   name: string;
//   age: number;
//   color: string | number;
// };

// const person: Person = {
//   name: "Aryan Phuyal",
//   age: 24,
//   color: 1235,
// };

// type Profession = {
//   profession: string;
//   salary: number;
// };

// type PersonDetails = Person & Profession;

// const person2: PersonDetails = {
//   name: "Aryan Phuyal",
//   age: 12,
//   color: "black",
//   profession: "It",
//   salary: 123,
// };

// // const test = (b: string | number) => {
// //   if (typeof b === "string") {
// //     return b.length;
// //   } else {
// //     return b.toString().length;
// //   }
// // };
// // console.log(test(12));
// // console.log(test("123"));
// console.log(person);
// console.log(person2);

// enum Gender {
//   Male = 0,
//   Female = 1,
// }

// type Person = {
//   name: string;
//   age: number;
//   gender: Gender;
// };

// const person: Person = {
//   name: "Aryan",
//   age: 24,
//   gender: Gender.Male,
// };
// console.log(person);

// tuple

// const [counter,setCounter] = useState()
// var a: [string, number,string,string,number];
// a = ["asdas", 12];

// const sum = (a: number, b: number) => {
//   return a + b;
// };

// console.log(sum(12, 10));

// let cb: () => number;

// // let addToCart: (productId: number) => void;

// const calculate = (a: number, b: number, cb: (a: string) => number) => {
//   let sum = a + b;
//   cb(sum.toString());
// };

// calculate(12, 15, (a) => {
//   return "12";
// });

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

type Person = {
  name: string;
  age: number;
  color: string | number;
};

const person: Person = {
  name: "Aryan Phuyal",
  age: 24,
  color: 1235,
};

type Profession = {
  profession: string;
  salary: number;
};

type PersonDetails = Person & Profession;

const person2: PersonDetails = {
  name: "Aryan Phuyal",
  age: 12,
  color: "black",
  profession: "It",
  salary: 123,
};

const test = (b: string | number) => {
  if (typeof b === "string") {
    return b.length;
  } else {
    return b.toString().length;
  }
};
console.log(test(12));
console.log(test("123"));

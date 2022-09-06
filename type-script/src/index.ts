// console.log("I am TypeScript File");

// let a:number = 12;
// let b:string = "Rajkumar oli";

//  let person:{
//     name:string,
//     age:number,
//     color:string
//  } = {
//     name:"rajkumar",
//     age:20,
//     color:""
//  }
// //  person.color ="red";

// console.log(person.color);
// enum ShirtSize {
//    x,
//    xl,
//    xxl
// }
// console.log(ShirtSize);
// enum ShirtSize{
//    Paid=0,
//    Unpaid=1,
//    Free="free"
// }
// console.log(ShirtSize);

// const person = {
//    name:"Rajkumar oli",
//    address:"Rolpa",
//    age:20
// }
// console.log(person);

// const person:{
// name:string,
// address:string,
// age:number
// } = {
//    name:"Rajkumar oli",
//    address:"Rolpa",
//    age:20
// }
// console.log(person);

// This called type ko las
// type Person = {
//    name:string,
//    address:string,
//    age:number
// }
// const person:Person = {
//    name:"Rajkumar oli",
//    address:"Rolpa",
//    age:20
// }
// console.log(person);

//Union of types
// type Personal = {
//    name:string,
//    address:string,
//    age:number
// }
// type Professional = {
//    profession:string,
//    salary:number
// }
// type PersonDetails = Personal & Professional;
// const person:PersonDetails = {
//    name:"Rajkumar oli",
//    address:"Rolpa",
//    age:20,
//    profession:"IT",
//    salary:50000
// }
// console.log(person);

//Intersection of types
//  type Laptop = {
//    price:number,
//    model: number | string
//  }
//  const laptop:Laptop = {
//    price:850000,
//    model:"HP17"
//  }
//  console.log(laptop);

//Advantage of used intersection
// const test = (a:number | string) =>{
//    if(typeof a==="string"){
//       return a.length;
//    }else{
//       return a.toString.length;
//    }
// }
// console.log(test("rajkumar"));


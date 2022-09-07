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

//tuple
// var a: [string,number];
// a = ["Rajkumar", 12];
// console.log(a);

//define type in function
// const sum:(a:number,b:number)=>number = (a:number,b:number) =>{
//     return a + b;
// }
// console.log(sum(6,3));

//define optional case in function
// const sum:(a?:number,b?:number)=>number=(a,b)=>{
//    return (a || 12) + (b || 24);
// }
// console.log(sum());
// console.log(sum(10,10));

// const sum:(a?:number,b?:number)=>number = (a=12,b=14)=>{
//     return a + b;
// }
// console.log(sum(12,34));

//type define in calback function
// const calculate = (a:number, b:number, cb:(a:string)=>number)=>{
//     let sum = a + b;
//     cb(sum.toString());

// }
// console.log(calculate(12,12,(a)=>{
//     return 12;
// }));


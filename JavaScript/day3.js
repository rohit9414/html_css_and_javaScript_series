// let person ={
//     name:"Rohit",
//     roll:44,
//     course:"btech",
//     branch:"AIML",
//     age:23,
// }
// console.log(person.roll);
// console.log(person["name"]);// keys always as string ,it converted into string 

// let book={
//     title:"the hobbit"
// }
// book.title="ring of the lord";
// book.author="j.r.r tolkein";
// book.pages=1190;
// delete book.pages;
// console.log(book);

// user={
//     name:"Rohit",
//     greeting:function(){
//         console.log(`good moring ${this.name} ji`);
//     }
// }
// user.greeting();

// const car = {// object is not iterable so we have to convert it into array then we can iterate on it
//   make: "Honda",
//   model: "Civic",
//   year: 2021

// };
// const car1=Object.entries(car);
// for(let val of car1){
//     console.log(val);
// }

// for(let key in car){
//     console.log(key+"-"+car[key]);
// }
// console.log(Object.keys(car));
// console.log(Object.values(car));
// console.log((Object.entries(car)));

// const original = { name: "Alice", age: 30 };

// // Using spread syntax (most common and modern)
// const copy = { ...original };//shaloo copy,(Note: This is a "shallow" copy. If the object contains other objects, those nested objects will still be references, not copies.)

// const newuser={
//     say(){// we can also write this is new way to write in object
//         console.log("hi");
//     }
// }
// newuser.say();


// const user = {
//   name: "Alice",
//   age: 30,
//   isStudent: true
// };
// for(let key in user){ // using for in loop we can iterate on object , it access only key of the object.
//     console.log(`${key},${user[key]}`);
// }


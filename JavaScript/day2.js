let marks = [100,50,70,80,90];

marks.push(200);
marks.push("Rohit goswami");
marks.push(true);
marks.push(null);
marks.pop(null);
marks.shift(100);
// console.log(marks.length);
// console.log(typeof marks);
// console.log(marks);
// for(let num of marks){
//     console.log(num);
// }

//arr =marks;//copy by reference.
arr=[...marks]; // fully copied 
// arr.push("hello");
// console.log(marks);
// console.log(arr);

// const arr2=arr.splice(1,2,"arjun",19);
// console.log(arr);

const names = ["Alice", "Rohit","Bob","Mohit", "Charlie",];

console.log(names.toString());
console.log(names.join("_"));
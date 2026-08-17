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

user={
    name:"Rohit",
    greeting:function(){
        console.log(`good moring ${this.name} ji`);
    }
}
user.greeting();

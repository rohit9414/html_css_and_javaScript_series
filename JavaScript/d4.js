const products = [
  { id: 1, name: "Laptop", category: "Electronics", price: 1200, inStock: true },
  { id: 2, name: "Book", category: "Books", price: 30, inStock: true },
  { id: 3, name: "Coffee Maker", category: "Appliances", price: 150, inStock: false },
  { id: 4, name: "Headphones", category: "Electronics", price: 200, inStock: true }
];

// const red=products.reduce((total ,currentvalue)=>{// current picking each object from the the array
//        if(currentvalue.inStock){
//          return total+currentvalue.price;//each time it return the calculated value to the total(accumulator)
//        }else{
//         return total;
//        }
// },0)
// console.log(red);

// products.reduce((available,current)=>{
//     if(current.inStock){
//         console.log(current);
//     }
// },0)

// const total=products.reduce((count,current)=>{//used to count.
//         return count+1;
// },0)
// console.log(total);

//set implementation

// const arr=[1,1,2,3,2,3,4,5,4,6,7,8,6,8];
// const myset = new Set(arr);//S is capital
// // console.log(myset);
// myset.add("Rohit");
// console.log(myset.add("Karan"));
// console.log(myset.has("Rohit"));
// console.log(myset.size);
// myset.delete("Karan");
// console.log(myset);
// myset.clear();
// console.log(myset);

// const permissions = new Set(["read", "write", "execute"]);
// for(let ite of permissions){
//     console.log(ite);
// }

// concept of map
const map1= new Map([
  ["name", "Alice"],
  [true, "is verified"],
  [100, "points"]
]
);
map1.set("Rohit",23);
console.log(map1);
console.log("-------------------");
console.log(map1.get("Rohit"));
console.log(map1.size);
for( let it of map1){
    console.log(it);
}


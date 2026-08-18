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

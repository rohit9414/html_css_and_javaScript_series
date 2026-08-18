const newElement =document.createElement("h2");
newElement.textContent="goswami is coming";
newElement.id="second";

const element = document.getElementById("first");
element.after(newElement);

const newElement2 = document.createElement("h3");
newElement2.textContent = "Diwali is comming soon";
newElement.after(newElement2);
newElement2.id="third";
newElement2.className = "holi";
newElement2.classList.add("diwali");//classlist used to give mutiple name to class 
newElement2.classList.add("happy");
newElement2.classList.remove("happy");//used to remmove the class name.
 // css
newElement2.style.color="brown";
newElement2.style.backgroundColor="aqua";
newElement2.style.fontSize= "20px";
console.log(newElement2.getAttribute("id"));
// adding element in the unorderlist 
const list=document.createElement("li");//creating list
list.textContent="Milk";// adding element in the list

const unorderlist= document.getElementById("listing");//selecting unorderlist from html
unorderlist.append(list);// adding eleemnt in the unorderlist

const list2=document.createElement("li");//creating list
list2.textContent="Bread";
unorderlist.append(list2);

const list3=document.createElement("li");//creating list
list3.textContent="Jam";
unorderlist.append(list3);

const list4=document.createElement("li");//creating list
list4.textContent="Halwa";
unorderlist.prepend(list4);

const list5=document.createElement("li");//creating list
list5.textContent="Paneer";
unorderlist.prepend(list5);

list.after(list5);

// suppose we are geting elelment from backaned as array so we have to append inthe the unordered list.
arr=["tofu","tea","cake","cream"];
// for(let food of arr){// at each iteration ,there is a new list is created.
//     const list = document.createElement("li");
//     list.textContent=food;
//     unorderlist.append(list);// it is not a best pracxtice because it is adding one by one element in the ui .
// }
//optimum way
const fragment= document.createDocumentFragment();
for(let food of arr){// at each iteration ,there is a new list is created.
    const list = document.createElement("li");
    list.textContent=food;
    fragment.append(list);// here we created fragment array whhich store all the elemnt one by one and then collectivelly we add the all elelment to the the unorderred list.
}
unorderlist.append(fragment);

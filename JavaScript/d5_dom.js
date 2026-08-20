// const newElement =document.createElement("h2");
// newElement.textContent="goswami is coming";
// newElement.id="second";

// const element = document.getElementById("first");
// element.after(newElement);

// const newElement2 = document.createElement("h3");
// newElement2.textContent = "Diwali is comming soon";
// newElement.after(newElement2);
// newElement2.id="third";
// newElement2.className = "holi";
// newElement2.classList.add("diwali");//classlist used to give mutiple name to class 
// newElement2.classList.add("happy");
// newElement2.classList.remove("happy");//used to remmove the class name.
//  // css
// newElement2.style.color="brown";
// newElement2.style.backgroundColor="aqua";
// newElement2.style.fontSize= "20px";
// console.log(newElement2.getAttribute("id"));
// // adding element in the unorderlist 
// const list=document.createElement("li");//creating list
// list.textContent="Milk";// adding element in the list

// const unorderlist= document.getElementById("listing");//selecting unorderlist from html
// unorderlist.append(list);// adding eleemnt in the unorderlist

// const list2=document.createElement("li");//creating list
// list2.textContent="Bread";
// unorderlist.append(list2);

// const list3=document.createElement("li");//creating list
// list3.textContent="Jam";
// unorderlist.append(list3);

// const list4=document.createElement("li");//creating list
// list4.textContent="Halwa";
// unorderlist.prepend(list4);

// const list5=document.createElement("li");//creating list
// list5.textContent="Paneer";
// unorderlist.prepend(list5);

// list.after(list5);

// suppose we are geting elelment from backaned as array so we have to append inthe the unordered list.
// arr=["tofu","tea","cake","cream"];
// for(let food of arr){// at each iteration ,there is a new list is created.
//     const list = document.createElement("li");
//     list.textContent=food;
//     unorderlist.append(list);// it is not a best pracxtice because it is adding one by one element in the ui .
// }
//optimum way
// const fragment= document.createDocumentFragment();
// for(let food of arr){// at each iteration ,there is a new list is created.
//     const list = document.createElement("li");
//     list.textContent=food;
//     fragment.append(list);// here we created fragment array whhich store all the elemnt one by one and then collectivelly we add the all elelment to the the unorderred list.
// }
// unorderlist.append(fragment);

// const welcomeBox= document.getElementById("welcome-box");
// console.log(welcomeBox.textContent);
// welcomeBox.textContent="Welcome back, Alice!";
// //innerHTML
// const welcomeMessage = `
 
//   <h2>Welcome back, Alice!</h2>
//   <p>You have <strong>5</strong> new messages.</p>
  
// `;
// welcomeBox.textContent=welcomeMessage;


//changing class attributes.
// const profileContainer=document.getElementById("profile-pic-container");
// const profileImage=document.querySelector("img");
// profileImage.src="https://png.pngtree.com/png-vector/20230831/ourmid/pngtree-man-avatar-image-for-profile-png-image_9197908.png";
// profileImage.alt="Alice image";
// profileContainer.id="user-123-avatar";
// console.log(profileContainer.id);


// Changing CSS Classes (The `.classList` Toolbox)**
// This is the **best and safest way** to manage an element's classes. Forget about `.className`.
// - `.add('className')`: Adds a new class.
// - `.remove('className')`: Removes a class.
// - `.toggle('className')`: Adds the class if it's missing, removes it if it's there.
// - `.contains('className')`: Checks if an element has a class (returns `true` or `false`).
// profileContainer.classList.add("is-active");
// profileContainer.classList.remove("card");
// profileContainer.classList.toggle("selected");//here seletected is not present then it will insert the it 
// profileContainer.classList.toggle("selected");//here inserted ,selected  class will be removed as we used toggle that means if it is exist then remove ,if it is not exist then  it get inserted it .
// console.log(profileContainer.classList);


// Changing Inline Styles (The `.style` Property)
// This allows you to directly apply CSS styles to an element's `style` attribute.
// CRITICAL RULE:** CSS properties with a hyphen are converted to **camelCase**.
// `background-color` becomes `backgroundColor`.
// `font-size` becomes `fontSize`.
// profileContainer.style.border="2px solid blue";
// profileContainer.style.borderRadius="50%";
// profileContainer.style.width="150px";
// profileContainer.style.height="150px";


// Creating a New Element: `document.createElement()`
// This creates a new element node in memory. It is not yet on the page.
// const newParagraph=document.createElement("p");
// newParagraph.textContent="This is a brand new paragraph created by JavaScript.";
// newParagraph.classList.add("info-text");
// console.log(newParagraph.classList);

// Adding the New Element to the Page


// const newElement =document.createElement("h2");
// newElement.textContent="I AM THE NEW ELEMENT";
// const referenceElement=document.querySelector("#parent-container");
// different way to add element.
//.append(...nodes) (Modern & Recommended)
// referenceElement.append(newElement);// it insert at the last.
//.prepend(...nodes) (Modern & Recomnded) 
// referenceElement.prepend(newElement);// it insert at the begning 
//.appendChild(node) (Classic)
// What it does: Same as append, but it's the older syntax. 
// It can only add one node at a time and returns the appended node.
// const parent = document.getElementById('parent-container');
// parent.appendChild(newElement); // Same result as append

//`.insertBefore(newNode, referenceNode)` (Classic & Powerful)
// - What it does: Inserts `newNode` into the `parentElement` **right before** the `referenceNode`.
//  This is the classic way to insert into the middle of a list of children.
// - Use Case: Inserting an element at a specific position in a list.
// const newElement =document.createElement("h2");
// newElement.textContent="I AM THE NEW ELEMENT";
// const referenceEl=document.getElementById("reference-element");
// const parent = document.getElementById('parent-container');
// parent.insertBefore(newElement,referenceEl);

//Adding Next to an Element (as a Sibling)**
// These methods place the new element *outside* the boundaries of the reference element,
//  at the same level in the DOM tree.
// `.after(...nodes)` (Modern & Recommended)**
// const newElement =document.createElement("h2");
// newElement.textContent="I AM THE NEW ELEMENT";
// const referenceEl=document.getElementById("reference-element");
// referenceEl.after(newElement);

// .before(...nodes)` (Modern & Recommended)**
// - **What it does:** Inserts the node **immediately before** the reference element, as its previous sibling.
// - **Use Case:** Adding a new element directly preceding another one.
// follow code same above.


//.insertAdjacentElement(position, element)` (The Most Versatile)
//What it does: This is a highly flexible method that can do the job of all the others.
//  You specify a position relative to the target element and the element to insert.
// const referenceEl=document.getElementById("reference-element");
// const newElement =document.createElement("h2");
// newElement.textContent="I AM THE NEW ELEMENT";
// // referenceEl.insertAdjacentElement("afterEnd",newElement);
// referenceEl.insertAdjacentElement("afterBegin",newElement);
// referenceEl.insertAdjacentElement("beforEend",newElement);
// referenceEl.insertAdjacentElement("beforeBegin",newElement);

//### **Removing an Element**
// `.remove()`: The simplest and most modern way.
//  You call it directly on the element you want to remove.
// const profileImg= document.querySelector("#user-123-avatar img");
// if(profileImage){
//     profileImage.remove();
// }

//optimization
const list=document.querySelector("my-list");

console.time("loop without fragment");

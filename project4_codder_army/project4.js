
const form=document.querySelector("form");

form.addEventListener("submit",(e)=>{
e.preventDefault();//yeh page ko reload hone se rokta hai
const income=document.getElementById("income");
const amount=parseFloat(income.value);//jo bhi kuchh lete hai wo string ke form me aata hai isliye usko float me convert karna padta hai
const result=document.querySelector("h2");
let totaltax=0;
if(amount<=1600000){
    totaltax=400000*.15;
}else if(amount<=2000000){
    totaltax=60000+(amount-1600000)*.20;
}else if(amount<=2400000){
    totaltax=60000+80000+(amount-2000000)*.25;
}else{
    totaltax=60000+80000+100000+(amount-2400000)*.3;
}
result.textContent=`Total Tax: ${totaltax.toFixed(2)}`;//yeh tax ko 2 decimal ke sath show karta hai
e.reset();//yeh form ko reset kar deta hai
})
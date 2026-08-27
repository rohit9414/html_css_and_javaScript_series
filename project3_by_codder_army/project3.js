const form=document.querySelector('form');
form.addEventListener('submit',(e)=>{//submit button ke click hone par ye function call hoga
    e.preventDefault();// jab submit karte hai us time page reload na ho,yadi reload ho to data save nahi hoga
    const boy=document.getElementById('boy');
    const girl=document.getElementById('girl');
    const l1=boy.value.length;
    console.log(l1);
    const l2 =girl.value.length;
    const result=Math.pow(l1+l2,3)%101;
    document.querySelector('h2').textContent=`result:${result}%`;
    form.reset();//used to clear the input field after submit
})
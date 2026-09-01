const div = document.getElementById("div");

setInterval(()=>{//ye function ko 1 second me ek baar run karta hai.taki time update hota rahe
    let time=new Date();
    div.textContent=time.toLocaleTimeString();
},1000)//1000 milli second mein hai
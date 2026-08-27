const parent = document.getElementById("parent");
parent.addEventListener('click', (e) => {
    
    const body = document.querySelector("body");
    const child = e.target;
    body.style.backgroundColor = child.id;
});
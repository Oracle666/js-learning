const leftBtn = document.querySelector("#left");
const rightBtn = document.querySelector("#right");
const items = document.querySelector("#items");


const loop = (direction, e) =>{
    e.preventDefault();
    if(direction == "rightBtn"){
        items.appendChild(items.firstElementChild)
    }
    else{
        items.insertBefore(items.lastElementChild, items.firstElementChild)
    }
};

rightBtn.addEventListener("click", e =>{
    loop("rightBtn", e);
});

leftBtn.addEventListener("click", e =>{
    loop("leftBtn", e);
});


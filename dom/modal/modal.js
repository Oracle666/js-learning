const openButton = document.querySelector("#openOverlay");
const body = document.body;
const siccessModal = createModal("ABOBA")

openButton.addEventListener("click", e =>{
    body.appendChild(siccessModal);
})


function createModal(content){
    const overlayElement = document.createElement("div");
    overlayElement.classList.add("overlay");

    const containerElement = document.createElement("div");
    containerElement.classList.add("modal-container");

    const contentElement = document.createElement("div");
    contentElement.classList.add("content");

    contentElement.innerHTML = content;

    const closeElement = document.createElement("a");
    closeElement.classList.add("close");
    closeElement.textContent = "x";
    closeElement.href = "#";

    overlayElement.addEventListener("click", e =>{
        if(!e.target.classList.contains("content")) {
            closeElement.click();
        }
    })

    closeElement.addEventListener("click", e=>{
        e.preventDefault();
        body.removeChild(overlayElement);
    })
    
    
    overlayElement.appendChild(containerElement);
    containerElement.appendChild(closeElement);
    containerElement.appendChild(contentElement);
    
    return overlayElement;
}
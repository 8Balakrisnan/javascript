// Event Listeners

//const view = document.querySelector("#view2");
//console.log(view);

//const div = view.querySelector("div");
//const h2 = div.querySelector("h2");
//console.log(h2);

//syntax
// addEventListeners("event",function,useCapture)

//const doSamething = () => {
//    alert("Welcome to Javascript");
//}

//h2.addEventListener("click", doSamething, false);

//h2.removeEventListener("click", doSamething, false);

/*h2.addEventListener("click", (event)=>{console.log(event.target);
    event.target.textContent = "Onclick";
});*/

// Event - readyStateChange

document.addEventListener("readystatechange", (event) => {
    if(event.target.readyState === "complete")
    {
        console.log("Complete");
        initApp();
    }
    
})

const initApp = () =>{
    const view = document.querySelector("#view2");
    const div = view.querySelector("div");
    const h2 = div.querySelector("h2");
    //view.classList.add("purple");

    view.addEventListener("click", (event)=>{
        
        view.classList.toggle("purple");
        view.classList.toggle("darkblue");
        //event.target.style.backgroundColor = "Green";
        //view.style.backgroundColor = "Green";
    })

    div.addEventListener("click", (event)=>{
        
        //event.target.style.backgroundColor = "blue";
        //div.style.backgroundColor = "blue";
        div.classList.toggle("green");
        div.classList.toggle("black");
    })

    h2.addEventListener("click", (event)=>{
        
        
        //event.stopPropagation();
        //event.target.textContent = "Onclick";

        const myText = event.target.textContent;
        myText === "click" ? (event.target.textContent = "onClick") :
                             (event.target.textContent = "click");

    })

    const nav = document.querySelector("nav");
    nav.addEventListener("mouseover", (event)=> {event.target.classList.add("height100");})
    nav.addEventListener("mouseover", (event)=> {event.target.classList.remove("height100");})

}
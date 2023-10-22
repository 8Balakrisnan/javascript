// Text Input

document.addEventListener("readystatechange", (event)=>{
    if(event.target.readyState === "complete"){
        console.log("complete");
        initApp();
    }
})

const initApp = () => {
    const view3 = document.querySelector("#view3");
    const myform = view3.querySelector("#myForm");
    myform.addEventListener("submit", (event)=>{
        event.preventDefault();
        console.log("submit event");
    });
};
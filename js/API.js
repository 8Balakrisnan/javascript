// Web Storage API - Application Programming Interface

document.addEventListener("readystatechange", (event)=>{
    if(event.target.readyState === "complete"){
        console.log("Complete");
        initApp();
    }
})

const initApp = () =>{
    const myContent = ["Html","Css","Javascript"];
    const myObject = {
        name: "Web Storage",
        myContent: ["Application","Programming","Interface"],
        logName: function(){
            console.log(this.name);
        }
    }
    window.sessionStorage.setItem("mySessionStore", JSON.stringify(myObject));
    //localStorage.setItem("mySessionStore", JSON.stringify(myObject));

    //const key = localStorage.key(0);
    //const key = localStorage.length;
    //const key = localStorage.clear;
    //const key = localStorage.removeItem("mySessionStore");
    //console.log(key);

    const mySessionStore = JSON.parse(sessionStorage.getItem("mySessionStore"));
    console.log(mySessionStore);
};


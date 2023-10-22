//Document Object Model (DOM)


const view1 = document.getElementById("view1");
console.log(view1);

const view2 = document.querySelector("#view2");
console.log(view2);

view1.style.display = "flex";
view2.style.display = "none";

const views = document.getElementsByClassName("view");
console.log(views);

const sameviews = document.querySelectorAll(".view");
console.log(sameviews);

const divs = view1.querySelectorAll("div");
console.log(divs);

const sameDivs = view1.getElementsByTagName("div");
console.log(sameDivs);

const evenDivs = view1.querySelectorAll("div:nth-of-type(2n)");
console.log(evenDivs);

evenDivs[5].style.backgroundColor = "green";

for(i=0; i < evenDivs.length; i++){
    evenDivs[i].style.backgroundColor = "green";
    evenDivs[i].style.width = "150px";
    evenDivs[i].textContent = "Gold";
    evenDivs[i].style.fontWeight = "bold";
}

const navText = document.querySelector("nav h1");
console.log(navText);

navText.textContent = "Balakrishnan";

const navBar = document.querySelector("nav");
navBar.innerHTML = '<h1>ideapad</h1> <p>LENOVO</p>';
console.log(navBar);

console.log(evenDivs[0]);
console.log(evenDivs[0].parentElement);
console.log(evenDivs[0].parentElement.children);
console.log(evenDivs[0].parentElement.childNodes);
console.log(evenDivs[0].parentElement.hasChildNodes());
console.log(evenDivs[0].parentElement.lastChild);
console.log(evenDivs[0].parentElement.lastElementChild);
console.log(evenDivs[0].parentElement.firstChild);
console.log(evenDivs[0].parentElement.firstElementChild);
console.log(evenDivs[0].nextSibling);
console.log(evenDivs[0].nextElementSibling);
console.log(evenDivs[0].nextElementSibling.nextElementSibling);
console.log(evenDivs[0].previousSibling);
console.log(evenDivs[0].previousElementSibling);

view1.style.display = "none";
view2.style.display = "flex";
view2.style.flexDirection = "row";
view2.style.flexWrap = "wrap";
view2.style.margin = "10px";


console.log(view2.lastElementChild);
view2.lastElementChild.remove();

const createDiv = (parent, iter) => {

const newDiv = document.createElement("div");
newDiv.textContent = iter;
newDiv.style.fontWeight = "bold";
newDiv.style.width = "100px";
newDiv.style.height = "100px";
newDiv.style.margin = "10px"
newDiv.style.backgroundColor = "yellow";
newDiv.style.color = "black";
newDiv.style.display = "flex";
newDiv.style.alignItems = "center";
newDiv.style.justifyContent = "center";
newDiv.style.borderRadius = "1rem";
parent.append(newDiv);

};

for(let i=1; i<=10; i++){
    createDiv(view2, i);
}

const newDivEl = view2.querySelectorAll("div:nth-of-type(n)");
console.log(newDivEl);




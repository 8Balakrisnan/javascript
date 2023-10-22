//srting
"use strict";

const myVariable = "Mathematics";

console.log(myVariable);

//sring length
console.log(myVariable.length);

//sting methos charAt
console.log(myVariable.charAt(5));

//indexOf , lastIndexOf
console.log(myVariable.lastIndexOf("cs"));

//slice
console.log(myVariable.slice(0,5));

//toUpperCase() , toLowerCase()
console.log(myVariable.toUpperCase());
console.log(myVariable.toLowerCase());

//includes boolean datatype
console.log(myVariable.includes("mat"));

//split
console.log(myVariable.split("em"));

//numbers
const myString = "10.09871";
const myNumber = 10
const myFloat = 10.01

console.log(myString + 333);
console.log(Number(myString) + 3);
console.log(Number(true));
console.log(Number(false));

console.log(myNumber);
console.log(myFloat);
console.log(myNumber === myFloat);

//Numbers methods
//IsInteger() , parseFloat , parseInt , toFixed() ,toString()
console.log("isInteger");
console.log(Number.isInteger(myNumber));
// mystring = "10aaa" pint 10
console.log("parseFloat");
console.log(Number.parseFloat(myString));
console.log("toFixed");
console.log(Number.parseFloat(myString). toFixed(3));
// myFloat = 10.01 print 10
console.log("parseInt");
console.log(Number.parseInt(myFloat));
console.log("toString");
console.log(myNumber.toString());

//chain
console.log("Chain Methods parseFloat toFixed toString ");
console.log(parseFloat(myString).toFixed(4).toString());

//Math methods
console.log("Math Methods");
console.log(Math.PI)
console.log(Math.trunc(Math.PI) + " trunc");
console.log(Math.round(4.1) + " round -5+");
console.log(Math.ceil(4.5) + " ceil +");
console.log(Math.floor(4.5) + " floor -");
console.log(Math.pow(10,3) + " Power of")
console.log(Math.min(1,2,3,4,5,6,7,8,9,10) + " minimum value");
console.log(Math.max(1,2,3,4,5,6,7,8,9,10) + " maximun value");
console.log(Math.floor(Math.random()*100) + 1);

//task
console.log(Number.isNaN());
console.log(isNaN());
console.log(myVariable.charAt(Math.floor(Math.random()*myVariable.length)));

//IF Statement
/* let customersIsbanned = false;
let customers = "Hi hello customers";
let finance = true;
let replay;
if (customersIsbanned){
    replay = `sorry ID is Banned`

}
else if (customers && finance){
    replay = `Welcome ${customers} and financial customers`;

}
else if (customers){
    replay = `Welcome ${customers}`;
}
console.log(replay); */



// else include if else statement


/* let mark = 50;
let Grade;
let collegeStudent = false;

if (mark>=85){
    Grade = `A`;
}
else if (mark>=65){
    Grade = `B`
}
else if (mark>=50){
    Grade = `c`
}
else if (mark>=35){
    Grade = `F`
}
else{
    if(collegeStudent){
        Grade = `Pass`
    }
    else{
        Grade = `Areare`
    }
}
console.log(Grade); */


// Switch Statements

/* let player1 = "Rock"
let player2 = "peper"
let replay; */

/* switch (player1){
    case player2:
        console.log("Player 1 win");
        break;
    case  "Rock":
        if(player2 === "Scissors"){
            console.log("player 1 win");

        }
        else {
            console.log("player 2 win");
        }
        break;
         
default:
    console.log("Not win")
} */

/* if(player2 === "Scissors"){
    replay = `player 1 win`
}
else {
    replay = `player 2 win`
}
console.log(replay);
 */


// ternary operator  [ condition ? exprIftrue : exprIffalse]

let Age = 20;
let drink = Age > 21 ? "beer" : "juice";
console.log(drink);

let test = 49;
let grade = test > 85 ? "A" : test > 70 ? "B" : test > 50 ? "c" : "D";
console.log(grade);

/* let player1 = "paper";
let player2 = "Scissors"
let Win = player1 === player2 ? "Tie" :
          player1 === "Rock" && player2 === "Scissors" ? "Player 1" :
          player1 === "peper" && player2 === "Scissors" ? "player 2" :
          player1 === "Scissors" && player2 === "Rock" ? "player 1" : "player 2";  
console.log(Win); */



// Alert methods

//alert("hi bala");

// alert `undefined`
//let myBoolean = alert("Hi how are you");

// confrim ok == `true` or cancle == `false`
//let myBoolean = confirm("Hi how are you");

// `prompt` and `null` collasking



//console.log(person.charAt(Math.floor(Math.random()*person.length)));

/* let my = prompt("Enter Rock , Paper , Scissors");
if(my){
    console.log(my ?? "Thanks for Playing!" );
}
else{
    
    console.log("Thanks for Playing!");
} */

// intractive game

/* let StartGame = confirm("Shall we playe Rock, Paper or Scissors?");
if(StartGame){
    let systemChoice = prompt("Enter Rock, Paper or Scissors:");
    if(systemChoice){
        let playerOne = systemChoice.trim().toLowerCase();
        if( 
            playerOne === "rock" || 
            playerOne === "paper" || 
            playerOne === "scissors"
            ){

            let systemChoice = Math.floor(Math.random() * 3 + 1);
            let system = systemChoice === 1 ? "rock" : systemChoice === 2 ? "paper" : "scissors";
                         

            let result = playerOne === system ? "Tie Game!":
                         playerOne === "rock" && system === "paper" ? 
                         `playerOne: ${playerOne}\nsystem: ${system}\nSystem Win!!`:
                         playerOne === "paper" && system === "scissors" ?
                         `playerOne: ${playerOne}\nsystem: ${system}\nSystem Win!!`:
                         playerOne === "scissors" && system === "rock" ? 
                         `playerOne: ${playerOne}\nsystem: ${system}\nSystem Win!!`:
                         `playerOne: ${playerOne}\nsystem: ${system}\nPlayerOne Win!!`;
                alert(result);    
                let playAgain = confirm("Play Again");
                playAgain ? location.reload() : alert("Ok, Thanks for Playing");       

        }
        else{
            alert("You didn't enter!");
        }
        
        
        
    }
    else {
        alert("I guess you change your mind. Maybe next time.");
    }
    
}
else {
    alert("Ok, maybe net time.");
} 
 */




// Loop Concept
// While

/* let i=1;
while(i<=5){
    console.log(i);
    i = i+1;

} */

// do while loop //

/* let i=50;
do {
    console.log(i);
    i = i+10;

}while(i<50); */

// for loop

/* for(i=1;i<=5;i++)
{
    console.log(i);
} */

// nexted for loop //

/* let name = "kr";
for(let i=0;i <= name.length;i++)
{
    for(let j=0;j <= name.length;j++)
        {
        console.log(i,j);
     }
    
} */

// while loop break // 

/* let i = 0;
while (i < 6){
    if(i === 2){
        break;
    }
    i = i + 1;
    console.log(i);
} */

// for loop continue // 

let text = '';

for(let i=0;i <= 10; i++)
{
    if(i === 10){
        continue;
    }
    text = text + i;
}
console.log(text);

// functions

function sum(num1 , num2){
    
    if(num2 === undefined){
        return num1*num1;
    }
    return num1+num2;
}
console.log(sum(5,10));

console.log("vbalakrishnan2020@gmail.com".slice(0,"vbalakrishnan2020@gmail.com".indexOf("@")));

function getUserNameFromEmail(email){
    return(email.slice(0,email.indexOf("@")));
}
console.log(getUserNameFromEmail("vbalakrishnan2020@gmail.com"));
console.log(getUserNameFromEmail("bala1731995@gmail.com"));

function toProperCase(name){
    return(name.charAt(0).toUpperCase() + name.slice(1).toLowerCase());
}
console.log(toProperCase("balakrishnan"));
console.log(toProperCase("balakumar"));

//scope var, let, conts

// parent child block

// Array methods

const myArray=[];

// element add

myArray[0]="Bala";
myArray[1]="krishnan";
myArray[2]= 1000;
myArray[3]= false;

// console.log(myArray);

// console.log(myArray[2]);
// console.log(myArray[myArray.length-1]);

// new array push() - last add , pop() - delete 

/* myArray.push("Add");
console.log(myArray);
myArray.pop();
console.log(myArray); */

// unshift() - beging add , shift() - beging delete

/* myArray.unshift("Add");
console.log(myArray);
myArray.shift();
console.log(myArray); */

// variable add array push(), unshift(), pop(), shift()

/* const lastItem = myArray.pop();
console.log(lastItem);
const fristItem = myArray.shift();
console.log(myArray);
console.log(fristItem); */

// splice() methods and using replace value

// myArray.splice(2,1);
// console.log(myArray);

// <--- slice() methods --->

// const sliceArray = myArray.slice(1,3);
// console.log(sliceArray);

// <--- reverse() methods --->

// const reverseArray = myArray.reverse();
// console.log(reverseArray);

// <--- join() methods --->

/* const joinArray = myArray.join();
console.log(joinArray);
const newArray = joinArray.split(',');
console.log(newArray); */

// <-- concat() methods ---> same array value merge

// meArray = ["Bala","Kumar",2000,true];
// console.log(meArray);

// const newArray = myArray.concat(meArray);
// const newArray = [...myArray,...meArray];

// console.log(newArray);

const webDesignA = ["HTML","Css","Javascript"];

const webDesignB = ["Boostrab","React","Jquery"];

const programA = ["C","C++","Java"];

const programB = ["C#","Pythan","Php"];

const dataBase = ["MySql","mangoDB","Sql"];

const osSystem = ["Windows","Linux","Mac"];


console.log("One dimentional array:", webDesignA[0],programB[2],dataBase[0],osSystem[1]);

const webdesign = [webDesignA,webDesignB];
const program = [programA,programB];
const system = [dataBase,osSystem];

console.log("Two dimentional array:",webdesign[0][0],program[1][2],system[0][0],system[1][1]);

const develop = [webdesign,program,system];

console.log("Three dimentional array:",develop[0][0][0],develop[1][1][2],develop[2][0][0],develop[2][1][1]);

// intractive game

/*let StartGame = confirm("Shall we playe Rock, Paper or Scissors?");
if(StartGame){
    
    while(StartGame){
        const systemChoice = prompt("Enter Rock, Paper or Scissors:");
        
        if(systemChoice || systemChoice === ""){
            const playerOne = systemChoice.trim().toLowerCase();
            if (
                playerOne === "rock" ||
                playerOne === "paper" ||
                playerOne === "scissors"
              ) {

            const systemChoice = Math.floor(Math.random() * 3 + 1);
            const rpsArray = ["rock","paper","scissors"];
            const system = rpsArray[systemChoice];
                         

            const result = playerOne === system ? "Tie Game!":
                         playerOne === "rock" && system === "paper" ? 
                         `playerOne: ${playerOne}\nsystem: ${system}\nSystem Win!!`:
                         playerOne === "paper" && system === "scissors" ?
                         `playerOne: ${playerOne}\nsystem: ${system}\nSystem Win!!`:
                         playerOne === "scissors" && system === "rock" ? 
                         `playerOne: ${playerOne}\nsystem: ${system}\nSystem Win!!`:
                         `playerOne: ${playerOne}\nsystem: ${system}\nPlayerOne Win!!`;
                alert(result);    
                 StartGame = confirm("Play Again ?");
                if(!StartGame) alert("Ok, Thanks for Playing"); 
                continue;      

        }
        else{
            alert("You didn't enter!");
            continue;
        }
           
    }
    else {
        alert("I guess you change your mind. Maybe next time.");
        break;
    }
}
    
}
else {
    alert("Ok, maybe net time.");
} 
*/

/*
const initGame = () => {
    const startGame = confirm("Shall we play rock, paper, or scissors?");
    startGame ? playGame() : alert("Ok, maybe next time.");
  };
  
  // Game flow function
  const playGame = () => {
    while (true) {
      let playerChoice = getPlayerChoice();
      playerChoice = formatPlayerChoice(playerChoice);
      if (playerChoice === "") {
        invalidChoice();
        continue;
      }
      if (!playerChoice) {
        decidedNotToPlay();
        break;
      }
      playerChoice = evaluatePlayerChoice(playerChoice);
      if (!playerChoice) {
        invalidChoice();
        continue;
      }
      const computerChoice = getComputerChoice();
      const result = determineWinner(playerChoice, computerChoice);
      displayResult(result);
      if (askToPlayAgain()) {
        continue;
      } else {
        thanksForPlaying();
        break;
      }
    }
  };

  // getPlayerChoice
  
  const getPlayerChoice = () => {
    return prompt("Please enter rock, paper, or scissors.");
  };
  

  //  formatPlayerChoice

  const formatPlayerChoice = (playerChoice) => {
    if (playerChoice || playerChoice === "") {
      return playerChoice.trim().toLowerCase();
    } else {
      return false;
    }
  };
  
  //  decidedNotToPlay

  const decidedNotToPlay = () => {
    alert("I guess you changed your mind. Maybe next time.");
  };

  
  //  evaluatePlayerChoice

  const evaluatePlayerChoice = (playerChoice) => {
    if (
      playerChoice === "rock" ||
      playerChoice === "paper" ||
      playerChoice === "scissors"
    ) {
      return playerChoice;
    } else {
      return false;
    }
  };
  

  //  invalidChoice

  const invalidChoice = () => {
    alert("You didn't enter rock, paper, or scissors.");
  };
  

  //  getComputerChoice

  const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    const rpsArray = ["rock", "paper", "scissors"];
    return rpsArray[randomNumber];
  };
  

  //  determineWinner

  const determineWinner = (player, computer) => {
    const winner =
      player === computer
        ? "Tie game!"
        : player === "rock" && computer === "paper"
        ? `playerOne: ${player}\nComputer: ${computer}\nComputer wins!`
        : player === "paper" && computer === "scissors"
        ? `playerOne: ${player}\nComputer: ${computer}\nComputer wins!`
        : player === "scissors" && computer === "rock"
        ? `playerOne: ${player}\nComputer: ${computer}\nComputer wins!`
        : `playerOne: ${player}\nComputer: ${computer}\nplayerOne wins!`;
  
    return winner;
  };
  
  //  displayResult

  const displayResult = (result) => {
    alert(result);
  };
  

  // askToPlayAgain

  const askToPlayAgain = () => {
    return confirm("Play Again?");
  };
  
  // thanksForPlaying

  const thanksForPlaying = () => {
    alert("Ok, thanks for playing.");
  };
  
  initGame(); */


  // Object - Key_Value pairs in curly braces

  // sysntax : const 'object-name' = {key_name:"value_name"}; console.log(objects-name);

  const my_Object = {name:"Balakrishnan"};
  console.log(my_Object);
  console.log(my_Object.name);  

  const Youtube = {
    subscriber:true,
    no:10000,
    chennel:{
        mrtamilan:"Movie_chennel",
        softlearn:"Education"
    },
    sub_Chennel:["Game","Comedy","Political"],
    action: function(){
        return `Mrtamilan is ${this.chennel.mrtamilan}`;
    }
  };

  console.log(Youtube.sub_Chennel[2]);
  console.log(Youtube["chennel"]);
  console.log(Youtube.action());

// Objects Inherite methods

  const twoWheeler ={
    name: "Tvs_ntorq",
    tyer: function(){
        return "numbe of typer 2"
    }

  };

  console.log(twoWheeler.tyer());

  // 2nd object.create() --> inhirite object
  const tvs = Object.create(twoWheeler);

  tvs.name = "nTorq 125";

  tvs.engine = function(){ return "petrol without oil"};

  console.log(tvs.name);
  console.log(tvs.engine());
  console.log(tvs.tyer());

  // 3nd object inhirite
  const Evehicle = Object.create(tvs);

  Evehicle.name = "E-vehicle",

  Evehicle.engine = function(){ return "battary vehicle"};

  console.log(Evehicle.tyer());
  console.log(Evehicle.name);
  console.log(Evehicle.engine());

// Objects for loop methods

  const mobile = {
    samsung: "S23 ultra",
    redmi: "Xiaomi 12 Pro",
    motorola: "Moto M30 fusion",
    apple: "15 pro max"
  };

  mobile.pocco = "pocco x5 pro"
  delete mobile.pocco
  
  console.log(mobile.hasOwnProperty("apple"));

  console.log(Object.keys(mobile));
  console.log(Object.values(mobile));

// for in loop 
  for(let model in mobile){
    //console.log(model);
    //console.log(mobile[model]);
    console.log(`${model}: ${mobile[model]}`);

  }

// destructuring Objects

  const {samsung: samSseries, redmi: XiaomiSeries} = mobile;
  console.log(samSseries);
  console.log(XiaomiSeries);

  const {samsung, redmi, motorola, apple} = mobile;
  console.log(apple);

  function series({motorola}){
    return motorola;
  }

  console.log(series(mobile));
  

// classes concept

const mypizza = {
  size: "Medium",
  crust:"Original",
  bake: function(){
    return console.log(`baking a ${this.size} ${this.crust} crust pizza.`);
  }
};

mypizza.bake();

// objects in change to template classes

//syntex:
  /* class 'class name' {
    constructor(){

    }
    function(){

    }
   } */

   class pizza {
    constructor(sizepizza,typepizza,crustpizza){
      this.size = sizepizza;
      this.type = typepizza;
      this.crust = crustpizza;
      this.toppings = [];
    }

    /*get toppingspizza(){
      return this.toppings;
    }*/

    getToppings(){
      return this.toppings;
    }
    setToppings(toppingspizza){
      this.toppings.push(toppingspizza);
    }

    /*set toppingspizza(toppingspizza){
      this.toppings = toppingspizza;
    }*/

    bake() {
      return console.log(`baking a ${this.size} ${this.type} ${this.crust} crust pizza with ${this.toppings}.`);
    }
   }

   // const anotherpizza = new pizza("margarita","small","original");

   // console.log(anotherpizza.crust);

  // anotherpizza.bake();

   const anpizza = new pizza("medium","pepperonni","thin");

  // anpizza.toppings = "sausage";
  // anpizza.toppingspizza = "creame";

  anpizza.setToppings("juicey");
  anpizza.setToppings("creame");

   anpizza.bake();

// 'Super class' and 'child class' concept

class myPizza {
  constructor(pizzaSize){
    this.size = pizzaSize;
    this.crust = "Original";
  }
  getCrust(){
    return this.crust;
  }
  setCrust(crustPizza){
    this.crust = crustPizza;
  }
}


// child class 'extends'

class specialPizza extends myPizza{
  constructor(pizzaSize,toppingPizza){
    super(pizzaSize);
    this.type = "Margarita";
    this.topping = toppingPizza;

  }
  slice(){
    console.log(`our ${this.type} ${this.topping} ${this.size} ${this.crust} pizza has a 8 slice`);
  }

}

const mySpecialPizza = new specialPizza("medium","juicy");
mySpecialPizza.setCrust("normla");

mySpecialPizza.slice();

// class and factory function

function pizzaFactory(PizzaSize){
  const crust = "original";
  const size = PizzaSize;
  return{
    bake: ()=> console.log(`Bakking a ${size} ${crust} crust Pizza.`)
  }
};

const PizzaOne = pizzaFactory("Medium");
PizzaOne.bake();


// public and private `#` concept

class spicyPizza {
    crust = "Original";  /*public*/
    #sauce = "tomato";   /*private*/ 

  constructor(pizzaSize){
    this.size = pizzaSize;
    
  }
  getCrust(){
    return this.crust;
  }
  setCrust(crustPizza){
    this.crust = crustPizza;
  }

  bake(){
    return console.log(`Bakking a ${this.size} ${this.#sauce} ${this.crust} pizza.` );
  }
}

const pizzaTwo = new spicyPizza("large");
pizzaTwo.bake();

// JSON - Javascript Object Notation

console.log("JSON - Javascript Object Notation");

const jsonObj = {
  name: "JSON",
  content: ["Html","css","JS"],
  subject: function(){
    console.log("How to learn JSON");
  }
};

console.log(jsonObj);
jsonObj.subject();

const sendJSON = JSON.stringify(jsonObj);
console.log(typeof sendJSON);
console.log(sendJSON);

const recevieJSON = JSON.parse(sendJSON);
console.log(typeof recevieJSON);

// Error and Erros handling

// reference erroe
// syntex error
// type Error


let my = "java script";
console.log(my);

// try catch finaly

const makeError = () => {
  let i = 0;
  while(i<=5){

  try{
      if(i%2 !==0){
        throw new Error  ("odd number");
      }
      console.log("Even number");

  }
  catch(error){
    //console.log(error);
    console.error(error.massage);
   //logTheError(error.stack);
    //console.warn(error);
    //console.table(error);
  }
  finally{
    console.log("...sucssfuly");
    i++;
  }
}
};

makeError();

/* function customError(massage){
  this.massage = massage;
  this.name = "customError";
  this.stack = `${this.name} : ${this.massage}`;
}; */










    
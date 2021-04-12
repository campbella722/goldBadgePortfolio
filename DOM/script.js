// DOM  Document Object Model
/*
A representation of a window.document object that comprises everything that we see in the browser (and things we don't such as <head> tag)
    -DOM Node interface has subclasses of:
        -Document
        -Element
        -DocumentFragment
*/

// // creates an HTML element
// let h1 = document.createElement("h1");
// // .innerText is a property that injects text
// h1.innerText = "Welcome to Document Object Model!";
// // references style sheet and its color property to assign it a value
// h1.style.color = "salmon";
// h1.style.fontFamily = "sans-serif";
// // appends the Node
// document.body.appendChild(h1)

// document.getElementById()

let h3 = document.getElementById("id-method")
h3.innerText = ".getElementById"
h3.style.color = "blue"

let p = document.getElementById("get-id");
p.innerText = "Method used to grab the first element with a specified id"

let myList = document.getElementsByClassName("our-list");
console.log(myList) //show all of the list items with the same class as an array
myList[1].style.color = "red"
myList[2].style.fontWeight = "bold";

let qselect = document.querySelector("#q-select")
qselect.innerText = "Query Selector grabs the first matching selector"
let selectAll = document.querySelectorAll("a")
console.log(selectAll);

// .addEventListener("event", callback_function)

let myBtn = document.querySelector(".submit-btn");
console.log(myBtn);

myBtn.addEventListener("click", () => {console.log("Button has been hit!")})








// document.body.getElementsByTagName("body")
// document.body.style.backgroundColor = "red";





// let idMethod = document.getElementById("id-method")
// idMethod.innerText = ".getElementById"

// let rootText = document.querySelector(".root-text")
// rootText.style.fontWeight = "bold"
// document.body.appendChild(rootText)
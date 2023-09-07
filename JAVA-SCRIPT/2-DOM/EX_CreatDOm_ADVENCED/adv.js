let myElemntDIV = document.createElement("div");
let myElemntH2 = document.createElement("h2");
let myElemntP = document.createElement("p");

let text = document.createTextNode("product Description");
let paraghaph = document.createTextNode("producte discription");




myElemntH2.appendChild(text);
myElemntDIV.appendChild(myElemntH2);
    

myElemntP.appendChild(paraghaph);
myElemntDIV.appendChild(myElemntP);

document.body.appendChild(myElemntDIV);
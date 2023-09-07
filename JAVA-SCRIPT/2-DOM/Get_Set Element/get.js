/* 
DOM [Get / Set Elements Content And Attributes]
    innerHTML
    textContent
    Change Attributes Directly
    Change Attributes With Methods
    getAttribute
    setattribute
Search
    innerText
*/

let Eleement = document.querySelector(".js");

console.log(Eleement.innerHTML);
console.log(Eleement.textContent);


Eleement.innerHTML = "<div> salam imad </div> <span>Hii</span>" //katbdel html 
Eleement.textContent = "salam afrida"; // katbedel texte 
console.log(Eleement);


//Change Attributes Directly
document.images[0].src = "https://google.com"
document.images[0].alt = "aletren"
document.images[0].title = "images"
document.images[0].id = "Image"
document.images[0].class = "imag"


//Change Attributes With Methods
myHref = document.querySelector(".a1");
console.log(myHref.getAttribute("class"));
console.log(myHref.getAttribute("href"));
console.log(myHref.getAttribute("id"));

myHref.setAttribute("class","a2");
myHref.setAttribute("href","hhh");
myHref.setAttribute("id","id");
myHref.setAttribute("title","twiter");
myHref.setAttribute("alt","a2");














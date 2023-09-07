/*
DOM [Deal With Childrens]
    children
    childNodes
    firstChild
    lastChild
    firstElementChild
    lastElementChild
*/


let myElement = document.querySelector("div");

console.log(myElement);

//had children katjbd lik dakchi li wast mataln div l2b matal kan 3andek wahd div 
// ou wast div fiha wahd p ou h2.... ghadi imchi ijbed lik dakchi lin lwast

console.log(myElement.children);
console.log(myElement.children[0]);//hna ila kanti baghi dkhol ella chi children

console.log(myElement.firstChild);//hadi katjib lik awal child
console.log(myElement.lastChild);//hadi katjib lik akhir child
//ou had first ou last katjbde lik awl haja wakha tkon element wakha attribute li kan


console.log(myElement.firstElementChild);//hadi katjib lik awal Elemnt
console.log(myElement.lastElementChild);//hadi katjib lik akhir Element
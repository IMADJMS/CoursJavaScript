/*
DOM [Check Attributes]
    Element.attributes
    Element.hasAttribute
    Element.hasAttributes
    Element.removeAttribute
*/

//Element.attributes
//Katjbed lik ga3 lattribute li kaynin
console.log(document.getElementsByTagName ("p")[0].attributes);


//Element.hasAttribute : hia wahd lmethode kat3tiha matln id wla class ou katgol liha wach kayna wla la
//fhal had lmitan 3aytna ella p ou darnaha f let ou wahd condtion ou glna liha wach wast p kayn id wla la 

//Element.removeAttribute : hia wahd lmethode katmseh lik Attribute 


let myP = document.getElementsByTagName("p")[0];
if (myP.hasAttribute("data-src")) { //chofi lina wast p wach kayna data-src
    myP.removeAttribute("data-src"); // ila kant ms7iha lina
    myP.setAttribute("data-src","test") //ou cree wahd data-src fiha test
} else {
    console.log("ga3ma kayn"); // ou la makantch data-src tal3i lina "ga3ma kayn"
}

//Element.hasAttributes : katgol lik wach kayn attribute wla la wast mataln p

if (myP.hasAttributes()) {
    console.log("kayn atrribute wast l paghagraph")
} else {
    console.log("la makaynch ta Attribute")
}

/*
DOM [Create Elements]
    createElement
    createComment
    createTextNode
    createAttribute
    appendChild
*/

let myElemnte = document.createElement("div");
let myAtrr = document.createAttribute("this_my_Atrr"); // kat crea wahd attribute
let myText = document.createTextNode("produic:t one");
let myComment = document.createComment("this Is div");

myElemnte.className = "imad"; //hadi katgol liha crea wahd class smito imad
myElemnte.setAttributeNode(myAtrr); // ou hadek attribute li sawbti kadir lih had lmethode setAttributeNode ou kat3tiha smiyet elent fin bghitiha thal fiha  
myElemnte.setAttribute("this_my_Atrr", "??"); // ou hadi gha set dija chafnaha ila bghiti tbdel hadek createAttribute("this_my_Atrr") li sawbti

// Append Text To Element 
// ila bghiti myText tzidha f myElemnte kadir had lmethode dyal appendChild ou hadi dima katzidha lik fl lakhr ay haja darti lia append ghadi tzidha lik fl lakhr
myElemnte.appendChild(myText);
myElemnte.appendChild(myComment);




document.body.appendChild(myElemnte);
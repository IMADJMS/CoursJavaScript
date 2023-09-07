/*
Arrays Methods [Joining]
    concat (array, array) =>- Return A New Array
    join(Separator)
*/


let myFriende     = ["Ahmed", "Sayed", "Ali", "Osama", "Gamal", "Ameer"];
let myNewFriends  = ["Samar", "Sameh"];
let schoolFriends = ["Haytham", "Shady"];
console.log(myFriende);
//concat katjme3 lik l Arrays
NewArrays = myFriende.concat(myNewFriends,schoolFriends);
console.log(NewArrays);
// join hia wahd lmethod dyal katfra9 lik (l'espace) ya3ni bach bghiti tfra9
// ou kihawlha lik ila string (39al elliha mzyan)

console.log(NewArrays.join());//hna fach madarti walo ghadi ifra9 b ,
console.log(NewArrays.join(""));//ghadi itlas9o m3a ba3diyathom
console.log(NewArrays.join(" @ "));
/* setTimeout and clearTimeout 
    nbdaw b setTimeout : hadiwahd lmethode kat3tiha wadh lfuction ou kat3tiha
    wa9t ya3ni katgol liha hta douz had lmoda mataln "3000" li hia 3s 3ad khdmi 
    ou kayna clearTimeou : hadi katwa9ef setTimeout ya3ni katgol liha stop ou ila bghti tkhdemha 
    kadirha fchi button wla chi l3ayba za3ma ila clika eliha ghadi ihbes lwa9t ou maghadich tkhdem hadek lfunction
*/









// let time = setTimeout(test, 2000)
// function test() {
//     alert("setTimeout");
// }

// let btn = document.querySelector("button");
// btn.onclick = function () {
//     clearTimeout(time);
// }
let hh = document.getElementById("h1");

let time = setTimeout(test, 3000)
function test() {
    hh.innerHTML = "test";
}

let btn = document.querySelector("button");
btn.onclick = function () {
    clearTimeout(time);
}
// setInterval and clearInterval 
/* lfar9 bin setInterval and clearInterval OR setTimeout and clearTimeout
2na setInterval katb9a t3awd bzzf  dyal lmart ama setTimeout kadar mara wahda 
 ou setInterval kat3tiha fl parametre dyalha lwa9T mataln 1000 (1s) ya3ni kola 1000 ghadi t3awd */

// setInterval(function () {
//     console.log("Msg");
// }, 1000);

// setInterval(sayMsg, 1000);
// function sayMsg() {
//     console.log('Iam Message');
// }


// setInterval(sayMsg, 1000, "Osama", 38);
// function sayMsg(user, age) {
//     console.log(`Iam Message For${user}His Age Is: ${age}`);
// }

let div = document.querySelector("div");
function countDown() {
    div.innerHTML -= 1;
    if (div.innerHTML === "0") {
        clearInterval(counter);
    }
}
let counter = setInterval(countDown, 1000); 
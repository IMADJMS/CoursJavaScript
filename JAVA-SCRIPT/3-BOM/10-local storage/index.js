/*
BOM [Browser Object Model]
    Local Storage
        SetItem
        getItem
        removeItem
        clear
        Key

    Info 
        No Expiration Time
        HTTP and HTTPS
        Private Tab    
*/
// Set 
window.localStorage.setItem("color", "#F00");
window.localStorage.setItem["color", "red"];
window.localStorage["fontSize"] = "20px";

// Get
console.log(window.localStorage.getItem("color"));
console.log(window.localStorage.color);
console.log(window.localStorage(["fontSize"]));


// Key :  hadi kat3tiha fl parametre matalan key(1) ou hia katgool lik chno li kayn fhadek key
console.log(window.localStorage.key(0));



// Remove : Delet one ya3ni katmseh lik gha haja whda  
window.localStorage.removeItem("color"); // maghadi tla3 lik walo f (Set Colot In Page ) hit darti l color remove


// Remove All ya3ni katmseh lik Kolchi  
window.localStorage.clear();


// Set Colot In Page 
document.body.style.backgroundolor = window.localStorage.getItem("color");





















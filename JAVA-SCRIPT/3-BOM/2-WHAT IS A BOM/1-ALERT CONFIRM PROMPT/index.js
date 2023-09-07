//    BOM[Browser Object Model]
//    alert(Message)=>Need No Response Only Ok Available
//    confirm(Message)=>Need Response And ReturnABoolean
//    prompt(Message,Default Message)=>Collect Data



alert("Test");
console.log("Test");

let confirmmsg = confirm("Are You Sure?");
console.log(confirmMsg);
if (confirmMsg === true) {
    console.log("Item Deleted");
} else {
    console.log("Item Not Deleted");
}



let promptMsg = prompt("Good Day To You?");
console.log(promptMsg);

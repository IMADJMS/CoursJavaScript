/*
    function Advanced Practice
    Parameters
    Default
    Rest
    Loop
    Condition
*/

function showInfo(us="us",age="un",rt=0,sho="yes",...sk) {
document.write(`<div>`);
document.write(`<h1>Welcom ${us}</h1>`);   
document.write(`<h2>Your Age Is :${age}</h2>`);
document.write(`<h2>Hour Rate : ${rt}</h2>`);
if (sho === "yes") {
    if (sk.length > 0) {
        document.write(`<p>Skilles : ${sk.join("**|**")}</p>`);
    } else {
        document.write(`Skilles : No skilles`);
        } 
    }else {
        document.write(`<p>Skilles Is Hidden</p>`);
    }
    
document.write(`</div>`);  
}

showInfo("imad",18,25 ,"yes","Js","Css")
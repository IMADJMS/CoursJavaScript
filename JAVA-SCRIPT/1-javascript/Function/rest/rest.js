/*
function
    Rest Parameters
    Only One Allowed
    Must Be Last Element
*/



/*  
Hadi immta kadirha mataln kanti baghi baghi tcalcule ou darti nta gha num1+num2 ms howa 3tak 15,15,25 iden wlaw 3
ya3ni lhaal howa num1+num2+num3 ms ila kano bzzf s3ibba chwia , ou lah howa dir ...numbers(hadi gha kawali Arrays)
ou dik idakhl ch7al mabgha hanta chof mital ou ghadi tfham 
...numbers(3andek gha hadi Arrays)
*/




function calc(...numbers) {
// console.log(Array.isArray(numbers));
let result = 0;
for (let i = 0; i < numbers.length; i++) {
  result += numbers[i];  //result = result+ numbers[i];
}
return `Final Result Is ${result}`;

}
console.log(calc( 20, 1587, 30, 50, 30));
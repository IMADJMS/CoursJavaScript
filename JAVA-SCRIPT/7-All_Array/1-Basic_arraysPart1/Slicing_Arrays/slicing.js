/*
Arrays Methods [Slicing]
    slice(Start [Opt], End [Opt] Not Including End)
    slice() => All Array
    If Start Is Undefined => 0
    Negative Count From End
    If End Is Undefined ||-> Indexes => Slice To The End - Array.length
    Return New Array
    splice(Start [Mand], DeleteCount [Opt] [0 No Remove], The Items To Add [Opt])
    If Negative => Start From The End
*/

let scli = ["Ahmed", "Sayed", "Ali", "Osama", "Gamal" ,"Ameer"];
// console.log (scli);
// console.log(scli.slice());
// console.log(scli.slice(1));
// console.log(scli.slice(1, 3));
// console.log(scli.slice(-3));
// console.log(scli.slice(1, -2));
// console.log(scli.slice(-4,-2));
// console.log(scli);

/*
splice f Arrays zwina t9der biha tmsah ou tzid , kayn n3adna f splice 3 dyal dyal l9imat "splice(0,0,"malak")" :
1 : dyal mnin bghitih ibda wach men index 1 wla 2 .... ya3ni ila kan ghadi imseh lik chi haja wla ghadi izid chi haja ghadi ibda men numbre li 3tith fl lawl
2 : ch7al bghiti tmseh men index wach ta hia 2 wla 1 3la hsabek nta 
3 : chnaha l9ima li bghiti izidha lik 

*/

scli.splice(0,0,"malak");
console.log(scli);


scli.splice(1,1);
console.log(scli);


scli.splice(1,5,"malak");
console.log(scli);




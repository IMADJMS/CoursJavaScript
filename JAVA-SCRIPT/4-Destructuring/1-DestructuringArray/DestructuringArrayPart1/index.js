/*  Destructuring 
is a javascript expression that allows us to extract data from arrays,
object,and maps and set them into new ,distinct varibles  
هو تعبير جافا سكريبت يسمح لنا باستخراج البيانات من المصفوفات ،
الكائن والخرائط وتعيينها في متغيرات جديدة ومميزة
*/

let myDonnes = ["imad", "marwan", "malika", "kamal"];
let [a, b, c, d] = myDonnes; // hna hatit kola whda f varible dylha 
// a=imad
// b=marwan
// c=malika
// d=kamal

[a, b, c, d, e] = myDonnes; // hna ga3Ma kayna e (kayna gha 4 fl array)  ghadi tla3 lik undifend 

//ou ila kanti baghi tbayn mataln gha 2 ou 4 men arrays ghadi dirr :
[, b, , d,] = myDonnes;// katkhalli l'espase hit ila darti gha 2 dyal variable ghadi iyakhod lik jouj lwaln

[a, b, c, d, e = "test"] = myDonnes;// hnaia ila kanti baghi tta3tiha valeur    
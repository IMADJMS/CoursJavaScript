// Coder Shiyar   -   https://youtube.com/codershiyar
// -------------------------------------------------------------------------------------
// JSON.parse() 
// عند استقبال البيانات من سرفر ويب ، تكون البيانات دائمًا من نوع البيانات النصية.
//     يتم استخدامها لتحويل البيانات من نوع النصي إلى جسون بشكل جافا سكربت اوبجكت 
// -------------------------------------------------------------------------------------
// JSON.stringify()
// عند إرسال البيانات إلى سرفر ويب ، يجب أن تكون البيانات من نوع البيانات النصي.
// يتم استخدامها للتحويل بيانات من جافا سكربت اوبجكت او جسون إلى بيانات من نوع 
//                    النصي القيمة يجب ان يتبع قوانين جيسون
// -------------------------------------------------------------------------------------

var json = '{"name":"Coder Shiyar" , "language":"Kurdish"}';
var objectJSON = JSON.parse(json);

// alert("اللغة : "+objectJSON.language);
// console.log(objectJSON);

var user = { role: "admin", password: 1234 };
var jsonString = JSON.stringify(user);
console.log(jsonString);
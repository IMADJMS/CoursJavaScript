let a = 1_00;
let b = 2_00.5;
let c  = 1e2;
let d  = 2.4;

//Q1 : Find-Smallest Number in All Variables And Return Integer
console.log(Math.floor(Math.trunc(a)));
console.log(Math.floor(Math.trunc(b)));
console.log(Math.floor(Math.trunc(c)));
console.log(Math.floor(Math.trunc(d)));



//Q2 : Use Variable a + d One Time To Get The Needed Output
console.log(Math.pow(a,Math.trunc(d)));



//Q3 : Get Integer "2" From d Variable With 4 Methods
console.log(Math.floor(d));
console.log(Math.round(d));
console.log(Math.trunc(d));
console.log(parseInt(d));



//Q4 : Use Variables b + d To Get This Values
console.log((Math.floor(b) / Math.ceil(d)).toFixed(2)); 
console.log(Math.trunc((Math.floor(b) / Math.ceil(d)))); 


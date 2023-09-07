console.log((100).toString()); // Kathewel Lik Men Nimbre Ila Srting
console.log(15225.5454664.toFixed(3)); // ch7al bghit men ra9em men moura lfasila !!ou katraj3o string




console.log(parseInt("100 ousaama")) // katraje3 lik men String Ila Numbre
// Lar9 Howa F Numbre Ou Tania 3titiha ("100 imad") Ou Hia 3tatek NaN ms F parsInt() Kathlel Ou Hna Ghadi T3tek 100 
console.log(Number("100 imad"));
console.log(+"100 imad");
console.log(parseInt("100 imad"));


console.log(parseFloat("100.500 imad")); // Fhal parseInt Gha Hia Katakhod HTa lfacila


// wach 3adad sahih wla la 
console.log(Number.isInteger("100")); //False
console.log(Number.isInteger(100.5)); //False
console.log(Number.isInteger(100)); //True

console.log(Number.isNaN("ffff" / 22));
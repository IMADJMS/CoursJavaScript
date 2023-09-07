/*
String Methods
--substring(Start [Mand], End [Opt] Not Including End).
--- Start > End Will Swap
    Start <0 It Start From e
--- Use Length To Get Last Character
-- substr(Start [Mand], Characters To Extract)
--- Start >=- Length=""
---- Negative Start From End
-- includes (Value [Mand], Start [Opt] Default e)- [ES6]
-- startswith(Value [Mand], Start [Opt]- Default e) [ES6]
-- endswith(Value [Mand], Length [Opt]-Default Full-Length) [ES6]
*/

a = "imad jamoussi development digital"

console.log(a.length);


/* substring fhalha fhal slice gha hia mbadla 3liha fvchi hwayj matln : */
console.log(a.substring(8,15));

// ila darti f slice console.log(a.slice(15,8)); ya3ni ghlati ou glabti l9ima dyat start ou End maghadi tla3 lik walo 
// walakin f substring ghadi t9raha 
console.log(a.slice(15,8));
console.log(a.substring(15,8));


//ou f slice ila kanti kadir -10 kan kibda lik men zero ms f string ay ra9em sghar men zero kitsma howa 0 
console.log(a.substring(-10)); //hnaia gha fhala zero ou ghadi tala3 lik valeur dyal a kamla
console.log(a.substring(-10,5)); //fhala galti liha start : 0 end 5
console.log(a.substring(a.length - 8, a.length - 20)); //ila bghiti tjin akhir haja khayna f tableuax
/* ***********************   HADA HOWA LFAR9 LI KAYN BIN SLICE OU SUBSRTING  ********************************* */


/* substr */
console.log(a.substr());
console.log(a.substr(34));
console.log(a.substr(-12,3)); //hada howa lfar9 bin substr ou substinrg  ya3ni ila kanti baghi chi haja men lakhr kat3tih l9ima mnin ghadi ibda ou kat3tih ch7al ghadi iyakhod lik 
// ya3ni hna glti lih -12 ya3ni caractere m ou darti lih 3 ya3ni men moura -12 khodi lia 3 dyal caracter ou nta 3aref bli l9ima lakhra ga3ma katkhad ila 7 ghafi iyakod 6 ou hna ghadi t3tek men

/* includes katgoliha wach had had lhaja kayna flase/true  */
//console.log(a.includes ("digital"));
//console.log(a.includes ("Web", 8)); //kat3tiha position mnni ghadi tbda

/* startwith hadi katgol liha wach katbda bhadi i hna true hit valeur dyal a kibda  i  */
console.log(a.startwith("i"));
console.log(a.startwith("i",13));// true hit 3titiha position mni ghadi tbda 

/* fhal startwith gha hia fl lakhr fhala katgol liha wach katsali b  */
console.log(a.endswith(l)); // true hit katsali b true ou tahia ymkn dir liha position

let Thename = "  imad  ";

// console.log(Thename);
// console.log(Thename[2]); // katbda men zero

/* hadi chartAt kat3tiha fl parametre dylha wahd number ou katjbdo lik fhal kadir Thename[2] ou katbda men zero */
// console.log(Thename.charAt(2)); //a
// console.log(Thename.charAt(3)); //d

/* length hadi kathseb lik ch7al men caractere kayn ms katbda men 1 */
// console.log(Thename.length); /* ghadi tgol lik 4 hit bdat lik men 1 */

/* trim delet l'espace  */
// console.log(Thename.trim());
// /* Majscule */
// console.log(Thename.toUpperCase());

// /* Miniscule */
// console.log(Thename.toLowerCase());

/* wahd tack sghir ila bghina nmasho l'escpace ou nakhdo haref a ndiro lih Majscule f star wahd */

// console.log(Thename.trim(0).charAt(3).toUpperCase());


// console.log(Thename.charAt(Math.floor(Math.random() * 1) + 1))

// Math.floor(Math.random() * 1)


const alphabet = "tiger"

const randomCharacter = alphabet[Math.floor(Math.random() * alphabet.length)]

console.log(randomCharacter)
// Destructuring Arrays => swapping Variables 
// ya3ni kat9Leb l valur bin l variable 

var video = "book";
var book = "video";

// db 7na bghina nbdlo l9imaa dyall video ou bok bghina ndiro
// video = video ou  book = book hadchi li bghina ndiro 

// TARI9A 1
// var statsh = video; // ya3ni khazana db l9ima dyal video li hua book f hade lvariable
// var video = book;
// var book = statsh;

// console.log(video);
// console.log(book);

//TARI9A 2 ou ghadi nkhadmoha  bl Destructuring ou shaaal bzzff

var [video, book] = [book, video]; //[video,book] chti ch7aal sahla bzzzff
console.log(video);
console.log(book);
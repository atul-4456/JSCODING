'use strict'
const prompt=require("prompt-sync")({sigint: true});
let string=prompt("Enter the string: ");

// function Character(string){
//     if((string>='a'&&string<='z')||(string>='A'&&string<='Z')){
//         console.log(string +"is A Alphabet");
//     }else if(string>='0'&&string<='9'){
//         console.log(string+"is a Number");
//     }else{
//         console.log(string+"is a Special character");
//     }
// }
// console.log(Character(string));

function Character(string){
    if((string >='a'&& string<='z' )||(string>='A'&&string<='Z')){
        console.log(string+" is A Character");
    }else if(string>='0'&&string<='9'){
        console.log(string+" is a Number");
    }else{
        console.log(string+" is a special character ")
    }
}
console.log(Character(string));
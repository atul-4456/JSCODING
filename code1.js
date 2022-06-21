'use strict'
const prompt=require("prompt-sync")({sigint: true });
let x=prompt("Enter Value : ");
let y=prompt("Enter value : ");
function multiplication(x,y){
    return x*x+y*y+2*x*y;
}

 console.log(multiplication(x,y));
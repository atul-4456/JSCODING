'use strict';
let days;
let prompt = require("prompt-sync")({sigint:true})
days=prompt("Enter the No. of days: ");

function returnBook(days){
    if(days<=5){
        console.log(`Member is ${days} and it's fine is 20 rupees`);
    }else if(days <=10){
        console.log(`Member is ${days} and it's fine is 30 rupees`);
    }else if(days>=10 && days<=30){
        console.log(`Memebr is ${days} late and fine is 50 rupees`);
    }else if(days>30){
        console.log(`You return book after ${days} so your membership is cancelled`)
       console.log("-1");
    }
}

returnBook(days);
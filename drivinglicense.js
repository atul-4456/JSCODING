'use strict'
let age,maritialStatus,gender;
let prompt = require("prompt-sync")({sigint: true});
maritialStatus = prompt("Enter Maritial Status: ");
age = prompt("Enter The Age: ");
gender = prompt("Enter the gender: ");

function license(){
    if(maritialStatus =="Married" ){
         console.log("1");
    }else if(maritialStatus == "UnMarried" && gender == "Male" && age>=30 ){
         console.log("1");
    }else if(maritialStatus == "UnMarried" && gender == "Female" && age >=25){
         console.log("1");
    }else{
         console.log("0");
    }
}
license()
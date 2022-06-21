'use strict';
// let hardness,corbonContent,tensileStrength;
// let hf=0,cf=0,ts=0;
// let prompt = require("prompt-sync")({sigint: true});
// let grade;

// hardness = prompt("Enter the value of Hardness: ");
// corbonContent = prompt("Enter the value of Corbon content: ");
// tensileStrength = prompt("Enter the value of tensile strngth: ");

// if(hardness>50)
// hf=1;
// if(corbonContent<0.7)
// cf=1;
// if(tensileStrength>5600)
// ts=1;
// // For Finding Grade
// //1/ if none of the conditions are met
// if(hf==0 && cf==0 && ts==0)
//     grade = 5;
// //2 if only one condition is met
// if(hf ==1||cf==1||ts==1)
// grade = 6;
// //3 if condition 1 and 3 are met
// if(hf==1 && cf == 0 && ts==1)
// grade = 7;

// // 4 if condition 2 and 3 are met
// if(hf == 0 && cf==1 && ts==1)
// grade = 8;

// //5 if condition 1 and 2 are met
// if(hf == 1 && cf==1 && ts==0 )
// grade = 9;
// //6 if all the three condition  are met
// if(hf==1&&cf==1&ts==1)
// grade = 10;
// console.log("The grade of steel is : " +grade);

let hardness,carbonContent,tensileStrength;
let hf=0,cf=0,ts=0;
let prompt = require("prompt-sync")({sigint:true});
hardness = prompt("Enter the value of hardness: ");
carbonContent = prompt("Enter the value of carbon content: ");
tensileStrength = prompt("Enter the value of tensile stength: ");
let grade;
if(hardness>50)
hf=1;
if(carbonContent<0.7)
cf=1;
if(tensileStrength>5600)
ts =1;

//Now the condition 
//1. if none of the condiition are met
if(hf==0&&cf==0&&ts==0)
grade = 5;
//2.if one of the condition are met
if(hf==1||cf==1||ts==1)
grade = 6;
//3 if 1 and 3 condition are met
if(hf==1 && cf==0 && ts==1)
grade = 7;
//4 if 2 and 3 condition are met 
if(hf == 0 && cf==1 && ts==1)
grade = 8;
//5 if 1 and 2 condition are met
if(hf==1 && cf==1 && ts==0)
grade = 9;
//6 if all the condition are met
if(hf==1 && cf==1 && ts==1)
grade = 10;

console.log("The Grade of the metal is "+grade);

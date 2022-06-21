let mainMarks,subMarks;
let prompt = require("prompt-sync")({sigint: true});
mainMarks = prompt("Enter MainMarks: ");
subMarks = prompt("Enter Subsadiary marks: ")


function getGrades(){
    if(mainMarks>=55&&subMarks>=45){
        console.log(`you'll get ${mainMarks} in main subjects and ${subMarks} in subsidiary subject`);
        return console.log("1");
    }else if((mainMarks<55&&mainMarks>=45)&&subMarks>=55){
        console.log(`Student get less than 55 marks ${mainMarks} in A and ${subMarks} in B `)
    }else if(mainMarks>=65&&subMarks<45){
        console.log("you'll be allowed to reappear in an examination in B to qualify")
        return console.log("2");
    }else{
        console.log("Fail");
        return console.log("-1")
    }
}
getGrades();
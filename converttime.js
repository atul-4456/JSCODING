'use strict'
    let hours ;
    let minutes ;

// function myFunction(hours,minutes) {
   
    
    
//     // Check whether AM or PM
//     var newformat = hours >= 12 ? 'PM' :'AM' ; 
    
//     // Find current hour in AM-PM Format
//     hours = hours % 12; 
    
//     // To display "0" as "12"
//     hours = hours ? hours : 12; 
//     minutes = minutes < 10 ? '0' + minutes : minutes;
    
//   console.log(hours + ':' + minutes + ' ' + newformat);
// }
// myFunction(8,55);
function checkTime(hours,minutes){
  let newTime = hours >= 12?'PM':'AM';
  hours = hours%12;
hours = hours ? hours :12;
minutes = minutes <10?'0'+ minutes : minutes;
console.log(`${hours}:${minutes} ${newTime}`);

}
checkTime(13,58);
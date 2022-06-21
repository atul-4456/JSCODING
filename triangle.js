'use strict';
function checkTriangle(x,y,z){
 if(x==y&&y==z){
    console.log("Equilateral Triangle");
 }else if((x*x+y*y==z*z)||(y*y+z*z==x*x)||(x*x+z*z==y*y)){
        console.log("Right Angled Triangle")
    
 }else if(x==y|| y==z||z==x){
    console.log("Isoceleus Triangle");
 }else{
    console.log("Scalen Triangle")
 }
}
checkTriangle(4,4,4);
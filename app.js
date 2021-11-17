const first=document.querySelector("#first");
const second=document.querySelector("#second");
const third=document.querySelector("#third");
const submit=document.querySelector("#submit");
const result=document.querySelector("#result");
const image=document.querySelector("img");




//==========with class structure==========
class Triangle {
   }

Triangle.prototype.check=() =>{
     
    let length1=+first.value;
    let length2=+second.value;
    let length3=+third.value;
    
    if(length1<=0||length2<=0||length3<=0){
        result.innerHTML="Lenghts of Triangle must be positive numbers.";
    }else if(
        length1==length2+length3||
        length2==length1+length3||
        length3==length1+length2){
        result.innerHTML="This is a degenerate triangle!!! it has zero area and looks like a single line.";  
        image.src="degenerate.png"
    }else if(
        length1>length2+length3||
        length2>length1+length3||
        length3>length1+length2){
        result.innerHTML="This is not a valid triangle!!!";  
    }else if(length1==length2||length3==length1||length3==length2){
        result.innerHTML="triangle is equilateral!"; 
        image.src="equilateral.png" 
    }else if(length1==length2==length3){
        result.innerHTML="triangle is isosceles!";
        image.src="isosceles.png"   
    }else{ 
        result.innerHTML="triangle is scalene!";  
        image.src="scalene.png" 
    }
   
    
}

submit.addEventListener("click",(e)=>{
    e.preventDefault();
    console.log("get it!")
    let tri= new Triangle();
    tri.check();
    form.reset()
});


//==========without class structure============
//     function check(){    
//     let length1=+first.value;
//     let length2=+second.value;
//     let length3=+third.value;
    
//     if(length1<=0||length2<=0||length3<=0){
//         result.innerHTML="Lenghts of Triangle must be positive numbers.";
//     }else if(
//         length1==length2+length3||
//         length2==length1+length3||
//         length3==length1+length2){
//         result.innerHTML="This is a degenerate triangle!!! it has zero area and looks like a single line.";    
//     }else if(
//         length1>length2+length3||
//         length2>length1+length3||
//         length3>length1+length2){
//         result.innerHTML="This is not a valid triangle!!!";  
//     }else if(length1==length2||length3==length1||length3==length2){
//         result.innerHTML="triangle is equilateral!";  
//     }else if(length1==length2==length3){
//         result.innerHTML="triangle is isosceles!";  
//     }else{ 
//         result.innerHTML="triangle is scalene!";  
//     }
    
// }

// submit.addEventListener("click",(e)=>{
//     e.preventDefault();
//     console.log("get it!")
//     check();
// });
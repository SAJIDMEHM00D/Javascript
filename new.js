//1st funtion.
function number(){
    var No=1;
    return No;
}
console.log(number());

//2nd funcion

function sajid(){
    var i,num1;
    num1=56;
    i=767;
    
        if(i===num1){
            return "You Won Lottery";

        }else{
            return "better Luck next time";
        }
    }
    
console.log(sajid());
    
//3rd function
function holiday(){
    var today;
    today="sunday";
    if(today=="monday"||today=="tuesday"||
    today=="wednesday"||today=="Thursday"||today=="friday"){
        return "Today is not Holiday";
    }if (today=="saturday"||today=="sunday") {
        return "Today is Holiday";
    } else {
        return "command Invalid"
    }

    }
console.log(holiday());

//4th function

function grade(){
    var prc;
    prc=95;
    if(prc>=91){
        return "You got a A+ grade";
    }
    if(prc<=90){
        return "You got a A grade";
    }
    if(prc<=80){
        return "You got a B grade";
    }
    if(prc<=70){
        return "You got a C grade";
    }
    if(prc<=60){
        return "You got a D grade";
    }
    if(prc<=50){
        return "You got a A grade";
    }else{
        return "You are Fail";
    }
}
console.log (grade());

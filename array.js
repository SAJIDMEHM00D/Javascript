//1st function
var num=[2,4,6,7,8];
num1=num.map(function(num){
   return num=num*2;
    
})
num2=[17,18,19,10,20];
num3=num1.concat(num2);
console.log(num3);
//2nd function

var data=new Array();
 data[0]=new Array(1,2,3,4,5,6,7);
 data[1]=new Array("Sajid","imtiaz","Umer","Ali","Ahmed","Saqib","Usama");

 console.log("My Roll Number is "+data[0][0]+". my name is "+data[1][0]+".");
 console.log("My Roll Number is "+data[0][1]+". my name is "+data[1][1]+".");
 console.log("My Roll Number is "+data[0][2]+". my name is "+data[1][2]+".");
 console.log("My Roll Number is "+data[0][3]+". my name is "+data[1][3]+".");
 console.log("My Roll Number is "+data[0][4]+". my name is "+data[1][4]+".");
 console.log("My Roll Number is "+data[0][5]+". my name is "+data[1][5]+".");
 console.log("My Roll Number is "+data[0][6]+". my name is "+data[1][6]+".");

//3rd function
var info=[["Saif","Alvi","Umer"],[1,2,3],["10th","11th","12th"]];
console.log("My name is "+info[0][0]+". My roll Number is "+info[1][0]
+" and I study in Class "+info[2][0]+".");

console.log("My name is "+info[0][1]+". My roll Number is "+info[1][1]
+" and I study in Class "+info[2][1]+".");

console.log("My name is "+info[0][2]+". My roll Number is "+info[1][2]
+" and I study in Class "+info[2][2]+".");


//4th function
var info1=[name=["Saif","Alvi","Umer"],roll=[1,2,3],room=["10th","11th","12th"]];
var i,j,k;
for(i=0;i<name.length;i++){
    console.log("My name is "+name[i]+".");

    for(j=i;j<=i;j++){
        console.log("My Roll is "+roll[j]+" and");
    
        for(k=j;k<=j;k++){
            console.log("I'm Class is "+room[k]+".");
    }
        
    }
}

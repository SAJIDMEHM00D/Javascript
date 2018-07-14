var names=["Saif","Umer","Hamza","Taha"];
var main=[[1,2,3,4],["Islamabad","Lahore","Karachi","Peshawar"],
["saif@gmail.com","umer@gmail.com","hamza@gmail.com","taha@gmail.com"]];

arr=main[0].map(function(val){

    arr1=main[1].map(function(val1){
        arr2=main[2].map(function(val2){
            return val2;
        })
           return val1;
   })
   return val;
   })
   for(var i=0;i<names.length;i++){
   console.log("Hi, My name is "+names[i]+".")
   console.log("My roll number is "+arr[i]+". I lives in "
   +arr1[i]+" City and My Email is "+arr2[i]+".");
   }


var students=["imtiaz","sajid","usama"];
var id=[5,6,7];
var city=["Isl","Lah","Pesh"];
var adress=["220-E","221-E","222-E"]
var records=[id,city,adress]
rec=records[0].map(function(values){

     rec1=records[1].map(function(values1){
         rec2=records[2].map(function(values2){
             return values2;
         })
            return values1;
    })
    return values;
    })
    for(var i=0;i<students.length;i++){
    console.log("Hi, My name is "+students[i]+".")
    console.log("My roll number is "+rec[i]+". I lives in "
    +rec1[i]+" City and My House No."+rec2[i]+".");
    }


num=[[1,2,3],[4,5,6],[7,8,9]];

for(var k=0;k<num.length;k++){
    for(var p=0;p<num.length;p++){
       num[k][p];
    }
} 


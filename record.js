var main=[["Saif","Umer","Hamza","Taha"],[1,2,3,4],
["Islamabad","Lahore","Karachi","Peshawar"],
["saif@gmail.com","umer@gmail.com","hamza@gmail.com","taha@gmail.com"]];

record=main[0].map(function (val){
    
    return val;

})



var students=["imtiaz","sajid","usama"];
var id=[1,2,3];
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


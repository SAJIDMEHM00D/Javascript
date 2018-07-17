var _ = require('lodash');
names=["Noah.","Liam.","William.","Benjamin.","Jacob.","Elijah.","Ethan.",
"Alexander.","Noah.","Liam.","William.","Benjamin.","Jacob.","Elijah.","Ethan.",
"Alexander.","Noah.","Liam.","William.","Benjamin.","Jacob.","Elijah.","Ethan.",
"Alexander."];

_.chunk(names,3);

//Object....JSON/q
const {get} = require('json-q');
var data={
    d:{
        e:{name:["Sajid"],id:[1], room:["11th"]}
    }};
console.log(get(data, ".d.e"));

var data1 = {
    a:{
      b:{
        c:[1,2]
      }
    }
  };
   
  console.log(get(data1, ".a.b"));
//basic maths operation
let num1=90;
console.log(Math.E);
console.log(Math.LN10);
console.log(Math.PI);
console.log(Math.LOG10E);

//random value generator
 console.log(Math.random());//-->iski value 0<=value<1 ke beech me hogi hamesha

 //ceil ad floor value
 let num=23.4;
 console.log(Math.floor(num));
 console.log(Math.ceil(num));

 //generate random no. between 0 to 9
 console.log(Math.floor(Math.random()*10));
 //1-10generate 
 console.log(Math.floor(Math.random()*10)+1);// this  never be  generate 0  
 // OR
 console.log(Math.floor(Math.random()*11));
 //hme multiply krna hai jitne bhe dgit aa rhe ahi uss range hai yha pr 11 se isliye multiply kra hai kyuki 0 bhe included hai toh 0-10 tk 11 digit hote hai

 //if we want to gernate 11-20 no. randomly
 console.log(Math.floor(Math.random()*10+11));

 // if we want to generate  a random no. of a given specific range then the :-->
 // let range =50-60
 let max=60;     //no.of element=max-min+1;
 let min=50;
 console.log(Math.floor(Math.random()*(max-min+1)+min));
 //agar hm chaiye ki value point me bhe aaye toh hm fix() method use krte hai:->
 console.log(Math.random()*10+1).toFixed(1); // here 1 ka mtl hai ki ek decimal ka ans degaa
 
// const d=new Date();
// console.log(d);
// console.log(d.getDate());//or
// const now=Date.now();
// console.log(now);
// console.log(d.toDateString());
// console.log(d.toString());

// const da= new Date("2024-01-12");
// console.log(da);

const d=new Date;
d.setDate(20);
d.setFullYear(2022);
d.setMonth(3);
console.log(d);
console.log(d.toLocaleDateString());
console.log(d.toString());  

//date calculation
const date1=new Date();
const date2= new Date("2025-04-20");
console.log(date2-date1);//ans milisecond me milegaa
 